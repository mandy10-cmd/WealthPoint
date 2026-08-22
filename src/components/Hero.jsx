import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
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
          {/* 👇 Change 'hero-video.mp4' to your actual video filename */}
          <source src="/hero clip 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-linear-to-br from-blue-950/85 via-blue-900/75 to-indigo-900/85"></div> */}
        
        {/* Optional pattern overlay for extra professional look */}
        {/* <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div> */}
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl z-0"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">AMFI & IRDAI Registered</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Securing your{' '}
              <span className="bg-linear-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Today
              </span>
              ,
              <br />
              Multiplying your{' '}
              <span className="bg-linear-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Your trusted partner for smart financial planning. We provide expert guidance on
              investments, insurance, and wealth management to help you achieve your financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Investing <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">500+</h3>
                <p className="text-sm text-white/80">Happy Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">10+</h3>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">₹20Cr+</h3>
                <p className="text-sm text-white/80">Assets Managed</p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/80 text-sm">Portfolio Growth</p>
                    <h3 className="text-white text-3xl font-bold">+24.5%</h3>
                  </div>
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                </div>
                <div className="h-20 flex items-end gap-2">
                  {[40, 60, 45, 70, 55, 85, 75, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-400 to-white/70 rounded-t"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <Shield className="text-white mb-2" size={24} />
                  <p className="text-white font-semibold text-sm">Secure Investments</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <Award className="text-white mb-2" size={24} />
                  <p className="text-white font-semibold text-sm">Certified Expert</p>
                </div>
              </div>
            </div>

            {/* Floating ARN Badge */}
            <div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <p className="text-xs text-gray-500">ARN</p>
              <p className="font-bold text-blue-900">179208</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-xs uppercase tracking-widest">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;