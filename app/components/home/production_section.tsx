"use client"
import React, {useState} from 'react';
import Image, {StaticImageData} from "next/image";
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
    {img_path: [men_1, men_2], cat_name: "men_2"},
    {img_path: [women_1, women_2], cat_name: "women"},
    {img_path: [child_1, child_2], cat_name: "child"},
]

const ProductionSection = ({dict , lang}: { dict: any , lang:string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const filtered = prod_img

    interface ProductItem {
        img_path: StaticImageData | StaticImageData[];
        cat_name: string;
    }

    const getGridImg = (product: ProductItem, index: number): StaticImageData => {
        if (Array.isArray(product.img_path)) {
            return hoveredIndex === index ? product.img_path[1] : product.img_path[0];
        }
        return product.img_path;
    };

    return (
        <div className={"container"}>
            <div className="w-full flex flex-col items-center justify-center mb-12">
                <TitleUI text={dict.product.title}/>
                <h2 className="font-dm text-center font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                    {dict.nav.products}</h2>
            </div>
            <div className="products_grid">
                {filtered.map((item, index) => (
                    <div
                        className="product_card"
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={getGridImg(item, index)}
                            alt="product"
                            fill
                            sizes="(max-width: 480px) 50vw, 33vw"
                            style={{objectFit: "cover"}}
                        />
                        <Link href={`${lang}/products`} className={`
                            absolute bottom-6 left-1/2 -translate-x-1/2 z-10 inline-flex h-[40px] items-center justify-center bg-[#08CB00] hover:bg-[#078c02] text-white font-manrope font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap`}>
                            Подробно
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductionSection;