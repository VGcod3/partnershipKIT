import Image from "next/image";
import { capture_it } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'


export default function Report() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-14">
            {/* <AnimatedElement direction="bottom"> */}
            <h2 className={`${capture_it.className} uppercase text-5xl mt-20 md:text-7xl text-center`}>Звітність</h2>
            {/* </AnimatedElement> */}
            {/* <AnimatedElement direction="bottom"> */}
            <h2 className={` text-xl mt-10 md:mt-20 md:text-4xl`}>З нашої сторони ми гарантуємо повну звітність, що містить в собі фотозвіт та aftermovie.</h2>
            {/* </AnimatedElement> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11">
                <div>

                    {/* <AnimatedElement direction="left"> */}
                    <div className="flex gap-4 items-center mx-auto max-w-lg relative h-[50vw] sm:h-[300px] md:h-[360px]">
                        <Image src='/reportFrame.svg' alt="frame" width={600} height={350} className="absolute" />
                        <Image src='/camera.svg' alt="camera" width={50} height={50} className="absolute top-[20%] md:top-1/4 left-[17%] w-[5vw] max-w-[45px]" />
                        <p className="xl:text-lg sm:text-md text-xs w-3/5 mx-auto relative z-10 text-center">Фотозвіт – опис з місця подій проєкту в форматі світлин.</p>
                    </div>
                </div>
                <div>

                    {/* </AnimatedElement> */}
                    {/* <AnimatedElement direction="right" delay={0.4}> */}
                    <div className="flex gap-4 items-center mx-auto max-w-lg">
                        <div className="flex gap-4 items-center mx-auto max-w-lg relative h-[50vw] sm:h-[300px] md:h-[360px]">
                            <Image src='/reportFrame.svg' alt="frame" width={600} height={350} className="absolute" />
                            <Image src='/videoCamera.svg' alt="camera" width={50} height={50} className="absolute top-[20%] md:top-1/4 left-[17%] w-[5vw] max-w-[45px]" />
                            <p className="xl:text-lg sm:text-md text-xs w-3/5 mx-auto relative z-10 text-center">Aftermovie – відео, що створюється по завершенні проєкту з метою підсумовування та відтворення атмосфери емоцій, що панували під час заходу.</p>
                        </div>
                    </div>
                </div>
                {/* </AnimatedElement> */}
            </div>
        </section>
    )
}