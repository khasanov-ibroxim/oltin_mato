"use client";

import React from 'react';
import TitleUI from "@/app/components/UI/titleUI";
import Image from "next/image";
import titleImg from "@/assets/component/Testimonials/testimonials_title.jpg";
import {motion, Variants} from "framer-motion";
import Link from "next/link";
import LinkUI from "@/app/components/UI/linkUI";
import blogData from "@/data/blogData.json";
import { useParams } from "next/navigation";

interface BlogPostProps {
    dict: {
        [key: string]: unknown;
    };
}

const BlogPost = ({dict}: BlogPostProps) => {
    const params = useParams();
    const lang = params?.lang as string;

    const fadeInScale: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <div className={"container py-16"}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInScale}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full flex flex-col sm:flex-row justify-baseline items-center mb-12" >
                <div className="flex flex-col w-full sm:w-2/3 justify-center items-start">
                    <TitleUI text={"Blog Post"}/>
                    <h2 className="font-dm m-0 p-0 font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                        Stories Woven with <br/> Purpose and Grace
                    </h2>
                </div>
                <div className="w-full mt-5 sm:mt-0 sm:w-1/3 flex justify-start items-start sm:justify-end sm:items-end">
                    <LinkUI text={"Discover More"} link={`/${lang}`} />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {blogData.blogs.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInScale}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="group cursor-pointer"
                    >
                        <Link href={`/${lang}/blog/${post.id}`} className="block">
                            <div className="overflow-hidden rounded-3xl mb-6">
                                <motion.div
                                    whileHover={{ rotate: 3 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="relative w-full h-[320px]"
                                >
                                    <Image
                                        src={titleImg}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>

                            <div className="px-2">
                                <h3 className="font-dm font-bold text-[28px] md:text-[40px] text-[rgb(90,90,90)] mb-4 group-hover:text-[#B8985F] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-[rgb(34,34,34)] text-[18px] font-manrope leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="index__btn_colors flex justify-center items-center py-2 w-36 rounded-lg">
                                    Learn More
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;