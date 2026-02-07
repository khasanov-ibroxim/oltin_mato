import React from 'react';
import card_1 from "@/assets/production/spinning/bakan_2.jpg"
import Image from "next/image";

const SpinningOur = () => {
    return (
        <>
            <div className={"container py-20"}>
                <div className="text-center">
                    <div className="w-full text-center flex relative items-center justify-center">
                        <div
                            className="w-full h-px absolute bg-gradient-to-r from-transparent via-black to-transparent"></div>
                        <div className="absolute bg-[#F9F9F8] px-2 text-2xl md:text-5xl font-medium">Our Yarn Types</div>
                    </div>
                    <p className={"mt-8 text-base md:text-xl"}>Wide range of yarn options to fit your textile needs</p>
                </div>
                <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1,2,3].map((_, i) => (
                        <div key={i} className="relative rounded-sm  bg-white flex flex-col min-h-[420px] border-b-[#d2b48c] border-b-5">
                            {/* IMAGE */}
                            <div className="h-[260px] overflow-hidden rounded-xl">
                                <Image
                                    src={card_1}
                                    alt="card"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1 p-5 text-center pb-10">
                                <h1 className="text-xl font-medium mb-2">
                                    Lorem ipsum dolor sit.
                                </h1>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            {/* PASTKI CHIQIB TURGAN QISM */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <div className="w-16 h-6 bg-[#d2b48c] rounded-full shadow-sm"></div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default SpinningOur;