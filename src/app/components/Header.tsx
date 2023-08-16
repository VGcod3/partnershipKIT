'use client'
import Image from "next/image";
import { technos, anonymous_pro } from "../fonts";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';
import Drawer from "./Drawer";

type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    {
        name: "Про нас",
        href: "#about"
    },
    {
        name: "Статистика",
        href: "#stats"
    },
    {
        name: "Пропозиції",
        href: "#offer"
    },
    {
        name: "Контакти",
        href: "#contacts"
    }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleScrollClick = useSmoothScrollTo();


    return (
        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed z-20 w-full px-2 md:px-6 flex justify-between py-[2.2vw] bg-bec-bg" >
            <Image src='/topLine.svg' width={1920} height={100} alt="header line" className="absolute left-0 w-full top-[0.5vw] h-auto" />
            <div onClick={() => {
                handleScrollClick("#top")
            }}
                className="logo cursor-pointer relative z-30 flex align-middle gap-3 md:top-0 top-[1vw]">
                <Image src='/bec.svg' alt="logo" height={80} width={80} className="w-10 md:w-[3.7vw]" />
                <div className="bg-bec-orange h-full w-[2px]" />
                <span className={`${technos.className}  align-middle text-xl md:text-3xl flex items-center`}>BEC</span>
            </div>
            <div className="relative z-30 hidden md:flex gap-6 top-[1.8vw] text-[2vw] leading-none">

                {navigation.map((nav_item) => (
                    <span onClick={() => {
                        handleScrollClick(nav_item.href)
                    }
                    } key={nav_item.name} className={`${anonymous_pro.className} cursor-pointer`}>
                        {nav_item.name}
                    </span>
                ))}

            </div>

            <Dialog.Root >
                <div className="flex md:hidden relative top-2">
                    <Dialog.Trigger asChild>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                    </Dialog.Trigger>
                </div>
                <Drawer setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />
            </Dialog.Root>
            <Image src='/bottomLine.svg' width={1920} height={100} alt="header line" className="absolute left-0 top-14  md:top-[5.3vw] w-full h-auto bg-bec-bg" />
        </motion.header >
    )
}