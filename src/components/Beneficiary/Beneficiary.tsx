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
    }, [beneficiaries])


    return (
        <div className='flex flex-col ml-8 p-8 border-black border-2 rounded-lg m-4'>
            <div className='flex justify-between'>
                <input
                    className="w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
                    type="text"
                    placeholder="Beneficiary Address"
                    value={address}
                    onChange={e => handleAddressChange(e)}
                />
            </div>
            <div className='flex color align-center '>
                <Slider onChange={e => handlePercentChange(e)} value={percent} className="self-center" />
                <input className='w-1/6 ml-4 pl-5 pt-2 pb-2 text-sm border-2 border-gray-200 rounded-lg' value={percent} ></input>
            </div>
        </div>
    )
}

export default Beneficiary;