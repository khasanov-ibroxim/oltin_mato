import React from 'react';
import Image from "next/image";
import card_1 from "@/assets/production/sewing/DSC07667.jpg";
import card_2 from "@/assets/production/sewing/DSC07626.jpg";
import card_3 from "@/assets/production/sewing/DSC07409.jpg";
import card_4 from "@/assets/production/sewing/DSC07484.jpg";

const SewingOurTypes = ({ dict }: { dict: any }) => {
    const contents = [
        { image: card_1, h: dict.our_types.items.i_1.title, p: dict.our_types.items.i_1.desc },
        { image: card_2, h: dict.our_types.items.i_2.title, p: dict.our_types.items.i_2.desc },
        { image: card_3, h: dict.our_types.items.i_3.title, p: dict.our_types.items.i_3.desc },
        { image: card_4, h: dict.our_types.items.i_4.title, p: dict.our_types.items.i_4.desc },
    ];

    return (
        <div className={"w-full min-h-[300px] bg-gray-800 flex items-center justify-center"}>
            <div className="container py-14">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-4xl mb-4 flex items-center justify-center">
                        <h2 className="relative inline-block font-bold  px-4 text-xl md:text-4xl  text-white font-dm">{dict.our_types.title}</h2>
                    </div>
                    <h3 className="text-lg md:text-2xl font-thin text-white mb-5">{dict.our_types.subtitle}</h3>
                </div>
                <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {contents.map((it, i) => (
                        <div key={i} className="relative rounded-sm bg-[#F9F9F8]  flex flex-col min-h-[300px] shadow-xl">
                            {/* IMAGE */}
                            <div className="h-[230px] overflow-hidden rounded-xl">
                                <Image
                                    src={it.image}
                                    alt="card"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1 p-5 text-center pb-2">
                                <h1 className="text-xl font-medium mb-2">
                                    {it.h}
                                </h1>
                                <p className="text-base">
                                    {it.p}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SewingOurTypes;