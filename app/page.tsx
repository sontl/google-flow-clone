"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Layers, MousePointer2, Plus, Settings2, MoreVertical } from "lucide-react";
import Link from "next/link";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 transition-all duration-500 ${scrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor" />
          </svg>
          <span className="text-xl font-medium tracking-tight text-white">
            Google Labs
          </span>
        </div>
        <span className="text-white/20 text-xl font-light">/</span>
        <span className="text-xl font-medium tracking-tight text-white">Flow</span>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors">
          Sign in
        </button>
        <button className="group relative px-6 py-3 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <span className="relative z-10 text-sm font-medium text-white">Try Flow</span>
        </button>
      </div>
    </nav>
  );
};

const BackgroundVideo = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [1, 0.2]);
  const blur = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.div
      style={{ opacity, filter: blur }}
      className="fixed inset-0 w-full h-full z-0 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source src="https://storage.googleapis.com/pinhole-about-assets-prod-asia/RNDR_TunnelVidoes_stretched_005_1920x1296.mp4" type="video/mp4" />
      </video>
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 z-10">
      <div className="max-w-5xl mx-auto text-center space-y-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-7xl md:text-9xl font-medium tracking-tighter text-white leading-[0.9] mb-8 drop-shadow-2xl">
            Turn your ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient-x">
              into motion.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg"
        >
          Flow is an AI-first creative suite that allows you to generate, edit, and iterate on video content with unprecedented control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <button className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-lg font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10">Start Creating</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-lg font-medium transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105">
            <Play className="w-5 h-5 fill-current" />
            Watch Showreel
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  return (
    <section className="relative py-20 px-4 z-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px] relative"
      >
        <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl group">
          {/* Main Video Content */}
          <div className="absolute inset-0">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/002_Bloom_1.width-1200.format-webp.webp"
              alt="Bloom Project"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Flow</span>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white/80">
                <div className="w-2 h-2 rounded-full bg-white/50" />
                Watch Flow TV
              </div>
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80">
                ?
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400" />
              </div>
            </div>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#8B7355]/90 backdrop-blur-sm flex items-center justify-center pl-2 cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
            <div className="text-white font-medium text-lg">Bloom</div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
              <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-2 text-sm text-white hover:bg-white/20 transition-colors cursor-pointer">
                <Plus className="w-4 h-4" />
                New Project
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/40 font-mono">
              <span>26th Apr, 2025</span>
              <span className="px-2 py-1 rounded bg-white/10">24 clips</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState("Consistent");
  const tabs = ["Consistent", "Seamless", "Cinematic"];

  return (
    <section className="relative py-32 px-6 z-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Tabs Header */}
        <div className="flex items-center gap-12 mb-16 border-b border-white/10 pb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-4xl md:text-5xl font-medium transition-all duration-500 ${activeTab === tab
                  ? "text-white blur-0"
                  : "text-white/20 blur-[2px] hover:text-white/40 hover:blur-[1px]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl text-white/80 font-light leading-relaxed">
                  Bring your own assets, or generate them in Flow. Then easily manage and reference them as you start to generate clips.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* UI Mockup Area */}
          <div className="relative">
            <div className="rounded-3xl bg-[#1a1a1a] border border-white/10 p-1 overflow-hidden shadow-2xl">
              <div className="bg-[#0a0a0a] rounded-[20px] p-6 min-h-[400px] flex flex-col justify-center">
                {/* Text to Image UI Mockup */}
                <div className="bg-[#1f1f1f] rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-white/40 px-3 py-1 rounded-full bg-white/5">Text to Image</span>
                    <Settings2 className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="text-xl text-white/90 font-light mb-8">
                    Backseat of a 1970's taxi with worn zebra print cloth|
                    <span className="animate-pulse text-blue-400">|</span>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <ArrowRight className="w-5 h-5 text-white/40" />
                    </div>
                  </div>
                </div>

                {/* Generated Assets Preview (Bottom) */}
                <div className="mt-8 grid grid-cols-3 gap-4 opacity-50">
                  <div className="aspect-square rounded-xl bg-white/5" />
                  <div className="aspect-square rounded-xl bg-white/5" />
                  <div className="aspect-square rounded-xl bg-white/5" />
                </div>
              </div>
            </div>

            {/* Floating Cursor Mockup */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-10"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 28V4L26 20H17.3L22.3 28H10Z" fill="white" stroke="black" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative bg-black py-24 border-t border-white/10 z-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          <span className="text-2xl font-medium text-white">Google Labs</span>
        </div>
        <p className="text-white/40 max-w-xs text-lg font-light">
          Experimenting with the future of AI and creativity.
        </p>
      </div>
      <div className="flex gap-20 text-white/60">
        <div className="flex flex-col gap-6">
          <span className="text-white font-medium text-lg">Product</span>
          <Link href="#" className="hover:text-white transition-colors">Features</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Download</Link>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-white font-medium text-lg">Resources</span>
          <Link href="#" className="hover:text-white transition-colors">Community</Link>
          <Link href="#" className="hover:text-white transition-colors">Help Center</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex justify-between text-sm text-white/30">
      <span>© 2024 Google LLC</span>
      <div className="flex gap-8">
        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Capabilities />
      <Footer />
    </main>
  );
}