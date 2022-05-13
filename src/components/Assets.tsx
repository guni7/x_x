import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedToken, selectTokenBalances, selectTokenDistribution } from '../features/tezos/selectors';
import { setSelectedToken } from '../features/tezos/slice';
import { AvailableToken, Beneficiary } from '../types';
import Distribution from './Distribution/Distribution';
import TokenAsset from './TokenAsset';

const Assets = () => {
    const dispatch = useDispatch();
    const selectedToken = useSelector(selectSelectedToken)
    const userTokenBalances = useSelector(selectTokenBalances);
    const tokenDistribution = useSelector(selectTokenDistribution);
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
    const [token, setToken] = useState<string>('');

    const handleTokenAssetClick = (newToken: any) => {
        if (token === newToken) return;
        setToken(newToken);
        dispatch(setSelectedToken(newToken));
        if (tokenDistribution && tokenDistribution.length > 0) {
            const tkDisIndex = tokenDistribution.findIndex((tk) => tk.tokenSymbol === newToken)
            if (tkDisIndex < 0) {
                setBeneficiaries([]);
            } else {
                setBeneficiaries(tokenDistribution[tkDisIndex].distribution)
            }
        } else {
            setBeneficiaries([]);
        }
    }
    return (
        <div className='w-full h-screen bg-yellow-100 '>
            <div className='flex flex-col h-full w-1/3 float-left border-r-2 border-gray overflow-y-scroll'>
                {
                    userTokenBalances.map(tokenBalance => {
                        return (
                            <div key={tokenBalance.symbol} className={`flex flex-col`} onClick={() => handleTokenAssetClick(tokenBalance.symbol)}>
                                <div>
                                    <TokenAsset  tokenBalance={tokenBalance} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex w-2/3  float-right bg-red-200 overflow-scroll'>
                {selectedToken ?
                    <Distribution token={token as AvailableToken} beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Assets;