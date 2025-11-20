"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Layers, MousePointer2, Plus, Settings2, MoreVertical, X } from "lucide-react";
import Link from "next/link";

// --- Icons ---

const GoogleLogo = () => (
  <svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.36 10.68V13.56H15.72C15.48 15.06 14.28 17.46 9.36 17.46C6.48 17.46 4.2 15.12 4.2 12.18C4.2 9.24 6.48 6.9 9.36 6.9C11.04 6.9 12.12 7.62 12.78 8.22L14.82 6.18C13.44 4.86 11.64 4.02 9.36 4.02C4.86 4.02 1.2 7.68 1.2 12.18C1.2 16.68 4.86 20.34 9.36 20.34C14.1 20.34 17.22 17.04 17.22 12.36C17.22 11.76 17.16 11.16 17.04 10.68H9.36ZM24.48 13.62C24.48 16.32 22.44 18.06 20.28 18.06C18.06 18.06 16.08 16.26 16.08 13.62C16.08 10.92 18.06 9.12 20.28 9.12C22.44 9.12 24.48 10.92 24.48 13.62ZM21.9 13.62C21.9 11.94 21.18 10.8 20.28 10.8C19.32 10.8 18.6 11.94 18.6 13.62C18.6 15.24 19.32 16.38 20.28 16.38C21.18 16.38 21.9 15.24 21.9 13.62ZM34.08 13.62C34.08 16.32 32.04 18.06 29.88 18.06C27.66 18.06 25.68 16.26 25.68 13.62C25.68 10.92 27.66 9.12 29.88 9.12C32.04 9.12 34.08 10.92 34.08 13.62ZM31.5 13.62C31.5 11.94 30.78 10.8 29.88 10.8C28.92 10.8 28.2 11.94 28.2 13.62C28.2 15.24 28.92 16.38 29.88 16.38C30.78 16.38 31.5 15.24 31.5 13.62ZM43.32 9.42L40.62 16.26H40.5L37.68 9.42H35.04L39.18 18.66L36.84 23.82H39.48L46.02 9.42H43.32ZM50.4 17.76H52.86V4.32H50.4V17.76ZM61.8 13.62C61.8 11.7 60.42 9.12 57.66 9.12C55.38 9.12 53.7 11.04 53.7 13.62C53.7 16.26 55.38 18.06 57.9 18.06C59.76 18.06 60.9 17.1 61.62 16.02L60.06 14.94C59.58 15.72 58.86 16.38 57.9 16.38C56.94 16.38 56.28 15.9 55.86 15.06L61.86 12.54L61.56 11.82C61.08 10.56 59.64 9.12 57.6 9.12C55.68 9.12 53.7 10.8 53.7 13.62C53.7 16.26 55.38 18.06 57.9 18.06C60.48 18.06 62.04 16.5 62.04 16.5L60.24 15.3C59.82 15.9 59.1 16.38 58.38 16.38C57.66 16.38 57.18 15.9 56.88 15.48L61.8 13.62Z" fill="white" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.942 5.556C17.508 4.895 15.977 4.415 14.382 4.17C14.382 4.17 14.142 4.605 13.967 5.025C12.272 4.785 10.587 4.785 8.907 5.025C8.732 4.605 8.492 4.17 8.492 4.17C6.897 4.415 5.367 4.895 3.932 5.556C1.037 9.885 0.242 14.115 0.632 18.285C2.372 19.575 4.052 20.355 5.687 20.865C6.092 20.31 6.452 19.725 6.752 19.11C6.137 18.885 5.552 18.6 4.997 18.27C5.147 18.165 5.297 18.045 5.432 17.925C8.792 19.47 12.422 19.47 15.737 17.925C15.887 18.045 16.037 18.15 16.172 18.27C15.617 18.6 15.032 18.885 14.417 19.11C14.717 19.725 15.077 20.31 15.482 20.865C17.117 20.355 18.797 19.575 20.537 18.285C21.002 13.575 19.797 9.375 18.942 5.556ZM7.667 15.495C6.647 15.495 5.807 14.55 5.807 13.41C5.807 12.27 6.632 11.325 7.667 11.325C8.717 11.325 9.542 12.27 9.527 13.41C9.527 14.55 8.702 15.495 7.667 15.495ZM15.227 15.495C14.207 15.495 13.367 14.55 13.367 13.41C13.367 12.27 14.192 11.325 15.227 11.325C16.277 11.325 17.102 12.27 17.087 13.41C17.087 14.55 16.277 15.495 15.227 15.495Z" fill="white" />
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 transition-all duration-500">
      {/* Glass Background with Gradient Fade */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-lg"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
          }}
        />
      </div>

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

const SloganSection = () => {
  return (
    <section className="relative py-32 px-4 z-10 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-white leading-[1.1]">
          Flow is an AI filmmaking tool <br />
          built with and for creatives.
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
          Seamlessly create cinematic clips, scenes and stories using <br className="hidden md:block" />
          Google’s most capable generative AI models.
        </p>
      </motion.div>
    </section>
  );
};

const ProductShowcase = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
                src="https://storage.googleapis.com/pinhole-about-assets-prod-asia/video-section/poster.webp"
                alt="Bloom Project"
                className={`w-full h-full object-cover transition-opacity duration-700 ${showVideo ? 'opacity-0' : 'opacity-80'}`}
              />
              {showVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000"
                >
                  <source src="https://storage.googleapis.com/pinhole-about-assets-prod-asia/video-section/video.mp4" type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none">
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Flow</span>
              <div className="flex gap-4 pointer-events-auto">
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
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 transition-all duration-300 group/play shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              >
                <Play className="w-10 h-10 text-white fill-white ml-1 group-hover/play:scale-110 transition-transform" />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end pointer-events-none">
              <div className="text-white font-medium text-lg">Bloom</div>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-8 pointer-events-auto">
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

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/23mbfPqtnwI?si=Xr9lIpIPNyzHQE8E?autoplay=1"
                title="Introducing Flow | Google's New AI Filmmaking Tool"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState("Consistent");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  const capabilities = [
    {
      id: "Consistent",
      title: "Consistent",
      description: "Bring your own assets, or generate them in Flow. Then easily manage and reference them as you start to generate clips.",
      videos: [
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Consistent/16x9/01_Ingredients_Edit%201%2016x9_250516d.mp4",
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Consistent/16x9/02_Ingredients%20to%20video_Edit03_16x9_250516e.mp4",
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Consistent/16x9/03%20Frames%20to%20Video_250516a.mp4"
      ]
    },
    {
      id: "Seamless",
      title: "Seamless",
      description: "An interface designed for the creative story-building process from ideation to iteration.",
      videos: [
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Seamless/16x9/04%20Scene%20Builder_250513c_1.mp4",
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Seamless/16x9/05_JumpTo_250516a.mp4",
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Seamless/16x9/06_Extend_5mb_250519a.mp4"
      ]
    },
    {
      id: "Cinematic",
      title: "Cinematic",
      description: "State-of-the-art video quality made possible by Google DeepMind’s most advanced models.",
      videos: [
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Cinematic/16x9/07_CameraControls_Edit02%2016x9_250516e.mp4",
        "https://storage.googleapis.com/pinhole-about-assets-prod-asia/Cinematic/16x9/08_VEO_Cinematic_Edit01_16x9_250516e.mp4"
      ]
    }
  ];

  // Flatten videos for easier rendering, but keep track of their parent category
  const allVideos = capabilities.flatMap(cap =>
    cap.videos.map(video => ({ ...cap, videoUrl: video }))
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isManualScrolling) return;

      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestVideoIndex = 0;
      let minDistance = Number.MAX_VALUE;

      // Find the video closest to the center of the container
      const children = Array.from(container.children) as HTMLElement[];
      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestVideoIndex = index;
        }
      });

      const activeVideo = allVideos[closestVideoIndex];
      if (activeVideo && activeVideo.id !== activeTab) {
        setActiveTab(activeVideo.id);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeTab, isManualScrolling, allVideos]);

  const scrollToCategory = (categoryId: string) => {
    setIsManualScrolling(true);
    setActiveTab(categoryId);

    const container = scrollContainerRef.current;
    if (!container) return;

    // Find the index of the first video in this category
    const firstVideoIndex = allVideos.findIndex(v => v.id === categoryId);
    if (firstVideoIndex !== -1) {
      const children = Array.from(container.children) as HTMLElement[];
      const targetElement = children[firstVideoIndex];

      if (targetElement) {
        container.scrollTo({
          left: targetElement.offsetLeft - (container.clientWidth - targetElement.clientWidth) / 2, // Center it
          behavior: "smooth"
        });
      }
    }

    // Reset manual scrolling lock after animation
    setTimeout(() => setIsManualScrolling(false), 600);
  };

  return (
    <section className="relative py-32 z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Tabs Header */}
        <div className="flex items-center gap-8 md:gap-12 mb-8 border-t border-white/10 pt-8 overflow-x-auto no-scrollbar">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => scrollToCategory(cap.id)}
              className={`text-3xl md:text-5xl font-medium transition-all duration-500 whitespace-nowrap ${activeTab === cap.id
                ? "text-white blur-0"
                : "text-white/20 blur-[2px] hover:text-white/40 hover:blur-[1px]"
                }`}
            >
              {cap.title}
            </button>
          ))}
        </div>

        {/* Dynamic Description */}
        <div className="h-24 mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl"
            >
              {capabilities.find(c => c.id === activeTab)?.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-[max(24px,calc(50vw-600px))] no-scrollbar pb-10"
      >
        {allVideos.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[85vw] md:w-[800px] aspect-video rounded-[32px] overflow-hidden bg-[#1a1a1a] border border-white/10 relative group"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={item.videoUrl} type="video/mp4" />
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
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
      <SloganSection />
      <ProductShowcase />
      <Capabilities />
      <Footer />
    </main>
  );
}