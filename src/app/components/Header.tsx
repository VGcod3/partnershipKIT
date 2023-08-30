'use client'
import Image from "next/image";
import { anonymous_pro_bold } from "../fonts";
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
            className="fixed z-20 w-full px-2 md:px-6 flex justify-between py-[2.4vw] bg-bec-bg" >
            <Image src='/topLine.svg' width={1920} height={100} alt="header line" className="absolute left-0 w-full top-[0.5vw] h-auto" />
            <div onClick={() => {
                handleScrollClick("#top")
            }}
                className="logo cursor-pointer relative z-30 flex align-middle gap-3 md:top-0 top-[0.8vw]">

                <Image src='/logoText.svg' alt="logo" height={50} width={100} className="w-24 md:w-[8vw] ml-[9vw]" />

            </div>
            <div className="relative z-30 hidden xl:flex gap-8 xl:gap-20 top-[1vw] leading-none text-xl 2xl:text-2xl items-center">

                {navigation.map((nav_item) => (
                    <span onClick={() => {
                        handleScrollClick(nav_item.href)
                    }
                    } key={nav_item.name} className={`${anonymous_pro_bold.className} cursor-pointer`}>
                        {nav_item.name}
                    </span>
                ))}

                <button onClick={() => handleScrollClick('#offers')} className={`${anonymous_pro_bold.className} rounded-md bg-bec-orange  p-2 xl:p-3`}>Стати партнером</button>

            </div>

            <Dialog.Root >
                <div className="flex xl:hidden relative top-2">
                    <Dialog.Trigger asChild>
                        <button
                            type="button"
                            className="-m-2.5 relative z-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
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