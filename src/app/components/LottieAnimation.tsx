"use client";
import Lottie from "lottie-react";

export default function LottieAnimation({ animationData, className }: { animationData: any, className?: string }) {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}