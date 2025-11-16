import React from 'react';
import { Construction, Hammer, AlertTriangle } from 'lucide-react';

const AlphaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-sub-card overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,193,7,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
        
        {/* Floating construction elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-8 h-8 bg-yellow-400/30 rotate-45"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-6 h-6 bg-yellow-400/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <div className="w-10 h-10 bg-yellow-400/30 rotate-12"></div>
        </div>
        <div className="absolute bottom-20 right-40 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
          <div className="w-7 h-7 bg-yellow-400/30 rotate-45"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col align-center justify-center">
        {/* Animated Construction Icon */}
        <div className="mb-4 relative inline-block">
          <div className="relative flex justify-center">
            <Construction className="w-24 h-24 sm:w-32 sm:h-32 text-yellow-400 animate-pulse" />
            
            {/* Rotating gear effect */}
            <div className="absolute -top-4 -right-4 animate-spin" style={{ animationDuration: '8s' }}>              <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
            </div>
            
            {/* Hammer animation */}
            <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDuration: '2s' }}>
              <Hammer className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-3 backdrop-blur-sm animate-pulse">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-semibold text-sm sm:text-base">Under Construction</span>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-3 bg-pre-bg border border-custom-border rounded-lg px-8 py-4 backdrop-blur-sm">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
          </div>
          <span className="text-gray-300 font-medium text-sm sm:text-base">Coming Soon</span>
        </div>
      </div>

      {/* Animated Caution Tape */}
      <div className="absolute top-2 left-0 right-0 h-12 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 opacity-20 transform -skew-y-3"
        style={{
          backgroundSize: '100px 100%',
          animation: 'tapeScroll 10s linear infinite'
        }}
      ></div>
      <div className="absolute bottom-5 left-0 right-0 h-12 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 opacity-20 transform skew-y-3"
        style={{
          backgroundSize: '100px 100%',
          animation: 'tapeScroll 10s linear infinite reverse'
        }}
      ></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes progressPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes tapeScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AlphaHero;