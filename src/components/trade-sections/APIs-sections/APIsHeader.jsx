import React from 'react';
import { useTranslation } from 'react-i18next';

const APIsHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[400px] flex items-center justify-center bg-sub-card overflow-hidden">
      {/* Decorative Background Elements - Enhanced for visibility */}
      <div className="absolute inset-0">
        {/* Large diamonds with enhanced visibility */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-accent/30 dark:bg-accent/20 rotate-45 blur-sm border border-accent/20"></div>
        <div className="absolute top-32 left-48 w-8 h-8 bg-accent/25 dark:bg-accent/15 rotate-45 border border-accent/30"></div>
        <div className="absolute top-12 right-32 w-10 h-10 bg-accent/30 dark:bg-accent/20 rotate-45 blur-sm border border-accent/20"></div>
        <div className="absolute bottom-24 right-48 w-14 h-14 bg-accent/25 dark:bg-accent/15 rotate-45 blur-sm border border-accent/20"></div>
        <div className="absolute bottom-32 left-64 w-6 h-6 bg-accent/30 dark:bg-accent/20 rotate-45 border border-accent/30"></div>
        
        {/* Diagonal stripes with enhanced contrast */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent transform -rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 via-accent/5 to-transparent transform rotate-45 translate-x-[50%] translate-y-[50%]"></div>
        
        {/* Large geometric shapes with better visibility */}
        <div className="absolute top-1/2 right-20 w-64 h-64 bg-accent/8 dark:bg-accent/5 rotate-45 transform translate-y-[-50%] border border-accent/10"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-accent/8 dark:bg-accent/5 rotate-12 rounded-3xl border border-accent/10"></div>
        
        {/* Additional decorative elements for depth */}
        <div className="absolute top-40 right-1/4 w-20 h-20 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-xl"></div>
        
        {/* Grid pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,193,7,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Radial gradient overlay for focus */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-sub-card/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient py-6 drop-shadow-lg">
          {t('apiHeader.title')}
        </h1>
        
        <p className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-secondary-desc leading-relaxed drop-shadow-md">
          {t('apiHeader.subtitle')}
        </p>
      </div>

      {/* Enhanced accent lines */}
      <div className="absolute top-0 right-8 w-1 h-12 bg-gradient-to-b from-accent to-transparent shadow-lg shadow-accent/50"></div>
      <div className="absolute bottom-0 left-8 w-1 h-12 bg-gradient-to-t from-accent to-transparent shadow-lg shadow-accent/50"></div>
      
      {/* Corner accent elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/40"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/40"></div>
    </section>
  );
};

export default APIsHeader;