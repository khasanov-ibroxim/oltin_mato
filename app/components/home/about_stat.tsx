"use client";

import Image from "next/image";
import TitleUI from "@/app/components/UI/titleUI";
import React from "react";

import i1 from "@/assets/about/aboutStat/i1.png"
import i2 from "@/assets/about/aboutStat/i2.png"
import i3 from "@/assets/about/aboutStat/i3.png"
import i4 from "@/assets/about/aboutStat/i4.png"
import i5 from "@/assets/about/aboutStat/i5.png"
import boxBg from "@/assets/about/aboutStat/boxBg.jpg"

import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";



const AboutStat = ({dict}:any) => {
    const items = [
        {
            value: dict.i1.t,
            unit: "",
            label: dict.i1.desc,
            icon: i1,
        },
        {
            value: dict.i2.t,
            unit: "",
            label: dict.i2.desc,
            icon: i2,
        },
        {
            value: dict.i3.t,
            unit: "",
            label: dict.i3.desc,
            icon: i3,
        },
        {
            value: dict.i4.t,
            unit: "",
            label: dict.i4.desc,
            icon: i4,
        },
        {
            value: dict.i5.t,
            unit: "",
            label: dict.i5.desc,
            icon: i5,
        },
    ];

    return (
        <section
            className="
        mt-[100px]
        min-h-[40vh]
        bg-[#162C43]

        bg-no-repeat
        bg-bottom
      "
        >
            <div className="container">
                <div className={"pt-16"}>
                    <TitleUI text={dict.title} classNameText={"text-white"}/>
                    <h2 className="font-dm font-bold text-[32px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight text-[#fff]">
                        {dict.subtitle}
                    </h2>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="
                flex flex-col items-center justify-center gap-5
                group
              "
                        >
                            {/* icon */}
                            <div
                                className="
                  w-20 h-20

                  rounded-lg
                  p-2
                  flex items-center justify-center
                  transition-transform duration-700
                  group-hover:[transform:rotateY(360deg)]
                "
                            >
                                <Image
                                    src={item.icon}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* text */}
                            <div className="text-center">
                                <h2 className="text-[25px] font-bold text-[#fff]">
                                    {item.value} {item.unit}
                                </h2>
                                <p className="text-[18px] font-medium text-[#fff]">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.4}}
                        className="relative h-[500px] mt-10 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Background Image */}
                        <Image
                            src={boxBg}
                            alt={"sadasd"}
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
                            <motion.div
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{delay: 0.2, type: "spring", stiffness: 200}}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl  flex items-center justify-center mb-6"
                            >
                            <img src={"/logo.svg"} alt={"asdasd"}/>
                            </motion.div>

                            <motion.h2
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.3}}
                                className="font-dm font-bold text-[36px] sm:text-[42px] md:text-[52px] text-white mb-4"
                            >
                                {dict.box_title}
                            </motion.h2>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4}}
                                className="font-manrope text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
                            >
                                {dict.box_desc}
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.5}}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-[#932c4d] hover:bg-[#222222] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {dict.btn}
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AboutStat;
