import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';


const DemotrandingStats = () => {
      const stats = [
    { value: "10M+", label: "Active Traders" },
    { value: "$500B+", label: "Trading Volume" },
    { value: "150+", label: "Countries" },
    { value: "0.01s", label: "Avg Execution" }
  ];
  return (
    <div>
              {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemotrandingStats;