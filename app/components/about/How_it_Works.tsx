"use client"
import React from 'react';
import TitleUI from "@/app/components/UI/titleUI";

interface HowItWorksProps {
    dict: {
        [key: string]: unknown;
    };
}

const HowItWorks = ({dict}:HowItWorksProps) => {

    const contentWorks=[
        {title:"Consultation & Concept" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Design & Material Selection" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Crafting & Sampling" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Production & Delivery" , text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    ]

    return (
        <div className={"py-16 container"}>
            <div className="w-full flex flex-col items-center text-center gap-4 mb-12">
                <TitleUI text="How It Works" />
                <h2 className="font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    From vision to woven perfection.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {contentWorks.map((item, index) => (
                    <div key={index} className="w-full rounded-3xl py-5 px-4 bg-[#222] flex flex-col items-center text-center text-white gap-4">
                       <span className={"text-[40px] font-bold font-dm text-[rgb(249,249,248)]"}>0{index+1}.</span>
                        <h3 className={"text-[32px] leading-tight font-bold font-dm text-[rgb(249,249,248)]"}>{item.title}</h3>
                        <h3 className={"text-[18px] font-manrope text-[rgb(218,211,200)]"}>{item.text}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;