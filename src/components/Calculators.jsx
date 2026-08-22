import { useState, useEffect } from 'react';
import { 
  Calculator, TrendingUp, PiggyBank, Target, IndianRupee, 
  Calendar, Percent, ArrowRight, Sparkles, X 
} from 'lucide-react';

const Calculators = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('sip');

  const tabs = [
    { id: 'sip', name: 'SIP Calculator', icon: TrendingUp },
    { id: 'lumpsum', name: 'Lump Sum', icon: PiggyBank },
    { id: 'fd', name: 'FD Calculator', icon: Calculator },
    { id: 'goal', name: 'Goal Planner', icon: Target },
  ];

  // Smooth scroll to calculator on mount
  useEffect(() => {
    const element = document.getElementById('calculators');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section 
      id="calculators" 
      className="section-padding bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden animate-fade-in"
    >
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 bg-white border-2 border-red-200 text-red-600 rounded-full font-semibold text-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-md hover:shadow-xl"
            aria-label="Close Calculators"
          >
            <X size={18} className="group-hover:rotate-90 transition-transform" />
            Close Calculators
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6 shadow-sm">
            <Sparkles className="text-blue-900" size={16} />
            <span className="text-sm font-semibold text-blue-900 tracking-wide">
              FINANCIAL CALCULATORS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Plan Your <span className="gradient-text">Financial Future</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use our smart calculators to plan your investments, estimate returns, and 
            <span className="text-blue-900 font-semibold"> visualize your wealth growth </span> 
            journey with precision.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-900 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'
              }`}
            >
              <tab.icon size={18} />
              <span className="text-sm md:text-base">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {activeTab === 'sip' && <SIPCalculator />}
          {activeTab === 'lumpsum' && <LumpSumCalculator />}
          {activeTab === 'fd' && <FDCalculator />}
          {activeTab === 'goal' && <GoalCalculator />}
        </div>

        {/* Bottom Close Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm font-semibold transition-colors group"
          >
            <X size={16} className="group-hover:rotate-90 transition-transform" />
            Close Calculator Section
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SIP CALCULATOR
// ============================================
const SIPCalculator = () => {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const futureValue = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const invested = monthly * months;
    const returns = futureValue - invested;
    
    setResult({
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(futureValue),
    });
  }, [monthly, years, rate]);

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Input Section */}
      <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">SIP Calculator</h3>
            <p className="text-sm text-gray-600">Calculate your systematic investment returns</p>
          </div>
        </div>

        {/* Monthly Investment */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <IndianRupee size={16} className="text-blue-900" />
              Monthly Investment
            </label>
            <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">
              ₹ {monthly.toLocaleString('en-IN')}
            </div>
          </div>
          <input
            type="range"
            min="500"
            max="200000"
            step="500"
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹500</span>
            <span>₹2,00,000</span>
          </div>
        </div>

        {/* Time Period */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar size={16} className="text-blue-900" />
              Investment Period
            </label>
            <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {years} {years === 1 ? 'Year' : 'Years'}
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>
        </div>

        {/* Expected Return */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Percent size={16} className="text-blue-900" />
              Expected Annual Return
            </label>
            <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {rate}% p.a.
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="p-8 lg:p-10 bg-gradient-to-br from-blue-900 to-indigo-700 text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sparkles size={22} /> Your Investment Summary
        </h3>

        <div className="space-y-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Total Invested Amount</p>
            <p className="text-2xl md:text-3xl font-bold">
              ₹ {result.invested.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Estimated Returns</p>
            <p className="text-2xl md:text-3xl font-bold text-green-300">
              + ₹ {result.returns.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-5 rounded-2xl shadow-xl">
            <p className="text-white/90 text-sm mb-1 font-semibold">Total Wealth Created </p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              ₹ {result.total.toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        {/* Visual Chart */}
        <div className="mb-6">
          <p className="text-sm text-white/80 mb-3 font-semibold">Investment Breakdown</p>
          <div className="h-8 rounded-full overflow-hidden bg-white/10 flex">
            <div
              className="bg-blue-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.invested / result.total) * 100}%` }}
            >
              {Math.round((result.invested / result.total) * 100)}%
            </div>
            <div
              className="bg-green-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.returns / result.total) * 100}%` }}
            >
              {Math.round((result.returns / result.total) * 100)}%
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Invested
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div> Returns
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full bg-white text-blue-900 py-3 rounded-xl font-bold text-center hover:bg-blue-50 transition-all shadow-lg"
        >
          Start SIP Now →
        </a>
      </div>
    </div>
  );
};

// ============================================
// LUMP SUM CALCULATOR
// ============================================
const LumpSumCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    const futureValue = amount * Math.pow(1 + rate / 100, years);
    const returns = futureValue - amount;
    
    setResult({
      invested: Math.round(amount),
      returns: Math.round(returns),
      total: Math.round(futureValue),
    });
  }, [amount, years, rate]);

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      <div className="p-8 lg:p-10 bg-linear-to-br from-gray-50 to-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
            <PiggyBank className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Lump Sum Calculator</h3>
            <p className="text-sm text-gray-600">Calculate one-time investment returns</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <IndianRupee size={16} className="text-purple-700" />
              Investment Amount
            </label>
            <div className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              ₹ {amount.toLocaleString('en-IN')}
            </div>
          </div>
          <input
            type="range"
            min="1000"
            max="10000000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1,000</span>
            <span>₹1 Crore</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar size={16} className="text-purple-700" />
              Investment Period
            </label>
            <div className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {years} {years === 1 ? 'Year' : 'Years'}
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Percent size={16} className="text-purple-700" />
              Expected Annual Return
            </label>
            <div className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {rate}% p.a.
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-linear-to-br from-purple-900 to-indigo-700 text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sparkles size={22} /> Your Investment Summary
        </h3>

        <div className="space-y-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Invested Amount</p>
            <p className="text-2xl md:text-3xl font-bold">
              ₹ {result.invested.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Estimated Returns</p>
            <p className="text-2xl md:text-3xl font-bold text-green-300">
              + ₹ {result.returns.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-linear-to-br from-yellow-400 to-orange-400 p-5 rounded-2xl shadow-xl">
            <p className="text-white/90 text-sm mb-1 font-semibold">Total Wealth Created </p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              ₹ {result.total.toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white/80 mb-3 font-semibold">Investment Breakdown</p>
          <div className="h-8 rounded-full overflow-hidden bg-white/10 flex">
            <div
              className="bg-purple-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.invested / result.total) * 100}%` }}
            >
              {Math.round((result.invested / result.total) * 100)}%
            </div>
            <div
              className="bg-green-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.returns / result.total) * 100}%` }}
            >
              {Math.round((result.returns / result.total) * 100)}%
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div> Invested
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div> Returns
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full bg-white text-purple-900 py-3 rounded-xl font-bold text-center hover:bg-purple-50 transition-all shadow-lg"
        >
          Invest Now →
        </a>
      </div>
    </div>
  );
};

// ============================================
// FD CALCULATOR
// ============================================
const FDCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(7);
  const [frequency, setFrequency] = useState(4); // Quarterly
  const [result, setResult] = useState({ invested: 0, interest: 0, total: 0 });

  useEffect(() => {
    // Compound Interest Formula: A = P(1 + r/n)^(n*t)
    const maturityValue = amount * Math.pow(1 + rate / 100 / frequency, frequency * years);
    const interest = maturityValue - amount;
    
    setResult({
      invested: Math.round(amount),
      interest: Math.round(interest),
      total: Math.round(maturityValue),
    });
  }, [amount, years, rate, frequency]);

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      <div className="p-8 lg:p-10 bg-linear-to-br from-gray-50 to-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
            <Calculator className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">FD Calculator</h3>
            <p className="text-sm text-gray-600">Calculate your Fixed Deposit maturity</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <IndianRupee size={16} className="text-emerald-700" />
              Deposit Amount
            </label>
            <div className="bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              ₹ {amount.toLocaleString('en-IN')}
            </div>
          </div>
          <input
            type="range"
            min="1000"
            max="10000000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1,000</span>
            <span>₹1 Crore</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar size={16} className="text-emerald-700" />
              Tenure
            </label>
            <div className="bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {years} {years === 1 ? 'Year' : 'Years'}
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 Year</span>
            <span>20 Years</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Percent size={16} className="text-emerald-700" />
              Interest Rate
            </label>
            <div className="bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {rate}% p.a.
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            step="0.25"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>15%</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Compounding Frequency
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { value: 1, label: 'Yearly' },
              { value: 2, label: 'Half Yearly' },
              { value: 4, label: 'Quarterly' },
              { value: 12, label: 'Monthly' },
            ].map((freq) => (
              <button
                key={freq.value}
                onClick={() => setFrequency(freq.value)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  frequency === freq.value
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-gradient-to-br from-emerald-900 to-teal-700 text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sparkles size={22} /> FD Maturity Summary
        </h3>

        <div className="space-y-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Principal Amount</p>
            <p className="text-2xl md:text-3xl font-bold">
              ₹ {result.invested.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">Interest Earned</p>
            <p className="text-2xl md:text-3xl font-bold text-green-300">
              + ₹ {result.interest.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="bg-linear-to-br from-yellow-400 to-orange-400 p-5 rounded-2xl shadow-xl">
            <p className="text-white/90 text-sm mb-1 font-semibold">Maturity Value </p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              ₹ {result.total.toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white/80 mb-3 font-semibold">Breakdown</p>
          <div className="h-8 rounded-full overflow-hidden bg-white/10 flex">
            <div
              className="bg-emerald-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.invested / result.total) * 100}%` }}
            >
              {Math.round((result.invested / result.total) * 100)}%
            </div>
            <div
              className="bg-green-400 h-full flex items-center justify-center text-xs font-bold"
              style={{ width: `${(result.interest / result.total) * 100}%` }}
            >
              {Math.round((result.interest / result.total) * 100)}%
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Principal
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div> Interest
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full bg-white text-emerald-900 py-3 rounded-xl font-bold text-center hover:bg-emerald-50 transition-all shadow-lg"
        >
          Open FD Account →
        </a>
      </div>
    </div>
  );
};

// ============================================
// GOAL PLANNER CALCULATOR
// ============================================
const GoalCalculator = () => {
  const [goal, setGoal] = useState(5000000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);
  const [result, setResult] = useState({ monthlySip: 0, lumpSum: 0 });

  useEffect(() => {
    // Monthly SIP required
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const sipAmount = goal / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    // Lump sum required today
    const lumpSum = goal / Math.pow(1 + rate / 100, years);
    
    setResult({
      monthlySip: Math.round(sipAmount),
      lumpSum: Math.round(lumpSum),
    });
  }, [goal, years, rate]);

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <Target className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Goal Planner</h3>
            <p className="text-sm text-gray-600">Plan how much to invest for your goal</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Target size={16} className="text-orange-600" />
              Target Amount (Goal)
            </label>
            <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
              ₹ {goal.toLocaleString('en-IN')}
            </div>
          </div>
          <input
            type="range"
            min="100000"
            max="100000000"
            step="100000"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1 Lakh</span>
            <span>₹10 Crore</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar size={16} className="text-orange-600" />
              Time to Achieve Goal
            </label>
            <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {years} {years === 1 ? 'Year' : 'Years'}
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Percent size={16} className="text-orange-600" />
              Expected Return
            </label>
            <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
              {rate}% p.a.
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Quick Goals */}
        <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
          <p className="text-xs font-semibold text-orange-900 mb-3">POPULAR GOALS:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { setGoal(2000000); setYears(5); }}
              className="text-xs bg-white p-2 rounded-lg hover:bg-orange-100 transition-colors text-left"
            >
              🚗 Car - ₹20L
            </button>
            <button
              onClick={() => { setGoal(10000000); setYears(15); }}
              className="text-xs bg-white p-2 rounded-lg hover:bg-orange-100 transition-colors text-left"
            >
              🏠 House - ₹1Cr
            </button>
            <button
              onClick={() => { setGoal(5000000); setYears(20); }}
              className="text-xs bg-white p-2 rounded-lg hover:bg-orange-100 transition-colors text-left"
            >
              🎓 Child Education - ₹50L
            </button>
            <button
              onClick={() => { setGoal(30000000); setYears(25); }}
              className="text-xs bg-white p-2 rounded-lg hover:bg-orange-100 transition-colors text-left"
            >
              🏖️ Retirement - ₹3Cr
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-gradient-to-br from-orange-900 to-red-800 text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sparkles size={22} /> Investment Required
        </h3>

        <div className="mb-6 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <p className="text-white/80 text-sm mb-2">Your Financial Goal </p>
          <p className="text-3xl md:text-4xl font-bold">
            ₹ {goal.toLocaleString('en-IN')}
          </p>
          <p className="text-white/60 text-xs mt-1">in {years} years</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-5 rounded-2xl shadow-xl">
            <p className="text-white/90 text-sm mb-1 font-semibold">Monthly SIP Required</p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              ₹ {result.monthlySip.toLocaleString('en-IN')}
            </p>
            <p className="text-white/80 text-xs mt-2">
              Start a SIP of this amount monthly
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-sm mb-1">OR Lump Sum Investment Today</p>
            <p className="text-2xl md:text-3xl font-bold">
              ₹ {result.lumpSum.toLocaleString('en-IN')}
            </p>
            <p className="text-white/60 text-xs mt-1">
              One-time investment needed today
            </p>
          </div>
        </div>

        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mb-6">
          <p className="text-sm text-white/90">
            💡 <strong>Pro Tip:</strong> Start early! Time is the biggest asset in wealth creation.
          </p>
        </div>

        <a
          href="#contact"
          className="block w-full bg-white text-orange-900 py-3 rounded-xl font-bold text-center hover:bg-orange-50 transition-all shadow-lg"
        >
          Start Planning Now →
        </a>
      </div>
    </div>
  );
};

export default Calculators;