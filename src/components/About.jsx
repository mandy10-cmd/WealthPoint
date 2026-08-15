import { CheckCircle } from 'lucide-react';

const About = () => {
  const points = [
    'AMFI Registered Mutual Funds Distributor (ARN: 179208)',
    'IRDAI Registered Insurance Broker',
    'Personalized financial planning tailored to your goals',
    'Transparent advice with no hidden charges',
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-900/10 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-600 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-center">
                  <div className="inline-block p-4 bg-gradient-to-br from-blue-900 to-indigo-600 rounded-2xl mb-4">
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3v18h18v-2H5V3H3zm14.5 4L14 10.5l-3-3L6 12.5l1.5 1.5L11 10.5l3 3L19 8.5 17.5 7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">WEALTH POINT</h3>
                  <p className="text-gray-600 text-sm tracking-widest">FINANCIAL CONSULTANT</p>
                  <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-xs text-gray-500">AMFI ARN</p>
                      <p className="font-bold text-blue-900">179208</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">IRDAI</p>
                      <p className="font-bold text-blue-900">Registered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-1 bg-blue-900/10 text-blue-900 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted <span className="gradient-text">Financial Partner</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Wealth Point, we believe that financial planning is more than just numbers—it's about 
              securing your dreams and building a legacy. With years of expertise in the financial industry, 
              we're dedicated to helping individuals and families achieve their financial aspirations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our approach combines industry knowledge with personalized service to deliver solutions 
              that truly matter to you.
            </p>

            <div className="space-y-3">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-900 shrink-0 mt-0.5" size={22} />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;