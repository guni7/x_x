import { selectTokenDistribution, selectUserAddress, selectUserProfile } from "../../features/tezos/selectors";
import { useSelector, useDispatch } from "react-redux";
import { MichelsonMap } from "@taquito/taquito";
const CreateWillButton = () => {

    const dispatch = useDispatch();
    const distribution = useSelector(selectTokenDistribution);
    const userProfile = useSelector(selectUserProfile)
    const userAddress = useSelector(selectUserAddress);

    const createOrUpdateWill = () => {
        const userProfileMap = new MichelsonMap();
        userProfileMap.set(`${userAddress}`, userProfile);
        console.log(userProfileMap);
    }
    return (
        <button
            onClick={createOrUpdateWill}
            className="px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2"
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