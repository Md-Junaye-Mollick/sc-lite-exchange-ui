import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSearch } from 'lucide-react';

const CryptoPairs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="w-fit text-3xl sm:text-4xl font-bold text-gradient mb-4">
            {t('cryptoPairs.title')}
          </h2>
          <p className="text-secondary-desc text-lg">
            {t('cryptoPairs.subtitle')}
          </p>
        </div>
        
        {/* No Records State */}
        <div className="flex flex-col items-center justify-center py-20">
          {/* Icon */}
          <div className="mb-3">
            <FileSearch className="w-24 h-24 text-gray-500" strokeWidth={1.5} />
          </div>
          
          {/* No Records Text */}
          <p className="text-secondary-desc text-lg mb-4">
            {t('cryptoPairs.noRecords')}
          </p>
          
          {/* Buy Crypto Button */}
          <button className="bg-gradient text-white py-4 px-8 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover">
            {t('cryptoPairs.buyCrypto')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoPairs;