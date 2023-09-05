'use client'
import Image from "next/image";

import { europeextendedCbold, capture_it } from '@/app/fonts';

import AnimatedElement from '@/hooks/AnimatedElement'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function AboutEbec() {
    const [frame, inView] = useInView({
        threshold: 0.2,
    });

    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-14 my-12">
            <h3 className={`${capture_it.className} uppercase text-5xl md:text-7xl text-center`}>Портрет учасника</h3>
            <div className="flex flex-col items-center justify-center w-full md:text-xl">
                <motion.div
                    ref={frame}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 50 },
                        visible: { opacity: 1, scale: 1, y: 0 }
                    }} className="relative bottom-20 max-w-md w-full z-10 h-72 my-12">

                    <Image src='/partic.svg' alt="person" width={450} height={450} className="transition-all p-[4rem] absolute max-w-96 h-96" />

                </motion.div>
                <span className={` text-2xl md:text-4xl ${europeextendedCbold.className}`}>Студент НУ «ЛП»</span>
                <div className={`flex text-xl md:text-3xl gap-5 my-5 ${europeextendedCbold.className}`}>
                    <span className="font-bold ">Вік:</span>
                    <span>17-21</span>
                </div>
                <div>
                    <p>Спеціальності</p>
                    <ul className="list-inside list-disc pl-8">
                        <li>Інженерія програмного забезпечення</li>
                        <li>Системна інженерія</li>
                        <li>Архітектура та містобудування</li>
                        <li>Комп’ютерна інженерія</li>
                        <li>Системи штучного інтелекту</li>
                        <li>Кібербезпека</li>
                        <li>Системний аналіз</li>
                        <li>Робототехніка</li>
                        <li>Промислове та цивільне будівництво</li>
                        <li>Інші</li>
                    </ul>
                </div>
            </div>
        </section >
    )
}