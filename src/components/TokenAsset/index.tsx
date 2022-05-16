
import { useSelector } from 'react-redux';
import { selectSelectedToken, selectTokenDistribution } from '../../features/tezos/selectors';
import { TokenBalanceInfo } from '../../types';
type Props = {
    tokenBalance: TokenBalanceInfo;
};

const TokenAsset = ({ tokenBalance }: Props) => {

    const tokenDistribution = useSelector(selectTokenDistribution);
    const dist = tokenDistribution?.find(tk => tk.tokenSymbol === tokenBalance.symbol);
    const selectedToken = useSelector(selectSelectedToken);
    return (
        <div className="flex p-3 ml-12" >
            <div className="flex group h-48 w-1/4">
                <div
                    className={`${tokenBalance.symbol === selectedToken ? "animate-pulse shadow-lg  ml-4 flex items-end h-full transition-transform transform border-4 border-pink-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg" : "flex items-end h-full transition-transform transform border-2 border-pink-500 shadow-md group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg"}`}
                >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                    {tokenBalance.type}
                </span>
                <span className="absolute left-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                    Fungible
                </span>
                <div className=" transition-opacity group-hover:opacity-0 group-hover:absolute  mb-8">
                    <div className="flex justify-around w-80">
                        <div className='flex justify-center '>
                            <img className="flex self-center w-12 h-12" src={"./images/" + tokenBalance.symbol + ".png"} alt="token" />
                            <div className="flex flex-col align-center ml-8">
                                <span className="flex mt-0 text-xl font-medium">{tokenBalance.symbol}</span>
                                <span className=" flex mt-0 text-md font-normal">{tokenBalance.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-col align-center">
                            <h2 className="flex mt-4 text-md font-normal self-center">{tokenBalance.balance / (10 ** tokenBalance.decimals)}</h2>
                        </div>
                    </div>
                </div>

                <div className="absolute p-6 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                    {
                        dist && dist.distribution.length !== 0
                            ?
                            <h2 className="mt-2 text-2xl font-medium">Asset distributed between {dist.distribution.length} beneficiaries</h2>
                            :
                            <h2 className="mt-2 text-2xl font-medium">Asset not distributed</h2>
                    }
                    {
                        dist && dist.distribution.length !== 0
                            ?
                            <p className="mt-2 font-bold">Click to Edit</p>
                            :
                            <p className="mt-2 font-bold">Click to distribute</p>
                    }

                </div>
            </div>
        </div>
        </div >
    )
}

export default TokenAsset;