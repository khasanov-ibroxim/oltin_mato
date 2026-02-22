"use client"
import React from 'react';
import {PhoneCall, Mail} from "lucide-react"
import Image from "next/image";
import logo from "@/assets/logoFullWhite.png"
import Link from "next/link";

interface FooterProps {
    dict: {
        [key: string]: any;
    };
    lang: string;
}

const Footer = ({dict , lang}: FooterProps) => {
    return (
        <footer className="bg-[#162C43] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-dm text-[32px] font-bold mb-6">{dict.item_1.title}</h3>
                    <ul className="space-y-3 font-manrope text-[18px]">
                        {dict.item_1.list.map((item: any, index: number) => (
                            <li key={index}>
                                <a href={`${lang}${item.link}`} className="hover:text-[#932C4D] transition">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-dm text-[32px] font-bold mb-6">{dict.item_2.title}</h3>
                    <ul className="space-y-3 font-manrope text-[18px]">
                        {dict.item_2.list.map((item: any, index: number) => (
                            <li key={index}>
                                <a href={`${lang}${item.link}`} className="hover:text-[#932C4D] transition">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us & Follow Us */}
                <div>
                    <h3 className="text-white font-dm text-[32px] font-bold mb-6">{dict.item_3.title}</h3>
                    <div className="space-y-4 mb-8 font-manrope text-[18px]">
                        <div className="flex items-center gap-3">
                            <span className="text-[#fff]"><PhoneCall/></span>
                            <div className="flex flex-col">
                                {dict.item_3.tel.map((item: string, index: number) => (<a href={`tel:${item}`} className="hover:text-[#932C4D] transition" key={index}>{item}</a>))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[#fff]"><Mail/></span>
                            <div className="flex flex-col">
                                {dict.item_3.mail.map((item: string, index: number) => (<a href={`mailto:${item}`} className="hover:text-[#932C4D] transition" key={index}>{item}</a>))}
                            </div>
                        </div>
                    </div>


                </div>

                <div>
                    <div className="">
                        <Link href={`/${lang}`} >
                            <Image src={logo} alt={"oltin mato"} className={"h-auto w-auto"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;