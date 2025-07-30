import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex">
      {/* Left side - empty for now */}
      <div className="w-1/2"></div>
      
      {/* Right side - Spline sphere */}
      <div className="w-2/3 h-screen flex items-center justify-center">
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/42kPNCpMxaBLAv9K/scene.splinecode" 
          />
        </div>
      </div>
    </main>
  );
}
