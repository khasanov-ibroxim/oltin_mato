"use client"

import React from 'react';
import TitleUI from "@/app/components/UI/titleUI";
import titleImg from "@/assets/component/Testimonials/testimonials_title.jpg"
import bottomImg from "@/assets/component/Testimonials/testimonial_bottom.jpg"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {Quote} from "lucide-react"
import {Variants , motion} from "framer-motion";

interface testimonialsProps {
    dict: {
        [key: string]: any;
    };
}

const Testimonials = ({dict}:testimonialsProps) => {
    const fadeInScale: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };
    const testimonials = [
        {
            id: 1,
            quote: dict.i_1.text,
            author: dict.i_1.name,
            role: dict.i_1.country
        },
        {
            id: 2,
            quote: dict.i_2.text,
            author: dict.i_2.name,
            role: dict.i_2.country
        },
        {
            id: 3,
            quote: dict.i_3.text,
            author: dict.i_3.name,
            role: dict.i_3.country
        }
    ];

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
                    <TitleUI text={dict.title}/>
                    <h2 className="font-dm m-0 p-0 font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222]">
                        {dict.subtitle}
                    </h2>
                </div>

            </motion.div>

            <motion.div className="w-full mt-12"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.3 }}
                 variants={fadeInScale}
                 transition={{ type: "spring", stiffness: 300 }}
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="testimonials-swiper w-full sm:w-3/5"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-none group  text-center rounded-3xl p-8 md:p-12 lg:p-16 min-h-[350px] w-full flex flex-col items-center justify-center">
                                <div className="mb-6 w-full">
                                    <Quote size={40} className="text-[rgba(126,126,126,0.2)] transition-colors duration-300 group-hover:text-[#42C0DF]"/>
                                </div>
                                <p className="text-[rgb(126,126,126)] text-[18px] font-normal leading-relaxed mb-8 ">
                                    {testimonial.quote}
                                </p>
                                <div className="bg-[#42C0DF] w-14 h-0.5 mb-6 group-hover:w-20 "></div>
                                <div>
                                    <h4 className="font-dm font-bold text-[24px]  text-[rgb(34,34,34)] mb-2">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-[#42C0DF] text-sm tracking-[0.2em] font-bold font-manrope text-[14px]">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx global>{`
                    .testimonials-swiper .swiper-pagination {
                        position: relative;
                        margin-top: 2rem;
                    }
                    .testimonials-swiper .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #D4D4D4;
                        opacity: 1;
                    }
                `}</style>
            </motion.div>

        </div>
    );
};

export default Testimonials;