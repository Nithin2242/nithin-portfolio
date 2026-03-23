"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Components
import SplineBackground from "./components/SplineBackground";
import HealthBotDemo from "./components/HealthBotDemo";
import LottieAnimation from "./components/LottieAnimation";

// Icons
import { SiPython, SiFlask, SiReact, SiTailwindcss, SiNodedotjs, SiJsonwebtokens, SiGoogle, SiStreamlit, SiFlutter } from "react-icons/si";
import { FaDatabase, FaFileExcel, FaChartBar, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// JSON Animations
import healthcareBotData from "../../public/healthcare-bot.json";
import inventoryData from "../../public/inventory.json";
import codeReviewData from "../../public/code-review.json";
import cyberSentinelData from "../../public/cyber-sentinel.json";
import dashboardData from "../../public/dashboard.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const glassCardClass = "p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300";

  // Certificate Data Array
  const certificates = [
    { id: 1, title: "Data Science & Analytics", issuer: "HP LIFE", year: "2025", image: "/cert-hp.png" },
    { id: 2, title: "Data Analytics", issuer: "INFOSYS FOUNDATION", year: "2025", image: "/cert-infosys.png" },
    { id: 3, title: "Virtual Experience (Data)", issuer: "DELOITTE", year: "2025", image: "/cert-deloitte.png" },
    { id: 4, title: "Data Analytics Simulation", issuer: "TATA GROUP", year: "2025", image: "/cert-tata.png" },
    { id: 5, title: "Solutions Architecture", issuer: "AWS APAC", year: "2025", image: "/cert-aws.png" },
    { id: 6, title: "Web Development", issuer: "FLIPRLABS", year: "2025", image: "/cert-flipr.png" },
  ];

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">
      
      {/* 1. THE 3D ROBOT - Anchored to the very top of the page */}
      <div className="absolute top-0 left-0 w-full h-screen z-[-1] pointer-events-auto overflow-hidden">
        <SplineBackground />
      </div>

      {/* 2. HERO SECTION - Transparent so robot shows through */}
      <section className="relative w-full h-screen flex items-center px-8 md:px-16 lg:px-24">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full pointer-events-none">
          
          {/* Left Column (Text & Button) */}
          <div className="pointer-events-auto text-left pl-0 md:pl-8">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-white text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest leading-none mb-8"
            >
              Nithin<br />
              <span className="text-white/80">NS</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-zinc-400 space-y-4 font-mono text-sm tracking-wider mb-12"
            >
              <p className="border-l-2 border-white/20 pl-4">// FULL-STACK DEVELOPER</p>
              <div className="flex items-center gap-3">
                <span className="border-l-2 border-white/20 pl-4">//</span>
                <div className="bg-zinc-800/80 px-4 py-2 rounded-full border border-white/10 text-xs tracking-wider flex items-center gap-2">
                  <span className="text-white font-bold">AI &</span> ARTIFICIAL INTELLIGENCE
                </div>
              </div>
              <p className="border-l-2 border-white/20 pl-4">// DATA ANALYTICS</p>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="/Nithin_NS_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold font-mono text-sm tracking-widest uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group"
              >
                Download CV
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column (Intentionally empty to give the 3D robot space) */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* 3. MAIN CONTENT - Solid black background scrolls OVER the robot */}
      <div className="relative z-10 bg-black w-full pt-24 pb-32 px-8 md:px-16 lg:px-24 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* The Story */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white">THE STORY</h2>
              <div className="h-[1px] bg-white/20 flex-grow"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed text-lg">
              <div>
                <p className="mb-6">
                  I'm an Electronics and Communication Engineering student at <span className="text-white font-semibold">BMS Institute of Technology and Management</span>.
                </p>
                <p>
                  My journey is fueled by the precision of hardware and the infinite scalability of intelligent software. I specialize in architecting full-stack systems and fine-tuning AI models.
                </p>
              </div>
              <div>
                <p className="italic border-l-2 border-white/30 pl-6 text-zinc-300">
                  "My focus is on building scalable, data-driven solutions that bridge the gap between complex engineering and user-centric design."
                </p>
              </div>
            </div>
          </motion.section>

          {/* Core Expertise */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-widest mb-8 text-white">CORE EXPERTISE</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={glassCardClass}>
                <h3 className="text-xl font-bold text-white mb-3">Full-Stack Development</h3>
                <p className="text-zinc-400 text-sm">Architecting scalable systems with React.js, Node.js, and SQL.</p>
              </div>
              <div className={glassCardClass}>
                <h3 className="text-xl font-bold text-white mb-3">Artificial Intelligence</h3>
                <p className="text-zinc-400 text-sm">Integrating LLM APIs and predictive ML models into automated tools.</p>
              </div>
              <div className={glassCardClass}>
                <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                <p className="text-zinc-400 text-sm">Transforming raw data into actionable business intelligence using Power BI and Excel.</p>
              </div>
            </div>
          </motion.section>

          {/* Projects, Certificates & Demos Tabs */}
          <section>
            <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
              {["projects", "certificates", "demo"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-sm font-mono tracking-widest uppercase transition-all whitespace-nowrap ${
                    activeTab === tab 
                      ? "bg-white text-black font-bold" 
                      : "border border-white/20 text-zinc-400 hover:text-white hover:border-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-24"
                >
                  {/* 1. AI Healthcare Assistant */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-zinc-500 font-mono text-sm mb-4">01 // AI INTEGRATION</p>
                      <h3 className="text-4xl font-bold text-white mb-6">AI Healthcare Assistant</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        An intelligent virtual assistant designed to provide instant, reliable medical information and triage support. Built with a robust backend architecture to handle complex queries efficiently.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiPython /> Python</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiFlask /> Flask</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiReact /> React</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={healthcareBotData} />
                    </div>
                  </div>

                  {/* 2. Real-Time Inventory System */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={inventoryData} />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-mono text-sm mb-4">02 // FULL-STACK</p>
                      <h3 className="text-4xl font-bold text-white mb-6">Real-Time Inventory System</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        A comprehensive dashboard for tracking stock levels in real-time. Features automated alerts for low inventory and detailed analytics reporting for supply chain optimization.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiNodedotjs /> Node.js</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><FaDatabase /> SQL</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiTailwindcss /> Tailwind</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. AI Code Reviewer */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-zinc-500 font-mono text-sm mb-4">03 // MACHINE LEARNING</p>
                      <h3 className="text-4xl font-bold text-white mb-6">AI Code Reviewer</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        An automated tool utilizing LLMs to analyze codebases, detect syntax vulnerabilities, and suggest optimized refactoring solutions directly into the development workflow.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiPython /> Python</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiReact /> React</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={codeReviewData} />
                    </div>
                  </div>

                  {/* 4. D-Mart Sales Dashboard */}
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={dashboardData} />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-mono text-sm mb-4">04 // DATA ANALYTICS</p>
                      <h3 className="text-4xl font-bold text-white mb-6">D-Mart Sales Dashboard</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        Interactive Power BI dashboard transforming raw retail sales data into visual insights. Tracks revenue, inventory turnover, and store performance to drive data-informed business decisions.
                      </p>
                       <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><FaChartBar /> Power BI</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><FaFileExcel /> Excel</span>
                      </div>
                    </div>
                  </div>

                  {/* 5. Cyber Sentinel */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-zinc-500 font-mono text-sm mb-4">05 // MOBILE & SECURITY</p>
                      <h3 className="text-4xl font-bold text-white mb-6">Cyber Sentinel</h3>
                      <p className="text-zinc-400 mb-8 leading-relaxed">
                        A robust mobile application focused on cybersecurity education and threat monitoring. Built with Flutter to deliver a seamless, cross-platform user experience.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10"><SiFlutter /> Flutter</span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10">Dart</span>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
                       <LottieAnimation animationData={cyberSentinelData} />
                    </div>
                  </div>

                </motion.div>
              )}

              {/* CERTIFICATES GRID */}
              {activeTab === "certificates" && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {certificates.map((cert) => (
                    <div key={cert.id} className="rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden hover:border-white/30 hover:-translate-y-2 transition-all duration-500 group cursor-pointer shadow-lg hover:shadow-2xl">
                      <div className="h-56 w-full bg-white/5 relative overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-105 filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">{cert.title}</h3>
                        <div className="flex justify-between items-center text-xs font-mono text-zinc-500 tracking-wider">
                          <span className="uppercase">{cert.issuer}</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "demo" && (
                <motion.div
                  key="demo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Interactive AI Assistant Demo</h3>
                    <p className="text-zinc-400 mb-8">Test the natural language processing capabilities of the custom health triage model.</p>
                    <HealthBotDemo />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Contact Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="border-t border-white/10 pt-16 pb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white mb-6">LET'S CONNECT</h2>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>
              <div className="flex justify-center gap-6">
                <a href="mailto:nithinns1402@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaEnvelope size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">EMAIL</span>
                </a>
                <a href="https://www.linkedin.com/in/nithin-n-s" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaLinkedin size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">LINKEDIN</span>
                </a>
                <a href="https://github.com/nithin-ns" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center gap-3">
                  <FaGithub size={20} />
                  <span className="hidden md:block font-mono text-sm tracking-wider">GITHUB</span>
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}