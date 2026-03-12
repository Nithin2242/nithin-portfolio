"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Components
import HealthBotDemo from "./components/HealthBotDemo";
import LottieAnimation from "./components/LottieAnimation";

// Icons
import { SiPython, SiFlask, SiReact, SiTailwindcss, SiNodedotjs, SiJsonwebtokens, SiGoogle, SiStreamlit, SiFlutter } from "react-icons/si";
import { FaDatabase, FaFileExcel, FaChartBar } from "react-icons/fa";

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

  const glassCardClass = "p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-none";

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto flex flex-col gap-32">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp} 
        className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10"
      >
        <div className="flex-1 space-y-10 text-center md:text-left">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
            NITHIN NS
          </h1>
          
          <div className="text-[10px] md:text-[11px] text-gray-400 font-light tracking-[0.3em] uppercase flex flex-col gap-6 items-center md:items-start">
            <div className="flex items-center gap-4 group">
               <span className="text-white/20 font-mono font-bold w-6 text-center">{"//"}</span>
               <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Full-Stack Developer</span>
            </div>

            <div className="flex items-center gap-4 group">
              <span className="text-white/20 font-mono font-bold w-6 text-center">{"//"}</span>
              <div className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3 shadow-2xl group-hover:border-white/30 transition-all duration-500">
                <span className="text-white font-black tracking-tighter text-xs">AI &</span>
                <span className="text-[8px] text-gray-500 font-mono leading-tight border-l border-white/10 pl-3 uppercase">
                  ARTIFICIAL<br/>INTELLIGENCE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
               <span className="text-white/20 font-mono font-bold w-6 text-center">{"//"}</span>
               <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Data Analytics</span>
            </div>
          </div>
        </div>

        <div className="relative group shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl opacity-30"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 overflow-hidden shadow-2xl">
            <img 
              src="/profile.jpeg" 
              alt="Nithin N S" 
              className="w-full h-full object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.3] hover:scale-110"
            />
          </div>
        </div>
      </motion.section>

      {/* 2. ABOUT ME SECTION (Clean & Full-Width) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
        className="max-w-4xl space-y-12 relative z-10"
      >
        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <h3 className="text-3xl font-bold tracking-[0.2em] text-white uppercase">The Story</h3>
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-2xl font-light">
              I&apos;m an Electronics and Communication Engineering student at <span className="text-white font-semibold">BMS Institute of Technology and Management</span>. 
            </p>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              My journey is fueled by the precision of hardware and the infinite scalability of intelligent software. I specialize in architecting full-stack systems and fine-tuning AI models, exploring how IoT can solve real-world problems.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6 italic">
              My focus is on building scalable, data-driven solutions that bridge the gap between complex engineering and user-centric design, constantly pushing the boundaries of what&apos;s possible at the intersection of AI and Full-Stack architecture.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. CORE EXPERTISE */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-12 relative z-10">
        <h3 className="text-3xl font-bold tracking-tight border-b border-white/10 pb-4 uppercase">Core Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={glassCardClass}>
            <h4 className="text-xl font-semibold mb-2">Full-Stack Development</h4>
            <p className="text-gray-400 text-sm">Architecting scalable systems with React.js, Node.js, and SQL.</p>
          </div>
          <div className={glassCardClass}>
            <h4 className="text-xl font-semibold mb-2">Artificial Intelligence</h4>
            <p className="text-gray-400 text-sm">Integrating LLM APIs and predictive ML models into automated tools.</p>
          </div>
          <div className={glassCardClass}>
            <h4 className="text-xl font-semibold mb-2">Data Analytics</h4>
            <p className="text-gray-400 text-sm">Transforming complex datasets into actionable BI via SQL & Power BI.</p>
          </div>
          <div className={glassCardClass}>
            <h4 className="text-xl font-semibold mb-2">Mobile & Security</h4>
            <p className="text-gray-400 text-sm">Cross-platform Flutter apps with AES encryption and behavioral analytics.</p>
          </div>
        </div>
      </motion.section>

      {/* 4. TABBED CONTENT SECTION */}
      <section className="relative z-10 space-y-12">
        <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-8">
          {["projects", "certificates", "demo"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${
                activeTab === tab 
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                : "text-gray-500 hover:text-white border border-white/5 bg-white/5"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "AI Healthcare Assistant",
                    tag: "2026",
                    data: healthcareBotData,
                    tech: [
                      { icon: SiPython, color: "text-[#3776AB]" },
                      { icon: SiGoogle, color: "text-[#4285F4]" },
                      { icon: SiStreamlit, color: "text-[#FF4B4B]" }
                    ],
                    desc: "A specialized AI agent providing personalized wellness insights and medical info retrieval."
                  },
                  {
                    title: "Real-Time Inventory System",
                    tag: "SILVER",
                    data: inventoryData,
                    tech: [
                      { icon: SiReact, color: "text-[#61DAFB]" },
                      { icon: SiNodedotjs, color: "text-[#339933]" },
                      { icon: SiJsonwebtokens, color: "text-white" },
                      { icon: FaDatabase, color: "text-gray-400" }
                    ],
                    desc: "Enterprise management system with secure authentication and real-time stock tracking."
                  },
                  {
                    title: "AI Code Reviewer",
                    tag: "NEW",
                    data: codeReviewData,
                    tech: [
                      { icon: SiPython, color: "text-[#3776AB]" },
                      { icon: SiFlask, color: "text-white" },
                      { icon: SiGoogle, color: "text-[#4285F4]" }
                    ],
                    desc: "Automated analysis tool detecting security vulnerabilities and bugs in real-time."
                  },
                  {
                    title: "Cyber Sentinel",
                    tag: "MOBILE",
                    data: cyberSentinelData,
                    tech: [
                      { icon: SiFlutter, color: "text-[#02569B]" },
                      { icon: SiPython, color: "text-[#3776AB]" },
                      { icon: FaDatabase, color: "text-gray-400" }
                    ],
                    desc: "Mobile security app featuring ML threat detection and behavioral analytics."
                  },
                  {
                    title: "D-Mart Sales Dashboard",
                    tag: "ANALYTICS",
                    data: dashboardData,
                    tech: [
                      { icon: FaDatabase, color: "text-gray-400" }, 
                      { icon: FaChartBar, color: "text-[#F2C811]" },
                      { icon: FaFileExcel, color: "text-[#217346]" }
                    ],
                    desc: "End-to-end retail analytics with normalized schemas and predictive sales trends.",
                    isWide: true
                  }
                ].map((project, index) => (
                  <div key={index} className={`group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-none flex flex-col h-full ${project.isWide ? 'md:col-span-2' : ''}`}>
                    <div className={`${project.isWide ? 'aspect-[21/7]' : 'aspect-[21/9]'} bg-white/5 border-b border-white/10 flex items-center justify-center p-6 group-hover:bg-white/10 transition-colors relative overflow-hidden`}>
                      <LottieAnimation animationData={project.data} className={`${project.isWide ? 'w-48 h-48 md:w-64 md:h-64' : 'w-32 h-32'} relative z-10`} />
                    </div>
                    <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white text-lg tracking-tight uppercase">{project.title}</h4>
                          <span className="text-[9px] bg-white/10 px-2 py-1 rounded text-gray-400 font-mono">{project.tag}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                      </div>
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                        {project.tech.map((tech, tIndex) => (
                          <div key={tIndex} className={`flex items-center gap-2 ${tech.color}`}>
                            <tech.icon className="w-5 h-5" /> 
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CERTIFICATES TAB - All 6 restored */}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Data Science & Analytics", org: "HP LIFE", date: "2025", img: "/cert-hp.png" },
                  { title: "Data Analytics", org: "Infosys Foundation", date: "2025", img: "/cert-infosys.png" },
                  { title: "Virtual Experience (Data)", org: "Deloitte", date: "2025", img: "/cert-deloitte.png" },
                  { title: "Data Analytics Simulation", org: "Tata Group", date: "2025", img: "/cert-tata.png" },
                  { title: "Solutions Architecture", org: "AWS APAC", date: "2025", img: "/cert-aws.png" },
                  { title: "Web Development", org: "Fliprlabs", date: "2025", img: "/cert-flipr.png" },
                ].map((cert, index) => (
                  <div key={index} className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-none">
                    <div className="aspect-[16/10] overflow-hidden bg-white/5 border-b border-white/10 relative">
                      <img 
                        src={cert.img} 
                        alt={cert.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-white text-sm group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                        <span>{cert.org}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "demo" && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <p className="text-center text-gray-400 text-sm italic">Interact with the live AI Assistant below.</p>
                <div className="featured-demo-container">
                    <HealthBotDemo />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

{/* 5. FOOTER / CONTACT */}
      <footer className="border-t border-white/10 pt-12 pb-20 text-center space-y-12 relative z-10" id="contact">
        <div className="space-y-2">
          <h3 className="text-6xl font-bold text-white tracking-tighter uppercase">LET&apos;S CONNECT</h3>

        </div>

        <div className="flex flex-col items-center gap-8 pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
            <a 
              href="mailto:nithinns1402@gmail.com" 
              className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 hover:scale-105 transition-all cursor-none w-64 sm:w-auto"
            >
              EMAIL ME
            </a>
            <div className="flex gap-10">
              <a href="https://linkedin.com/in/nithin-n-s-23b3ba290" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-none font-mono text-xs uppercase tracking-widest">LinkedIn</a>
              <a href="https://github.com/Nithin2242" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-none font-mono text-xs uppercase tracking-widest">GitHub</a>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href="/Nithin_NS_Resume.pdf" 
              download
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all cursor-none flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </footer>
    </main> // This closes the <main> tag
  ); // This closes the return statement
} // This closes the Home function