import Navigation from './components/navigation';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="w-1/2 pl-24 pr-16">
            <div className="max-w-md">
              <h1 className="text-7xl font-serif leading-tight mb-8">
                the future of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/60">
                  college prep.
                </span>
              </h1>
              <div className="text-lg font-light text-white/70 leading-relaxed mb-12">
                <p>We leverage artificial intelligence to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Democratize elite college prep materials.</li>
                  <li>Provide 24/7 support with a system that never sleeps.</li>
                </ul>
              </div>
              <button className="group relative bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/90 hover:scale-105">
                Start Your Journey
                <span className="ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-screen">
            <Spline scene="https://prod.spline.design/42kPNCpMxaBLAv9K/scene.splinecode" />
          </div>
        </section>

        {/* AI Features Section */}
        <section className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-3xl px-8">
            <h2 className="text-5xl font-serif mb-6">AI-Powered Features</h2>
            <p className="text-lg text-white/70">Our platform leverages state-of-the-art artificial intelligence to create a study experience unlike any other. From personalized question banks to real-time feedback, we've got you covered.</p>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-3xl px-8">
            <h2 className="text-5xl font-serif mb-6">What Our Students Say</h2>
            <blockquote className="text-xl italic text-white/80">
              "Common Prep's AI didn't just help me study, it taught me how to learn. I've never felt more confident going into an exam."
            </blockquote>
            <cite className="block mt-4 text-white/60">- Alex Johnson</cite>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-3xl px-8">
            <h2 className="text-5xl font-serif mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/70">Get access to all our features with one simple plan. No hidden fees, no tiers, just the best AI test prep available.</p>
            <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-blue-600">
              View Pricing
            </button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-3xl px-8">
            <h2 className="text-5xl font-serif mb-6">Ready to Ace Your Next Exam?</h2>
            <p className="text-lg text-white/70 mb-8">Join thousands of students who have unlocked their potential with Common Prep.</p>
            <button className="group relative bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/90 hover:scale-100">
              Get Started for Free
              <span className="ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
