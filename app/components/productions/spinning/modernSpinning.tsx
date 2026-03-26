import React from 'react';
import card_1 from "@/assets/production/spinning/bakan_2.jpg"
import top_array_img from "@/assets/production/spinning/DSC06418.jpg"
import Image from "next/image";
import Link from "next/link";
import { Toolbox, Award, BadgePercent, ChartColumnIncreasing, Palette, ShieldCheck, Trophy, Cpu } from "lucide-react"

const ModernSpinning = ({ dict }: { dict: any }) => {
    const top_array = [
        { icon: Toolbox,           h: dict.modern.top.features.i_1.title, p: dict.modern.top.features.i_1.desc },
        { icon: Award,             h: dict.modern.top.features.i_2.title, p: dict.modern.top.features.i_2.desc },
        { icon: BadgePercent,      h: dict.modern.top.features.i_3.title, p: dict.modern.top.features.i_3.desc },
        { icon: ChartColumnIncreasing, h: dict.modern.top.features.i_4.title, p: dict.modern.top.features.i_4.desc },
    ];

    const bottom_array = [
        { icon: Trophy,      h: dict.modern.bottom.features.i_1.title, p: dict.modern.bottom.features.i_1.desc },
        { icon: Cpu,         h: dict.modern.bottom.features.i_2.title, p: dict.modern.bottom.features.i_2.desc },
        { icon: Palette,     h: dict.modern.bottom.features.i_3.title, p: dict.modern.bottom.features.i_3.desc },
        { icon: ShieldCheck, h: dict.modern.bottom.features.i_4.title, p: dict.modern.bottom.features.i_4.desc },
    ];

    return (
        <>
            <div className="w-full flex flex-col lg:flex-row min-h-[520px]">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 bg-[#162C43] text-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            {dict.modern.top.title}
                        </h1>
                        <p className=" mb-8">
                            {dict.modern.top.subtitle}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {top_array.map((item, i) => (
                                <div key={i} className="flex gap-1">
                                    <div className="w-20 h-20 hidden sm:flex items-center justify-center rounded-full ">
                                        <item.icon className={" text-[#08CB00]"}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.h}</h4>
                                        <p className="text-sm ">{item.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* RIGHT IMAGE + GRADIENT */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    <Image
                        src={top_array_img}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:from-[#162C43]
        lg:bg-[#162C43]/5
        lg:to-transparent
        z-10
      "
                    />
                </div>
            </div>

            <div className="w-full mt-10 lg:mt-0 flex flex-col lg:flex-row min-h-[520px]">
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    <Image
                        src={card_1}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:to-[#162C43]
        lg:bg-[#162C43]/5
        lg:from-transparent
        z-10
      "
                    />
                </div>
                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-1/2 bg-[#162C43] text-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            {dict.modern.bottom.title}
                        </h1>
                        <p className=" mb-8">
                            {dict.modern.bottom.subtitle}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {bottom_array.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-20 h-20 hidden sm:flex items-center justify-center rounded-full ">
                                        <item.icon className={" text-[#08CB00]"}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.h}</h4>
                                        <p className="text-sm ">{item.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"flex items-center justify-center flex-col md:flex-row  w-full  gap-3 mt-10"}>
                        <Link href={"#"} className={"w-1/2 bg-[#08CB00] hover:bg-[#078c02]/90 text-center py-2 text-white font-bold rounded-sm"}>
                            {dict.modern.bottom.btn_contact}
                        </Link>
                        <Link href={"#"} className={"w-1/2 bg-gray-100 hover:bg-gray-100/90 text-black  text-center py-2 rounded-sm"}>
                            {dict.modern.bottom.btn_order}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModernSpinning;