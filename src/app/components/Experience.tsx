"use client";

import React from 'react';

export default function Experience() {
  const internships = [
    {
      role: "Android App Development using Generative AI Intern",
      company: "MindMatrix",
      duration: "May 2026",
      location: "Bangalore, India",
      points: [
        "Developed a full-stack Android application using Jetpack Compose and Firebase to connect blood donors with patients in real-time, reducing emergency response times.",
        "Implemented real-time request posting with Google Maps integration and 10km radius donor matching using Firebase Cloud Functions and push notifications.",
        "Built a complete user management system including phone OTP authentication, donation history tracking, and availability management."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase">
          WORK & INTERNSHIP EXPERIENCE
        </h2>
        <div className="h-[1px] bg-white/20 flex-grow"></div>
      </div>

      <div className="space-y-6">
        {internships.map((item, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-white/20 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-zinc-400 font-mono text-sm tracking-wide">
                  @ <span className="text-white font-semibold">{item.company}</span>
                </p>
              </div>
              <span className="text-xs text-zinc-500 font-mono tracking-wider uppercase border border-white/10 bg-white/5 px-3 py-1.5 rounded-full self-start sm:self-auto">
                {item.duration} | {item.location}
              </span>
            </div>

            <ul className="space-y-3 text-zinc-400 text-base leading-relaxed">
              {item.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/40 mt-1.5 text-xs">//</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}