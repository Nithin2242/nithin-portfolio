"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/blood-donors.json";

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-wider mb-8 text-white uppercase">
        Work & Internship Experience
      </h2>

      {/* Card Wrapper with 2-Column Grid */}
      <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 md:p-8 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white">
              Android App Development using Generative AI Intern
            </h3>
            <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full uppercase tracking-widest w-fit">
              MAY 2026 | BANGALORE, INDIA
            </span>
          </div>

          <p className="text-slate-400 font-mono text-sm">@ MindMatrix</p>

          <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <li>
              // Developed a full-stack Android application using Jetpack Compose and Firebase to connect blood donors with patients in real-time, reducing emergency response times.
            </li>
            <li>
              // Implemented real-time request posting with Google Maps integration and 10km radius donor matching using Firebase Cloud Functions and push notifications.
            </li>
            <li>
              // Built a complete user management system including phone OTP authentication, donation history tracking, and availability management.
            </li>
          </ul>
        </div>

        {/* Right Column: Lottie Animation */}
        <div className="flex items-center justify-center p-4 bg-slate-950/40 rounded-xl border border-slate-800/50">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            autoplay={true}
            className="w-full max-w-sm h-auto"
          />
        </div>

      </div>
    </section>
  );
}