import Image from "next/image";
import AnimatedElement from "@/hooks/AnimatedElement";
import Carousel from "./Carousel";

import { capture_it } from "../fonts";

export default function AboutEbec() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-20" id='about'>
            <h3 className={`${capture_it.className} uppercase text-5xl md:text-7xl text-center`}>Що таке BEC</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 items-center">
                <div>

                    {/* <AnimatedElement direction="left"> */}
                    <Carousel />
                </div>

                <div>
                    {/* <AnimatedElement direction="right" delay={0.2}> */}
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto ">Це виклик, націлений на молодих інженерів, що надає їм можливість використовувати свої знання та навички для вирішення реальних технічних завдань. Суть змагання полягає у відкритті нових ідей та захопливих рішень в одному з двох визначених напрямків.
                        Case Study (CS) та Innovative Design (ID).
                    </p>
                </div>
            </div>
        </section>
    )
}