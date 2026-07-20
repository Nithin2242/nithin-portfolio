"use client";

import React from 'react';

export default function Experience() {
  const internships = [
    {
      role: "Android App Development using Generative AI Intern",
      company: "MindMatrix",
      duration: "Feb 2026 -May 2026",
      location: "Bangalore, India",
      points: [
        "Developed a full-stack Android application using Jetpack Compose and Firebase to connect blood donors with patients in real-time, reducing emergency response times.",
        "Implemented real-time request posting with Google Maps integration and 10km radius donor matching using Firebase Cloud Functions and push notifications.",
        "Built a complete user management system including phone OTP authentication, donation history tracking, and availability management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Work & Internship Experience</h2>
      <div className="space-y-6">
        {internships.map((item, index) => (
          <div key={index} className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-400">
                {item.role} <span className="text-gray-300">@ {item.company}</span>
              </h3>
              <span className="text-sm text-gray-400 font-mono mt-1 sm:mt-0">
                {item.duration} | {item.location}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
              {item.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}