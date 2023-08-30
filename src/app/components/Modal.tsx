import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { newZelek } from '../fonts';

const DialogDemo = () => (
    <Dialog.Content className="fixed  top-1/2 left-1/2 h-[90vh] w-[95vw] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-bec-svg p-[25px] focus:outline-none">
        <h3 className={`${newZelek.className} text-center text-3xl`}>Basic</h3>
    </Dialog.Content>
);

export default DialogDemo;