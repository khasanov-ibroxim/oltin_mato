"use client"
import React from "react";
import TitleUI from "@/app/components/UI/titleUI";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, Variants } from 'framer-motion';

import our1 from "@/assets/component/Our_Projects/our_p_1.jpg";
import our2 from "@/assets/component/Our_Projects/our_p_2.jpg";
import our3 from "@/assets/component/Our_Projects/our_p_3.jpg";
import our4 from "@/assets/component/Our_Projects/our_p_4.jpg";

interface OurProjectProps {
    dict: {
        [key: string]: unknown;
    };
}
interface IContent {
    title: string;
    year: number;
    img: StaticImageData;
}

const OurProjects = ({dict}:OurProjectProps) => {
    const content: IContent[] = [
        { title: "Heritage Weave Collection", year: 2022, img: our1 },
        { title: "Atelier X Maison Verre", year: 2023, img: our2 },
        { title: "The Conscious Thread", year: 2024, img: our3 },
        { title: "Looma x Armon Studio", year: 2025, img: our4 },
    ];
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };
    return (
        <section className="container py-16">
            {/* Title */}
            <div className="w-full flex flex-col items-center text-center gap-4 mb-12">
                <TitleUI text="Our Projects" />
                <h2 className="font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    Weaving ideas into reality.
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {content.map((item, index) => (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        key={index}
                        className="group overflow-hidden rounded-2xl"
                    >
                        <div className="relative w-full h-[400px]">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-4 flex justify-between">
                            <h3 className="font-dm text-lg font-bold text-[32px] text-[#222]">
                                {item.title}
                            </h3>
                            <p className="font-dm text-lg font-bold text-[32px] text-[#222]">{item.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurProjects;
