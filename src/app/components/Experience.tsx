"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/blood-donors.json";
import { SiAndroid, SiFirebase, SiKotlin } from "react-icons/si";

export default function Experience() {
  return (
    <section>
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase">
          WORK & INTERNSHIP EXPERIENCE
        </h2>
        <div className="h-[1px] bg-white/20 flex-grow"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="order-2 lg:order-1">
          <p className="text-zinc-500 font-mono text-sm mb-4 uppercase">
            MAY 2026 // BANGALORE, INDIA
          </p>
          
          <h3 className="text-4xl font-bold text-white mb-2">
            Android App Development using Generative AI Intern
          </h3>
          
          <p className="text-zinc-400 font-mono mb-8 text-sm">
            @ MindMatrix
          </p>
          
          <ul className="text-zinc-400 mb-8 leading-relaxed space-y-4">
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

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10">
              <SiAndroid /> Android
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10">
              <SiKotlin /> Jetpack Compose
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 border border-white/10">
              <SiFirebase /> Firebase
            </span>
          </div>
        </div>

        {/* Right Column: Lottie Animation */}
        <div className="order-1 lg:order-2 bg-zinc-900/50 rounded-2xl p-8 border border-white/5 h-[400px] flex items-center justify-center">
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