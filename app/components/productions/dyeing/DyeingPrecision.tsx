import React from 'react';
import Image from "next/image";
import icon_1 from "@/assets/production/spinning/ball.png";
import top_img from "@/assets/production/dyeing/IMG_9724.jpg"
import bottom_img from "@/assets/production/dyeing/DSC07384.jpg"
import iso from "@/assets/production/dyeing/iso.png"

const DyeingPrecision = ({ dict }: { dict: any }) => {

    const top_array = [
        { icon: icon_1, h: dict.precision.top.features.i_1.title, p: dict.precision.top.features.i_1.desc },
        { icon: icon_1, h: dict.precision.top.features.i_2.title, p: dict.precision.top.features.i_2.desc },
        { icon: icon_1, h: dict.precision.top.features.i_3.title, p: dict.precision.top.features.i_3.desc },
        { icon: icon_1, h: dict.precision.top.features.i_4.title, p: dict.precision.top.features.i_4.desc },
    ];

    const bottom_array = [
        { icon: icon_1, h: dict.precision.bottom.features.i_1.title, p: dict.precision.bottom.features.i_1.desc },
        { icon: icon_1, h: dict.precision.bottom.features.i_2.title, p: dict.precision.bottom.features.i_2.desc },
        { icon: icon_1, h: dict.precision.bottom.features.i_3.title, p: dict.precision.bottom.features.i_3.desc },
        { icon: icon_1, h: dict.precision.bottom.features.i_4.title, p: dict.precision.bottom.features.i_4.desc },
    ];

    return (
        <>
            <div className="relative w-full min-h-[520px] flex items-center">

                <Image
                    src={top_img}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-r
      from-[#162C43]/90
      via-[#162C43]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full lg:w-1/2 p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3 font-dm">
                            {dict.precision.top.title}
                        </h1>
                        <p className="mb-8">
                            {dict.precision.top.subtitle}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {top_array.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div>
                                        <h4 className="font-medium text-xl">{item.h}</h4>
                                        <p className=" opacity-80 text-base">{item.p}</p>
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
                    src={bottom_img}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient overlay */}
                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-l
      from-[#162C43]/90
      via-[#162C43]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full ml-auto lg:w-1/2 p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3 font-dm">
                            {dict.precision.bottom.title}
                        </h1>
                        <p className="mb-8">{dict.precision.bottom.subtitle}</p>

                        <div className="grid grid-cols-2 gap-6">
                            {bottom_array.map((it, i) => (
                                <div key={i} className="flex gap-4">
                                    <div>
                                        <h4 className="font-medium text-xl">{it.h}</h4>
                                        <p className=" opacity-80 text-base">{it.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="relative w-full min-h-[260px] flex items-center overflow-hidden pt-5">

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[#fff]/90 z-10" />

                <div className="relative z-20 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-dm font-serif font-semibold text-[#111] mb-2">
                            {dict.precision.quality.title}
                        </h2>
                        <p className="text-[#111] mb-6">
                            {dict.precision.quality.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 rounded-md bg-[#08CB00] text-white font-medium hover:bg-[#078c02]/90 transition">
                                {dict.precision.quality.btn_contact}
                            </button>
                            <button className="px-6 py-3 rounded-md bg-[#08CB00] text-white font-medium hover:bg-[#078c02]/90 transition">
                                {dict.precision.quality.btn_order}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CERTIFICATES */}
                    <div className="flex gap-2 w-1/2 flex-col sm:flex-row pb-5">

                        <div className="bg-white max-h-[200px] w-full sm:w-1/2   rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={iso}
                                alt="OEKO TEX"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="bg-white max-h-[200px] w-full sm:w-1/2  rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={iso}
                                alt="OEKO TEX"
                                className="object-cover h-full w-full"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default DyeingPrecision;