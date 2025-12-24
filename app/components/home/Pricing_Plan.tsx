"use client";

import TitleUI from "@/app/components/UI/titleUI";
import React from "react";
import Link from "next/link";


interface PricingPlanProps {
    dict: {
        [key: string]: unknown;
    };
}

const PricingPlan = ({dict}: PricingPlanProps) => {
    const plans = [
        {
            title: "Studio Essentials",
            subtitle: "Basic custom weave patterns",
            price: "$450",
            features: [
                "Material & color consultation",
                "Basic custom weave patterns",
                "Up to 5 fabric samples",
                "Standard fiber selection",
                "7-10 day production time",
                "Quality inspection"
            ],
            link:"/#",
            linkText:"Choose Plan"
        },
        {
            title: "Designer Series",
            subtitle: "For fashion labels and boutique collections.",
            price: "$950",
            features: [
                "Personalized design consultation",
                "Advanced weaving techniques",
                "Premium fiber selection",
                "Hand-dyeing options",
                "Sampling & adjustments",
                "Priority production schedule"
            ],
            link:"/#",
            linkText:"Choose Plan"
        },
        {
            title: "Atelier Exclusive",
            subtitle: "For bespoke collab and limited editions.",
            price: "$1,800",
            features: [
                "Full creative direction",
                "Tailored textile development",
                "Rare fiber sourcing",
                "Hand-finishing & detailing",
                "Dedicated artisan team",
                "Custom packaging & delivery"
            ],
            link:"/#",
            linkText:"Choose Plan"
        }
    ];

    return (
        <div className={"py-16 container"}>
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <TitleUI text={"Pricing Plan"}/>
                <h2 className="font-dm text-center font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">Crafted
                    with care, priced <br/> with purpose.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-8">
                {plans.map((plan, index) => (
                    <div key={index} className=" rounded-3xl  flex flex-col">
                        <div className="bg-[#DDD5C8] rounded-2xl px-5 py-1">
                            <h3 className="font-dm font-bold text-[32px] lg:text-[32px] text-[#2C2C2C] mb-0">
                                {plan.title}
                            </h3>
                            <p className="text-[rgb(126,126,126)] font-manrope text-[18px]">
                                {plan.subtitle}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="font-dm font-bold text-[56px] lg:text-[64px] text-[#2C2C2C]">
                                    {plan.price}
                                </span>
                                <span className="text-[#6B6B6B] text-[24px] font-light">
                                    /Project
                                </span>
                            </div>
                        </div>

                        <div className="bg-[#DDD5C8] rounded-2xl px-5 py-5 mt-0.5 flex-grow flex flex-col">
                            <h4 className="text-[#6B6B6B] text-lg mb-6 font-medium">
                                Includes:
                            </h4>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.7 5.3L8.5 13.5L4.3 9.3"
                                                stroke="#2C2C2C"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-[#6B6B6B] text-base leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={plan.link} className="w-full text-center index__btn_colors rounded-xl py-2 text-[#2C2C2C] font-medium text-lg">
                                {plan.linkText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PricingPlan;