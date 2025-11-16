import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Users, FileText } from 'lucide-react';

const APIsVIPInstitutional = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-sub-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main character illustration placeholder */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Background decorative elements */}
                <div className="absolute top-10 left-8 w-4 h-4 bg-gray-600 rounded-sm transform rotate-45"></div>
                <div className="absolute top-32 left-0 w-20 h-1 bg-gray-600 rounded"></div>
                <div className="absolute bottom-20 left-12 w-3 h-3 bg-gray-500 rounded-sm"></div>
                
                {/* Character silhouette */}
                <div className="relative z-10">
                  {/* Head */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 mx-auto mb-4 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-yellow-400"></div>
                  </div>
                  
                  {/* Body */}
                  <div className="relative">
                    <div className="w-40 h-32 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-t-full mx-auto relative">
                      {/* Magnifying glass */}
                      <div className="absolute -right-8 top-8">
                        <div className="w-20 h-20 rounded-full border-4 border-yellow-400 bg-transparent relative">
                          <div className="absolute -bottom-8 left-1/2 w-1 h-12 bg-yellow-400 transform rotate-45 origin-top"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coins stack */}
                    <div className="absolute -bottom-4 -left-8">
                      <div className="relative">
                        <div className="w-12 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg"></div>
                        <div className="absolute top-2 left-2 w-8 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="absolute top-5 left-2 w-8 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="absolute top-8 left-2 w-8 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
                {t('vipInstitutional.title')}
              </h2>
            </div>

            {/* Description */}
            <p className="text-secondary-desc text-base sm:text-lg leading-relaxed mb-8">
              {t('vipInstitutional.description')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-secondary-desc" />
                <span className="text-secondary-desc font-medium text-lg">
                  {t('vipInstitutional.subAccount')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-secondary-desc" />
                <span className="text-secondary-desc font-medium text-lg">
                  {t('vipInstitutional.taxReport')}
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="#"
              className="text-yellow-400 hover:underline font-medium"
            >
              {t('vipInstitutional.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIsVIPInstitutional;