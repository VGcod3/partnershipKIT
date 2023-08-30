import Image from "next/image";
import AnimatedElement from "@/hooks/AnimatedElement";


import { capture_it, europeextendedCbold, europeextendedRegular } from "../fonts";

export default function Stats() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8" id='stats'>
            {/* <AnimatedElement direction="bottom"> */}
            <h2 className={`${capture_it.className} uppercase text-5xl mt-16 md:text-7xl text-center`}>Статистика проєкту(2021)</h2>
            {/* </AnimatedElement> */}
            {/* <AnimatedElement direction="bottom" duration={0.5}> */}
            <div className="socials flex flex-col max-w-md gap-4 ">
                <h3 className={`${europeextendedCbold.className}  text-2xl md:text-3xl  mt-10 text-bold text-center`}>Кількість підписників у соціальних мережах</h3>
                <div className="social flex items-center gap-4">
                    <Image width={50} height={50} src='/telegram.svg' alt="social" className="md:h-16 h-12" />
                    <span className={`${europeextendedRegular.className} text-xl md:text-3xl`}> Telegram – 710+</span>
                </div>

                <div className="social flex items-center gap-4">
                    <Image width={50} height={50} src='/instagram.svg' alt="social" className="md:h-16 h-12" />
                    <span className={`${europeextendedRegular.className} text-xl md:text-3xl`}> Instagram – 2460+</span>
                </div>

                <div className="social flex items-center gap-4">
                    <Image width={50} height={50} src='/facebook.svg' alt="social" className="md:h-16 h-12" />
                    <span className={`${europeextendedRegular.className} text-xl md:text-3xl`}> Facebook  – 2150+</span>
                </div>
                <div className="social flex items-center gap-4">
                    <Image width={50} height={50} src='/linkedin.svg' alt="social" className="md:h-16 h-12" />
                    <span className={`${europeextendedRegular.className} text-xl md:text-3xl`}> LinkedIn  – 230+</span>
                </div>
            </div >
            {/* </AnimatedElement> */}

            <div className="flex w-full lg:flex-row flex-col gap-20 justify-center lg:justify-between items-center my-4">
                {/* <AnimatedElement direction="bottom" duration={0.5}> */}
                <div className="flex flex-col w-full sm:max-w-md gap-10 my-3">
                    <h3 className={`${europeextendedCbold.className} text-2xl md:text-3xl text-bold text-center mb-4`}>Заявки на участь</h3>
                    <div className="pl-20 flex flex-col gap-8 relative">
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’11 – 144
                        </p>
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’12 – 176
                        </p>
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’13 – 73*
                        </p>
                        <Image src='/statsBorder.svg' height={240} width={50} alt="border decoration" className="absolute left-0 -bottom-5 md:bottom-0" />
                    </div>
                </div>
                {/* </AnimatedElement> */}
                {/* <AnimatedElement direction="bottom" duration={0.5}> */}
                <div className="flex flex-col w-full sm:max-w-md  gap-10  my-3">
                    <h3 className={`${europeextendedCbold.className} text-2xl md:text-3xl text-bold text-center  mb-4`}>Учасники</h3>
                    <div className="pl-20 flex flex-col gap-8 relative">
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’11 – 52                    </p>
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’12 – 72                    </p>
                        <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>
                            ЕВЕС’13 – 52                     </p>
                        <Image src='/statsBorder.svg' height={240} width={50} alt="border decoration" className="absolute left-0 -bottom-5 md:bottom-0" />
                    </div>
                </div>
                {/* </AnimatedElement> */}
            </div>
            <div>
                <p>
                    * у 2021 році через спалах Covid-19 та карантинні обмеження, кількість учасників зменшилась
                </p>
                <p>
                    * У 2022 році проєкт не відбувся у зв’язку з початком повномасштабної війни.
                </p>
            </div>
        </section >
    )
}