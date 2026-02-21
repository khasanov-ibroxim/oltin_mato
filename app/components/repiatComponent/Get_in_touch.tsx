"use client";
import Image from "next/image";
import getInTouchImage from "@/assets/component/Get_in_touch/get_in_touch.jpg";
import React, { useState, useRef, useCallback } from "react";

import s1 from "@/assets/sertefikat/1.jpg"
import s2 from "@/assets/sertefikat/2.jpg"
import s3 from "@/assets/sertefikat/3.jpg"
import s4 from "@/assets/sertefikat/4.jpg"

const galleryImages = [
    s1,s2,s3,s4
];

interface GetInTouchProps {
    dict: {
        [key: string]: any;
    };
}

const GetInTouch = ({ dict }: GetInTouchProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    // ── Swipe / drag tracking ────────────────────────────────────────────────
    const touchStartX = useRef<number | null>(null);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    const total = galleryImages.length;

    const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
    const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

    // Touch handlers (mobile swipe)
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        touchStartX.current = null;
    };

    // Mouse drag handlers (desktop)
    const onMouseDown = (e: React.MouseEvent) => {
        dragStartX.current = e.clientX;
        isDragging.current = false;
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (dragStartX.current !== null && Math.abs(e.clientX - dragStartX.current) > 5) {
            isDragging.current = true;
        }
    };
    const onMouseUp = (e: React.MouseEvent) => {
        if (dragStartX.current !== null && isDragging.current) {
            const diff = dragStartX.current - e.clientX;
            if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        }
        dragStartX.current = null;
        isDragging.current = false;
    };

    // Keyboard navigation
    const onKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "Escape") setModalOpen(false);
        },
        [prev, next]
    );

    const openModal = (index = 0) => {
        setCurrent(index);
        setModalOpen(true);
    };

    return (
        <>
            {/* ── Hero Section ─────────────────────────────────────────────────── */}
            <div className="w-full h-[500px] relative flex justify-start items-center">
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 via-black/40 to-transparent" />

                <Image
                    src={getInTouchImage}
                    alt="Oltin mato"
                    className="w-full object-cover absolute z-10 h-full"
                />

                <div className="left-0 z-30 w-full lg:w-1/2 lg:px-0 ml-2 sm:ml-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex gap-1">
                            <div className="w-1 h-7 bg-[#162C43]" />
                            <div className="w-1 h-7 bg-[#162C43]" />
                        </div>
                        <h3 className="text-white font-manrope font-bold text-sm md:text-base tracking-[2px] uppercase">
                            {dict.title}
                        </h3>
                    </div>

                    <h2 className="font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-white">
                        {dict.subtitle}
                    </h2>

                    <p className="font-manrope w-[90%] leading-tight text-white text-[18px] mt-5 mb-10">
                        {dict.p}
                    </p>

                    <button className={"index__btn_colors py-3 px-14 rounded-xl"} onClick={() => openModal(0)}>{dict.btn}</button>
                </div>
            </div>

            {/* ── Modal ─────────────────────────────────────────────────────────── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
                    role="dialog"
                    aria-modal="true"
                    onKeyDown={onKeyDown}
                    tabIndex={-1}
                    // Close on backdrop click
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setModalOpen(false);
                    }}
                    style={{ outline: "none" }}
                    ref={(el) => el?.focus()}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close gallery"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-manrope tracking-widest select-none">
                        {current + 1} / {total}
                    </div>

                    {/* Left arrow */}
                    <button
                        onClick={prev}
                        className="absolute cursor-pointer left-3 sm:left-6 z-10 text-white/70 hover:text-white transition-colors p-2"
                        aria-label="Previous image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Image area — swipe & drag enabled */}
                    <div
                        className="relative w-full max-w-4xl mx-14 sm:mx-20 h-[60vw] max-h-[80vh] select-none cursor-grab active:cursor-grabbing overflow-hidden rounded-md"
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        // prevent native image drag
                        onDragStart={(e) => e.preventDefault()}
                    >
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${i + 1}`}
                                    fill
                                    className="object-contain"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={next}
                        className="absolute cursor-pointer right-3 sm:right-6 z-10 text-white/70 hover:text-white transition-colors p-2"
                        aria-label="Next image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Thumbnail dots */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                        {galleryImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default GetInTouch;