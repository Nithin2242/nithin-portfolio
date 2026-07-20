import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    // The absolute positioning and negative z-index push it behind your content
    <div className="absolute inset-0 w-screen h-screen -z-10 pointer-events-auto">
      <Spline scene="https://prod.spline.design/JND8qR77l2aPCrXS/scene.splinecode" />
    </div>
  );
}