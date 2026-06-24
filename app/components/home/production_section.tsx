"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "../products/products.css"
import men_1 from "@/assets/home/prod/men_1.jpg"
import men_2 from "@/assets/home/prod/men_2.jpg"
import women_1 from "@/assets/home/prod/women_1.jpg"
import women_2 from "@/assets/home/prod/women_2.jpg"
import child_1 from "@/assets/home/prod/chil_1.jpg"
import child_2 from "@/assets/home/prod/chil_2.jpg"
import TitleUI from "@/app/components/UI/titleUI";

const prod_img = [
    { img_path: [men_1, men_2], cat_name: "men_2" },
    { img_path: [women_1, women_2], cat_name: "women" },
    { img_path: [child_1, child_2], cat_name: "child" },
]

const ProductionSection = ({ dict, lang }: { dict: any; lang: string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    interface ProductItem {
        img_path: StaticImageData | StaticImageData[];
        cat_name: string;
    }

    const getImg = (product: ProductItem, index: number): StaticImageData => {
        if (Array.isArray(product.img_path)) {
            return hoveredIndex === index ? product.img_path[1] : product.img_path[0];
        }
        return product.img_path;
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, offsetWidth } = scrollRef.current;
        setActiveIndex(Math.round(scrollLeft / offsetWidth));
    };

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({ left: index * scrollRef.current.offsetWidth, behavior: "smooth" });
        setActiveIndex(index);
    };

    return (
        <div className="container">
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <TitleUI text={dict.product.title} />
                <h2 className="font-dm text-center font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    {dict.nav.products}
                </h2>
            </div>

            {/* Desktop grid */}
            {!isMobile && (
                <div className="products_grid">
                    {prod_img.map((item, index) => (
                        <div
                            className="product_card"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={getImg(item, index)}
                                alt="product"
                                fill
                                sizes="33vw"
                                style={{ objectFit: "cover" }}
                            />
                            <Link
                                href={`/${lang}/products`}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 inline-flex h-[40px] items-center justify-center bg-[#08CB00] hover:bg-[#078c02] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                            >
                                Подробно
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {/* Mobile swiper */}
            {isMobile && (
                <div style={{ margin: "0 -16px" }}>
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        style={{
                            display: "flex",
                            overflowX: "scroll",
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                        }}
                    >
                        {prod_img.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: "0 0 100vw",

                                    height: "100vh",
                                    position: "relative",
                                    scrollSnapAlign: "start",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={getImg(item, index)}
                                    alt="product"
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: "cover", objectPosition: "center center" }}
                                />
                                <div style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%)",
                                    pointerEvents: "none",
                                }} />
                                <Link
                                    href={`/${lang}/products`}
                                    style={{
                                        position: "absolute",
                                        bottom: 32,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        zIndex: 10,
                                        display: "inline-flex",
                                        alignItems: "center",
                                        height: 44,
                                        background: "#08CB00",
                                        color: "#fff",
                                        fontWeight: 600,
                                        padding: "0 40px",
                                        borderRadius: 10,
                                        whiteSpace: "nowrap",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    Подробно
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
                        {prod_img.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollTo(i)}
                                style={{
                                    width: activeIndex === i ? 24 : 8,
                                    height: 8,
                                    borderRadius: 999,
                                    background: activeIndex === i ? "#08CB00" : "#D1D5DB",
                                    border: "none",
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductionSection;