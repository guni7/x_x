import ConnectButton from './ConnectButton';
import DisconnectButton from './DisconnectButton';
import { useSelector } from 'react-redux';
import { selectBeaconConnection } from '../features/tezos/selectors';
import CreateWillButton from './CreateWillButton/CreateWillButton';
const Navbar = () => {

    const beaconConnection = useSelector(selectBeaconConnection);
    return (
        <nav className={`flex items-center ${beaconConnection ? "justify-between" : "justify-end"} flex-wrap bg-yellow-100 p-6 border-gray-200 border-b-2`}>
            {
                beaconConnection ?
                    <div className='w-full flex flex-row justify-between'>
                        <DisconnectButton />
                        <img className='h-8 w-auto' src="https://mpng.subpng.com/20181111/kek/kisspng-emoji-emoticon-vector-graphics-portable-network-gr-smiley-s-day-of-the-dead-www-pixshark-com-images-5be8a163a0aa95.0728874215419723236581.jpg" alt="dead emoji" />
                        <CreateWillButton/>
                    </div>
                    :
                    <ConnectButton />
            }
        </nav>
    )
}

export default Navbar;