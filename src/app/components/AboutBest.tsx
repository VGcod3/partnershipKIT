import React from "react";
import Image from "next/image";

import { capture_it, montBold, montSemiBold, open_sans } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'


export default function AboutBest() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl w-full px-6 mx-auto gap-8 lg:gap-14">
            <h2 className={`${capture_it.className} uppercase text-5xl my-20 md:text-7xl text-center`}>Про BEST Lviv</h2>

            <div className="grid gap-5 w-full grid-cols-12">
                <div className="md:col-span-5 col-span-12">
                    <img src='/BestLogo.svg' alt="logo" className="w-10/12" />
                </div>
                <p className={`${montSemiBold.className} text-sm md:text-2xl p-3 md:col-span-7 col-span-12`}>
                    <span className={montBold.className}>
                        BEST Lviv (Board of European Students of Technology)
                    </span>
                    – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розвиток студентів через обмін знаннями та співпраці компаній, університетів та студентів Європи.
                </p>
            </div>
            <div className="grid w-full gap-5 grid-cols-12">
                <div className="md:col-span-7 col-span-12">
                    <Image src='/Europe.svg' alt="logo" width={550} height={550} className="w-full h-auto" />
                </div>
                <div className={`${open_sans.className} col-span-12 md:col-span-5 flex flex-col text-center items-center justify-evenly md:text-6xl text-3xl`}>
                    <div className="flex flex-col">
                        85
                        <span className={`${open_sans.className} text-lg md:text-4xl`}>осередків</span>
                    </div>
                    <div className="flex flex-col">
                        30
                        <span className={`${open_sans.className} text-lg md:text-4xl`}>країн</span>
                    </div>
                    <div className="flex flex-col">
                        34
                        <span className={`${open_sans.className} text-lg md:text-4xl`}>роки досвіду</span>
                    </div>
                </div>
            </div>

        </section>
    )
}