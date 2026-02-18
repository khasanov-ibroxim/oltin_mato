"use client"

import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Image from "next/image";
import contactTitle from "@/assets/contact/contactForm.jpg"


interface FormData {
    fullName: string;
    phone: string;
    email: string;
    message: string;
}
interface ContactFormProps {
    dict: {
        [key: string]: any;
    };
}
const ContactForm = ({dict}:ContactFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (formData.fullName && formData.phone && formData.email && formData.message) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">
                    {/* Left Side - Image and Map */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Tailor Image */}
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={contactTitle}
                                alt="Professional Tailor"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.9537353159042!3d-37.81720974201425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1635468125635!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-3xl p-8 lg:p-12  lg:col-span-3">
                        <div className={`flex items-center gap-3`}>
                            <div className={'flex gap-1'}>
                                <div className="w-1 h-7 bg-[#42C0DF]"></div>
                                <div className="w-1 h-7 bg-[#42C0DF]"></div>
                            </div>

                            <h3 className={`text-black  font-manrope font-bold text-sm md:text-base tracking-[2px] uppercase`}>
                                {dict.title}
                            </h3>
                        </div>

                        <h1 className="text-4xl font-dm lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {dict.subtitle}
                        </h1>

                        <p className="text-gray-600 font-manrope mb-8 leading-relaxed">
                            {dict.text}
                        </p>

                        <div className="space-y-6 bg-[#DAD3C8] p-5 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                                        {dict.name}
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder={dict.name}
                                        className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-[#c9a961] focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                                        {dict.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={dict.phone}
                                        className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-[#c9a961] focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                                    {dict.email}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={dict.email}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-[#c9a961] focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                                    {dict.msg}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={dict.msg}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-[#c9a961] focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full index__btn_colors  py-2 rounded-lg transition-colors duration-300 "
                            >
                                {submitted ? dict.btn_success : dict.btn}
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-12 h-12 hover:translate-y-[5px] bg-[#6b6b6b] hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition duration-500">
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-[#6b6b6b] hover:translate-y-[5px] hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition duration-500">
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-[#6b6b6b] hover:translate-y-[5px] hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition duration-500">
                                <Youtube size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-[#6b6b6b] hover:translate-y-[5px] hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition duration-500">
                                <Linkedin size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;