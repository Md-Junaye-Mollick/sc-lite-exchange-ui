import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div>
              {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Start Trading in
              <span className="text-gradient"> 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get started in minutes with our streamlined onboarding process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Account', description: 'Sign up with your email and verify your identity in minutes' },
              { step: '02', title: 'Fund Your Account', description: 'Deposit funds using bank transfer, card, or crypto' },
              { step: '03', title: 'Start Trading', description: 'Choose your assets and execute your first trade' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-gradient mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks;