"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Pricing = () => {
    return (
        <section id="pricing" className="relative py-48 px-6 z-10 text-white">
            {/* Background with fade in/out transition */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-6"
                >
                    <h2 className="text-4xl md:text-7xl font-normal tracking-tight">Start creating</h2>
                    <h3 className="text-xl md:text-2xl text-white/70 font-light">
                        100 monthly credits free of charge or upgrade to one of our plans below.
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto relative">
                    {/* Vertical Divider for Desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

                    {/* Plan 1: Google AI Pro */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center text-center"
                    >
                        <h3 className="text-2xl font-normal text-white/80 mb-8">Google AI Pro</h3>

                        <div className="w-full h-px bg-white/10 mb-8" />

                        <div className="mb-2">
                            <div className="flex items-baseline justify-center gap-3">
                                <span className="text-xl text-white/40 line-through">$19.99</span>
                                <span className="text-5xl md:text-6xl font-medium">$0/mo</span>
                            </div>
                            <p className="text-sm text-white/40 mt-2">for 1 month</p>
                        </div>

                        <div className="space-y-3 text-lg font-light text-white/90 my-12">
                            <p>Veo 3.1</p>
                            <p>Text to Video</p>
                            <p>Frames to Video</p>
                            <p>Ingredients to Video</p>
                            <p>Video extension</p>
                            <p>Camera control</p>
                            <p>Scenebuilder</p>
                            <p>1080p upscaling</p>
                            <p>Top-up credits available</p>
                        </div>

                        <div className="w-full h-px bg-white/10 mb-8" />

                        <div className="space-y-4 text-sm text-white/60">
                            <p className="text-white/40 mb-4">Also included in this plan:</p>
                            <p>Gemini app with 2.5 Pro and Veo 3 Fast</p>
                            <p>Gemini in Gmail, Docs, and more</p>
                            <p>2 TB of Storage</p>
                            <p>And the other AI Pro benefits</p>
                        </div>

                        <div className="w-full h-px bg-white/10 mt-8" />
                    </motion.div>

                    {/* Plan 2: Google AI Ultra */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center text-center"
                    >
                        <h3 className="text-2xl font-normal text-white/80 mb-8">Google AI Ultra</h3>

                        <div className="w-full h-px bg-white/10 mb-8" />

                        <div className="mb-2">
                            <div className="flex items-baseline justify-center gap-3">
                                <span className="text-xl text-white/40 line-through">$249.99</span>
                                <span className="text-5xl md:text-6xl font-medium">$124.99/mo</span>
                            </div>
                            <p className="text-sm text-white/40 mt-2">for 3 months</p>
                        </div>

                        <div className="space-y-3 text-lg font-light text-white/90 my-12">
                            <p>Everything in Google AI Pro</p>
                            <p>+</p>
                            <p>Highest monthly generation limits</p>
                            <p>Top-up credits available</p>
                            <p>Veo 3.1 Fast generations for 0 credits</p>
                        </div>

                        <div className="w-full h-px bg-white/10 mb-8" />

                        <div className="space-y-4 text-sm text-white/60">
                            <p className="text-white/40 mb-4">Also included in this plan:</p>
                            <p>Gemini app with 2.5 Pro Deep Think & Veo 3</p>
                            <p>Project Mariner (US only)</p>
                            <p>Youtube Premium individual plan</p>
                            <p>30 TB of Storage</p>
                            <p>And other AI Ultra benefits</p>
                        </div>

                        <div className="w-full h-px bg-white/10 mt-8" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center mt-20 space-y-8"
                >
                    <Link
                        href="http://one.google.com/ai"
                        target="_blank"
                        className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-105 transition-transform"
                    >
                        Get Offer
                    </Link>

                    <p className="text-sm text-white/40">
                        Available in over 149 countries. See <Link href="#" className="underline hover:text-white">FAQ.</Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
