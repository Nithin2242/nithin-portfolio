"use client";

import Lottie from "lottie-react";

export default function LottieAnimation({ animationData }: { animationData: any }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        className="w-full h-auto max-w-[300px]" 
      />
    </div>
  );
}