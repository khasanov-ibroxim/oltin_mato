"use client";

import React, {useState} from 'react';
import {Layers, Sparkles, Droplet, Shirt, Ruler, Globe as GlobeIcon} from 'lucide-react';
import TitleUI from "@/app/components/UI/titleUI";
import dynamic from 'next/dynamic';

// ✅ Dynamic import for Globe component (client-side only)
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
    dict?: {
        ourServices?: {
            subtitle?: string;
            title?: string;
            title_desc?: string;
            tabs?: string[];
        };
        [key: string]: any;
    };
}

interface Service {
    id: number;
    title: string;
    icon: React.ElementType;
    description: string;
    countries: string[]; // Country codes to highlight
}

const OurServices = ({dict}: OurServicesProps) => {
    // ✅ Default values
    const defaultTabs = [
        "CIS Countries",
        "Europe",
        "South America",
        "Middle East",
        "Regional Markets",
        "International Partners"
    ];

    // ✅ Safe extraction with proper checks
    const subtitle = dict?.ourServices?.subtitle ?? "Export Geography";
    const title = dict?.ourServices?.title ?? "Global Partnership Today";
    const titleDesc = dict?.ourServices?.title_desc ?? "We actively develop export destinations, cooperating with partners in key regions of the world.";

    // ✅ Ensure tabs is always a valid array
    let tabs = defaultTabs;
    if (dict?.ourServices?.tabs && Array.isArray(dict.ourServices.tabs) && dict.ourServices.tabs.length > 0) {
        tabs = dict.ourServices.tabs;
    }

    const serviceIcons = [Layers, Sparkles, Droplet, Shirt, Ruler, GlobeIcon];

    // ✅ Map regions to country codes
    const regionCountries: { [key: number]: string[] } = {
        0: ['RU', 'KZ', 'UZ', 'BY', 'AM', 'KG', 'TJ'], // CIS Countries
        1: ['IT', 'DE', 'FR', 'GB', 'ES', 'PL', 'NL'], // Europe
        2: ['BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC'], // South America
        3: ['TR', 'AE', 'SA', 'IQ', 'IR', 'JO', 'LB'], // Middle East
        4: ['CN', 'IN', 'JP', 'KR', 'VN', 'TH', 'ID'], // Regional Markets (Asia)
        5: ['US', 'CA', 'AU', 'NZ', 'MX', 'ZA', 'EG'], // International Partners
    };

    const services: Service[] = tabs.map((tab: string, index: number) => ({
        id: index,
        title: tab,
        icon: serviceIcons[index % serviceIcons.length],
        description: titleDesc,
        countries: regionCountries[index] || []
    }));

    const [activeService, setActiveService] = useState<number>(0);

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

                {/* Globe Display */}
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-[#151515]">
                    <Globe
                        activeRegion={activeService}
                        activeCountries={services[activeService].countries}
                    />

                    {/* Overlay with region info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#CBA655] flex items-center justify-center flex-shrink-0">
                                {React.createElement(services[activeService].icon, {
                                    className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white",
                                    strokeWidth: 1.5
                                })}
                            </div>
                            <div>
                                <h3 className="font-dm font-bold text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
                                    {services[activeService].title}
                                </h3>
                                <p className="font-manrope text-white/80 text-xs sm:text-sm md:text-base">
                                    {services[activeService].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;