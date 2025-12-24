"use client";

import React from 'react';
import Image from 'next/image';
import {motion, Variants} from 'framer-motion';
import about_1 from "@/assets/component/aboutUs/aboutUs_1.jpg"
import about_2 from "@/assets/component/aboutUs/aboutUs_2.jpg"
import about_3 from "@/assets/component/aboutUs/aboutUs_3.jpg"
import about_4 from "@/assets/component/aboutUs/aboutUs_4.jpg"


interface AboutProps {
    dict: {
        [key: string]: unknown;
    };
}

const AboutUs = ({dict}: AboutProps) => {
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
                    <div className="flex items-center gap-3 mb-6">
                        <div className={'flex gap-1'}>
                            <div className="w-1 h-8 bg-[#CBA655]"></div>
                            <div className="w-1 h-8 bg-[#CBA655]"></div>
                        </div>

                        <h3 className="text-[#CBA655] font-manrope font-bold text-sm md:text-base tracking-[2px] uppercase">
                            ABOUT US
                        </h3>
                    </div>

                    <h1 className="font-dm font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[57px] leading-[57px] text-[#222222] max-w-5xl">
                        Looma Weaves Brighter Futures — by Honoring Craftsmanship, Preserving Tradition, and Elevating
                        Every Thread We Create.

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
                            src={about_1}
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
                            src={about_2}
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
                            src={about_3}
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
                            src={about_4}
                            alt="Fashion designer with fabric"
                            fill
                            className="object-cover  transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;