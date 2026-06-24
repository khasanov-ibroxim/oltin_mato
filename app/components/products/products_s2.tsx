"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StaticImageData } from "next/image";
import "./products.css"
import { Products_db } from "./products_db";
import Image from "next/image";

type TabType = "all" | "women" | "men" | "child";

interface ProductItem {
    img_path: StaticImageData | StaticImageData[];
    cat_name: string;
}



const ProductsS2 = ({ dict }: { dict: any }) => {
    const TABS: { key: TabType; label: string }[] = [
        { key: "all",   label: dict.tabs.all },
        { key: "women", label: dict.tabs.women },
        { key: "men",   label: dict.tabs.men },
        { key: "child", label: dict.tabs.child },
    ];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeCat, setActiveCat]       = useState<TabType>("all");
    const [modalIndex, setModalIndex]     = useState<number | null>(null);
    const [translateX, setTranslateX]     = useState(0);

    // Swipe refs — never read during render
    const dragStartX  = useRef<number>(0);
    const dragOffsetX = useRef<number>(0);
    const dragging    = useRef<boolean>(false);

    const filtered = (Products_db as ProductItem[]).filter(
        item => activeCat === "all" || item.cat_name === activeCat
    );

    // Flat list of all images for the current filter
    const allImages: StaticImageData[] = filtered.flatMap(item =>
        Array.isArray(item.img_path) ? item.img_path : [item.img_path]
    );

    const openModal = (productIndex: number) => {
        let imgIdx = 0;
        for (let i = 0; i < productIndex; i++) {
            const p = filtered[i];
            imgIdx += Array.isArray(p.img_path) ? p.img_path.length : 1;
        }
        setModalIndex(imgIdx);
        setTranslateX(0);
    };

    const closeModal = useCallback(() => {
        setModalIndex(null);
        setTranslateX(0);
    }, []);

    const goTo = useCallback((index: number, total: number) => {
        if (index < 0 || index >= total) return;
        setModalIndex(index);
        setTranslateX(0);
    }, []);

    // Keyboard nav — stable reference via useCallback
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        setModalIndex(prev => {
            if (prev === null) return prev;
            if (e.key === "Escape") { closeModal(); return prev; }
            if (e.key === "ArrowRight") {
                const next = prev + 1;
                return next < allImages.length ? next : prev;
            }
            if (e.key === "ArrowLeft") {
                const next = prev - 1;
                return next >= 0 ? next : prev;
            }
            return prev;
        });
        if (e.key === "Escape") closeModal();
    }, [allImages.length, closeModal]);

    useEffect(() => {
        if (modalIndex !== null) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [modalIndex, handleKeyDown]);

    // ── Touch handlers ──
    const onTouchStart = (e: React.TouchEvent) => {
        dragStartX.current  = e.touches[0].clientX;
        dragOffsetX.current = 0;
        dragging.current    = true;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (!dragging.current) return;
        const offset = e.touches[0].clientX - dragStartX.current;
        dragOffsetX.current = offset;
        setTranslateX(offset);
    };
    const onTouchEnd = () => commitSwipe();

    // ── Mouse handlers ──
    const onMouseDown = (e: React.MouseEvent) => {
        dragStartX.current  = e.clientX;
        dragOffsetX.current = 0;
        dragging.current    = true;
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!dragging.current) return;
        const offset = e.clientX - dragStartX.current;
        dragOffsetX.current = offset;
        setTranslateX(offset);
    };
    const onMouseUp = () => commitSwipe();

    const commitSwipe = () => {
        if (!dragging.current) return;
        dragging.current = false;
        const offset    = dragOffsetX.current;
        dragOffsetX.current = 0;
        const threshold = 60;
        setModalIndex(prev => {
            if (prev === null) return prev;
            if (offset < -threshold && prev < allImages.length - 1) {
                setTranslateX(0);
                return prev + 1;
            }
            if (offset > threshold && prev > 0) {
                setTranslateX(0);
                return prev - 1;
            }
            setTranslateX(0);
            return prev;
        });
    };

    const getGridImg = (product: ProductItem, index: number): StaticImageData => {
        if (Array.isArray(product.img_path)) {
            return hoveredIndex === index ? product.img_path[1] : product.img_path[0];
        }
        return product.img_path;
    };

    const total = allImages.length;

    return (
        <section className="products_section container">

            <h2 className="products_heading">{dict.title}</h2>

            {/* Tabs */}
            <div className="products_tabs_box">
                {TABS.map(tab => (
                    <button
                        key={tab.key}
                        className={`product_tab_item ${activeCat === tab.key ? "active" : ""}`}
                        onClick={() => setActiveCat(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="products_grid">
                {filtered.map((item, index) => (
                    <div
                        className="product_card"
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={getGridImg(item, index)}
                            alt="product"
                            fill
                            sizes="(max-width: 480px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalIndex !== null && (
                <div
                    className="products_modal_overlay"
                    onClick={closeModal}
                    onMouseUp={onMouseUp}
                    onMouseLeave={() => {
                        dragging.current    = false;
                        dragOffsetX.current = 0;
                        setTranslateX(0);
                    }}
                >
                    <div
                        className="products_modal_inner"
                        onClick={e => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        style={{
                            transform: `translateX(${translateX}px)`,
                            transition: translateX === 0 ? 'transform 0.3s ease' : 'none',
                            userSelect: 'none',
                            cursor: 'grab',
                        }}
                    >
                        {/* Close */}
                        <button
                            className="products_modal_close"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Prev arrow */}
                        {modalIndex > 0 && (
                            <button
                                className="products_modal_arrow products_modal_arrow_left"
                                onClick={e => { e.stopPropagation(); goTo(modalIndex - 1, total); }}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                        )}

                        {/* Image */}
                        <Image
                            src={allImages[modalIndex]}
                            alt="product full"
                            width={480}
                            height={640}
                            draggable={false}
                            style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
                        />

                        {/* Next arrow */}
                        {modalIndex < total - 1 && (
                            <button
                                className="products_modal_arrow products_modal_arrow_right"
                                onClick={e => { e.stopPropagation(); goTo(modalIndex + 1, total); }}
                                aria-label="Next"
                            >
                                ›
                            </button>
                        )}

                        {/* Dots */}
                        {total > 1 && (
                            <div className="products_modal_dots">
                                {allImages.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`products_modal_dot ${i === modalIndex ? "active" : ""}`}
                                        onClick={e => { e.stopPropagation(); goTo(i, total); }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

        </section>
    );
};

export default ProductsS2;