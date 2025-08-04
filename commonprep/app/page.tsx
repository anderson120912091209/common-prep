import Navigation from './components/navigation';
import Spline from '@splinetool/react-spline/next';
import FeaturedPrograms from './components/FeaturedPrograms';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0">
          <div className="w-full md:w-1/2 text-center md:text-left px-8 md:pl-24 md:pr-16">
            <div className="max-w-md mx-auto md:mx-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight mb-8">
                the future of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/60">
                  college prep.
                </span>
              </h1>
              <div className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-12">
                <p>
                  We leverage{" "}
                  <span className="custom-underline-green text-white/80 hover:text-white cursor-pointer transition-all 
                  duration-300 inline-block">
                    artificial intelligence
                  </span>{" "}
                  & tutors with{" "}
                  <span className="custom-underline-green text-white/80 hover:text-white transition-all duration-300 inline-block">
                    specialized expertise
                  </span>{" "}
                  to cost down access to elite educational resources and opportunities for elite college admissions.
                </p>
               
              </div>
              <button className="group relative bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/90 hover:scale-100">
                Start Your Journey
                <span className="ml-3 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen mt-8 md:mt-0">
            <Spline scene="https://prod.spline.design/42kPNCpMxaBLAv9K/scene.splinecode" />
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-24">
          <div className="flex px-5 justify-center">
            <FeaturedPrograms />
          </div>
        </section>

        {/* AI Features Section - Redesigned */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-left max-w-4xl px-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-6">High<br/>Personalization</h2>
              <p className="text-lg text-white/70">Our platform leverages state-of-the-art artificial intelligence 
              to create a study experience unlike any other. It learns your style, 
              identifies weaknesses, and serves you questions that are perfectly tailored to you.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="font-semibold mb-4">Dynamic Question Bank</h3>
              <p className="text-sm text-white/60">Over 10,000+ questions that adapt in difficulty based on your performance.</p>
              <hr className="my-4 border-white/10" />
              <h3 className="font-semibold mb-4">Real-Time Feedback</h3>
              <p className="text-sm text-white/60">Instant analysis of your answers to help you understand mistakes immediately.</p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section - Redesigned */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl px-8">
            <h2 className="text-5xl font-serif mb-12">Trusted by Thousands</h2>
            <div className="relative">
              <div className="absolute -inset-8 opacity-20">
                <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
              </div>
              <blockquote className="text-2xl italic text-white/80 max-w-2xl mx-auto">
                "Common Prep's AI didn't just help me study, it taught me how to learn. I've never felt more confident going into an exam."
              </blockquote>
              <cite className="block mt-6 text-white/60">- Alex Johnson, Admitted to Stanford</cite>
            </div>
          </div>
        </section>

        {/* Pricing Section - Redesigned */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-900/20 via-black to-black"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-green-900/20 via-black to-black"></div>
          <div className="text-center max-w-lg px-8 z-10">
            <h2 className="text-5xl font-serif mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/70 mb-8">One plan. Unlimited access. Get all of our premium features, 24/7 AI support, and your personalized roadmap to success.</p>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="text-5xl font-bold">$49<span className="text-lg font-light text-white/60">/month</span></p>
              <button className="mt-6 bg-blue-500 text-white w-full py-3 rounded-lg font-medium tracking-wide transition-all duration-300 hover:bg-blue-600">
                Start Your 7-Day Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Redesigned */}
        <section className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl px-8">
            <h2 className="text-6xl font-serif mb-6 leading-tight">Ready to Ace Your<br/>Next Exam?</h2>
            <p className="text-xl text-white/70 mb-12 mx-auto max-w-2xl">Join thousands of students who have unlocked their potential with Common Prep.</p>
            <button className="group relative bg-white text-black px-10 py-4 rounded-full font-medium text-base tracking-wide transition-all duration-300 hover:bg-white/90">
              Get Started for Free
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
