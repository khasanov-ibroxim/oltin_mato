"use client";

import TitleUI from "@/app/components/UI/titleUI";
import React from "react";
import Link from "next/link";


interface PricingPlanProps {
    dict: {
        [key: string]: any;
    };
}

const PricingPlan = ({dict}: PricingPlanProps) => {
    const plans = [
        {
            title: dict.i_1.title,
            subtitle: dict.i_1.subtitle,
            price: "$450",
            features: dict.i_1.list,
            link:"/#",
            linkText:"Choose Plan"
        },
        {
            title: dict.i_2.title,
            subtitle: dict.i_2.subtitle,
            price: "$950",
            features: dict.i_2.list,
            link:"/#",
            linkText:"Choose Plan"
        },
        {
            title: dict.i_3.title,
            subtitle: dict.i_3.subtitle,
            price: "$1,800",
            features: dict.i_3.list,
            link:"/#",
            linkText:"Choose Plan"
        }
    ];

    return (
        <div className={"py-16 container"} id={"price"}>
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <TitleUI text={dict.title}/>
                <h2 className="font-dm text-center font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    {dict.subtitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-8">
                {plans.map((plan, index) => (
                    <div key={index} className="rounded-3xl  flex flex-col">
                        <div className="bg-[#08CB00] rounded-2xl px-5 py-5">
                            <h3 className="font-dm font-bold text-[32px] lg:text-[32px] text-[#0E1E2F] mb-0">
                                {plan.title}
                            </h3>
                            <p className="text-[#0E1E2F] font-manrope text-[18px]">
                                {plan.subtitle}
                            </p>
                            {/*<div className="flex items-baseline gap-1">*/}
                            {/*    <span className="font-dm font-bold text-[56px] lg:text-[64px] text-[#2C2C2C]">*/}
                            {/*        {plan.price}*/}
                            {/*    </span>*/}
                            {/*    <span className="text-[#6B6B6B] text-[24px] font-light">*/}
                            {/*        /Project*/}
                            {/*    </span>*/}
                            {/*</div>*/}
                        </div>

                        <div className="bg-[#162C43] rounded-2xl px-5 py-5 mt-0.5 flex-grow flex flex-col">
                            <h4 className="text-[#fdfdfd] text-lg mb-6 font-medium">
                                {dict.teg}
                            </h4>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature: string , index: number ) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.7 5.3L8.5 13.5L4.3 9.3"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-[#fdfdfd] text-base leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PricingPlan;