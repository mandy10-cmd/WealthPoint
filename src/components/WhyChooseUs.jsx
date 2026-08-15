import { Award, Users, TrendingUp, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: Award, title: 'Certified Experts', desc: 'AMFI & IRDAI registered professionals with proven expertise' },
    { icon: Users, title: 'Client-First Approach', desc: 'Your goals are our priority. Personalized solutions for every client' },
    { icon: TrendingUp, title: 'Proven Track Record', desc: 'Years of experience helping clients grow their wealth systematically' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support team always ready to answer your queries' },
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-blue-900 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Wealth Point Advantage
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover why hundreds of clients trust us with their financial future
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-blue-900" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;