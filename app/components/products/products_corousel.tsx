"use client";

import {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    linkName: string;
    badge: string;
    titleImages: StaticImageData[]; // endi array — 3 ta rasim
}

const ProductCorousel = ({title, linkName, badge, titleImages}: SectionHeaderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % titleImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [titleImages.length]);

    return (
        <div className="bg-amber-200 h-[100vh] w-full relative overflow-hidden">
            <div className="bg-black opacity-50 absolute z-10 top-0 left-0 w-full h-full"></div>

            {titleImages.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`${title} - ${index + 1}`}
                    className={`w-full h-full object-cover object-top absolute z-0 top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                />
            ))}

            <div className="container mx-auto px-6 h-full">
                <div className="absolute z-20 bottom-20 left-0 right-0 px-6">
                    <div className="container mx-auto">
                        <div className="flex w-full justify-between items-center">
                            <h1 className="text-white text-6xl md:text-7xl font-bold font-dm">{title}</h1>
                            <div className="text-white text-lg font-manrope">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCorousel;