import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectBeaconConnection,
  selectContractAddress,
  selectTezos,
  selectUserProfile,
} from "../features/tezos/selectors";
import ConnectButton from "./ConnectButton";
import CreateWillButton from "./CreateWillButton/CreateWillButton";
import DisconnectButton from "./DisconnectButton";
const Navbar = () => {
  const userProfile = useSelector(selectUserProfile);
  const contractAddress = useSelector(selectContractAddress);
  const Tezos = useSelector(selectTezos);

  const extendTime = async () => {
    const contract = await Tezos.wallet.at(contractAddress);
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    console.log(startOfDay.getTime());
    console.log(startOfDay);
    //const sixMonths = 15778800000;
    const oneDay = 86400000;
    const newTime = new Date(startOfDay.getTime() + oneDay * 2).toISOString();
    const updateUserMethod = contract.methods.updateTriggerParam(newTime);
    const op = await updateUserMethod.send({
      storageLimit: 2000,
      gasLimit: 500000,
      fee: 200000,
    });
    // eslint-disable-next-line
    const confirmation = await op.confirmation(3);
  };

  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);
  const beaconConnection = useSelector(selectBeaconConnection);
  return (
    <nav
      className={`flex items-center ${
        beaconConnection ? "justify-between" : "justify-end"
      } flex-wrap bg-yellow-100 p-6 border-gray-200`}
    >
      {beaconConnection ? (
        <div className="w-full flex flex-row justify-between">
          <DisconnectButton />
          <div className="flex flex-row">
            <button className="flex w-48" onClick={extendTime}>
              <img
                className="h-8 w-auto"
                src="./images/dead.png"
                alt="dead emoji"
              />
              { userProfile?.trigger_time &&
                <span className="mt-1 ml-1">
                  in{" "}
                  {Math.floor(
                    (Date.parse(String(userProfile?.trigger_time)) -
                      Number(Date.now())) /
                      86400000
                  )}{" "}
                  days
                </span>
              }
            </button>
          </div>
          <CreateWillButton />
        </div>
      ) : (
        <ConnectButton />
      )}
    </nav>
  );
};

export default Navbar;
