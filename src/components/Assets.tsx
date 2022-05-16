import { useState } from 'react';
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
            <div className='flex flex-col h-full w-1/3 float-left border-blue-400 overflow-y-scroll'>
                {
                    userTokenBalances.map(tokenBalance => {
                        return (
                            <div key={tokenBalance.symbol} className={`flex flex-col`} onClick={() => handleTokenAssetClick(tokenBalance.symbol)}>
                                <div>
                                    <TokenAsset tokenBalance={tokenBalance} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex w-2/3 h-full float-right '>
                {selectedToken ?
                    <div className="p-1 m-8 overflow-scroll w-full shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                        <div className="block h-full p-6 bg-yellow-100 rounded-xl " >
                            <div className="mt-16 ">
                                <Distribution token={token as AvailableToken} beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries} />
                            </div>
                        </div>
                    </div>

                    :

                    <div className="p-1 m-8 overflow-scroll w-full shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                        <div className="block h-full p-6 bg-yellow-100 rounded-xl " >
                            <div className="mt-24 ">
                                <aside className="p-12">
                                    <div className="max-w-xl mx-auto text-center">

                                        <p className="mt-2 text-3xl font-bold sm:text-5xl">
                                            Select an asset to start
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Assets;