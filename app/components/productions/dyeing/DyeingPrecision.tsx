import React from 'react';
import Image from "next/image";
import icon_1 from "@/assets/production/spinning/ball.png";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";
import Link from "next/link";

const DyeingPrecision = () => {
    return (
        <>
            <div className="relative w-full min-h-[520px] flex items-center">

                {/* Background image */}
                <Image
                    src={card_1}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient overlay (RIGHT → LEFT) */}
                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-l
      from-[#0f1a26]/90
      via-[#0f1a26]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full lg:w-1/2 ml-auto p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Modern Spinning Technologies
                        </h1>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[1,2,3,4].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                                        <Image src={icon_1} alt="icon" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Ring</h4>
                                        <p className="text-sm opacity-80">Ring spinning</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="relative w-full min-h-[520px] flex items-center">

                {/* Background image */}
                <Image
                    src={card_1}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient overlay */}
                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-r
      from-[#0f1a26]/90
      via-[#0f1a26]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full lg:w-1/2 p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Modern Spinning Technologies
                        </h1>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[1,2,3,4].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full ">
                                        <Image src={icon_1} alt="icon" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Ring</h4>
                                        <p className="text-sm opacity-80">Ring spinning</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="relative w-full min-h-[260px] flex items-center overflow-hidden bg-[#f2f2f2]">

                {/* Background image / texture */}
                <Image
                    src={card_1} // shu yerga cloud/texture image
                    alt="Quality Control"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-white/60 z-10" />

                <div className="relative z-20 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2b2b2b] mb-2">
                            Quality Control
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Rigorous testing for color fastness and durability
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 rounded-md bg-[#b8955c] text-white font-medium hover:bg-[#a3834e] transition">
                                Request a Quote
                            </button>
                            <button className="px-6 py-3 rounded-md bg-[#1f2933] text-white font-medium hover:bg-black transition">
                                Contact Dyeing Unit
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CERTIFICATES */}
                    <div className="flex gap-4">

                        <div className="bg-white shadow-md rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={card_1}
                                alt="OEKO TEX"
                                className="object-contain h-12 w-auto"
                            />
                        </div>

                        <div className="bg-white shadow-md rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={card_1}
                                alt="ISO 9001"
                                className="object-contain h-12 w-auto"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default DyeingPrecision;