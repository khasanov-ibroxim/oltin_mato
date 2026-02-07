import React from 'react';
import card_1 from "@/assets/production/spinning/bakan_2.jpg"
import icon_1 from "@/assets/production/spinning/ball.png"
import Image from "next/image";
import Link from "next/link";

const ModernSpinning = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row min-h-[520px]">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Modern Spinning Technologies
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, porro!
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[1,2,3,4].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full ">
                                        <Image src={icon_1} alt={"asd"}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Ring</h4>
                                        <p className="text-sm text-gray-600">Ring spinning</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* RIGHT IMAGE + GRADIENT */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    {/* IMAGE */}
                    <Image
                        src={card_1}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* GRADIENT OVERLAY */}
                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:from-white
        lg:via-white/5
        lg:to-transparent
        z-10
      "
                    />
                </div>
            </div>
            <div className="w-full mt-10 lg:mt-0 flex flex-col lg:flex-row min-h-[520px]">
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    {/* IMAGE */}
                    <Image
                        src={card_1}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* GRADIENT OVERLAY */}
                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:to-white
        lg:via-white/5
        lg:from-transparent
        z-10
      "
                    />
                </div>
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Modern Spinning Technologies
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, porro!
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[1,2,3,4].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full ">
                                        <Image src={icon_1} alt={"asd"}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Lorem ipsum dolor sit amet.</h4>
                                        <p className="text-sm text-gray-600">Ring spinning</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"flex items-center justify-center flex-col md:flex-row  w-full  gap-3 mt-10"}>
                        <Link href={"#"} className={"w-1/2 bg-[#C8A248] hover:bg-[#C8A248]/90 text-center py-2 text-white font-bold rounded-sm"}>Request a
                            Quote</Link>
                        <Link href={"#"} className={"w-1/2 bg-gray-100 hover:bg-gray-100/90 text-black  text-center py-2 rounded-sm"}>Download
                            Yarn specs</Link>
                    </div>
                </div>
                {/* RIGHT IMAGE + GRADIENT */}

            </div>
        </>
    );
};

export default ModernSpinning;