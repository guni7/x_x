import { useSelector } from 'react-redux';
import { selectBeaconConnection } from '../features/tezos/selectors';
import ConnectButton from './ConnectButton';
import CreateWillButton from './BAD-OPERATION';
import DisconnectButton from './DisconnectButton';
const Navbar = () => {

    const beaconConnection = useSelector(selectBeaconConnection);
    return (
        <nav className={`flex items-center ${beaconConnection ? "justify-between" : "justify-end"} flex-wrap bg-yellow-100 p-6 border-gray-200`}>
            {
                beaconConnection ?
                    <div className='w-full flex flex-row justify-between'>
                        <DisconnectButton />
                        <CreateWillButton />
                    </div>
                    :
                    <ConnectButton />
            }
        </nav>
    )
}

export default Navbar;