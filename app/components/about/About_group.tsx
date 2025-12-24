"use client"
import React from 'react';
import group_1 from "@/assets/about/group/about_group_1.jpg"
import group_2 from "@/assets/about/group/about_group_2.jpg"
import group_3 from "@/assets/about/group/about_group_3.jpg"
import Image from "next/image";
import TitleUI from "@/app/components/UI/titleUI";
import {motion, Variants} from "framer-motion";

interface AboutGroupProps {
    dict: {
        [key: string]: unknown;
    };
}

const AboutGroup = ({dict}: AboutGroupProps) => {
    const teamMembers = [
        {
            name: "Elara Voss",
            position: "CREATIVE DIRECTOR",
            image: group_1
        },
        {
            name: "Marsha Laurent",
            position: "TEXTILE DESIGNER",
            image: group_2
        },
        {
            name: "Sofia Norrén",
            position: "WEAVING SPECIALIST",
            image: group_3
        }
    ];

    const leftAnimate: Variants = {
        hidden: {opacity: 0, y: 50, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {duration: 1, delay: 0.3, ease: "easeOut"}
        }
    };
    return (
        <div className=" py-16 px-6">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {/* Left Card - Team Introduction */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                        variants={leftAnimate}
                        className="bg-[#222222] h-[400px] text-white rounded-3xl p-5 flex flex-col justify-between">
                        <div>
                            <TitleUI text={"OUR TEAM"} classNameText={"text-white"}/>

                            <h2 className="text-[40px] w-full lg:text-[35px] font-dm font-bold leading-tight my-4">
                                Guided by<br/>
                                Craft,<br/>
                                United by<br/>
                                Vision.
                            </h2>
                        </div>

                        <button
                            className="bg-[#CBA655] hover:bg-[#5A5A5A] text-black hover:text-white cursor-pointer font-semibold py-2  px-8 rounded-lg flex items-center gap-2 w-fit transition">
                            All Team
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </button>
                    </motion.div>

                    {/* Team Member Cards */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative h-[400px] rounded-3xl overflow-hidden group">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Social Media Icons */}
                            <div className="absolute top-2 left-2 flex flex-col gap-3">
                                <a href="#"
                                   className="w-8 h-8 bg-[#CBA655] hover:bg-[#5A5A5A] rounded-lg flex items-center justify-center transition">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </a>
                                <a href="#"
                                   className="w-8 h-8 bg-[#CBA655] hover:bg-[#5A5A5A] rounded-lg flex items-center justify-center transition">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="#"
                                   className="w-8 h-8 bg-[#CBA655] hover:bg-[#5A5A5A] rounded-lg flex items-center justify-center transition">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </div>

                            {/* Name and Position Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-[#222] text-white rounded-2xl p-6">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-400 text-sm tracking-wider">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutGroup;