import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal } from 'lucide-react';

const APIsDevelopers = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-sub-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Construction/Building Scene */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Crane Structure */}
                <div className="absolute top-0 right-20">
                  {/* Crane tower */}
                  <div className="relative">
                    <div className="w-3 h-32 bg-gray-500 mx-auto"></div>
                    {/* Crane arm */}
                    <div className="absolute -top-2 -left-20 w-40 h-2 bg-gray-500"></div>
                    {/* Crane lattice pattern */}
                    <div className="absolute top-4 right-1 flex flex-col gap-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 border border-gray-400 transform rotate-45"></div>
                        <div className="w-2 h-2 border border-gray-400 transform rotate-45"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 border border-gray-400 transform rotate-45"></div>
                        <div className="w-2 h-2 border border-gray-400 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character with tools */}
                <div className="relative z-10 -ml-12">
                  {/* Head */}
                  <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                  
                  {/* Body */}
                  <div className="w-16 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg mx-auto relative">
                    {/* Arm with tool */}
                    <div className="absolute -left-8 top-4 w-12 h-3 bg-yellow-400 rounded transform -rotate-45 origin-right"></div>
                    <div className="absolute -left-12 top-0 w-8 h-2 bg-yellow-400 rounded"></div>
                  </div>
                  
                  {/* Ground line */}
                  <div className="w-24 h-1 bg-gray-600 rounded mx-auto mt-2"></div>
                </div>

                {/* Building blocks/boxes */}
                <div className="absolute bottom-16 right-8 flex flex-col gap-2">
                  {/* Top row */}
                  <div className="flex gap-2">
                    <div className="w-16 h-12 bg-yellow-400 rounded"></div>
                    <div className="w-12 h-12 bg-yellow-400 rounded"></div>
                  </div>
                  {/* Bottom row */}
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-yellow-500 rounded"></div>
                    <div className="w-12 h-12 bg-yellow-400 rounded"></div>
                    <div className="w-16 h-12 bg-yellow-500 rounded"></div>
                  </div>
                </div>

                {/* Small decorative elements */}
                <div className="absolute top-20 left-8 w-6 h-6 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-16 left-16 w-4 h-4 bg-yellow-500 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center">
                <Terminal className="w-6 h-6 text-slate-900" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
                {t('developers.title')}
              </h2>
            </div>

            {/* Description */}
            <p className="text-secondary-desc text-base sm:text-lg leading-relaxed mb-8">
              {t('developers.description')}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-yellow-400 hover:underline font-medium text-lg"
              >
                {t('developers.devForum')}
              </a>
              <a
                href="#"
                className="text-yellow-400 hover:underline font-medium text-lg"
              >
                {t('developers.devTelegram')}
              </a>
              <a
                href="#"
                className="text-yellow-400 hover:underline font-medium text-lg"
              >
                {t('developers.feedbackSurvey')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIsDevelopers;