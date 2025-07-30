import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex">
      {/* Left side - Content */}
      <div className="w-1/2 flex items-center pl-24 pr-16">
        <div className="max-w-md">
          {/* Logo */}
          <div className="mb-16">
            <div className="text-white/60 text-xs font-light tracking-[0.4em] uppercase mb-2">
              Common Prep
            </div>
            <div className="text-white/40 text-xs tracking-[0.2em]">
              BACKED BY AI
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl font-serif leading-[0.9] text-white mb-8">
            The Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400">
              Test Prep
            </span>
          </h1>
          
          {/* Description */}
          <div className="space-y-6 text-white/70 text-lg leading-[1.7] font-light mb-12">
            <p>
              We're building the most advanced test preparation platform using cutting-edge AI. 
              Personalized learning that adapts to your unique strengths and weaknesses.
            </p>
            <p>
              From SAT to GRE, our intelligent system creates custom study plans that evolve 
              with your progress, ensuring you reach your highest potential.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-16">
            <button className="group relative bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/90 hover:scale-105">
              Start Your Journey
              <span className="ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex space-x-8 text-white/50 text-xs">
            <div>
              <div className="text-white/80 text-lg font-medium">10K+</div>
              <div className="tracking-[0.1em]">Students</div>
            </div>
            <div>
              <div className="text-white/80 text-lg font-medium">95%</div>
              <div className="tracking-[0.1em]">Success Rate</div>
            </div>
            <div>
              <div className="text-white/80 text-lg font-medium">24/7</div>
              <div className="tracking-[0.1em]">AI Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Spline sphere */}
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/42kPNCpMxaBLAv9K/scene.splinecode" 
          />
        </div>
      </div>
    </main>
  );
}
