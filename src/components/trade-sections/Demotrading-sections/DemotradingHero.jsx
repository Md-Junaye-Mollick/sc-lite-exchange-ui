import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

const DemotradingHero = () => {
  const { t } = useTranslation();
  const [priceChange, setPriceChange] = useState(0);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-6 py-2 flex items-center space-x-2">
                <span className="text-sm text-accent font-medium">{t("demotradinghero.newFeature")}</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {t("demotradinghero.mainHeading")}
                <span className="text-gradient"> {t("demotradinghero.mainHeadingGradient")}</span>
              </h1>
              
              <p className="text-xl text-slate-300">
                {t("demotradinghero.subHeading")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all flex items-center justify-center group">
                  {t("demotradinghero.getStartedBtn")}
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all">
                  {t("demotradinghero.watchDemoBtn")}
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-950"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-950"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-slate-950"></div>
                  </div>
                  <span>{t("demotradinghero.tradersCount")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span>{t("demotradinghero.rating")}</span>
                </div>
              </div>
            </div>

            {/* Trading Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-sub-card backdrop-blur-xl border border-slate-800 rounded-2xl p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-slate-400 text-sm">{t("demotradinghero.btcPair")}</div>
                    <div className="text-3xl font-bold mt-1">$64,234.50</div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg ${priceChange > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)}%
                  </div>
                </div>

                <div className="h-32 flex items-end space-x-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                      style={{ height: `${30 + Math.random() * 70}%` }}
                    ></div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors">
                    {t("demotradinghero.buyBtn")}
                  </button>
                  <button className="py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors">
                    {t("demotradinghero.sellBtn")}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">{t("demotradinghero.high24h")}</div>
                    <div className="font-semibold">$65,432.10</div>
                  </div>
                  <div>
                    <div className="text-slate-400">{t("demotradinghero.low24h")}</div>
                    <div className="font-semibold">$62,123.45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemotradingHero;