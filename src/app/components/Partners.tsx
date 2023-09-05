
import React from "react";
import Image from "next/image";

import { capture_it } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'

const PartnersLogo = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="col-span-1 flex items-center justify-center">
            {children}
        </div>
    )
}

const partners_row_1 = ['Dialog', 'Squad', 'Rozkvit', 'DataArt']
const partners_row_2 = ['SAMBAG', 'Truskavetska', 'Radymo', 'DobraVoda',]
const partners_row_3 = ['Dodo', 'Bun&Cat', 'GreenLogo', 'A.Sept', 'k206']
const partners_row_4 = ['Blaster', 'HobbyMania']

export default function Report() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8 lg:gap-14">
            <h2 className={`${capture_it.className} uppercase text-5xl my-20 md:text-7xl text-center`}>Партнери 2020-2021</h2>

            <div className="grid gap-6 w-full">
                <div className="grid-cols-4 gap-4 flex justify-evenly">
                    {partners_row_1.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-4 gap-4 w-11/12 mx-auto flex justify-evenly">
                    {partners_row_2.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-5 gap-4 w-11/12 mx-auto flex justify-evenly">
                    {partners_row_3.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-2 flex justify-evenly w-8/12 mx-auto">
                    {partners_row_4.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
            </div>
        </section>
    )
}