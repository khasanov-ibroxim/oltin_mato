import React from 'react';
import Image from "next/image";
import card_1 from "@/assets/production/sewing/DSC07435.jpg";
import card_3 from "@/assets/production/sewing/DSC07409.jpg";
import card_2 from "@/assets/production/sewing/DSC07533.jpg";
import card_4 from "@/assets/production/sewing/DSC07603.jpg";

const SewingOur = () => {

    return (
        <div className={"container py-20"}>
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-full max-w-4xl mb-4 flex items-center justify-center">
                    <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"/>
                    <h2 className="relative inline-block bg-white px-4 text-xl md:text-3xl font-medium text-gray-800">Our Production Process</h2>
                </div>
                <h3 className="text-lg md:text-2xl text-gray-700 mb-5">цвет, который сохраняется надолго</h3>
            </div>


            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[card_1,card_2,card_3,card_4].map((it, i) => (
                    <div key={i} className="relative rounded-sm   flex flex-col min-h-[300px] shadow-xl">
                        {/* IMAGE */}
                        <div className="h-full overflow-hidden rounded-xl">
                            <Image
                                src={it}
                                alt="card"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default SewingOur;