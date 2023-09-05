import React from "react";
import Image from "next/image";

import { capture_it, montBold, montSemiBold, open_sans } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'


export default function Contacts() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl my-20 w-full px-6 mx-auto gap-8 lg:gap-14" id="contacts">
            <h2 className={`${capture_it.className} uppercase text-5xl my-20 md:text-7xl text-center`}>Контакти</h2>

            <div className="grid gap-5 md:gap-20 w-full grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 min-w-[300px] flex flex-col justify-center items-center gap-1 md:gap-3 md:order-1">
                    <img src="/Veronika.png" alt="Veronika" className="w-48 md:w-64 mx-auto" />
                    <p className={`${montBold.className} text-center text-xl md:text-3xl`}>Вероніка Мороз</p>
                    <p className={`${montSemiBold.className} text-base md:text-lg text-center mb-5`}>Відповідальна за корпоративні зв'язки</p>
                    <a className={`${montSemiBold.className}`} href="tel:+380 63 870 61 97">
                        +380 63 870 61 97
                    </a>
                    <a className={`${montSemiBold.className} underline`} href="mailto:veronika.moroz@best-eu.org">
                        veronika.moroz@best-eu.org
                    </a>
                </div>
                <div className="col-span-1 min-w-[300px] flex flex-col justify-center items-center gap-1 md:gap-3 md:order-1 order-first">
                    <img src="/Artem.png" alt="Artem" className="w-48 md:w-64 mx-auto" />
                    <p className={`${montBold.className} text-center text-xl md:text-3xl`}>Артем Онисько</p>
                    <p className={`${montSemiBold.className} text-base md:text-lg text-center mb-5`}>Головний організатор</p>
                    <a className={`${montSemiBold.className}`} href="tel:+380 68 694 51 41">
                        +380 68 694 51 41
                    </a>
                    <a className={`${montSemiBold.className} underline`} href="mailto:artem.onysko@best-eu.org">
                        artem.onysko@best-eu.org
                    </a>
                </div>
                <div className="col-span-1 min-w-[300px] flex flex-col justify-center items-center gap-1 md:gap-3 md:order-1">
                    <img src="/Andriy.png" alt="Andriy" className="w-48 md:w-64 mx-auto" />
                    <p className={`${montBold.className} text-center text-xl md:text-3xl`}>Гаврилко Андрій</p>
                    <p className={`${montSemiBold.className} text-base md:text-lg text-center mb-5`}>Відповідальний за корпоративні зв'язки</p>
                    <a className={`${montSemiBold.className}`} href="tel:+380 97 507 24 52">
                        +380 97 507 24 52
                    </a>
                    <a className={`${montSemiBold.className} underline`} href="mailto:andriy.havrylko@best-eu.org">
                        andriy.havrylko@best-eu.org
                    </a>
                </div>
            </div>


        </section>
    )
}