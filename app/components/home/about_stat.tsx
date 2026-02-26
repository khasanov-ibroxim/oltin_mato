"use client";

import Image from "next/image";
import TitleUI from "@/app/components/UI/titleUI";
import React, { useEffect, useRef, useState } from "react";

import i1 from "@/assets/about/aboutStat/i1.png"
import i2 from "@/assets/about/aboutStat/i2.png"
import i3 from "@/assets/about/aboutStat/i3.png"
import i4 from "@/assets/about/aboutStat/i4.png"
import i5 from "@/assets/about/aboutStat/i5.png"
import boxBg from "@/assets/about/aboutStat/boxBg.jpg"

import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

// ─── Count-up hook ───────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1000, start = true) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOutExpo for a snappy feel
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [target, duration, start]);

    return count;
}

// ─── Animated number value ───────────────────────────────────────────────────
function StatValue({ value }: { value: string }) {
    // Strip spaces and parse, e.g. "26 426" → 26426
    const numericValue = parseInt(value.replace(/\s/g, ""), 10);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const count = useCountUp(numericValue, 1000, inView);

    // Re-apply the original space-separated formatting ("8 000 000")
    const formatted = count.toLocaleString("ru-RU");

    return (
        <h2 ref={ref} className="text-[25px] font-bold text-[#fff]">
            {formatted}
        </h2>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
const AboutStat = ({dict}: any) => {
    const items = [
        { value: "3070",     label: dict.i1.desc, icon: i1 },
        { value: "500",      label: dict.i2.desc, icon: i2 },
        { value: "26 426",   label: dict.i3.desc, icon: i3 },
        { value: "8 000 000",label: dict.i4.desc, icon: i4 },
        { value: "98 000",   label: dict.i5.desc, icon: i5 },
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
                                {/* 👇 animated number */}
                                <StatValue value={item.value} />
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
                                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-6"
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
                                    className="inline-flex items-center justify-center bg-[#08CB00] hover:bg-[#078c02] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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