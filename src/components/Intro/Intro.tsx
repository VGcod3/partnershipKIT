import {Button} from "@/components/ui/button";
import React from "react";
import {ChevronDown} from "lucide-react";
import { introSection } from "../_content/_content";


export default function IntroSection() {
    return (
        <div className="container flex items-center justify-center">
            <div className="text-center h-screen mt-32 md:pt-32">
                <h3 className="uppercase text-xl md:text-2xl font-semibold tracking-wider mb-2">
                    {introSection.term}
                </h3>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
                    {introSection.title}
                </h2>
                <p className="text-base md:text-lg mt-4 md:mt-8 mb-6 px-4 md:px-0">
                    {introSection.description}
                </p>
                <Button className="bg-black text-white hover:bg-gray-800 mt-8 md:mt-16">
                Стати партнером
                </Button>
            </div>

            <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <ChevronDown className="h-20 w-20 animate-bounce" />
            </div>
        </div>
    );
}
