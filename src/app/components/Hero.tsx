'use client'
import Image from "next/image"
import { technos, capture_it } from "../fonts"
import AnimatedElement from "@/hooks/AnimatedElement"

import { anonymous_pro_bold } from "../fonts";
import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";


export default function Hero() {
    const handleScrollClick = useSmoothScrollTo();
    return (
        <section className="min-h-screen -m-10 w-full flex flex-col items-center justify-center gap-5" id="top">
            <div className="flex items-center max-w-5xl mx-auto gap-5 lg:gap-10 justify-between p-6">
                <AnimatedElement direction="left">
                    <Image src='/bec.svg' height={300} width={300} alt="hero logo" className="w-[45vw] md:w-[20vw]" />
                </AnimatedElement>
                <AnimatedElement direction="bottom">
                    <div className="bg-bec-orange w-[0.6vw] h-[25vw]" />
                </AnimatedElement>
                <AnimatedElement direction="right">
                    <h2 className={`${technos.className} text-[15vw] md:text-[10vw] text-bec-grey flex items-center`} >BEC</h2>
                </AnimatedElement>
            </div>
            <AnimatedElement direction="bottom" delay={0.5}>
                <h3 className={`${capture_it.className} text-center text-4xl md:text-6xl mt-10`}>24-28 листопада</h3>
            </AnimatedElement>

            <AnimatedElement direction="bottom" delay={0.7}>
                <button onClick={() => handleScrollClick('#offers')} className={`${anonymous_pro_bold.className} rounded-md w-fit bg-bec-orange text-2xl p-2 xl:p-3`}>Стати партнером</button>
            </AnimatedElement>

        </section>
    )
}