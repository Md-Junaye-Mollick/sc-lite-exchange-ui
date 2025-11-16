import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  
  const statsData = t('stats.items', { returnObjects: true }) || [];
  const statsArray = Array.isArray(statsData) ? statsData : [];

  return (
    <section className="bg-sub-card border-b border-t border-custom-border py-12 sm:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {statsArray.map((stat, idx) => {
            const icons = [Users, BarChart3, Bitcoin, Globe];
            const Icon = icons[idx];
            
            return (
              <div key={idx} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl sm:rounded-2xl group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                </p>
                <p className="text-secondary-desc text-sm sm:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;