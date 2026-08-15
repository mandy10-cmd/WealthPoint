import { TrendingUp, PiggyBank, Users, Briefcase, FileText, Gift, Shield, Building } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: TrendingUp, title: 'Mutual Funds', desc: 'Diversified portfolio solutions for wealth creation', color: 'from-blue-500 to-blue-700' },
    { icon: PiggyBank, title: 'Fixed Deposits', desc: 'Safe & secure investment with guaranteed returns', color: 'from-purple-500 to-purple-700' },
    { icon: Users, title: 'P2P Lending', desc: 'High-yield peer-to-peer lending opportunities', color: 'from-pink-500 to-pink-700' },
    { icon: Briefcase, title: 'PMS', desc: 'Portfolio Management Services by experts', color: 'from-indigo-500 to-indigo-700' },
    { icon: FileText, title: 'NCDs / Bonds', desc: 'Fixed income securities for steady returns', color: 'from-green-500 to-green-700' },
    { icon: Shield, title: 'NPS', desc: 'National Pension Scheme for retirement planning', color: 'from-orange-500 to-orange-700' },
    { icon: Gift, title: 'Gift City', desc: 'International investment opportunities', color: 'from-red-500 to-red-700' },
    { icon: Building, title: 'Insurances', desc: 'Life, health & general insurance solutions', color: 'from-teal-500 to-teal-700' },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-900/10 text-blue-900 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete <span className="gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of financial products and services designed to help you 
            achieve your financial goals with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;