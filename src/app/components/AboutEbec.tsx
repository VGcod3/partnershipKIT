import Image from "next/image";
import AnimatedElement from "@/hooks/AnimatedElement";


import { capture_it } from "../fonts";

export default function AboutEbec() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-20" id='about'>
            <AnimatedElement direction="bottom">
                <h3 className={`${capture_it.className} uppercase text-5xl md:text-7xl text-center`}>Що таке BEC</h3>
            </AnimatedElement>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11">
                <AnimatedElement direction="left">
                    <Image src='/lastebec.jpg' alt="ebec" width={600} height={450} className="rounded-3xl mx-auto" />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.2}>
                    <p className="text-xl md:text-3xl max-w-2xl mx-auto">BEC — це щорічний виклик найкращим інженерам докласти спільних зусиль для створення нових шляхів розв’язання поставлених завдань. Структура змагань полягає в пошуку ідей та цікавих рішень в одній із двох категорій: Case Study (CS) та Innovative Design (ID).</p>
                </AnimatedElement>
            </div>
        </section>
    )
}