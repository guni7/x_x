import {
  BeaconEvent,
  defaultEventCallbacks,
  NetworkType
} from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTezos,
  selectWallet
} from "../../features/tezos/selectors";
import {
  setBeaconConnection, setContract, setPublicToken, setStorage, setTokenBalances, setUserAddress,
  setUserBalance, setUserProfile, setWallet
} from "../../features/tezos/slice";
import { fetchUserBalances } from "../../libs/utils";
import { TezosAccountAddress, UserProfile } from "../../types";


const ConnectButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const Tezos = useSelector(selectTezos);
  const wallet = useSelector(selectWallet);

  const [publicTkn, setPublicTkn] = useState<string | null>("");

  const setup = async (userAddress: TezosAccountAddress): Promise<void> => {
    dispatch(setUserAddress(userAddress));

    const balance = await Tezos.tz.getBalance(userAddress);

    dispatch(setUserBalance(balance.toNumber()));

    const tokenBalances = await fetchUserBalances(userAddress)
    console.log(tokenBalances);
    //const xtzBalance: TokenBalanceInfo = {
    //  address: "KT1",
    //  balance: balance.toNumber(),
    //  decimals: 6,
    //  icon: "",
    //  name: "Tezos",
    //  symbol: AvailableToken.XTZ,
    //  type: "FA1.2",
    //  isApproved: false
    //}
    //tokenBalances?.push(xtzBalance);
    dispatch(setTokenBalances(tokenBalances));
    const contract = await Tezos.wallet.at('KT19xorVBYtEy5sofm6HTJsP219MtzpybEtu');
    dispatch(setContract(contract));

    const storage: any = await contract.storage();
    dispatch(setStorage(storage));

    const userProfile = await storage['users'].get(userAddress) as UserProfile;
    console.log('userP', userProfile)
    dispatch(setUserProfile(userProfile))
  };

  const connectWallet = async () => {
    try {
      await wallet?.requestPermissions({
        network: {
          type: NetworkType.CUSTOM,
          rpcUrl: "https://ithacanet.ecadinfra.com",
        },
      });
      const userAddress = await wallet?.getPKH() as TezosAccountAddress;
      if (userAddress) {
        await setup(userAddress);
      }

      dispatch(setBeaconConnection(true));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const wallet = new BeaconWallet({
        name: "x_x",
        preferredNetwork: NetworkType.CUSTOM,
        disableDefaultEvents: true,
        eventHandlers: {
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT,
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: (data) => setPublicTkn(data.publicKey),
          },
        },
      });
      console.log(wallet);
      Tezos.setWalletProvider(wallet);
      dispatch(setWallet(wallet));

      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        const userAddress = await wallet.getPKH() as TezosAccountAddress;
        await setup(userAddress);
        dispatch(setBeaconConnection(true));
      }
    })();
  }, []);

  useEffect(() => {
    dispatch(setPublicToken(publicTkn));
  }, [setPublicTkn]);

  return (
    <button
      onClick={connectWallet}
      className="px-4 py-1 text-md text-blue-600 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-blue focus:ring-offset-2"
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;

