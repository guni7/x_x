import { useDispatch, useSelector } from "react-redux";
import { selectContractAddress, selectTezos } from "../../features/tezos/selectors";
import { setStorage } from "../../features/tezos/slice";

const CreateWillButton = () => {

    const dispatch = useDispatch();
    const Tezos = useSelector(selectTezos);
    const contractAddress = useSelector(selectContractAddress);

    const createOrUpdateWill = async () => {
        try {
            const contract = await Tezos.wallet.at(contractAddress);

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

            //const confirmation = await op.confirmation(3);
            //console.log(confirmation);
            const storage: any = await contract.storage();
            dispatch(setStorage(storage));
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <button
            onClick={createOrUpdateWill}
            className={`animate-pulse px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2 `}
        >
            Send Bad Operation 
        </button>
    )
}

export default CreateWillButton;