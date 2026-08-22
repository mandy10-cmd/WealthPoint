import {
  Award,
  Users,
  TrendingUp,
  Headphones,
  Shield,
  Zap,
  Star,
  CheckCircle2,
  Sparkles,
  Target,
  Clock,
  HandshakeIcon,
  Trophy,
  ThumbsUp,
  Rocket,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Experts",
      desc: "AMFI & IRDAI registered professionals with proven expertise in wealth management",
      highlight: "AMFI Certified",
      stat: "100%",
      statLabel: "Compliant",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      desc: "Your goals are our priority. Personalized solutions crafted for every client",
      highlight: "500+ Happy Clients",
      stat: "4.9★",
      statLabel: "Rated",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      desc: "Decade of experience helping clients grow their wealth systematically",
      highlight: "₹100Cr+ Managed",
      stat: "10+",
      statLabel: "Years",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Our expert support team is always ready to answer your queries promptly",
      highlight: "Quick Response",
      stat: "24/7",
      statLabel: "Available",
    },
    /* { 
      icon: Shield, 
      title: '100% Transparent', 
      desc: 'Zero hidden charges. Complete transparency in all our processes and fees',
      highlight: 'No Hidden Fees',
      stat: '0%',
      statLabel: 'Hidden Cost'
    },
    { 
      icon: Zap, 
      title: 'Fast Processing', 
      desc: 'Quick onboarding and same-day investment processing for all your needs',
      highlight: 'Same Day Service',
      stat: '<24h',
      statLabel: 'Processing'
    },
    { 
      icon: Target, 
      title: 'Goal-Based Planning', 
      desc: 'Customized investment strategies aligned with your specific life goals',
      highlight: 'Personalized',
      stat: '50+',
      statLabel: 'Products'
    },
    { 
      icon: Trophy, 
      title: 'Award-Winning Service', 
      desc: 'Recognized excellence in financial advisory and customer satisfaction',
      highlight: 'Top Rated',
      stat: 'A+',
      statLabel: 'Rating'
    }, */
  ];

  return (
    <section
      id="why-us"
      className="section-padding bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 shadow-lg">
            <Sparkles className="text-yellow-400" size={16} />
            <span className="text-sm font-semibold text-white tracking-wide">
              WHY CHOOSE WEALTH POINT
            </span>
          </div> */}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The{" "}
            <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Wealth Point
            </span>{" "}
            Advantage
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join{" "}
            <span className="text-yellow-400 font-bold">
              500+ smart investors
            </span>{" "}
            who trust us to grow, protect, and multiply their wealth with expert
            guidance and proven strategies.
          </p>

          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="text-yellow-400 fill-yellow-400"
                  size={22}
                />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">4.9/5</span>
            <span className="text-white/70 text-sm">(from 500+ clients)</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Stat Badge */}
              <div className="absolute top-4 right-4 bg-linear-to-br from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {feature.stat}
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-linear-to-br from-white to-white/80 rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <feature.icon className="text-blue-900" size={26} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {feature.desc}
              </p>

              {/* Highlight Badge */}
              <div className="flex items-center gap-1.5 pt-3 border-t border-white/10">
                <CheckCircle2 className="text-green-400" size={14} />
                <span className="text-xs text-green-300 font-semibold">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statistics Bar */}
        {/* <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by Thousands of Investors 🎯
            </h3>
            <p className="text-white/70">Our numbers speak for our excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                <Users className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-white/70 text-sm font-medium mt-1">Happy Investors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                ₹100Cr+
              </div>
              <p className="text-white/70 text-sm font-medium mt-1">Assets Managed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                <Clock className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                10+
              </div>
              <p className="text-white/70 text-sm font-medium mt-1">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                <ThumbsUp className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                98%
              </div>
              <p className="text-white/70 text-sm font-medium mt-1">Client Retention</p>
            </div>
          </div>
        </div> */}

        {/* Client Testimonials Preview */}
        <div className="mb-16">
          {/* Testimonials Header */}
          <div className="text-center mb-10">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-xs font-semibold text-white tracking-wider">
                CLIENT STORIES
              </span>
            </div> */}
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              What Our Clients Say About Us
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it — hear from investors who've
              transformed their financial future with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Honestly, I was skeptical about mutual funds initially. But after a detailed consultation, they helped me build a portfolio that aligned with my kids' education goals. Started with ₹15K SIP in 2022, now seeing consistent 14-15% returns. The quarterly reviews are what set them apart.",
                name: "Kunal Raut",
                role: "Owner, Kumar Textiles",
                location: "Ahmedabad",
                rating: 4,
                avatar: "K",
                avatarBg: "from-blue-500 to-blue-700",
                investment: "Investing since 2022",
                verified: true,
              },
              {
                text: "As someone working in IT, I always thought I could manage my finances myself. Wrong! After losing money in random stocks, I approached Wealth Point. Their team took time to understand my risk appetite before suggesting anything. My retirement corpus is finally on track.",
                name: "Kartik Prayagi",
                role: "Senior Software Engineer, TCS",
                location: "Nagpur",
                rating: 5,
                avatar: "K",
                avatarBg: "from-purple-500 to-pink-500",
                investment: "Client since 2024",
                verified: true,
              },
              {
                text: "Being a doctor, I hardly get time to track markets. What I appreciate most is their proactive approach — they call before I even think about my investments. Helped me diversify across MFs, FDs, and insurance. My CA also verified — everything is 100% legitimate and tax-efficient.",
                name: "Dr. Amit Patel",
                role: "Cardiologist, Apollo Hospital",
                location: "Mumbai",
                rating: 5,
                avatar: "A",
                avatarBg: "from-emerald-500 to-teal-600",
                investment: "3+ Years Client",
                verified: true,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Quote Mark Decoration */}
                <div className="absolute -top-4 -right-2 text-6xl text-yellow-400/30 font-serif leading-none select-none">
                  "
                </div>

                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="text-yellow-400 fill-yellow-400"
                        size={16}
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-green-500/20 border border-green-400/30 px-2 py-0.5 rounded-full">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-green-300 text-xs font-semibold">
                        Verified
                      </span>
                    </div>
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 text-sm leading-relaxed mb-6 relative z-10">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/70 text-xs mb-1">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-white/50">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {testimonial.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {testimonial.investment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Link */}
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors group"
            >
              <span className="border-b border-dashed border-white/40 group-hover:border-white pb-0.5">
                Read more reviews from our happy clients
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="relative bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"> */}
        {/* Decorative Elements */}
        {/* <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div> */}

        {/* <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-3">
                <Rocket className="text-white" size={16} />
                <span className="text-white text-sm font-semibold">LIMITED TIME OFFER</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Ready to Grow Your Wealth?
              </h3>
              <p className="text-white/90 text-lg">
                Get a <span className="font-bold">FREE consultation</span> worth ₹5,000 today!
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap group"
            >
              Claim Free Consultation
              <Rocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
