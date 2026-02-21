import React from 'react';
import card_1 from "@/assets/production/spinning/DSC06331.jpg"
import card_2 from "@/assets/production/spinning/DSC06349.jpg"
import card_3 from "@/assets/production/spinning/DSC06317.jpg"
import Image from "next/image";

const SpinningOur = () => {

    const imageData = [
        card_1 ,
        card_2 ,
        card_3 ,
    ]
    return (
        <>
            <div className={"container py-20"}>
                <div className="text-center">
                    <div className="w-full text-center flex relative items-center justify-center">
                        <div
                            className="w-full h-px absolute bg-gradient-to-r from-transparent via-black to-transparent"></div>
                        <div className="absolute bg-[#F9F9F8] px-2 text-2xl md:text-5xl font-medium">Производственный процесс</div>
                    </div>
                    <p className={"mt-8 text-base md:text-xl"}>От подготовки сырья до готовой пряжи — полный цикл на одной площадке</p>
                </div>
                <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imageData.map((it, i) => (
                        <div key={i} className="relative rounded-sm  bg-white flex flex-col  border-b-[#162C43] border-b-5">
                            {/* IMAGE */}
                            <div className="h-[260px] overflow-hidden rounded-xl">
                                <Image
                                    src={it}
                                    alt="card"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <div className="w-16 h-6 bg-[#162C43] rounded-full shadow-sm"></div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default SpinningOur;