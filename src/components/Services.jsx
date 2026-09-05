import { 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const services = [
    { 
      video: '/service-clips/mutual funds.webm',
      poster: '/sec-img/mutual fund.jfif',
      title: 'Mutual Funds', 
      desc: 'Diversified portfolio solutions crafted by experts for consistent long-term wealth creation',
      features: ['SIP & Lump Sum', 'Tax Saving ELSS', 'Goal-Based Planning'],
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-700',
      stat: '15%+',
      statLabel: 'Avg Returns'
    },
    { 
      video: '/service-clips/fixed-deposits.mp4',
      poster: '/sec-img/fixed dep.jpg',
      title: 'Fixed Deposits', 
      desc: 'Rock-solid safe investments with guaranteed returns from India\'s most trusted institutions',
      features: ['Corporate FDs', 'Bank FDs', 'High Interest Rates'],
      color: 'from-purple-500 to-purple-700',
      textColor: 'text-purple-700',
      stat: '9.5%',
      statLabel: 'Up to Interest'
    },
    { 
      video: '/service-clips/p2p-lending.mp4',
      poster: '/sec-img/p2p.jpg',
      title: 'P2P Lending', 
      desc: 'Revolutionary peer-to-peer lending with attractive returns and RBI-regulated platforms',
      features: ['High Yields', 'Monthly Income', 'RBI Regulated'],
      color: 'from-pink-500 to-pink-700',
      textColor: 'text-pink-700',
      stat: '12%+',
      statLabel: 'Returns p.a.'
    },
    { 
      video: '/service-clips/pms.mp4',
      poster: '/services/pms.png',
      title: 'PMS', 
      desc: 'Elite Portfolio Management Services by SEBI-registered professionals for HNI investors',
      features: ['Personalized', 'SEBI Registered', 'Expert Managed'],
      color: 'from-indigo-500 to-indigo-700',
      textColor: 'text-indigo-700',
      stat: '₹50L+',
      statLabel: 'Min Investment'
    },
    { 
      video: '/service-clips/ncd-bonds.mp4',
      poster: '/sec-img/NCD.png',
      title: 'NCDs / Bonds', 
      desc: 'Premium fixed income securities delivering steady returns with capital protection',
      features: ['AAA Rated', 'Fixed Returns', 'Tax Efficient'],
      color: 'from-emerald-500 to-emerald-700',
      textColor: 'text-emerald-700',
      stat: '10%',
      statLabel: 'Fixed Returns'
    },
    { 
      video: '/service-clips/nps.mp4',
      poster: '/sec-img/NPS.png',
      title: 'NPS', 
      desc: 'Government-backed National Pension Scheme for a stress-free, prosperous retirement',
      features: ['Tax Benefits', 'Govt Backed', 'Retirement Corpus'],
      color: 'from-orange-500 to-orange-700',
      textColor: 'text-orange-700',
      stat: '₹2L',
      statLabel: 'Tax Savings'
    },
    { 
      video: '/service-clips/gift-city.mp4',
      poster: '/sec-img/giftcity.png',
      title: 'Gift City', 
      desc: 'Access exclusive international investments through India\'s premier financial hub',
      features: ['Global Access', 'Tax Benefits', 'USD Investments'],
      color: 'from-rose-500 to-rose-700',
      textColor: 'text-rose-700',
      stat: '$250K',
      statLabel: 'LRS Limit'
    },
    { 
      video: '/service-clips/insurance.mp4',
      poster: '/sec-img/insurance.jfif',
      title: 'Insurance', 
      desc: 'Comprehensive life, health & general insurance to safeguard your family\'s future',
      features: ['Life & Health', 'Best Premiums', 'Claim Support'],
      color: 'from-teal-500 to-teal-700',
      textColor: 'text-teal-700',
      stat: '₹1Cr+',
      statLabel: 'Coverage'
    },
  ];

  return (
    <section id="services" className="section-padding bg-linear-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Wealth Building <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions That Deliver
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From safe fixed deposits to high-growth mutual funds, we offer a complete spectrum of 
            <span className="text-blue-900 font-semibold"> expertly curated financial products </span> 
            to help you build, protect, and multiply your wealth systematically.
          </p>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm">
            {['SEBI Compliant', 'AMFI Certified', 'IRDAI Registered', '100% Transparent'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="text-green-600" size={18} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 relative">
          <div className="bg-linear-to-r from-blue-900 via-indigo-800 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Not Sure Where to Start? 
                </h3>
                <p className="text-blue-100 text-lg">
                  Get a <span className="font-bold text-white">FREE personalized consultation</span> from our experts today!
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap"
              >
                Book Free Consultation
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card with hover-video (light mode only)
const ServiceCard = ({ service }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
    >
      {/* Video Preview */}
      <div className="relative w-full h-44 overflow-hidden bg-gray-100">
        <video
          ref={videoRef}
          src={service.video}
          poster={service.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-linear-to-t ${service.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Stat Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
          <div className={`text-sm font-bold bg-linear-to-br ${service.color} bg-clip-text text-transparent`}>
            {service.stat}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
          {service.desc}
        </p>

        <div className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color}`}></div>
              <span className="text-xs text-gray-600 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className={`inline-flex items-center gap-1 text-sm font-semibold ${service.textColor} hover:gap-2 transition-all mt-auto pt-3 border-t border-gray-100`}
        >
          Learn More 
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Services;