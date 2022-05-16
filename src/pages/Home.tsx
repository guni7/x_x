import { useSelector } from "react-redux"
import Assets from "../components/Assets"
import { selectBeaconConnection } from "../features/tezos/selectors"

export const Home = () => {
    const beaconConnection = useSelector(selectBeaconConnection);
    return (
        <div>        {
            beaconConnection ?
                <div className="flex flex-row w-full">
                    < Assets />
                </div >
                :
                <div className="flex w-full h-screen bg-yellow-100">
                    <section>
                        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-yellow-100">
                            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                                <div
                                    className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last -mb-8"
                                >
                                    <img
                                        className="inset-0 object-cover w-full h-full"
                                        src="/images/bezos.jpg"
                                        alt="Man using a computer"
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl">Plan for your crypto asset succession</h2>

                                    <p className="mt-4 text-gray-600">
                                        Connect with your beacon wallet and create a crypto will. 
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        }
        </div>
    )
}

