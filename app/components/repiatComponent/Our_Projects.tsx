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
        [key: string]: any;
    };
}
interface IContent {
    title: string;
    year: number;
    img: StaticImageData;
    bg:string
}

const OurProjects = ({dict}:OurProjectProps) => {
    const content: IContent[] = [
        { title: dict.i_1.title, year: 2022, img: our1 , bg:"#932c4d"},
        { title: dict.i_2.title, year: 2023, img: our2 , bg: "#932c4d"},
        { title: dict.i_3.title, year: 2024, img: our3 , bg: "#932c4d"},
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
                <TitleUI text={dict.title} />
                <h2 className="font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    {dict.subtitle}
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
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

                        <div className="p-4 flex flex-col justify-between">
                            <h3 className="font-dm text-[25px] font-bold mb-5 text-center  text-[#222]">
                                {item.title}
                            </h3>
                            <p className={`
                            inline-flex h-[40px] items-center justify-center bg-[${item.bg}] hover:bg-[#162C43] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}>{dict.btn}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurProjects;
