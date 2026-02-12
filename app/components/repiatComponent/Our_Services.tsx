"use client";

import React, {useState} from 'react';
import {Layers, Sparkles, Droplet, Shirt, Ruler, Globe as GlobeIcon} from 'lucide-react';
import TitleUI from "@/app/components/UI/titleUI";
import dynamic from 'next/dynamic';
import {AnimatePresence, motion} from 'framer-motion';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import AboutPage from "@/assets/about/ourServices/aboutpage.jpg"


const Globe = dynamic(() => import('@/app/components/globe/GlobeRegion'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#151515] rounded-3xl">
            <div className="text-white text-center">
                <div className="w-16 h-16 border-4 border-[#CBA655] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-manrope text-sm">Loading Globe...</p>
            </div>
        </div>
    )
});

interface OurServicesProps {
    dict: {
        [key: string]: any;
    };
    type_component: string;
}

interface Service {
    id: number;
    title: string;
    title_box: string;
    icon: React.ElementType;
    description: string;
    countries?: string[];
    btn:string,
    images?: StaticImageData | string;
    content?: string;
}

const OurServices = ({dict, type_component}: OurServicesProps) => {
    const serviceIcons = [Layers, Sparkles, Droplet, Shirt, Ruler, GlobeIcon];

    // Region country codes mapping - Each tab shows one specific country
    const regionCountries: { [key: number]: string[] } = {
        0: ['UZ'], // Uzbekistan
        1: ['RU'], // Russia
        2: ['BY'], // Belarus
        3: ['KG'], // Kyrgyzstan
        4: ['KZ'], // Kazakhstan
    };

    const [activeService, setActiveService] = useState<number>(0);

    if (type_component === "globe") {
        const subtitle = dict?.subtitle || "";
        const title = dict?.title || "";
        const titleDesc = dict?.title_desc || "";
        const tabs = dict?.tabs || [];

        const servicesGlobe: Service[] = tabs.map((tab: string, index: number) => ({
            id: index,
            title: tab,
            icon: serviceIcons[index % serviceIcons.length],
            description: titleDesc,
            countries: regionCountries[index] || [],
        }));

        return (
            <div className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-24 bg-[#F9F9F8]">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                        <div>
                            <TitleUI text={subtitle}/>
                            <h2 className="font-dm font-bold text-[32px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight text-[#222222]">
                                {title}
                            </h2>
                        </div>

                        <p className="font-manrope text-[#666666] text-base md:text-lg max-w-md leading-relaxed">
                            {titleDesc}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                        {servicesGlobe.map((service) => (
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

                    {/* Globe Display */}
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-[#151515]">
                        <Globe
                            activeRegion={activeService}
                            activeCountries={servicesGlobe[activeService].countries || []}
                        />

                        {/* Overlay with region info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#CBA655] flex items-center justify-center flex-shrink-0">
                                    {React.createElement(servicesGlobe[activeService].icon, {
                                        className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white",
                                        strokeWidth: 1.5
                                    })}
                                </div>
                                <div>
                                    <h3 className="font-dm font-bold text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
                                        {servicesGlobe[activeService].title}
                                    </h3>
                                    <p className="font-manrope text-white/80 text-xs sm:text-sm md:text-base">
                                        {servicesGlobe[activeService].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        const subtitle = dict?.subtitle || "";
        const title = dict?.title || "";
        const titleDesc = dict?.title_desc || "";
        const tabs = dict?.tabs || [];

        const services: Service[] = tabs.map((tab: any, index: number) => ({
            id: index,
            title: tab.title,
            title_box: tab.title_box,
            icon: serviceIcons[index % serviceIcons.length],
            description: tab.text,
            content: tab.text,
            btn:tab.btn,
            images: AboutPage, // Placeholder images
        }));

        return (
            <div className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-24 bg-[#F9F9F8]">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                        <div>
                            <TitleUI text={title}/>
                            <h2 className="font-dm font-bold text-[32px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-tight text-[#222222]">
                                {subtitle}
                            </h2>
                        </div>

                        <p className="font-manrope text-[#666666] text-base md:text-lg max-w-md leading-relaxed">
                            {titleDesc}
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
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.4}}
                            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={services[activeService].images || ''}
                                alt={services[activeService].title}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
                                <motion.div
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    transition={{delay: 0.2, type: "spring", stiffness: 200}}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#CBA655] flex items-center justify-center mb-6"
                                >
                                    {React.createElement(services[activeService].icon, {
                                        className: "w-10 h-10 md:w-12 md:h-12 text-white",
                                        strokeWidth: 1.5
                                    })}
                                </motion.div>

                                <motion.h2
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.3}}
                                    className="font-dm font-bold text-[36px] sm:text-[42px] md:text-[52px] text-white mb-4"
                                >
                                    {services[activeService].title_box}
                                </motion.h2>

                                <motion.p
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.4}}
                                    className="font-manrope text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
                                >
                                    {services[activeService].content}
                                </motion.p>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.5}}
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-[#CBA655] hover:bg-[#222222] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        {services[activeService].btn}
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        );
    }
};

export default OurServices;