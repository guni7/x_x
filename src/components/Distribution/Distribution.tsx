import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContractAddress, selectTezos, selectTokenBalances, selectTokenDistribution, selectUserAddress } from '../../features/tezos/selectors';
import { setTokenDistribution } from '../../features/tezos/slice';
import { AvailableToken, Beneficiary as BeneficiaryType, TokenDistribution } from '../../types';
import Beneficiary from '../Beneficiary/Beneficiary';

type Props = {
    token: AvailableToken,
    beneficiaries: BeneficiaryType[],
    setBeneficiaries: any
}

const Distribution = ({ token, beneficiaries, setBeneficiaries }: Props) => {

    const [approved, setApproved] = useState<boolean>(false)
    const [currentTokenContract, setCurrentTokenContract] = useState<any>(undefined)
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const tokenDistribution = useSelector(selectTokenDistribution);
    const balances = useSelector(selectTokenBalances);
    const contractAddress = useSelector(selectContractAddress);
    const Tezos = useSelector(selectTezos);
    const userAddress = useSelector(selectUserAddress);

    const currentToken = balances.find(tk => tk.symbol === token);
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

        const tkDistrib: TokenDistribution = {
            tokenSymbol: token as AvailableToken,
            amount: currentToken?.balance ? currentToken.balance : 0,
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

    const approveToken = async () => {
        try {
            console.log(contractAddress);
            console.log(currentTokenContract);
            const approveMethod = await currentTokenContract.methods.approve("KT19xorVBYtEy5sofm6HTJsP219MtzpybEtu", 100);
            //console.log(approveMethodEstimate);
            //const { gasLimit,
            //    storageLimit,
            //    suggestedFeeMutez } = await Tezos.estimate.transfer(approveMethodEstimate);
            //    console.log(gasLimit, storageLimit, suggestedFeeMutez);
            const op = await approveMethod.send({
                storageLimit: 2000,
                gasLimit: 500000,
                fee: 200000
            });

            const confirmation = await op.confirmation(3);
            console.log(confirmation);
            setApproved(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setLoading(true);
        async function getTokenContract(tokenContract: string) {
            const currentTokenContract = await Tezos.wallet.at(tokenContract);
            setCurrentTokenContract(currentTokenContract);
            const storage: any = await currentTokenContract.storage()
            const x: any = await storage['ledger'].get(userAddress);
            if (x.allowances.get(contractAddress)) {
                setApproved(true);
            } else {
                setApproved(false);
            }
            setLoading(false);
        };
        if (currentToken) {
            const tokenContract = getTokenContract(currentToken?.address);
        }
    }, [currentToken]);
    return (
        <div className='flex h-full -mt-20'>
            {
                loading ?
                    <div className="flex justify-center items-center space-x-2 mt-60 ml-80 ">
                        <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-600" role="status">
                        </div>
                        <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-700" role="status">
                        </div>
                        <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-50 animate-ping  text-blue-800" role="status">
                        </div>
                    </div>

                    :

                    <div className='flex flex-col w-full justify-items-center h-full'>
                        {approved
                            ?
                            <div className='flex flex-col w-full h-full'>
                                {  
                                    <button className=" flex justify-self-center self-end m-8 items-center px-8 p-2  text-blue-600 border border-blue-400 rounded hover:bg-blue-400 hover:text-white active:bg-blue-500 focus:outline-none focus:ring" onClick={addDistribution}>
                                        Add To Distribution
                                        <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>

                                }
                                {
                                    <div className="flex ml-28  flex-col w-3/4 ">
                                        {beneficiaries.map(beneficiary => {
                                            return (
                                                <div>
                                                    <Beneficiary key={beneficiary.id} id={beneficiary.id} beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />
                                                </div>
                                            )
                                        })
                                        }
                                        <button className='border-1 rounded-full w-40 m-2 p-2 self-center text-blue-600 border border-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-500 focus:outline-none focus:ring' onClick={addBeneficiary}> Add Beneficiary </button>
                                        <div>
                                        </div>
                                    </div>
                                }
                            </div>
                            :
                            <div className='flex flex-col justify-center align-middle justify-items-center'>
                                <p className='p-4 m-4'>
                                    To be able to pass on this asset to your beneficiaries, you must allow us to transfer it.
                                </p>
                                <button onClick={approveToken} className="ml-20 w-1/4 inline-block px-8 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-full hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring">
                                    Click to Allow
                                </button>
                            </div>

                        }
                    </div>

            }



        </div>
    )
}

export default Distribution;