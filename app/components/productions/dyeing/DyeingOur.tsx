import React from 'react';
import Image from "next/image";
import bg from "@/assets/production/spinning/bakan_2.jpg";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";
import ball from "@/assets/production/spinning/ball.png";

const DyeingOur = () => {
    return (
        <section className="relative w-full min-h-[420px]  overflow-hidden">

            <Image
                src={bg}
                alt="Fabric background"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/50 z-10"/>


            <div className="relative container  z-20 h-full flex flex-col items-center py-10 text-center">
                <div className="relative w-full max-w-4xl mb-4">
                    <div
                        className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"/>
                    <h2 className="relative inline-block bg-white px-4 text-xl md:text-3xl font-medium text-gray-800">
                        Let’s create apparel that
                    </h2>
                </div>

                <h3 className="text-lg md:text-2xl text-gray-700 mb-6">
                    meets your brand standards
                </h3>

                <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="relative rounded-sm  bg-white flex flex-col min-h-[300px] shadow-xl">
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ut.</p>
                                <div className="flex flex-col items-center justify-center py-3">
                                    <span className={"w-[100px] h-0.5 bg-yellow-300"}></span>

                                    <div className="flex w-full gap-5 pt-3">
                                        <Image src={ball} alt={"sd"} width={25} height={25} />
                                        <p className={"font-medium"}>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default DyeingOur;