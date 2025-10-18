import React from 'react';
import { BarChart3, Bitcoin, Globe, Users } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    { value: 120, suffix: "M+", label: "Registered Users", icon: Users },
    { value: 76, suffix: "B", label: "24h Trading Volume", icon: BarChart3, prefix: "$" },
    { value: 350, suffix: "+", label: "Cryptocurrencies Listed", icon: Bitcoin },
    { value: 180, suffix: "+", label: "Countries Supported", icon: Globe },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;