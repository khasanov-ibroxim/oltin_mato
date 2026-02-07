import React from 'react';
import Image from "next/image";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";

const SewingOurTypes = () => {
    return (
        <div className={"w-full min-h-[300px] bg-gray-800 flex items-center justify-center"}>
            <div className="container py-14">
                <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="relative rounded-sm bg-[#F9F9F8]  flex flex-col min-h-[300px] shadow-xl">
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
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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