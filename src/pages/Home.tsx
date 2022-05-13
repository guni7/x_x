import { useSelector } from "react-redux"
import Assets from "../components/Assets"
import Distribution from "../components/Distribution/Distribution"
import { selectSelectedToken } from "../features/tezos/selectors"
import { AvailableToken } from "../types"

export const Home = () => {
    
    return (
        <div className="flex flex-row w-full">
            <Assets />
        </div>
    )
}

