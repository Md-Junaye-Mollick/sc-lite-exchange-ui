import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Smartphone, Zap, Shield, TrendingUp, Globe, Star, BarChart3, Lock, Users, Rocket, LineChart, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function SclightLanding() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [candleData, setCandleData] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate animated candles
  useEffect(() => {
    const generateCandles = () => {
      return Array.from({ length: 40 }, (_, i) => ({
        id: i,
        height: Math.random() * 60 + 20,
        y: Math.random() * 100,
        isGreen: Math.random() > 0.5,
        delay: Math.random() * 2
      }));
    };
    setCandleData(generateCandles());
  }, []);

  return (
    <div className="min-h-screen bg-pre-bg text-dispute-color overflow-hidden">
      <style>{`
        /* Keyframes */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 193, 7, 0.4); }
          50% { box-shadow: 0 0 60px rgba(255, 193, 7, 0.7); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes candleGrow {
          0% { transform: scaleY(0); opacity: 0; }
          50% { transform: scaleY(1.2); opacity: 1; }
          100% { transform: scaleY(1); opacity: 0.8; }
        }
        
        @keyframes pulse-orange {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow 2.5s ease-in-out infinite; }
        .animate-slide-in-left { animation: slideInLeft 1s ease-out; }
        .animate-slide-in-right { animation: slideInRight 1s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
        .animate-rotate { animation: rotate 25s linear infinite; }
        .animate-candle { animation: candleGrow 3s ease-in-out infinite; }
        .animate-pulse-orange { animation: pulse-orange 2s ease-in-out infinite; }

        /* Glass effects */
        .glass-effect {
          background: rgba(255, 193, 7, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 193, 7, 0.2);
        }

        .glass-effect-strong {
          background: rgba(255, 193, 7, 0.1);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 193, 7, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated Candle Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {candleData.map((candle) => (
            <div
              key={candle.id}
              className="absolute bottom-0 w-2"
              style={{
                left: `${(candle.id / 40) * 100}%`,
                animationDelay: `${candle.delay}s`
              }}
            >
              <div
                className="animate-candle origin-bottom"
                style={{
                  height: `${candle.height}%`,
                  backgroundColor: candle.isGreen ? '#10b981' : '#ef4444',
                  opacity: 0.6
                }}
              />
            </div>
          ))}
        </div>

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse-orange"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl animate-pulse-orange" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-600 rounded-full blur-3xl animate-pulse-orange" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Animated Background Text */}
          <div className="absolute top-0 left-0 right-0 text-center pointer-events-none">
            <h1 className="text-[120px] lg:text-[200px] font-bold text-gray-800 opacity-10 leading-none tracking-tight">
              SCLIGHT
            </h1>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10 animate-slide-in-left">
              <div className="inline-block px-5 py-2.5 glass-effect rounded-full animate-fade-in-up">
                <span className="text-accent text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t('SChero.badge')}
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-7xl font-bold">
                  <span className="text-gradient">2M+</span>
                </div>
                <div className="text-secondary-desc text-2xl font-light">{t('SChero.activeTraders')}</div>
              </div>

              <div className="space-y-6">
                <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                  {t('SChero.title1')}<br />
                  <span className="text-gradient">{t('SChero.title2')}</span>
                </h2>
                <p className="text-secondary-desc text-xl max-w-lg leading-relaxed">
                  {t('SChero.description')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-gradient text-white rounded-full font-bold hover:shadow-glow-hover transition transform hover:scale-105 flex items-center gap-2 btn-transition">
                  {t('SChero.startTrading')}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-custom-border px-10 py-4 rounded-full bg-sub-card font-semibold hover:shadow-glow-hover hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  {t('SChero.watchDemo')}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl font-bold text-accent">$150B+</div>
                  <div className="text-secondary-desc text-sm">{t('SChero.stats.tradingVolume')}</div>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="text-4xl font-bold text-accent">200+</div>
                  <div className="text-secondary-desc text-sm">{t('SChero.stats.tradingPairs')}</div>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <div className="text-4xl font-bold text-accent">24/7</div>
                  <div className="text-secondary-desc text-sm">{t('SChero.stats.liveSupport')}</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Element */}
            <div className="relative flex items-center justify-center animate-slide-in-right">
              {/* Floating Orb */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px] animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/40 to-orange-500/40 backdrop-blur-xl border-2 border-yellow-500/40 animate-glow">
                  <div className="absolute inset-0 rounded-full opacity-40 animate-rotate" style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255, 193, 7, 0.4) 30px, rgba(255, 193, 7, 0.4) 31px),
                      repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255, 193, 7, 0.4) 30px, rgba(255, 193, 7, 0.4) 31px)
                    `
                  }}></div>
                  
                  <div className="absolute inset-8 flex items-center justify-center">
                    <img src="/images/logo.png" alt="" className="w-40 h-40 text-accent animate-pulse" />
                  </div>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute inset-0 animate-rotate" style={{animationDuration: '12s'}}>
                  <Shield className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 text-accent drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 animate-rotate" style={{animationDuration: '18s', animationDirection: 'reverse'}}>
                  <TrendingUp className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 text-orange-400 drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 animate-rotate" style={{animationDuration: '15s'}}>
                  <Rocket className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 text-orange-400 drop-shadow-lg" />
                </div>
              </div>

              {/* Info Card */}
              <div className="absolute bottom-0 -right-5 glass-effect-strong rounded-2xl p-5 max-w-xs animate-fade-in-up shadow-2xl" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-accent" fill="#FFC107" />
                  <h3 className="font-bold text-lg">{t('SChero.aiInsights')}</h3>
                </div>
                <p className="text-sm text-secondary-desc mb-3">{t('SChero.aiDescription')}</p>
                <div className="h-2.5 bg-sub-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCfeatures Marquee */}
      <section className="py-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-y border-custom-border">
        <div className="flex items-center gap-12 animate-marquee">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold">{t('marquee.zeroFees')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold">{t('marquee.instantWithdrawals')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold">{t('marquee.support')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold">{t('marquee.security')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Mockup Section */}
      <section className="py-28 px-6 lg:px-8 bg-pre-bg" id="mobile">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
              <span className="text-accent text-sm font-semibold">{t('mobile.badge')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('mobile.title1')} <span className="text-gradient">{t('mobile.title2')}</span>{t('mobile.title3')}
            </h2>
            <p className="text-secondary-desc text-xl max-w-2xl mx-auto">{t('mobile.description')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-14 items-end">
            {/* Mobile Mockup 1 */}
            <div className="relative mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img src="/images/SCMockup1.png" alt="" className="w-full" />
            </div>
                    
            {/* Mobile Mockup 2 - Center (Larger) */}
            <div className="relative mx-auto animate-fade-in-up transform scale-105" style={{animationDelay: '0.4s'}}>
              <img src="/images/SCMockup2.png" alt="" className="w-full" />
            </div>

            {/* Mobile Mockup 3 */}
            <div className="relative mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <img src="/images/SCMockup3.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* features Section */}
      <section className="py-28 px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
              <span className="text-accent text-sm font-semibold">{t('SCfeatures.badge')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('SCfeatures.title1')} <span className="text-gradient">{t('SCfeatures.title2')}</span>?
            </h2>
            <p className="text-secondary-desc text-xl max-w-3xl mx-auto">{t('SCfeatures.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(() => {
              const features = t('SCfeatures.items', { returnObjects: true });
              const featuresArray = Array.isArray(features) ? features : [];
              return featuresArray.map((feature, i) => (
                <div 
                  key={i}
                  className={`bg-sub-card border border-custom-border rounded-3xl p-8 hover:glass-effect-strong hover:border-yellow-500/60 transition-all transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up ${activeFeature === i ? 'border-yellow-500 shadow-2xl shadow-yellow-500/40' : ''}`}
                  style={{animationDelay: `${i * 0.15}s`}}
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div className={`w-16 h-16 bg-gradient rounded-2xl flex items-center justify-center mb-6 ${activeFeature === i ? 'animate-pulse' : ''}`}>
                    {[<Zap />, <Shield />, <BarChart3 />, <Smartphone />][i] && React.cloneElement([<Zap />, <Shield />, <BarChart3 />, <Smartphone />][i], { className: 'w-8 h-8 text-white' })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-secondary-desc leading-relaxed">{feature.description}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Trading Stats Section */}
      <section className="py-28 px-6 lg:px-8 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('SCstats.title1')} <span className="text-gradient">{t('SCstats.title2')}</span>
            </h2>
            <p className="text-secondary-desc text-xl">{t('SCstats.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, value: "2M+", label: t('SCstats.items.traders'), color: 'from-yellow-500 to-orange-500' },
              { icon: <BarChart3 />, value: "$150B+", label: t('SCstats.items.volume'), color: 'from-orange-500 to-yellow-500' },
              { icon: <Globe />, value: "180+", label: t('SCstats.items.countries'), color: 'from-yellow-500 to-yellow-400' },
              { icon: <Award />, value: "99.9%", label: t('SCstats.items.uptime'), color: 'from-yellow-500 to-yellow-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-sub-card border border-custom-border rounded-3xl shadow-sm p-8 text-center hover:border-yellow-500/60 transition transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {React.cloneElement(stat.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-secondary-desc">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-28 px-6 lg:px-8" id="platform">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
              <span className="text-accent text-sm font-semibold">{t('platform.badge')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('platform.title1')} <span className="text-gradient">{t('platform.title2')}</span>
            </h2>
            <p className="text-secondary-desc text-xl max-w-3xl mx-auto">{t('platform.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {(() => {
              const items = t('platform.items', { returnObjects: true });
              const itemsArray = Array.isArray(items) ? items : [];
              return itemsArray.map((item, i) => (
                <div 
                  key={i}
                  className="bg-sub-card border border-custom-border rounded-3xl shadow-sm p-10 hover:glass-effect-strong hover:border-yellow-500/60 transition-all group animate-fade-in-up transform hover:scale-105"
                  style={{animationDelay: `${i * 0.15}s`}}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                      {[<LineChart />, <BarChart3 />, <TrendingUp />, <Lock />][i] && React.cloneElement([<LineChart />, <BarChart3 />, <TrendingUp />, <Lock />][i], { className: 'w-7 h-7 text-white' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">{item.title}</h3>
                      <p className="text-secondary-desc leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 px-6 lg:px-8 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
              <span className="text-accent text-sm font-semibold">{t('SCtestimonials.badge')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('SCtestimonials.title1')} <span className="text-gradient">{t('SCtestimonials.title2')}</span>
            </h2>
            <p className="text-secondary-desc text-xl">{t('SCtestimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(() => {
              const testimonials = t('SCtestimonials.items', { returnObjects: true });
              const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];
              return testimonialsArray.map((testimonial, i) => (
                <div key={i} className="bg-sub-card border border-custom-border rounded-3xl shadow-sm p-8 hover:border-yellow-500/60 transition animate-fade-in-up" style={{animationDelay: `${i * 0.2}s`}}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-accent" fill="#FFC107" />
                    ))}
                  </div>
                  <p className="text-secondary-desc mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-secondary-desc">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
                <span className="text-accent text-sm font-semibold">{t('SCsecurity.badge')}</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                {t('SCsecurity.title1')}<br />
                <span className="text-gradient">{t('SCsecurity.title2')}</span>
              </h2>
              <p className="text-secondary-desc text-xl mb-8 leading-relaxed">
                {t('SCsecurity.description')}
              </p>
              
              <div className="space-y-4">
                {(() => {
                  const items = t('SCsecurity.items', { returnObjects: true });
                  const itemsArray = Array.isArray(items) ? items : [];
                  return itemsArray.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-secondary-desc">{item}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-sub-card border border-custom-border rounded-3xl shadow-sm p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
                <div className="relative">
                  <Shield className="w-32 h-32 text-accent mx-auto mb-8 animate-float" />
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: t('SCsecurity.stats.score'), value: t('SCsecurity.stats.scoreValue') },
                      { label: t('SCsecurity.stats.encryption'), value: t('SCsecurity.stats.encryptionValue') },
                      { label: t('SCsecurity.stats.compliance'), value: t('SCsecurity.stats.complianceValue') },
                      { label: t('SCsecurity.stats.audits'), value: t('SCsecurity.stats.auditsValue') }
                    ].map((stat, i) => (
                      <div key={i} className="glass-effect rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                        <div className="text-sm text-secondary-desc">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 lg:px-8 bg-pre-bg">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-sub-card border border-custom-border rounded-[3rem] shadow-lg p-16 text-center overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="relative z-10">
              <Rocket className="w-24 h-24 text-accent mx-auto mb-8 animate-float" />
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                {t('SCcta.title1')} <span className="text-gradient">{t('SCcta.title2')}</span>?
              </h2>
              <p className="text-xl text-secondary-desc mb-10 max-w-2xl mx-auto">
                {t('SCcta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-12 py-5 bg-gradient text-white rounded-full font-bold text-lg hover:shadow-glow-hover transition transform hover:scale-105">
                  {t('SCcta.createAccount')}
                </button>
                <button className="border-2 border-custom-border px-12 py-5 rounded-full bg-sub-card font-semibold hover:shadow-glow-hover hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  {t('SCcta.learnMore')}
                </button>
              </div>
              <p className="text-sm text-secondary-desc mt-6">{t('SCcta.note')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
              <span className="text-accent text-sm font-semibold">{t('SCfaq.badge')}</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6">
              {t('SCfaq.title1')} <span className="text-gradient">{t('SCfaq.title2')}</span>?
            </h2>
            <p className="text-secondary-desc text-xl">{t('SCfaq.subtitle')}</p>
          </div>

          <div className="space-y-6">
            {(() => {
              const faqs = t('SCfaq.items', { returnObjects: true });
              const faqsArray = Array.isArray(faqs) ? faqs : [];
              return faqsArray.map((faq, i) => (
                <div key={i} className="bg-sub-card border border-custom-border rounded-2xl shadow-sm p-8 hover:glass-effect-strong hover:border-yellow-500/60 transition animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                  <h3 className="text-xl font-bold mb-3 text-accent">{faq.question}</h3>
                  <p className="text-secondary-desc leading-relaxed">{faq.answer}</p>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}