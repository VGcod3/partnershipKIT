import Image from "next/image";
import { capture_it } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'


export default function CSID() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-14">
            {/* <AnimatedElement direction="bottom"> */}
            <h3 className={`${capture_it.className} uppercase text-4xl mt-20 md:text-5xl text-center`}>Що таке Case Study й Innovative Design</h3>
            {/* </AnimatedElement> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11">
                {/* <AnimatedElement direction="left" delay={0.2}> */}
                <div className="flex gap-4 items-center mx-auto max-w-lg">
                    <Image src='/line.svg' alt="line" width={40} height={530} className="h-96 drop-shadow-md shadow-bec-orange" />
                    <p className=" text-lg md:text-2xl max-w-2xl mx-auto"><span className="font-bold">Case Study</span> – це теоретична категорія, завданням якої є аналіз, дослідження й обговорення певної адміністративної, економічної, виробничої, соціальної чи маркетингової проблеми.
                        Ціль — розробити стратегію дій, яка буде найбільш ефективним розв'язанням даної проблеми.</p>
                </div>
                {/* </AnimatedElement> */}
                {/* <AnimatedElement direction="right" delay={0.4}> */}
                <div className="flex gap-4 items-center mx-auto max-w-lg">
                    <Image src='/line.svg' alt="line" width={40} height={530} className="h-96 drop-shadow-md shadow-bec-orange" />
                    <p className=" text-lg md:text-2xl max-w-2xl mx-auto"><span className="font-bold">Innovative design</span> – це практична категорія, яка охоплює найрізноманітніші області інженерії: електроніку, радіотехніку, механіку.
                        Ціль — розв’язати поставлене завдання, створивши новий прототип пристрою, або покращити вже наявний та презентувати його.</p>
                </div>
                {/* </AnimatedElement> */}

            </div>
        </section>
    )
}