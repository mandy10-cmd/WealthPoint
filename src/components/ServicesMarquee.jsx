const ServicesMarquee = () => {
  const services = [
    "Mutual Funds",
    "PMS (Portfolio Management)",
    "Insurance Planning",
    "Fixed Deposits",
    "Retirement Planning",
    "Tax Optimization",
    "Gift City Investments",
    "Estate Planning",
    "SIP Advisory",
    "Wealth Management",
  ];

  const Track = ({ prefix }) => (
    <div className="flex shrink-0 items-center py-2.5 sm:py-3">
      {services.map((service, idx) => (
        <div
          key={`${prefix}-${idx}`}
          className="flex items-center px-5 sm:px-8 shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2.5 sm:mr-3 shrink-0" />
          <span className="text-white font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
            {service}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed top-20 left-0 right-0 z-40 w-full bg-blue-900 overflow-hidden shadow-md">
      <div className="flex items-stretch w-full">
        {/* Label */}
        <div className="shrink-0 z-20 bg-linear-to-r from-yellow-400 to-orange-400 px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-center shadow-lg">
          <span className="text-blue-950 font-extrabold text-[10px] sm:text-xs tracking-[0.18em] uppercase whitespace-nowrap">
            Our Services
          </span>
        </div>

        {/* Scrolling area */}
        <div className="relative flex-1 min-w-0 overflow-hidden flex items-center">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-linear-to-r from-blue-900 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-linear-to-l from-blue-900 to-transparent" />

          <div className="flex w-max animate-services-marquee hover:[animation-play-state:paused]">
            <Track prefix="a" />
            <Track prefix="b" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes services-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .animate-services-marquee {
          animation: services-marquee 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesMarquee;

//if u want broader marquee
// const ServicesMarquee = () => {
//   const services = [
//     "Mutual Funds",
//     "PMS (Portfolio Management)",
//     "Insurance Planning",
//     "Fixed Deposits",
//     "Retirement Planning",
//     "Tax Optimization",
//     "Gift City Investments",
//     "Estate Planning",
//     "SIP Advisory",
//     "Wealth Management",
//   ];

//   const Track = ({ prefix }) => (
//     <div className="flex shrink-0 items-center py-4 sm:py-5">
//       {services.map((service, idx) => (
//         <div
//           key={`${prefix}-${idx}`}
//           className="flex items-center px-6 sm:px-10 shrink-0"
//         >
//           <span className="w-2 h-2 rounded-full bg-yellow-400 mr-3 sm:mr-4 shrink-0" />
//           <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide whitespace-nowrap">
//             {service}
//           </span>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="fixed top-20 left-0 right-0 z-40 w-full bg-blue-900 overflow-hidden shadow-lg">
//       <div className="flex items-stretch w-full min-h-[56px] sm:min-h-[64px]">
//         {/* Label — wider & taller */}
//         <div className="shrink-0 z-20 bg-linear-to-r from-yellow-400 to-orange-400 px-5 sm:px-10 py-4 sm:py-5 flex items-center justify-center shadow-lg">
//           <span className="text-blue-950 font-extrabold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap">
//             Our Services
//           </span>
//         </div>

//         {/* Scrolling area */}
//         <div className="relative flex-1 min-w-0 overflow-hidden flex items-center">
//           <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-14 z-10 bg-linear-to-r from-blue-900 to-transparent" />
//           <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-14 z-10 bg-linear-to-l from-blue-900 to-transparent" />

//           <div className="flex w-max animate-services-marquee hover:[animation-play-state:paused]">
//             <Track prefix="a" />
//             <Track prefix="b" />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes services-marquee {
//           from { transform: translate3d(0, 0, 0); }
//           to   { transform: translate3d(-50%, 0, 0); }
//         }
//         .animate-services-marquee {
//           animation: services-marquee 30s linear infinite;
//           will-change: transform;
//           backface-visibility: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesMarquee;