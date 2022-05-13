import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedToken, selectSelectedTokenDistribution, selectTokenBalances, selectTokenDistribution } from '../../features/tezos/selectors';
import { setTokenDistribution } from '../../features/tezos/slice';
import { AvailableToken, Beneficiary as BeneficiaryType, TokenDistribution } from '../../types';
import Beneficiary from '../Beneficiary/Beneficiary';

type Props = {
    token: AvailableToken,
    beneficiaries: BeneficiaryType[],
    setBeneficiaries: any
}

const Distribution = ({ token, beneficiaries, setBeneficiaries }: Props) => {

    const dispatch = useDispatch();
    const tokenDistribution = useSelector(selectTokenDistribution);
    const balances = useSelector(selectTokenBalances);

    const addBeneficiary = () => {
        const beneficiary = {
            id: beneficiaries?.length,
            address: "",
            percentage: Math.floor(100 / (beneficiaries.length + 1)),
        }

        let newBeneficiaries = [...beneficiaries, beneficiary];

        setBeneficiaries(newBeneficiaries.map(ben => ({ ...ben, address: ben.address, percentage: beneficiary.percentage })));
    }
    const addDistribution = () => {
        const isValid = beneficiaries.every(ben => ben.address !== "");
        if (!isValid) return // error
        const sumOfBeneficiaries = beneficiaries.reduce((prev, curr) => (prev + curr.percentage), 0)
        if (sumOfBeneficiaries !== 100) return


        const tokenBalance = balances.find(tkBal => tkBal.symbol === token);
        const tkDistrib: TokenDistribution = {
            tokenSymbol: token as AvailableToken,
            amount: tokenBalance?.balance ? tokenBalance.balance : 0,
            distribution: beneficiaries,
            approvedAmount: 0,
        }

        
        if (!tokenDistribution) {
            dispatch(setTokenDistribution([tkDistrib]));
        } else {
            const index = tokenDistribution.findIndex((tkDis) => tkDis.tokenSymbol === token);
            if (index < 0) {
                dispatch(setTokenDistribution([...tokenDistribution, tkDistrib]))
            } else {
                let newTokenDistrib = tokenDistribution.map(tkDist => {
                    if (tkDist.tokenSymbol === token) {
                        return (tkDistrib)
                    } else {
                        return tkDist;
                    }
                });
                dispatch(setTokenDistribution(newTokenDistrib));
            }
        }
    }
    return (
        <div className='flex flex-col ml-8 w-3/4 justify-items-center'>
            {token}
            <button onClick={addBeneficiary}> Add Beneficiary </button>
            {
                <div className="flex flex-col w-3/4 ">
                    {beneficiaries.map(beneficiary => {
                        return (
                            <div>
                                <Beneficiary key={beneficiary.id} id={beneficiary.id} beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />
                            </div>
                        )
                    })

                    }
                    <div>
                    </div>
                </div>
            }
            <button onClick={addDistribution}>Finish</button>
        </div>
    )
}

export default Distribution;