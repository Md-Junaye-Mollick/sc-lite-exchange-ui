import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialsData = t('testimonials.items', { returnObjects: true });
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-sub-card backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-custom-border hover:border-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg sm:text-xl">★</span>
                ))}
              </div>
              <p className="text-dispute-color mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {testimonial.name.charAt(0)}
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;