import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

const DemoTradingFeaututes = () => {
      const features = [
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Lightning Fast Execution",
          description: "Execute trades in milliseconds with our advanced infrastructure"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Bank-Grade Security",
          description: "Your assets protected with military-grade encryption"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Advanced Analytics",
          description: "Real-time charts and indicators to inform your decisions"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Social Trading",
          description: "Follow and copy successful traders automatically"
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Award Winning",
          description: "Recognized as the best trading platform of 2024"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "AI-Powered Insights",
          description: "Get personalized trading recommendations powered by AI"
        }
      ];
  return (
    <div>
            {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="text-gradient"> Succeed</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professional-grade tools and features designed for traders of all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-sub-card backdrop-blur-xl border border-slate-800 rounded-xl hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-200/10"
              >
                <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemoTradingFeaututes;