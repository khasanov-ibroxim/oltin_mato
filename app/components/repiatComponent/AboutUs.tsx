"use client";

import React from 'react';
import Image from 'next/image';
import {motion, Variants} from 'framer-motion';
import about_1 from "@/assets/component/aboutUs/aboutUs_1.jpg"
import about_2 from "@/assets/component/aboutUs/aboutUs_2.jpg"
import about_3 from "@/assets/component/aboutUs/aboutUs_3.jpg"
import about_4 from "@/assets/component/aboutUs/aboutUs_4.jpg"

import about_about_1 from "@/assets/home/header/headerElement.jpg"
import about_about_2 from "@/assets/component/aboutUs/about_about_2.jpg"
import about_about_3 from "@/assets/component/aboutUs/about_about_3.jpg"
import about_about_4 from "@/assets/component/aboutUs/about_about_4.jpg"

import Link from 'next/link';
import {MoveRight} from "lucide-react"
import TitleUI from "@/app/components/UI/titleUI";
import LinkUI from "@/app/components/UI/linkUI";

interface AboutProps {
    dict: {
        [key: string]: any;
    };
    page: string;
}

const AboutUs = ({dict , page}: AboutProps) => {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.8, ease: "easeOut"}
        }
    };

    const staggerContainer: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const imageVariant: Variants = {
        hidden: {opacity: 0, scale: 0.95},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6, ease: "easeOut"}
        }
    };

    return (
        <div className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.3}}
                    variants={fadeInUp}
                    className="mb-12 md:mb-16"
                >
                    <TitleUI text={dict?.subtitle} />

                    <h1 className="font-dm mt-3 font-bold text-[25px] sm:text-[40px] md:text-[50px] lg:text-[57px] lg:leading-[57px] leading-[45px] text-[#222222] w-full">
                        {dict?.title}
                    </h1>
                </motion.div>

                {/* Images Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {/* Image 1 */}
                    <motion.div
                        variants={imageVariant}
                        className="relative rotate-[-5deg] h-[300px] sm:h-[350px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={page==="home" ? about_1 : about_about_1}
                            alt="Fashion designer working"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        variants={imageVariant}
                        className="relative h-[300px] rotate-[5deg] sm:h-[350px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={page==="home" ? about_2 : about_about_2}
                            alt="Team collaboration"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>

                    {/* Image 3 */}
                    <motion.div
                        variants={imageVariant}
                        className="relative rotate-[-5deg] h-[300px] sm:h-[350px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={page==="home" ? about_3 : about_about_3}
                            alt="Textile workers"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>

                    {/* Image 4 */}
                    <motion.div
                        variants={imageVariant}
                        className="relative rotate-[5deg] h-[300px] sm:h-[350px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={page==="home" ? about_4 : about_about_4}
                            alt="Fashion designer with fabric"
                            fill
                            className="object-cover  transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full flex flex-col lg:flex-row pt-10">
                {page === "about" ? <p className={"font-manrope pr-2 lg:w-1/2 text-[18px] text-[rgb(126,126,126)]"}>
                    {dict?.left_title}
                </p> : <div className="w-full lg:w-1/2 font-dm text-[25px] lg:text-[30px]  lg:leading-[40px] text-[rgb(90,90,90)] font-bold">
                    {dict?.left_title}
                </div>}

                <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-20">
                    <p className={"font-manrope text-[18px] text-[rgb(126,126,126)]"}>
                        {dict?.right_text}
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Link href={"/about"} className={"index__btn_colors text-center mt-10 w-full sm:w-1/3 py-3 px-0  sm:py-3 sm:px-20 rounded-2xl "}>
                    {dict?.btn}
                </Link>
            </div>

        </div>
    );
};

export default AboutUs;