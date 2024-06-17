import React from "react";
import { descriptionSection } from "../_content/_content";


export default function DescriptionSection() {
    return (
        <div className="container">
            <div className="grid gap-y-12 md:gap-y-16 md:grid-cols-2">
                <div className="flex flex-col justify-center"> {/* Add flex and justify-center */}
                    <div className="text-left md:mr-16">
                        <h1 className="uppercase text-center md:text-center font-black mb-8 text-2xl md:text-3xl">
                            {descriptionSection.title}
                        </h1>
                        <p className="font-normal text-center text-sm md:text-base">
                        {descriptionSection.titleDescription}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src={descriptionSection.img1.src} alt={descriptionSection.img1.alt} className="w-full h-64 object-cover"/>
                </div>

                <div className="hidden md:block">
                    <img src={descriptionSection.img2.src} alt={descriptionSection.img2.alt} className="w-full h-64 object-cover"/>
                </div>
                <div className="flex flex-col justify-center"> {/* Add flex and justify-center */}
                    <div className="text-center md:ml-16">
                        <h2 className="uppercase font-black text-xl md:text-xl mb-4">
                            {descriptionSection.term}
                        </h2>
                        <p className="text-sm md:text-base">
                        {descriptionSection.termDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


