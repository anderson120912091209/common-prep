import Navigation from './components/navigation';
import Spline from '@splinetool/react-spline/next';
import FeaturedPrograms from './components/FeaturedPrograms';
import CustomProgramChat from './components/CustomProgramChat';

export default function Home() {
  return (
    <div className="page-container">
      <Navigation />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background Spline */}
          <div className="absolute inset-0 z-0">
            <div className="absolute scale-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] min-w-[1000px] min-h-[1000px]">
               <Spline scene="https://prod.spline.design/Dx9d1ZqtxSab9MfZ/scene.splinecode" /> 
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/0 to-white dark:from-black dark:via-black/0 dark:to-black pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-between min-h-screen pt-32 pb-4 px-4 sm:px-6 lg:px-8">
            {/* Top Content: Title & Description */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight mb-6">
                the future of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r 
                dark:from-white/90 dark:to-white/70 from-black/90 to-black/70">
                  college prep.
                </span>
              </h1>
              <div className="max-w-3xl mx-auto text-base md:text-lg font-light dark:text-white/70 text-black/70 leading-relaxed">
                <p>
                  We started out as a group of students providing{" "}
                  <span className="custom-underline-green dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black cursor-pointer transition-all 
                  duration-300 inline-block">
                    elite STEM courses
                  </span>{" "}
                  for olympiad and college prep. Now, we are trying to{" "}
                  <span className="custom-underline-green dark:text-white/80 text-black/80 dark:hover:text-white hover:text-black transition-all duration-300 inline-block">
                    democratize elite education
                  </span>{" "}
                  through software and artificial intelligence. 
                </p>
                <div className="flex flex-col items-center space-y-10 mt-12">
                  <div className="w-full max-w-2xl">
                    <CustomProgramChat />
                  </div>
                </div>
              </div>
            </div>            
                      </div>
          </section>

        <div className="text-center py-0">
          <span className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 tracking-widest">
            or...
          </span>
        </div>

        {/* Featured Programs Section */}
        <section className="py-6">
          <div className="flex px-5 justify-center">
            <FeaturedPrograms />
          </div>
        </section>
        
  
        {/* Pricing Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-blue-900/20 from-blue-100/20 dark:via-black via-transparent dark:to-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-green-900/20 from-green-100/20 dark:via-black via-transparent dark:to-black to-transparent"></div>
          <div className="text-center max-w-lg px-8 z-10">
            <h2 className="text-5xl font-serif mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg dark:text-white/70 text-black/70 mb-8">One plan. Unlimited access. Get all of our premium features, 24/7 AI support, and your personalized roadmap to success.</p>
            <div className="dark:bg-white/5 bg-gray-50 p-8 rounded-2xl border dark:border-white/10 border-gray-200 shadow-lg dark:shadow-none">
              <p className="text-5xl font-bold">$49<span className="text-lg font-light dark:text-white/60 text-black/60">/month</span></p>
              <button className="mt-6 bg-blue-500 text-white w-full py-3 rounded-lg font-medium tracking-wide transition-all duration-300 hover:bg-blue-600">
                Start Your 7-Day Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl px-8">
            <h2 className="text-6xl font-serif mb-6 leading-tight">Ready to Ace Your<br/>Next Exam?</h2>
            <p className="text-xl dark:text-white/70 text-black/70 mb-12 mx-auto max-w-2xl">Join thousands of students who have unlocked their potential with Common Prep.</p>
            <button className="group relative dark:bg-white bg-black dark:text-black text-white px-10 py-4 rounded-full font-medium text-base tracking-wide transition-all duration-300 dark:hover:bg-white/90 hover:bg-black/90">
              Get Started for Free
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}