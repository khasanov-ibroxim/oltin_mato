"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Droplet, Shirt, Ruler } from 'lucide-react';
import our_1 from "@/assets/component/Our_Services/our_1.jpg"
import our_2 from "@/assets/component/Our_Services/our_2.jpg"
import our_3 from "@/assets/component/Our_Services/our_3.jpg"
import our_4 from "@/assets/component/Our_Services/our_4.jpg"
import our_5 from "@/assets/component/Our_Services/our_5.jpg"
import TitleUI from "@/app/components/UI/titleUI";

interface OurServicesProps {
    dict: {
        [key: string]: unknown;
    };
}

interface Service {
    id: number;
    title: string;
    icon: React.ElementType;
    description: string;
    content: string;
    image: StaticImageData;
}

const OurServices = ({ dict }: OurServicesProps) => {
    const services: Service[] = [
        {
            id: 0,
            title: "Textile Development",
            icon: Layers,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            image: our_1
        },
        {
            id: 1,
            title: "Custom Weaving",
            icon: Sparkles,
            description: "Creating unique woven patterns tailored to your vision with precision and artistry.",
            content: "Our custom weaving service brings your textile dreams to life through traditional craftsmanship and modern innovation.",
            image: our_2
        },
        {
            id: 2,
            title: "Fabric Dyeing",
            icon: Droplet,
            description: "Expert dyeing techniques that bring vibrant, lasting colors to your fabrics.",
            content: "We use eco-friendly dyes and advanced techniques to ensure rich, consistent coloration across all fabric types.",
            image: our_3
        },
        {
            id: 3,
            title: "Garment Production",
            icon: Shirt,
            description: "From concept to completion, we craft quality garments with attention to every detail.",
            content: "Our production facility combines skilled artisans with modern technology to create exceptional garments.",
            image: our_4
        },
        {
            id: 4,
            title: "Design Consultation",
            icon: Ruler,
            description: "Professional guidance to transform your textile ideas into reality.",
            content: "Our expert designers work closely with you to develop concepts that align with your brand vision and market needs.",
            image: our_5
        }
    ];

    const [activeService, setActiveService] = useState<number>(0);

    return (
        <div className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-24 bg-[#F9F9F8]">
            <div className="max-w-[1600px] mx-auto">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                    <div>
                        <TitleUI text={"OUR SERVICES"}/>
                        <h2 className="font-dm font-bold text-[32px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight text-[#222222]">
                            From fiber to form.
                        </h2>
                    </div>

                    <p className="font-manrope text-[#666666] text-base md:text-lg max-w-md leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>


                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`
                                px-6 py-3 rounded-lg font-manrope font-semibold text-sm md:text-base
                                transition-all duration-300 whitespace-nowrap cursor-pointer
                                ${activeService === service.id
                                ? 'bg-[#222222] text-white shadow-lg'
                                : 'bg-white text-[#222222] hover:bg-[#CBA655]'
                            }
                            `}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Background Image */}
                        <Image
                            src={services[activeService].image}
                            alt={services[activeService].title}
                            fill
                            className="object-cover"
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>


                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#CBA655] flex items-center justify-center mb-6"
                            >
                                {React.createElement(services[activeService].icon, {
                                    className: "w-10 h-10 md:w-12 md:h-12 text-white",
                                    strokeWidth: 1.5
                                })}
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="font-dm font-bold text-[36px] sm:text-[42px] md:text-[52px] text-white mb-4"
                            >
                                {services[activeService].title}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="font-manrope text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
                            >
                                {services[activeService].content}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-[#CBA655] hover:bg-[#222222] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default OurServices;