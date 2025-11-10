import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
              {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple,
              <span className="text-gradient"> Transparent Pricing</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: 'Basic', 
                price: '$0', 
                period: 'forever',
                features: ['Zero commission trading', 'Real-time data', 'Basic charts', 'Email support', 'Mobile app access'],
                popular: false
              },
              { 
                name: 'Pro', 
                price: '$29', 
                period: 'per month',
                features: ['Everything in Basic', 'Advanced charts', 'Priority support', 'API access', 'Lower spreads', 'Research reports'],
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: 'Custom', 
                period: 'contact us',
                features: ['Everything in Pro', 'Dedicated manager', 'Custom integrations', 'Volume discounts', 'White-label options'],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500' : 'bg-slate-900/50 border border-slate-800'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <div className="text-slate-400 text-sm">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50' : 'bg-slate-800 hover:bg-slate-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing;