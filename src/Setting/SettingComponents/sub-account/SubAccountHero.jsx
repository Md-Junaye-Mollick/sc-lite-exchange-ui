import React from 'react';

const SubAccountHero = () => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center py-32">
          {/* Icon */}
          <div className="mb-8 relative flex flex-col items-center">
            {/* User Avatar Circle */}
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-1"></div>
            
            {/* Briefcase/Folder Icon */}
            <div className="relative">
              {/* Main briefcase body */}
              <div className="w-28 h-20 bg-gray-500 rounded-lg relative overflow-hidden">
                {/* Top handle bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-400 rounded-t-lg"></div>
                {/* Vertical stripe in middle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-gray-400"></div>
              </div>
              
              {/* Warning Badge */}
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-[#1a1d2e]">
                <span className="text-3xl font-bold text-black">!</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-xl mb-8">
            <p className="text-secondary-desc text-base leading-relaxed">
              Sub Accounts allow you to trade through multiple accounts. Please click Activate below to enable the function.{' '}
              <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
                Learn more
              </button>
              .
            </p>
          </div>

          {/* Activate Button */}
          <button className="bg-gradient transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover font-semibold px-12 py-3 rounded-lg text-lg">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubAccountHero;