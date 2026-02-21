import React from 'react';
import bg from "@/assets/production/sewing/DSC07429.jpg"
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
            <div className="absolute inset-0 bg-gradient-to-b  z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">

                <h2 className="relative inline-block  px-4 text-3xl md:text-5xl font-medium text-white ">
                    Мастерство в каждом стежке
                </h2>

                <h3 className="text-lg md:text-2xl text-white mb-6">
                    современный швейный цех для идеального результата
                </h3>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a className="bg-[#162C43] hover:bg-[#162C43]/90 text-white px-6 py-3 rounded shadow">
                        Свяжитесь
                    </a>
                    <a className="bg-[#1f2937] hover:bg-[#1f2937]/90 text-white px-6 py-3 rounded shadow">
                        Заказать
                    </a>
                </div>



            </div>
        </section>

    );
};

export default SewingCreate;