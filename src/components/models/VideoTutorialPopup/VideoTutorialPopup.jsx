import React from 'react';
import { X } from 'lucide-react';

const VideoTutorialPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-card rounded-2xl shadow-2xl border border-custom-border overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-custom-border bg-sub-card">
          <h2 className="text-xl sm:text-2xl font-bold text-dispute-color">
            Getting Started Tutorial
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pre-bg rounded-lg transition-colors group"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc group-hover:text-dispute-color transition-colors" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Crypto Trading Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-sub-card border-t border-custom-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-secondary-desc">
                Learn how to start trading cryptocurrency in just a few minutes
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 whitespace-nowrap"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VideoTutorialPopup;