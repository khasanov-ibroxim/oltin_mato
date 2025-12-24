"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Phone, Info } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import {LanguageSwitcher} from "@/app/components/LanguageSwitcher";

interface NavbarProps {
    dict: any;
    lang: string;
}

export const Navbar = ({ dict, lang }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll lock
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    const getPath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

    const navLinks = [
        { name: dict.nav.home, path: "/", icon: Home },
        { name: dict.nav.about, path: "/about", icon: Info },
        { name: dict.nav.contact, path: "/contact", icon: Phone },
    ];

    return (
        <>
            {/* NAVBAR */}
            <nav className="absolute top-0 left-0 z-30 w-full border-b py-3 border-amber-50 bg-transparent">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    {/* LOGO */}
                    <Link href={`/${lang}`}>
                        <Image src={logo} alt="Logo" width={140} height={40} />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={getPath(link.path)}
                                className={`text-lg transition duration-300 hover:text-[#f9f9f8]
                  ${
                                    getPath(link.path) === pathname
                                        ? "text-[#f9f9f8]"
                                        : "text-[#DAD3C8]"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden text-amber-50"
                    >
                        <Menu size={28} />
                    </button>


                    <div className="hidden md:flex"><LanguageSwitcher/></div>
                </div>
            </nav>

            {/* OVERLAY (30%) */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={`
          fixed inset-0 z-50 bg-black/40 transition-opacity duration-500
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
            />

            {/* DRAWER MENU (70%) */}
            <div
                className={`
          fixed top-0 left-[-10px] z-50 h-screen w-[50%] bg-white shadow-2xl
          transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* CLOSE BUTTON */}
                <div className="flex justify-end p-4 ">
                    <button className={"index__btn_colors p-1.5 rounded-sm text-white"} onClick={() => setIsMenuOpen(false)}>
                        <X size={26} />
                    </button>
                </div>

                {/* LINKS */}
                <div className="px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={getPath(link.path)}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-1 text-base font-normal font-manrope p-1 rounded-lg 
                            ${getPath(link.path) === pathname ? "text-[#646464]" : "text-black"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex"><LanguageSwitcher/></div>

                </div>
            </div>
        </>
    );
};
