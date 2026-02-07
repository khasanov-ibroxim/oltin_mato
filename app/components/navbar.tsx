"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";

interface SubLink {
    name: string;
    link: string;
}

interface NavLink {
    name: string;
    path: string;
    sub_links?: SubLink[];
}

interface NavbarProps {
    dict: any;
    lang: string;
}

export const Navbar = ({ dict, lang }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Scroll lock
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    const getPath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

    const navLinks: NavLink[] = [
        { name: dict.nav.home, path: "/" },
        { name: dict.nav.about, path: "/about" },
        {
            name: dict.nav.production.hero_link,
            path: dict.nav.production.links[0].link,
            sub_links: dict.nav.production.links,
        },
        { name: dict.nav.contact, path: "/contact" },
    ];

    return (
        <>

            <nav className="absolute top-0 left-0 z-30 w-full border-b py-3 border-amber-50 bg-transparent">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                    <Link href={`/${lang}`}>
                        <Image src={logo} alt="Logo" width={140} height={40} />
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) =>
                            link.sub_links ? (
                                <div
                                    key={link.path}
                                    className="relative group"
                                    ref={dropdownRef}
                                >
                                    {/* Trigger link */}
                                    <Link
                                        href={getPath(link.path)}
                                        className={`flex items-center gap-1 text-lg transition duration-300 hover:text-[#f9f9f8]
                      ${
                                            getPath(link.path) === pathname
                                                ? "text-[#f9f9f8]"
                                                : "text-[#DAD3C8]"
                                        }`}
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform duration-300 group-hover:rotate-180"
                                        />
                                    </Link>

                                    {/* Dropdown panel — opens on group hover */}
                                    <div
                                        className={`
                      absolute left-0 mt-2 min-w-[180px] bg-white rounded-lg shadow-lg
                      border border-gray-100 py-2 z-40
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-300 ease-out
                    `}
                                    >
                                        {link.sub_links.map((sub) => (
                                            <Link
                                                key={sub.link}
                                                href={getPath(sub.link)}
                                                className={`block px-4 py-2 text-sm transition duration-200
                          hover:bg-gray-100 hover:text-[#646464]
                          ${
                                                    getPath(sub.link) === pathname
                                                        ? "text-[#646464] font-medium"
                                                        : "text-black"
                                                }
                        `}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                /* SIMPLE LINK */
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
                            )
                        )}
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden text-amber-50"
                    >
                        <Menu size={28} />
                    </button>

                    <div className="hidden md:flex">
                        <LanguageSwitcher />
                    </div>
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
          fixed top-0 left-[-10px] z-50 h-screen w-[70%] bg-white shadow-2xl
          transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* CLOSE BUTTON */}
                <div className="flex justify-end p-4">
                    <button
                        className="index__btn_colors p-1.5 rounded-sm text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X size={26} />
                    </button>
                </div>

                {/* LINKS */}
                <div className="px-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <div key={link.path}>
                            {/* Main link row */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={getPath(link.path)}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setOpenMobileSub(null);
                                    }}
                                    className={`flex-1 text-base font-normal font-manrope p-2 rounded-lg
                    ${
                                        getPath(link.path) === pathname
                                            ? "text-[#646464]"
                                            : "text-black"
                                    }
                  `}
                                >
                                    {link.name}
                                </Link>

                                {/* Chevron toggle — only for links with sub_links */}
                                {link.sub_links && (
                                    <button
                                        onClick={() =>
                                            setOpenMobileSub(openMobileSub === link.path ? null : link.path)
                                        }
                                        className="p-2 text-black"
                                    >
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-300 ${
                                                openMobileSub === link.path ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Sub-links accordion */}
                            {link.sub_links && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openMobileSub === link.path ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="ml-4 border-l-2 border-gray-200 pl-3 flex flex-col gap-0.5 py-1">
                                        {link.sub_links.map((sub) => (
                                            <Link
                                                key={sub.link}
                                                href={getPath(sub.link)}
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setOpenMobileSub(null);
                                                }}
                                                className={`text-sm font-manrope p-1.5 rounded-md transition duration-200
                          hover:bg-gray-100
                          ${
                                                    getPath(sub.link) === pathname
                                                        ? "text-[#646464] font-medium"
                                                        : "text-gray-700"
                                                }
                        `}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex mt-2">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
};