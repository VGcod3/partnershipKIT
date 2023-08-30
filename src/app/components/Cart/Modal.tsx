'use client'
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { newZelek, montBold, montSemiBold } from '../../fonts';

import { useSelector } from 'react-redux';

import { ModalParams } from '@/types';
import { RootState } from '@/redux/store';

interface ModalProps {
    handleModal: ({ name, modalData }: ModalParams) => void;
}

const Modal = ({ handleModal }: ModalProps) => {

    const { name, modalData } = useSelector((state: RootState) => state.modal);

    return (
        <Dialog.Content className="fixed top-1/2  left-1/2 box-border overflow-y-scroll max-h-[90vh] w-[95vw] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-bec-svg p-[25px] focus:outline-none">
            <h3 className={`${newZelek.className} text-center text-3xl`}>{name}</h3>
            <button onClick={() => {
                handleModal({ name: "", modalData: [] as any });
            }}>
                <Cross2Icon className='absolute top-6 right-6 w-8 h-8' />
            </button>
            <div className="grid grid-cols-12">
                <img src="/modalLine.svg" alt="line" className='w-full hidden lg:block col-span-12' />
                {modalData.map(md => <>
                    <p className={`${montBold.className} col-span-12 lg:col-span-3 p-4 flex items-center min-h-[160px] text-center text-3xl`}>{md.heading}</p>
                    <img src="/modalArrows.svg" alt="arrow" className='hidden h-3/5 col-span-1 lg:flex self-center' />
                    <p className={`${montSemiBold.className} col-span-12 lg:col-span-7 p-4 flex items-center min-h-[160px] text-lg`}>{md.details}</p>
                    <img src="/modalLine.svg" alt="line" className='w-full hidden lg:block col-span-12' />
                </>
                )}
            </div>

        </Dialog.Content>
    )
};

export default Modal;