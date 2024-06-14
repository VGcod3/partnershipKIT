import React from "react";

const data = [
    {
        title: "Назва події",
        text: "Lorem ipsum dolor sit amet consectetur. Volutpat sem at eu nulla mi at amet netus morbi. Et nunc auctor sit suspendisse sit. Ornare at lectus ac porttitor sed velit tempus. Arcu gravida sociis pellentesque et nibh sed nisi ornare vitae. Sit tincidunt pellentesque libero sed volutpat faucibus adipiscing vitae. Feugiat consectetur velit elementum eget enim morbi pellentesque orci. Amet dolor egestas lectus vel sodales dapibus. Velit tincidunt suspendisse non at lectus nunc sit elementum. Dignissim augue accumsan sit id dui.",
        image: 'https://img.tsn.ua/cached/1533908292/tsn-8c5f6b23d1211bb14030cc3abd4583f7/thumbs/x/ee/d4/d2791d398d545e0bd1d22fea3c71d4ee.jpeg',
        alt: 'Image 1',
    },
    {
        title: "Тема події",
        text: "Lorem ipsum dolor sit amet consectetur. Volutpat sem at eu nulla mi at amet netus morbi. Et nunc auctor sit suspendisse sit. Ornare at lectus ac porttitor sed velit tempus. Arcu gravida sociis pellentesque et nibh sed nisi ornare vitae. Sit tincidunt pellentesque libero sed volutpat faucibus adipiscing vitae. Feugiat consectetur velit elementum eget enim morbi pellentesque orci. Amet dolor egestas lectus vel sodales dapibus. Velit tincidunt suspendisse non at lectus nunc sit elementum. Dignissim augue accumsan sit id dui.",
        image: 'https://th.bing.com/th/id/OIP.Ykcup1VlAayTcbhQuRkTMAHaFj?rs=1&pid=ImgDetMain',
        alt: 'Image 2',
    },
];


export default function DescriptionSection() {
    return (
        <div className="container mx-auto px-4 py-16 h-screen">
            <div className="grid gap-y-12 md:gap-y-16 md:grid-cols-2">
                <div className="flex flex-col justify-center"> {/* Add flex and justify-center */}
                    <div className="text-left md:mr-16">
                        <h1 className="uppercase text-center md:text-left font-black mb-8 text-2xl md:text-3xl">
                            {data[0].title}
                        </h1>
                        <p className="font-normal text-sm md:text-base">
                            {data[0].text}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src={data[0].image} alt={data[0].alt} className="w-full h-64 object-cover"/>
                </div>

                <div className="hidden md:block">
                    <img src={data[1].image} alt={data[1].alt} className="w-full h-64 object-cover"/>
                </div>
                <div className="flex flex-col justify-center"> {/* Add flex and justify-center */}
                    <div className="text-left md:ml-16">
                        <h2 className="uppercase font-black text-xl md:text-xl mb-4">
                            {data[1].title}
                        </h2>
                        <p className="text-sm md:text-base">
                            {data[1].text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


