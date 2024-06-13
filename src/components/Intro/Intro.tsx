import {Button} from "@/components/ui/button";
import React from "react";
import {ChevronDown} from "lucide-react";

const data = {
    subtitle: 'тема події',
    title: 'НАЗВА ПОДІЇ',
    text: 'Lorem ipsum dolor sit amet consectetur. Volutpat sed ac eu nulla et sit amet nulla nec. Et leo nec erat suspendisse. Orci ut arcu duis et consectetur sed velit. Id leo duis sed sit donec bibendum.',
    buttonText: 'Стати партнером',
};


export default function IntroSection() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="text-center h-screen items-center justify-center pt-16 md:pt-32">
                <h3 className="uppercase text-xl md:text-2xl font-semibold tracking-wider mb-2">
                    {data.subtitle}
                </h3>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
                    {data.title}
                </h2>
                <p className="text-base md:text-lg font-thin mt-4 md:mt-8 mb-6 px-4 md:px-0">
                    {data.text}
                </p>
                <Button className="bg-black text-white hover:bg-gray-800 mt-8 md:mt-16">
                    {data.buttonText}
                </Button>
            </div>

            <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <ChevronDown className="h-20 w-20 animate-bounce" />
            </div>
        </div>
    );
}
