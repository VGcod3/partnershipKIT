'use client'
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { newZelek, montBold, montSemiBold } from '../../fonts';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

interface ModalProps {
    handleModal: () => void;
}

const Modal = () => {
    const dispatch = useDispatch();

    const { name, modalData } = useSelector((state: RootState) => state.modal);


    return (
        <Dialog.Content className="fixed top-1/2 left-1/2  w-[95vw] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-bec-svg p-[25px] focus:outline-none">
            <h3 className={`${newZelek.className} text-center text-3xl`}>{name}</h3>
            <Cross2Icon className='absolute top-6 right-6 w-8 h-8' />
            <div className="grid grid-cols-12">
                {modalData.map(md => <>
                    <p className={`${montBold.className} col-span-4 flex items-center min-h-[160px] text-center text-3xl`}>{md.heading}</p>
                    <p className={`${montSemiBold.className} col-span-8 flex items-center min-h-[160px] text-lg`}>{md.details}</p>
                </>
                )}
            </div>

        </Dialog.Content>
    )
};

export default Modal;