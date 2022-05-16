import { useDispatch, useSelector } from "react-redux";
import { selectContractAddress, selectTezos, selectTokenBalances, selectTokenDistribution } from "../../features/tezos/selectors";
import { setStorage } from "../../features/tezos/slice";

const CreateWillButton = () => {

    const dispatch = useDispatch();
    const distribution = useSelector(selectTokenDistribution);
    const tokenBalances = useSelector(selectTokenBalances);
    const Tezos = useSelector(selectTezos);
    const contractAddress = useSelector(selectContractAddress);

    const createOrUpdateWill = async () => {


       // const token_asset_list: IValue[] = distribution?.map(distrib => {
       //     const token = tokenBalances.find(tkBal => tkBal.symbol === distrib.tokenSymbol);
       //     if (!token) return;
       //     const distributionList = distrib.distribution.map(dis => {
       //         const michelsonDistribution = Record({
       //             beneficiary_address: Address(dis.address),
       //             percentage: Nat(dis.percentage)
       //         })
       //         return michelsonDistribution;
       //     });
       //     console.log(token.balance)
       //     const michelson_token = Record({
       //         asset_id: String(token.id), // change to id,
       //         token_details: Record({
       //             token_type: String(token.type),
       //             is_fungible: Bool(false),
       //             address: Address(token.address),
       //             decimals: Nat(token.decimals), // remove this 
       //             amount: Nat(100),
       //             distribution_list: List(distributionList)
       //         })
       //     });
       //     return michelson_token;
       // }) as IValue[]

        if (!distribution) return;
        const token_asset_list2: any[] = distribution?.map(distrib => {
            const token = tokenBalances.find(tkBal => tkBal.symbol === distrib.tokenSymbol);
            if (!token) return;
            const distributionList = distrib.distribution.map(dis => {
                const michelsonDistribution = {
                    beneficiary_address: (dis.address),
                    percentage: (dis.percentage)
                }
                return michelsonDistribution;
            });
            console.log(token.balance)
            const michelson_token = {
                asset_id: (token.id), // change to id,
                token_details: ({
                    token_type: (token.type),
                    is_fungible: (false),
                    address: (token.address),
                    decimals: (token.decimals), // remove this 
                    amount: 100,
                    distribution_list: (distributionList)
                })
            }
            return michelson_token;
        })

        try {
            const contract = await Tezos.wallet.at(contractAddress);

            if (!token_asset_list2) return

            console.log(token_asset_list2[0])
            const createUserMethod = contract.methods.createUserParam({
                token_assets: [{
                    asset_id: "1",
                    amount: 100,
                    uncapped: false,
                    token_details: {
                        address: "KT1KuoFrHs4bxRbLRm79qGs69xP93hKVnsD9",
                        decimals: 10,
                        is_fungible: true,
                        token_type: "FA1.2"
                    },
                    distribution: [
                        {
                            beneficiary_address: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
                            percentage: 100
                        }
                    ]
                }],
                trigger_time: new Date(Date.now()).toISOString()
            })
            const op = await createUserMethod.send({
                storageLimit: 2000,
                gasLimit: 500000,
                fee: 200000
            });

            const confirmation = await op.confirmation(3);
            console.log(confirmation);
            const storage: any = await contract.storage();
            dispatch(setStorage(storage));
        } catch (err) {
            console.log(err)
        }
        // tokenAsset = asset_id , token_details , amount , distribution list , uncapped
        // tokenDetails = token_type , is_fungible, address, decimals

    }
    return (
        <button
            onClick={createOrUpdateWill}
            className={`${distribution && distribution?.length > 0 ? "animate-pulse" : ""} px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2`}
        >
            {
                (distribution && distribution?.length > 0)
                    ?
                    `Add ${distribution.length} assets to Will`
                    :
                    `Create Empty User`
            }
        </button>
    )
}

export default CreateWillButton;