import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const P2PBlog = () => {
  const { t } = useTranslation();
  const blogsData = t('p2pBlog.blogs', { returnObjects: true }) || [];
  const blogs = Array.isArray(blogsData) ? blogsData : [];

  const getImageGradient = (type) => {
    switch(type) {
      case 'red':
        return 'from-yellow-500 via-red-900 to-red-950';
      case 'pink':
        return 'from-gray-800 via-gray-900 to-black';
      case 'blue':
        return 'from-gray-800 via-gray-900 to-black';
      default:
        return 'from-gray-800 to-gray-900';
    }
  };

  const renderBlogImage = (imageType, index) => {
    if (imageType === 'red') {
      return (
        <div className={`relative w-full h-48 rounded-t-2xl bg-gradient-to-br ${getImageGradient(imageType)} overflow-hidden`}>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-45"></div>
            <span className="text-white font-bold text-sm">SC-Lite<br/>P2P</span>
          </div>
          
          <div className="absolute bottom-8 left-8">
            <div className="w-20 h-32 bg-blue-500 rounded-lg transform -skew-y-12"></div>
          </div>
          
          <div className="absolute top-20 left-32">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-400 rounded-lg opacity-60"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 bg-red-500/30 backdrop-blur rounded-lg border border-red-400/50 flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      );
    } else if (imageType === 'pink') {
      return (
        <div className={`relative w-full h-48 rounded-t-2xl bg-gradient-to-br ${getImageGradient(imageType)} overflow-hidden`}>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-45"></div>
            <span className="text-white font-bold text-sm">SC-Lite<br/>P2P</span>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-24 h-32 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded-full"></div>
              <div className="absolute top-16 -right-4 w-12 h-12 bg-orange-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-16 h-12 bg-pink-500 rounded"></div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 flex gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`relative w-full h-48 rounded-t-2xl bg-gradient-to-br ${getImageGradient(imageType)} overflow-hidden`}>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-45"></div>
            <span className="text-white font-bold text-sm">SC-Lite<br/>P2P</span>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-32 h-40 bg-gray-300 rounded-lg shadow-2xl p-4">
                <div className="w-full h-3 bg-gray-400 rounded mb-2"></div>
                <div className="w-3/4 h-3 bg-gray-400 rounded mb-4"></div>
                <div className="w-full h-20 bg-gray-400 rounded mb-2"></div>
                <div className="w-full h-3 bg-gray-400 rounded"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
              <div className="w-10 h-10 bg-yellow-500 rounded"></div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-24 flex gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
            {t('p2pBlog.title')}
          </h2>
          <button className="flex items-center gap-2 text-dispute-color hover:text-accent transition-colors duration-300 group">
            <span className="text-base sm:text-lg font-medium">{t('p2pBlog.viewMore')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg border border-custom-border hover:border-accent/50 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {renderBlogImage(blog.image, index)}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-dispute-color mb-3 sm:mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary-desc leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <p className="text-xs sm:text-sm text-secondary-desc/70">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default P2PBlog;