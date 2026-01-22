"use client";

import Image from "next/image";
import index_img from "@/assets/home/header/home_header_index.jpg";
import {Badge, MoveRight} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface HomeHeaderProps {
    dict:any;
}

export default function HomeHeader({dict}: HomeHeaderProps) {
    // Animation variants with proper typing
    const fadeInScale: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    const staggerChildren: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const childVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const slideFromRight: Variants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1, delay: 0.3, ease: "easeOut" }
        }
    };

    return (
        <div className="w-full h-[220vh] relative">
            {/* Overlay */}
            <div className="bg-black opacity-40 absolute z-10 top-0 left-0 w-full h-full"></div>

            {/* Background Image */}
            <Image
                src={index_img}
                alt="Oltin mato"
                className="w-full h-full object-cover absolute z-0"
            />

            {/* Main Text - Fade in and scale animation */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={childVariant}
                className="relative text-center font-medium flex z-20 w-full h-screen items-center justify-center text-white font-dm
               text-[50px] sm:text-[100px] md:text-[120px] lg:text-[100px]"
            >
                {dict.home_header.title[0]} <br/> {dict.home_header.title[1]}
            </motion.div>

            {/* Content Section */}
            <div
                className="absolute px-6 sm:px-12 md:px-24 text-[rgb(249,249,248)] z-20 bottom-10 flex flex-col lg:flex-row justify-between items-start gap-10 w-full">

                {/* Left Text - Slide from left with stagger */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerChildren}
                    className="flex flex-col w-full lg:w-2/3 gap-4 md:gap-6"
                >
                    <motion.h2
                        variants={childVariant}
                        className="flex font-manrope tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase font-bold text-[12px] sm:text-[14px] md:text-[16px] items-center gap-2"
                    >
                        <Badge size={20} className="text-[#CBA655]"/> {dict.home_header.box.title}
                    </motion.h2>

                    <motion.h1
                        variants={childVariant}
                        className="text-[30px] w-auto lg:w-3/4 sm:text-[50px] md:text-[40px] lg:text-[50px] font-bold leading-[50px] sm:leading-[50px] md:leading-[50px] lg:leading-[50px] font-dm"
                    >
                        {dict.home_header.box.subtitle}
                    </motion.h1>

                    <motion.p
                        variants={childVariant}
                        className="font-manrope text-[14px] sm:text-[16px] md:text-[18px] w-full md:w-2/3"
                    >{dict.home_header.box.p}</motion.p>

                    <motion.div variants={childVariant}>
                        <Link
                            href="/contact"
                            className="index__btn_colors inline-flex items-center justify-center rounded-sm px-6 py-2 font-manrope gap-1"
                        >
                            {dict.home_header.box.btn} <MoveRight/>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Video - Slide from right and scale */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInScale}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex w-full flex-col lg:w-1/3 gap-2 rounded-2xl items-start justify-start h-full bg-[#877F75]/70"
                >
                    <div className="relative w-full pt-[56.25%]">
                        <div className="">
                            <div
                                className="absolute z-30 w-full h-full bg-black opacity-20 rounded-2xl top-0 left-0"></div>
                            <iframe
                                className="absolute z-20 rounded-2xl border-none top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/WypyTb-Rw-k?autoplay=1&loop=1&playlist=WypyTb-Rw-k&controls=0&rel=0&modestbranding=1&mute=1"
                                title="How Garments are Made in a Factory"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="px-5 py-5 flex flex-col gap-4">
                        <h3 className={"text-black m-0 font-dm text-3xl font-bold"}>{dict.home_header.box.video_title}</h3>
                        <p className={"font-manrope text-[19px]"}>{dict.home_header.box.video_text}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}