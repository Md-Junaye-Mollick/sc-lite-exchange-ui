import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

const Testimonials = () => {
  return (
    <div>
            {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Millions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See what our traders are saying about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'Day Trader', content: 'The execution speed is incredible. I\'ve never experienced lag or delays, even during high volatility periods.', rating: 5 },
              { name: 'Michael Chen', role: 'Crypto Investor', content: 'Best platform for crypto trading. The interface is intuitive and the security features give me peace of mind.', rating: 5 },
              { name: 'Emma Williams', role: 'Forex Trader', content: 'I switched from my old broker and never looked back. The spreads are tight and customer support is excellent.', rating: 5 }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials;