"use client";

import Image from "next/image";
import index_img from "@/assets/home/header/home_header_index.jpg";
import {Badge, MoveRight} from "lucide-react";
import Link from "next/link";

export default function HomeHeader({dict}: { dict: Record<string, any> }) {
    return (
        <div className="w-full h-[220vh]  relative">
            {/* Overlay */}
            <div className="bg-black opacity-40 absolute z-10 top-0 left-0 w-full h-full"></div>

            {/* Background Image */}
            <Image
                src={index_img}
                alt="Oltin mato"
                className="w-full h-full object-cover absolute z-0"
            />

            {/* Main Text */}
            <div
                className="relative  font-medium flex z-20 w-full h-screen items-center justify-center text-white font-dm
               text-[100px] sm:text-[180px] md:text-[120px] lg:text-[300px]">
                Crafted
            </div>

            {/* Content Section */}
            <div
                className="absolute  px-6 sm:px-12 md:px-24 text-[rgb(249,249,248)] z-20 bottom-10 flex flex-col lg:flex-row justify-between items-start gap-10 w-full">
                {/* Left Text */}
                <div className="  flex flex-col w-full lg:w-2/3 gap-4 md:gap-6">
                    <h2 className="flex font-manrope tracking-[1px] sm:tracking-[2px] md:tracking-[3px] uppercase font-bold text-[12px] sm:text-[14px] md:text-[16px] items-center gap-2">
                        <Badge size={20} color="#CBA655"/> Every fiber tells a story
                    </h2>
                    <h1 className="text-[50px] sm:text-[70px] md:text-[50px] lg:text-[80px] font-bold leading-[50px] sm:leading-[70px] md:leading-[50px] lg:leading-[80px] font-dm">
                        Textiles beyond the surface
                    </h1>
                    <p className="font-manrope text-[14px] sm:text-[16px] md:text-[18px] w-full md:w-2/3">
                        Woven with precision and patience, Looma creates fabrics that embody quiet luxury — where
                        craftsmanship meets timeless design.
                    </p>
                    <Link
                        href="/contact"
                        className="index__btn_colors flex w-full sm:w-1/3 md:w-1/4 lg:w-1/3 items-center justify-center rounded-sm py-2 font-manrope gap-1"
                    >
                        Explore the Craft <MoveRight/>
                    </Link>
                </div>

                {/* Right Video */}
                <div
                    className="flex w-full flex-col lg:w-1/3 gap-2 rounded-2xl items-start justify-start h-full bg-[#877F75]/70">
                    <div className="relative w-full pt-[56.25%] ">
                        <div className="">
                            <div
                                className="absolute z-30 w-full h-full bg-black opacity-20 rounded-2xl  top-0 left-0"></div>
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
                        <h3 className={"text-black m-0 font-dm text-3xl font-bold"}>The Making Process</h3>
                        <p className={"font-manrope text-[19px]"}>Handcrafted through time-honored techniques that bring texture and soul to every fabric.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
