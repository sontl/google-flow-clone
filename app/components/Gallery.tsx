"use client";

import React from "react";
import { motion } from "framer-motion";
import { MonitorPlay } from "lucide-react";

const galleryData = {
    col1: [
        {
            title: "FIT CHECK",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Impossible-Fashion.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Impossible-Fashion.webp"
        },
        {
            title: "THE DEGENERATES",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/3D-Cartoon.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/3D-Cartoon.webp"
        },
        {
            title: "Alt Spectrum",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Alt-Spectrum.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Alt-Spectrum.webp"
        },
        {
            title: "ZOO BREAK",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Animals-in-Random-Places.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Animals-in-Random-Places.webp"
        }
    ],
    col2: [
        {
            title: "PASSENGERS",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Backseat-Moments.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Backseat-Moments.webp"
        },
        {
            title: "It's all yarn",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/It_sAll-Yarn.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/It_sAll-Yarn.webp"
        },
        {
            title: "MICROVERSE",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Under-the-Microscope.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Under-the-Microscope.webp"
        },
        {
            title: "Mobile Homes",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Mobile-Homes.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Mobile-Homes.webp"
        }
    ],
    col3: [
        {
            title: "Off season Santa",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Off-Season-Santa.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Off-Season-Santa.webp"
        },
        {
            title: "MUNDO QUESO",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Queso-Mundo.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Queso-Mundo.webp"
        },
        {
            title: "ULTRA WIDE",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Tiny-Planet-Big-People.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/Tiny-Planet-Big-People.webp"
        },
        {
            title: "WINDOW SEAT",
            src: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/View-from-Train.mp4",
            poster: "https://storage.googleapis.com/pinhole-about-assets-prod-asia/gallery/View-from-Train.webp"
        }
    ]
};

const GalleryColumn = ({ items, direction = "up", speed = 40 }: { items: typeof galleryData.col1, direction?: "up" | "down", speed?: number }) => {
    return (
        <div className="relative h-[800px] overflow-hidden w-full">
            <motion.div
                initial={{ y: direction === "up" ? 0 : "-50%" }}
                animate={{ y: direction === "up" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="flex flex-col gap-6 w-full"
            >
                {/* Render items twice for seamless loop */}
                {[...items, ...items].map((item, idx) => (
                    <div key={idx} className="relative group w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={item.poster}
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                            >
                                <source src={item.src} type="video/mp4" />
                            </video>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <p className="mt-3 text-center text-xs font-medium tracking-widest text-white/60 uppercase">
                            {item.title}
                        </p>
                    </div>
                ))}
            </motion.div>

            {/* Top and Bottom Gradient Masks for smooth fade out */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export const Gallery = () => {
    return (
        <section className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <GalleryColumn items={galleryData.col1} direction="up" speed={50} />
                    <GalleryColumn items={galleryData.col2} direction="down" speed={60} />
                    <GalleryColumn items={galleryData.col3} direction="up" speed={55} />
                </div>

                <div className="flex justify-center mt-16 relative z-20">
                    <a
                        href="https://labs.google/flow/tv?utm_source=flow-about&utm_medium=web&utm_campaign=launch"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium transition-all hover:bg-white/20 hover:border-white/40 hover:scale-105"
                    >
                        <MonitorPlay className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                        <span>Watch Flow TV</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
