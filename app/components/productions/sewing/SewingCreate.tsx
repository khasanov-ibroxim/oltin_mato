import React from 'react';
import bg from "@/assets/production/spinning/bakan_2.jpg"
import Image from "next/image";
import icon1 from "@/assets/production/spinning/ball.png"
const SewingCreate = () => {
    return (
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">

            {/* Background image */}
            <Image
                src={bg}
                alt="Fabric background"
                fill
                className="object-cover"
                priority
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/90 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">

                {/* Title with lines */}
                <div className="relative w-full max-w-4xl mb-4">
                    <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    <h2 className="relative inline-block bg-white px-4 text-xl md:text-3xl font-medium text-gray-800">
                        Let’s create apparel that
                    </h2>
                </div>

                <h3 className="text-lg md:text-2xl text-gray-700 mb-6">
                    meets your brand standards
                </h3>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a className="bg-[#C8A248] hover:bg-[#C8A248]/90 text-white px-6 py-3 rounded shadow">
                        Request Samples
                    </a>
                    <a className="bg-[#1f2937] hover:bg-[#1f2937]/90 text-white px-6 py-3 rounded shadow">
                        Start Production
                    </a>
                </div>



            </div>
        </section>

    );
};

export default SewingCreate;