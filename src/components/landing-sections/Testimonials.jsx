import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = t('testimonials.items', { returnObjects: true });
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            {t('testimonials.heading')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-desc">
            {t('testimonials.subheading')}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-sub-card backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-custom-border hover:border-accent/50 transition-all duration-300 transform hover:scale-105 max-w-2xl mx-auto">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-lg sm:text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-dispute-color mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img 
                      src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-dispute-color text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-secondary-desc">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-accent w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;