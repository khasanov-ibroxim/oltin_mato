"use client"
import React from 'react';
import TitleUI from "@/app/components/UI/titleUI";

import p1 from "@/assets/partnior/1.png"
import p2 from "@/assets/partnior/2.png"
import p3 from "@/assets/partnior/3.png"
import p4 from "@/assets/partnior/4.png"
import p5 from "@/assets/partnior/5.png"
import p6 from "@/assets/partnior/6.png"
import p7 from "@/assets/partnior/7.png"
import Image from "next/image";

interface HowItWorksProps {
    dict: {
        [key: string]: any;
    };
}

const HowItWorks = ({dict}:HowItWorksProps) => {

    const contentWorks=[
        p1 , p2 , p3 , p4, p5 , p6 , p7
    ]

    return (
        <div className={"py-16 container"}>
            <div className="w-full flex flex-col items-center text-center gap-4 mb-12">
                <TitleUI text={dict.title} />
                <h2 className="font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    {dict.subtitle}
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {contentWorks.map((item, index) => (
                    <div key={index} className="w-full rounded-3xl py-5 px-4  flex flex-col items-center text-center text-white gap-4">
                      <Image src={item} alt={"sadasd"}  className={"object-cover"}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;