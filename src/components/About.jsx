import { 
  CheckCircle2, Award, Shield, Target, Heart, BookOpen,
  Quote, Briefcase
} from 'lucide-react';

const About = () => {
  const credentials = [
    { 
      icon: Award,
      title: 'AMFI Registered',
      subtitle: 'Mutual Funds Distributor',
      badge: 'ARN: 179208'
    },
    { 
      icon: Shield,
      title: 'IRDAI Registered',
      subtitle: 'Insurance Broker',
      badge: 'Licensed'
    },
    { 
      icon: Target,
      title: 'Goal-Based Planning',
      subtitle: 'Tailored strategies for your dreams',
      badge: 'Personalized'
    },
    { 
      icon: Heart,
      title: 'Transparent & Honest',
      subtitle: 'No hidden charges, ever',
      badge: '100% Ethical'
    },
  ];

  return (
    <section id="about" className="section-padding bg-linear-to-b from-white via-blue-50/20 to-white relative overflow-hidden md:-mb-16">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Wealth, <br className="hidden sm:block" />
            <span className="gradient-text">Creating Legacies</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than financial advisors — we're your partners in building 
            <span className="text-blue-900 font-semibold"> lasting prosperity for generations to come</span>
          </p>
        </div>

        {/* MERGED: FOUNDER + ABOUT US - SINGLE BLOCK */}
        <div className="grid lg:grid-cols-5 gap-10 items-center mb-20">
          
          {/* LEFT SIDE - Founder Photo (2 columns) */}
          <div className="lg:col-span-2 relative mt-4 md:mt-0">
            {/* Glow effect behind the frame */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-linear-to-br from-blue-200 to-indigo-200 rounded-3xl opacity-30 blur-2xl z-0"></div>
            
            <div className="relative z-10">
              {/* Added mb-8 here to give breathing room for the bottom badge */}
              <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-1.5 shadow-2xl mb-8">
                
                {/* Full Frame Photo Container */}
                <div className="relative rounded-[22px] aspect-square overflow-hidden group bg-blue-50">
                  <img
                    src="/founder photo.jpeg" 
                    alt="Kunal Peshne - Founder & Chief Consultant"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Gradient Overlay (ensures bottom text is always readable) */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 via-blue-900/10 to-transparent pointer-events-none"></div>

                  {/* Bottom Title Bar Overlaid on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center z-20">
                    <p className="text-white font-extrabold text-2xl tracking-wide">Kunal Peshne</p>
                    <p className="text-blue-200 text-xs sm:text-sm mt-1 font-medium uppercase tracking-wider">
                      Founder & Chief Consultant
                    </p>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-5 -right-4 bg-linear-to-br from-yellow-400 to-orange-500 px-3 py-2 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform z-30 border-2 border-white">
                  <div className="text-center">
                    <Award className="text-white mx-auto mb-1" size={18} />
                    <p className="text-white text-[9px] font-bold uppercase tracking-wider">Certified<br/>Advisor</p>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform z-30">
                  {/* <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <Briefcase className="text-white" size={18} />
                    </div>
                    <div className="pr-2">
                      <div className="text-lg font-black text-blue-900 leading-none mb-1">10+ Yrs</div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider leading-none">Experience</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Added mt-10 here so tags clear the overlapping absolute badge */}
              <div className="mt-10 flex flex-wrap justify-center gap-2 relative z-20">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-900 text-xs font-semibold rounded-full border border-blue-100">
                  <CheckCircle2 size={12} />
                  AMFI Certified
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                  <CheckCircle2 size={12} />
                  IRDAI Licensed
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full border border-orange-100">
                  <Award size={12} />
                  NISM Certified
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Combined Content (3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The Visionary Behind <span className="gradient-text">Wealth Point</span>
            </h3>

            <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-900 rounded-r-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Quote className="text-blue-900 shrink-0 mt-1" size={20} />
                <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                  "Financial freedom isn't a luxury reserved for the wealthy — it's a right every family deserves. My mission is to make expert wealth management accessible, transparent, and results-driven for every Indian."
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in India's financial services industry, <span className="font-semibold text-blue-900">Kunal Peshne</span> founded Wealth Point with a simple yet powerful vision — to make expert financial planning accessible to every Indian family.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Built on principles of <span className="font-semibold text-blue-900">transparency, integrity, and personalized service</span>, we help clients navigate everything from mutual funds and fixed deposits to sophisticated instruments like PMS, Gift City investments, and insurance planning — all backed by thorough research and your unique life goals.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="text-xl md:text-2xl font-bold text-blue-900">500+</div>
                <p className="text-[10px] text-gray-600 font-semibold uppercase">Clients Served</p>
              </div>
              <div className="text-center p-3 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="text-xl md:text-2xl font-bold text-emerald-700">₹20cr+</div>
                <p className="text-[10px] text-gray-600 font-semibold uppercase">Assets Managed</p>
              </div>
              <div className="text-center p-3 bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                <div className="text-xl md:text-2xl font-bold text-orange-700">10+</div>
                <p className="text-[10px] text-gray-600 font-semibold uppercase">Years Expertise</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Expertise Areas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Mutual Funds',
                  'PMS',
                  'Insurance',
                  'Retirement Planning',
                  'Tax Optimization',
                  'Estate Planning'
                ].map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-blue-100 hover:text-blue-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement Card - Full Width */}
        <div className="relative mb-0 bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-linear-to-br from-blue-900 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <BookOpen className="text-white" size={26} />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower every Indian family with the knowledge, tools, and guidance needed to build lasting wealth and achieve <span className="font-semibold text-blue-900">true financial freedom</span> — regardless of where they start their journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
           SVG WAVE DIVIDER - FULL WIDTH & OVERLAPPING
           ============================================ */}
      <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-8 leading-0 pointer-events-none z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          className="w-full h-30 md:h-45 block"
        >
          {/* Light back wave */}
          <path 
            d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" 
            fill="#93c5fd" 
            opacity="0.5"
          />
          {/* Medium wave */}
          <path 
            d="M0,120 C240,180 480,60 720,120 C960,180 1200,60 1440,120 L1440,200 L0,200 Z" 
            fill="#60a5fa" 
            opacity="0.7"
          />
          {/* Front dark wave */}
          <path 
            d="M0,140 C240,200 480,80 720,140 C960,200 1200,80 1440,140 L1440,200 L0,200 Z" 
            fill="#2563eb"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;