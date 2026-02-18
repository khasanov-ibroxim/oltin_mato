"use client"
import React, { useState } from 'react';
import TitleUI from "@/app/components/UI/titleUI";
import { Variants, motion, AnimatePresence } from "framer-motion";

interface QuestionsProps {
    dict: {
        [key: string]: any;
    };
}

const Questions = ({dict}: QuestionsProps) => {
    const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(0);
    const [openRightIndex, setOpenRightIndex] = useState<number | null>(1);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const leftFaqs = [
        {
            question: dict.i_1.title,
            answer: dict.i_1.text
        },
        {
            question: dict.i_2.title,
            answer: dict.i_2.text
        },
        {
            question: dict.i_3.title,
            answer: dict.i_3.text
        }
    ];

    const rightFaqs = [
        {
            question: dict.i_4.title,
            answer: dict.i_4.text
        },
        {
            question: dict.i_5.title,
            answer: dict.i_5.text
        },
        {
            question: dict.i_6.title,
            answer: dict.i_6.text
        }
    ];

    const toggleFAQ = (index: number, side: 'left' | 'right') => {
        if (side === 'left') {
            setOpenLeftIndex(openLeftIndex === index ? null : index);
        } else {
            setOpenRightIndex(openRightIndex === index ? null : index);
        }
    };

    return (
        <div className={"container py-16"}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex flex-col w-full justify-center items-center mb-12">
                <TitleUI text={dict.title}/>
                <h2 className="font-dm m-0 p-0 font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#222222] text-center">
                    {dict.subtitle}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                {/* Left Column */}
                <div className="space-y-4">
                    {leftFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`rounded-2xl overflow-hidden transition-colors duration-500 ${
                                openLeftIndex === index ? 'bg-[#2C2C2C]' : 'bg-[#42C0DF]'
                            }`}>
                                <button
                                    onClick={() => toggleFAQ(index, 'left')}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className={`font-medium text-sm tracking-wider transition-colors duration-500 ${
                                        openLeftIndex === index ? 'text-white' : 'text-[#2C2C2C]'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <motion.svg
                                        animate={{ rotate: openLeftIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="flex-shrink-0 ml-4"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke={openLeftIndex === index ? 'white' : '#2C2C2C'}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </button>

                                <AnimatePresence mode="wait">
                                    {openLeftIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                                    opacity: { duration: 0.3, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 bg-white">
                                                <p className="text-[#666666] text-base leading-relaxed pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {rightFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`rounded-2xl overflow-hidden transition-colors duration-500 ${
                                openRightIndex === index ? 'bg-[#2C2C2C]' : 'bg-[#42C0DF]'
                            }`}>
                                <button
                                    onClick={() => toggleFAQ(index, 'right')}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className={`font-medium text-sm tracking-wider transition-colors duration-500 ${
                                        openRightIndex === index ? 'text-white' : 'text-[#2C2C2C]'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <motion.svg
                                        animate={{ rotate: openRightIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="flex-shrink-0 ml-4"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke={openRightIndex === index ? 'white' : '#2C2C2C'}
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </button>

                                <AnimatePresence mode="wait">
                                    {openRightIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                                    opacity: { duration: 0.3, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 bg-white">
                                                <p className="text-[#666666] text-base leading-relaxed pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-16 bg-[#2C2C2C] rounded-3xl p-5 text-center"
            >
                <h3 className="font-dm font-bold text-[20px] md:text-[40px] lg:text-[48px] text-white mb-2 leading-tight">
                    {dict.box_title}
                </h3>
                <button className="index__btn_colors transition-colors px-8 py-2 rounded-xl text-[#2C2C2C] font-medium text-[14px]">
                    {dict.btn}
                </button>
            </motion.div>
        </div>
    );
};

export default Questions;