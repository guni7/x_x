import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect } from 'react';
import { Beneficiary as BeneficiaryType } from '../../types';

type Props = {
    id: any,
    beneficiaries: BeneficiaryType[],
    setBeneficiaries: any
}

const Beneficiary = ({ id, beneficiaries, setBeneficiaries }: Props) => {

    const [percent, setPercent] = useState(beneficiaries[id].percentage)
    const [address, setAddress] = useState(beneficiaries[id].address);

    const handleAddressChange = (e: any) => {
        setAddress(e.target.value);
        const updatedBeneficiaries = beneficiaries.map(beneficiary => {
            if (beneficiary.id === id) {
                return ({
                    ...beneficiary,
                    address: e.target.value
                })
            } else {
                return beneficiary
            }
        })
        setBeneficiaries(updatedBeneficiaries);
    }
    const handlePercentChange = (e: any) => {
        setPercent(e)
        const updatedBeneficiaries = beneficiaries.map(beneficiary => {
            if (beneficiary.id === id) {
                return ({
                    ...beneficiary,
                    percentage: e
                })
            } else {
                return beneficiary
            }
        })
        setBeneficiaries(updatedBeneficiaries);
    }

    useEffect(() => {
        setPercent(beneficiaries[id].percentage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [beneficiaries])


    return (
        <div className='flex flex-col ml-8 p-8 justify-items-center border-blue-400 bg-yellow-100 border-0  m-1 border-l-2'>
            <div className='flex justify-between '>
                <input
                    className="w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 bg-yellow-100 rounded-full"
                    type="text"
                    placeholder="Beneficiary Address"
                    value={address}
                    onChange={e => handleAddressChange(e)}
                />
            </div>
            <div className='flex color align-center mt-2 '>
                <Slider onChange={e => handlePercentChange(e)} value={percent} className="self-center" />
                <span className='w-1/4 ml-4 pl-2 pt-2 pb-2 text-sm border-2 border-gray-200 rounded-full' >gets {percent}% </span>
            </div>
        </div>
    )
}

export default Beneficiary;