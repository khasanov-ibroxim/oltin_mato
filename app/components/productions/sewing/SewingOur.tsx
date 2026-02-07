import React from 'react';
import Image from "next/image";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";
import icon_1 from "@/assets/production/spinning/ball.png"

const SewingOur = () => {
    const steps = [
        {label: "Cut", icon: icon_1},
        {label: "Sew", icon: "🧵"},
        {label: "Inspect", icon: "🔍"},
        {label: "Pack", icon: "📦"},
    ];
    return (
        <div className={"container py-20"}>
            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="relative rounded-sm   flex flex-col min-h-[300px] shadow-xl">
                        {/* IMAGE */}
                        <div className="h-[230px] overflow-hidden rounded-xl">
                            <Image
                                src={card_1}
                                alt="card"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 p-5 text-center pb-2">
                            <h1 className="text-xl font-medium mb-2">
                                Lorem ipsum dolor sit.
                            </h1>
                        </div>

                    </div>

                ))}
            </div>
            <div className="w-full pt-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center">

                        {steps.map((step, index) => {
                            const isLast = index === steps.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-center ${!isLast ? "flex-1" : ""}`}
                                >
                                    {/* STEP */}
                                    <div className="flex flex-col items-center min-w-[90px]">
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center">
                                            <Image src={icon_1} alt="icon" />
                                        </div>
                                        <span className="mt-2 text-sm text-gray-800">
                {step.label}
              </span>
                                    </div>

                                    {/* LINE (faqat oxirgidan oldin) */}
                                    {!isLast && (
                                        <div className="flex-1 flex items-center">
                                            <div className="w-full h-[1px] mb-5 bg-[#c9a24d]/70 mx-3" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SewingOur;