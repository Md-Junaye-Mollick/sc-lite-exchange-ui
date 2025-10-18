import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialsData = t('testimonials.items', { returnObjects: true });
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800/30 to-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">{t('testimonials.heading')}</h2>
          <p className="text-xl text-gray-400">{t('testimonials.subheading')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
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