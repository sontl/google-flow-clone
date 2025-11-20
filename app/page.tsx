"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Layers, MousePointer2 } from "lucide-react";
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

const FeatureCard = ({ title, description, icon: Icon, className, delay = 0 }: { title: string, description: string, icon: any, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative p-10 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-white/10 hover:bg-neutral-800/40 hover:border-white/20 transition-all duration-500 overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
      <Icon className="w-32 h-32 text-white" />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-end">
      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-3xl font-medium text-white mb-4">{title}</h3>
      <p className="text-white/60 text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto z-10">
      <div className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8"
        >
          Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">flow state.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-white/50 max-w-3xl font-light"
        >
          Powerful tools that get out of your way. From text-to-video to advanced scene composition, everything is fluid.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Generative Video"
          description="Create high-fidelity video clips from text prompts. Control camera movement, lighting, and style with precision."
          icon={Sparkles}
          className="md:col-span-2 min-h-[500px]"
        />
        <FeatureCard
          title="Real-time Editing"
          description="Edit your generated content in real-time with our intuitive timeline interface."
          icon={Zap}
          className="min-h-[500px]"
          delay={0.1}
        />
        <FeatureCard
          title="Scene Composition"
          description="Arrange multiple clips into a cohesive narrative with advanced scene tools."
          icon={Layers}
          className="min-h-[500px]"
          delay={0.2}
        />
        <FeatureCard
          title="Style Transfer"
          description="Apply artistic styles to your footage instantly using our curated presets or your own reference images."
          icon={MousePointer2}
          className="md:col-span-2 min-h-[500px]"
          delay={0.3}
        />
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
      <Features />
      <Footer />
    </main>
  );
}