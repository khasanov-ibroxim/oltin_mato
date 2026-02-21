"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import card_1 from "@/assets/production/sewing/DSC07435.jpg";
import card_3 from "@/assets/production/sewing/DSC07409.jpg";
import card_2 from "@/assets/production/sewing/DSC07533.jpg";
import card_4 from "@/assets/production/sewing/DSC07603.jpg";

const images = [card_1, card_2, card_3, card_4];
// Triple the array so we can seamlessly loop
const looped = [...images, ...images, ...images];

const CARD_WIDTH = 320;  // px
const GAP = 24;          // px  (gap-6 = 1.5rem = 24px)
const STEP = CARD_WIDTH + GAP;
const AUTO_INTERVAL = 2500; // ms

const SewingOur = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(images.length * STEP); // start in the middle clone
    const [transitioning, setTransitioning] = useState(true);
    const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    // Touch / drag
    const touchStartX = useRef<number | null>(null);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    const slideBy = useCallback((delta: number) => {
        setTransitioning(true);
        setOffset((prev) => prev + delta);
    }, []);

    // After transition ends, silently jump if we've drifted into first or third copy
    const handleTransitionEnd = useCallback(() => {
        setOffset((prev) => {
            const min = images.length * STEP;
            const max = images.length * 2 * STEP;
            if (prev < min) {
                setTransitioning(false);
                return prev + images.length * STEP;
            }
            if (prev >= max) {
                setTransitioning(false);
                return prev - images.length * STEP;
            }
            return prev;
        });
    }, []);

    // Auto-play
    const startAuto = useCallback(() => {
        stopAuto();
        autoTimer.current = setInterval(() => slideBy(STEP), AUTO_INTERVAL);
    }, [slideBy]);

    const stopAuto = () => {
        if (autoTimer.current) clearInterval(autoTimer.current);
    };

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, [startAuto]);

    // Touch
    const onTouchStart = (e: React.TouchEvent) => {
        stopAuto();
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) slideBy(diff > 0 ? STEP : -STEP);
        touchStartX.current = null;
        startAuto();
    };

    // Mouse drag
    const onMouseDown = (e: React.MouseEvent) => {
        stopAuto();
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
            if (Math.abs(diff) > 40) slideBy(diff > 0 ? STEP : -STEP);
        }
        dragStartX.current = null;
        isDragging.current = false;
        startAuto();
    };

    // Current dot index (relative to original images)
    const dotIndex = Math.round(offset / STEP) % images.length;

    return (
        <div className="container py-20">
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-10">
                <div className="relative w-full max-w-4xl mb-4 flex items-center justify-center">
                    <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    <h2 className="relative inline-block bg-white px-4 text-xl md:text-3xl font-medium text-gray-800 font-dm">
                        Our Production Process
                    </h2>
                </div>
                <h3 className="text-lg md:text-2xl text-gray-700">цвет, который сохраняется надолго</h3>
            </div>

            {/* Carousel wrapper */}
            <div className="relative">
                {/* Left arrow */}
                <button
                    onClick={() => { stopAuto(); slideBy(-STEP); startAuto(); }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Viewport */}
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex"
                        style={{
                            gap: `${GAP}px`,
                            transform: `translateX(-${offset}px)`,
                            transition: transitioning ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
                            willChange: "transform",
                            cursor: "grab",
                        }}
                        onTransitionEnd={handleTransitionEnd}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onDragStart={(e) => e.preventDefault()}
                    >
                        {looped.map((img, i) => (
                            <div
                                key={i}
                                className="relative flex-shrink-0 rounded-xl overflow-hidden shadow-xl"
                                style={{ width: `${CARD_WIDTH}px`, height: "380px" }}
                            >
                                <Image
                                    src={img}
                                    alt={`Production ${(i % images.length) + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right arrow */}
                <button
                    onClick={() => { stopAuto(); slideBy(STEP); startAuto(); }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            stopAuto();
                            setTransitioning(true);
                            setOffset(images.length * STEP + i * STEP);
                            startAuto();
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dotIndex === i ? "bg-gray-800 scale-125" : "bg-gray-300 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SewingOur;