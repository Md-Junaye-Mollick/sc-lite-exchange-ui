import React from "react";
import { useTranslation } from "react-i18next";
import { Twitter, Instagram, Send, Facebook, Linkedin, Youtube, Github } from "lucide-react";

// Footer Component
const Footer = () => {
  const { t } = useTranslation();

  const communityLinks = t('footer.communityLinks', { returnObjects: true }) || [];
  const aboutLinks = t('footer.aboutLinks', { returnObjects: true }) || [];
  const productLinks = t('footer.productLinks', { returnObjects: true }) || [];
  const businessLinks = t('footer.businessLinks', { returnObjects: true }) || [];
  const supportLinks = t('footer.supportLinks', { returnObjects: true }) || [];

  const communityIcons = [
    <Twitter className="w-5 h-5" />,
    <Facebook className="w-5 h-5" />,
    <Instagram className="w-5 h-5" />,
    <Linkedin className="w-5 h-5" />,
    <Youtube className="w-5 h-5" />,
    <Github className="w-5 h-5" />,
    <Send className="w-5 h-5" />
  ];

  return (
    <footer className="bg-card border-t border-custom-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-lg text-dispute-color">{t('footer.community')}</h3>
            <ul className="flex space-x-4 text-secondary-desc">
              {communityLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {communityIcons[idx]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-dispute-color">{t('footer.aboutUs')}</h3>
            <ul className="space-y-3 text-sm text-secondary-desc">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-dispute-color">{t('footer.products')}</h3>
            <ul className="space-y-3 text-sm text-secondary-desc">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-dispute-color">{t('footer.business')}</h3>
            <ul className="space-y-3 text-sm text-secondary-desc">
              {businessLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg text-dispute-color">{t('footer.support')}</h3>
            <ul className="space-y-3 text-sm text-secondary-desc">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-custom-border pt-8">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-center items-center space-x-6 text-secondary-desc">
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center">
                  <img src="/images/logo.png" alt="" />
                </div>
                <span className="text-sm text-secondary-desc">{t('footer.copyright')}</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-secondary-desc">
                <a href="#" className="hover:text-accent transition-colors">{t('footer.privacy')}</a>
                <a href="#" className="hover:text-accent transition-colors">{t('footer.terms')}</a>
                <a href="#" className="hover:text-accent transition-colors">{t('footer.cookie')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;