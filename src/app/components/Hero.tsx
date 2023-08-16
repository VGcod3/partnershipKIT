import Image from "next/image"
import { technos, capture_it } from "../fonts"
import AnimatedElement from "@/hooks/AnimatedElement"


export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col align-middle content-middle justify-center" id="top">
            <div className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto gap-10 justify-between p-6">
                <AnimatedElement direction="left">
                    <Image src='/bec.svg' height={500} width={500} alt="hero logo" className="w-3/5 md:w-[25rem]" />
                </AnimatedElement>
                <AnimatedElement direction="bottom">
                    <div className="bg-bec-orange hidden lg:block w-[10px] h-[25rem]" />
                </AnimatedElement>
                <AnimatedElement direction="right">
                    <h2 className={`${technos.className} text-[15vw] sm:text-[13vw] md:text-[10rem] flex items-center`} >BEC</h2>
                </AnimatedElement>
            </div>
            <AnimatedElement direction="bottom" delay={0.5}>
                <h3 className={`${capture_it.className} text-center text-4xl md:text-6xl mt-10 lg:mt-20`}>24-28 листопада</h3>
            </AnimatedElement>
            {/* <Image src='/hero.svg' width={1920} height={1080} className="object-fill w-screen  absolute top-0 left-0" alt="tech" /> */}
        </section>
    )
}