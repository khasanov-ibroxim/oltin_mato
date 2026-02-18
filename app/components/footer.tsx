"use client"
import React from 'react';
import {PhoneCall, Mail} from "lucide-react"
import Image from "next/image";
import logo from "@/assets/logo.svg"

interface FooterProps {
    dict: {
        [key: string]: any;
    };
}

const Footer = ({dict}: FooterProps) => {
    return (
        <footer className="bg-[#2c8295] text-black py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-dm text-[32px] font-bold mb-6">{dict.item_1.title}</h3>
                    <ul className="space-y-3 font-manrope text-[18px]">
                        {dict.item_1.list.map((item: any, index: number) => (
                            <li key={index}>
                                <a href={item.link} className="hover:text-[#42C0DF] transition">{item.text}</a>
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
                                <a href={item.link} className="hover:text-[#42C0DF] transition">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us & Follow Us */}
                <div>
                    <h3 className="text-white font-dm text-[32px] font-bold mb-6">{dict.item_3.title}</h3>
                    <div className="space-y-4 mb-8 font-manrope text-[18px]">
                        <div className="flex items-center gap-3">
                            <span className="text-[#42C0DF]"><PhoneCall/></span>
                            <div className="flex flex-col">
                                {dict.item_3.tel.map((item: string, index: number) => (<span key={index}>{item}</span>))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[#42C0DF]"><Mail/></span>
                            <div className="flex flex-col">
                                {dict.item_3.mail.map((item: string, index: number) => (<span key={index}>{item}</span>))}
                            </div>
                        </div>
                    </div>


                </div>

                {/* Newsletter & Location */}
                <div>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white text-[24px] font-dm font-bold mb-2">{dict.item_4.title}</h4>
                            <p className="text-[#42C0DF]">{dict.item_4.address}</p>
                        </div>
                        <div>
                            <Image src={logo} alt={"oltin mato"} className={"h-[100px] w-[200px]"}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;