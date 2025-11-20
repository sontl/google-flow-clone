"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const creators = [
    {
        name: "Junie Lau",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
        youtube: "https://www.youtube.com/@JunieLau",
        color: "text-pink-300",
        position: "left",
        rotation: -5
    },
    {
        name: "Dave Clark",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
        youtube: "https://www.youtube.com/@DaveClark",
        color: "text-blue-300",
        position: "right",
        rotation: 5
    },
    {
        name: "Henry Daubrez",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
        youtube: "https://www.youtube.com/@HenryDaubrez",
        color: "text-purple-300",
        position: "left",
        rotation: -3
    }
];

export const Creators = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            className="relative py-32 px-4 z-10 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Blur Effect */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
                }}
            >
                <AnimatePresence mode="popLayout">
                    {hoveredIndex !== null && (
                        <motion.img
                            key={hoveredIndex}
                            src={creators[hoveredIndex].image}
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 0.4, scale: 1.1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover blur-[80px] scale-125"
                        />
                    )}
                </AnimatePresence>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <p className="text-white/60 text-lg font-light">
                    See how filmmakers are using Flow
                </p>
            </motion.div>

            <div className="relative flex flex-col items-center gap-4 w-full max-w-6xl mx-auto">
                {creators.map((creator, index) => (
                    <motion.div
                        key={index}
                        className={`relative cursor-pointer ${hoveredIndex === index ? "z-50" : "z-20"}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => window.open(creator.youtube, "_blank")}
                    >
                        <motion.h2
                            className={`text-6xl md:text-9xl font-medium tracking-tighter transition-colors duration-300 relative z-20 ${hoveredIndex === index ? creator.color : "text-white"
                                }`}
                            animate={{
                                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.2 : 1,
                                scale: hoveredIndex === index ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {creator.name}
                        </motion.h2>

                        {/* Hover Image */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: creator.rotation,
                                        x: creator.position === "left" ? -380 : 380,
                                        y: 0
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-2xl pointer-events-none hidden md:block`}
                                    style={{
                                        zIndex: 10
                                    }}
                                >
                                    <img
                                        src={creator.image}
                                        alt={creator.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback if image fails
                                            e.currentTarget.src = `https://via.placeholder.com/400x250/1a1a1a/FFFFFF?text=${creator.name}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24"
            >
                <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105">
                    <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 fill-current" />
                    </div>
                    Watch Short Films
                </button>
            </motion.div>
        </section>
    );
};
