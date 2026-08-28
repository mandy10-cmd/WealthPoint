import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

const useCountUp = (end, duration = 3500, start = false) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frame;

    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      
      // Smooth cubic ease-out curve (fast start, gradual deceleration to 3-4 seconds)
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return value;
};

const Hero = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Set duration to ~3.5 to 4 seconds for a rich, deliberate counting effect
  const clients = useCountUp(500, 3500, startCount);
  const years = useCountUp(10, 3000, startCount);
  const assets = useCountUp(20, 3800, startCount);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Starts counting as soon as 15% of banner is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-36 sm:pt-40 pb-12 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero clip 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/75 via-blue-950/45 to-blue-950/25"></div>
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 shadow-lg px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white">AMFI & IRDAI Registered</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Securing your{' '}
              <span className="bg-linear-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Today
              </span>
              ,
              <br />
              Multiplying your{' '}
              <span className="bg-linear-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Your trusted partner for smart financial planning. We provide expert guidance on
              investments, insurance, and wealth management to help you achieve your financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3.5 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Investing <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md text-white border-2 border-white/60 px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 p-6 sm:p-8 rounded-3xl shadow-2xl animate-float">
              
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white text-sm font-semibold">Portfolio Growth</p>
                    <h3 className="text-white text-3xl font-bold">+24.5%</h3>
                  </div>
                  <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                </div>
                <div className="h-20 flex items-end gap-2">
                  {[40, 60, 45, 70, 55, 85, 75, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-blue-400 to-white/70 rounded-t"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex flex-col items-center text-center">
                  <Shield className="text-white mb-2" size={24} />
                  <p className="text-white font-semibold text-xs sm:text-sm">Secure Investments</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex flex-col items-center text-center">
                  <Award className="text-white mb-2" size={24} />
                  <p className="text-white font-semibold text-xs sm:text-sm">Certified Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner — 3.5 to 4s smooth count animation */}
        <div className="mt-16 sm:mt-20" ref={statsRef}>
          <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/25">
              <div className="pt-4 sm:pt-0">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  {clients}+
                </h3>
                <p className="text-sm font-semibold text-white uppercase tracking-wider">
                  Happy Clients
                </p>
              </div>

              <div className="pt-4 sm:pt-0">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  {years}+
                </h3>
                <p className="text-sm font-semibold text-white uppercase tracking-wider">
                  Years Experience
                </p>
              </div>

              <div className="pt-4 sm:pt-0">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  ₹{assets}Cr+
                </h3>
                <p className="text-sm font-semibold text-white uppercase tracking-wider">
                  Assets Managed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;