"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Scissors, Sparkles, Ruler, Layers, Users } from 'lucide-react';
import TitleUI from "@/app/components/UI/titleUI";
import centerImg from "@/assets/component/Why_Choose_US/why_choose_us.jpg"
import centerImgAbout from "@/assets/component/Why_Choose_US/whyAbout.jpg"

interface WhyChooseUsProps {
    dict: {
        [key: string]: any;
    };
    page: string;
}

const WhyChooseUs = ({ dict , page }: WhyChooseUsProps) => {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariant: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const features = [
        {
            icon: Scissors,
            title: dict.features.i_1.title,
            description: dict.features.i_1.desc
        },
        {
            icon: Sparkles,
            title: dict.features.i_2.title,
            description: dict.features.i_2.desc
        },
        {
            icon: Layers,
            title: dict.features.i_3.title,
            description: dict.features.i_3.desc
        }
    ];

    const rightFeatures = [
        {
            icon: Ruler,
            title: dict.rightFeatures.i_1.title,
            description: dict.rightFeatures.i_1.desc
        },
        {
            icon: Ruler,
            title: dict.rightFeatures.i_2.title,
            description: dict.rightFeatures.i_2.desc
        },
        {
            icon: Users,
            title: dict.rightFeatures.i_3.title,
            description: dict.rightFeatures.i_3.desc
        }
    ];

    return (
        <div className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-24 bg-[#2C8295]">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 ">
                        <TitleUI text={dict.subtitle} classNameText={"text-white"}/>
                    </div>

                    <h1 className="font-dm font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[57px] leading-tight text-white">
                        {dict.title}
                    </h1>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Left Features */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="lg:col-span-4 flex flex-col gap-6 lg:gap-0 bg-white rounded-2xl"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                className=" p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-[#42C0DF]/10 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-[#42C0DF]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-dm font-bold text-xl md:text-2xl text-[#222222] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="font-manrope text-[#666666] text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Center Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={imageVariant}
                        className="lg:col-span-4 relative h-[400px] sm:h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src={page==="home"?centerImg:centerImgAbout}
                            alt="Textile worker"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>

                    {/* Right Features */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className=" bg-white rounded-2xl lg:col-span-4 flex flex-col gap-6 lg:gap-0"
                    >
                        {rightFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                className=" p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-[#42C0DF]/10 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-[#42C0DF]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-dm font-bold text-xl md:text-2xl text-[#222222] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="font-manrope text-[#666666] text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;