'use client'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import AnimatedElement from '@/hooks/AnimatedElement';
import { RootState } from '@/redux/store';
import { toggleSponsorship } from '@/redux/sponsorshipSlice';
import { toggleModal } from '@/redux/modalSlice';
import { iSellingPoint } from '@/types/sp';
import { capture_it, newZelek, anonymous_pro_regular, europeextendedRegular } from '../fonts';
import * as Dialog from '@radix-ui/react-dialog'

import Modal from './Modal'

const Card = ({ name, price, services, annotation, active, compulsory }: iSellingPoint) => {
    const dispatch = useDispatch();


    const handleModal = () => dispatch(toggleModal())

    const handleTogglePacket = () => {
        if (!compulsory) {
            dispatch(toggleSponsorship({ name }));
        }
    };

    return (
        <div className={name === 'Basic' ? 'w-full' : 'flex-1'}>
            <div className={`rounded-3xl backdrop-blur-lg max-w-2xl min-w-[300px] sm:min-w-[400px] md:min-w-[580px] min-h-[470px] mx-auto bg-bec-svg bg-opacity-30 flex flex-col justify-between gap-6 md:gap-10 p-7 ${active ? 'border-bec-darker border-2' : ''}`}>
                <div className="flex w-full justify-between items-start">
                    <h5 className={`${newZelek.className} text-3xl md:text-5xl`}>{name}</h5>
                    <div className="flex md:gap-4 gap-1">
                        {annotation && <span className="text-bec-orange bg-[#443625] text-sm md:text-lg md:py-3 py-1.5 md:px-4 px-2 rounded-full h-fit">{annotation}</span>}
                        <button onClick={() => dispatch(toggleModal())}>
                            <Image src="/information.svg" width={50} height={50} alt="info" className="md:w-12 w-8" />
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    {services.map((s, index) => (
                        <p key={index} className={`${anonymous_pro_regular.className} text-lg md:text-2xl`}>
                            {s}
                        </p>
                    ))}
                </div>
                <button onClick={handleTogglePacket} className={`${anonymous_pro_regular.className} ${compulsory ? "cursor-not-allowed" : 'cursor-auto'} text-2xl md:text-4xl bg-bec-bg rounded-2xl border-2 w-fit border-white px-10 py-2 self-center`}>{`${price}$`}</button>
            </div>
        </div>
    );
};

export default function Offers() {
    const sellingPoints = useSelector((state: RootState) => state.sponsorship);
    const modalOpen = useSelector((state: RootState) => state.modal);

    const dispatch = useDispatch();

    const handleModal = () => dispatch(toggleModal())


    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 mx-auto max-w-[1400px] gap-8 my-10" id="offers">
            <Dialog.Root open={modalOpen} onOpenChange={() => dispatch(toggleModal())}>
                {/* <AnimatedElement direction="bottom"> */}
                <h2 className={`${capture_it.className} uppercase text-5xl mt-16 md:text-7xl text-center`}>Пропозиції</h2>
                {/* </AnimatedElement> */}
                <div className="flex flex-wrap justify-center gap-10">
                    {sellingPoints.map(sp => {
                        return <Card key={sp.name} {...sp} />;
                    })}
                </div>
                <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>*10% від загальної суми буде передано на підтримку ЗСУ</p>


                <Dialog.Portal>
                    <Dialog.Overlay className='fixed w-full h-full top-0 left-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm' />
                    <Modal />
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    );
}