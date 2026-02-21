import React from 'react';
import Image from "next/image";
import card_1 from "@/assets/production/sewing/DSC07406.jpg";
import Link from "next/link";

const SewingHeader = () => {
    return (
        <>
            <div className="relative w-full h-[520px] overflow-hidden">
                {/* BACKGROUND IMAGE */}
                <Image
                    src={card_1}
                    alt="Garment Manufacturing"
                    fill
                    className="object-cover"
                    priority
                />

                {/* MARKAZIY OQ GRADIENT BAND */}
                <div
                    className="
      absolute
      left-0
      right-0
      top-1/2
      -translate-y-1/2
    w-full
    bg-gray-800/50
    h-full
      z-10
    "
                />

                {/* CONTENT */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                    <div className="text-center max-w-4xl">
                        <h1 className="text-4xl md:text-7xl font-semibold text-white">
                            Швейный цех
                        </h1>

                        <p className="text-base md:text-xl mt-4 text-white">
                            Точная работа для идеальных готовых изделий
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Link href={"#"}  className="bg-[#162C43] px-6 py-3 rounded-sm text-white">
                                Заказать
                            </Link>
                            <Link href={"#"} className="bg-gray-800 px-6 py-3 rounded-sm text-white">
                                Подробнее
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SewingHeader;