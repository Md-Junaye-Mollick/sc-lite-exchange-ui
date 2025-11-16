import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeftRight, TrendingUp, Repeat, Settings, 
  LineChart, Wifi, Wallet, Coins, Pickaxe, Users, Banknote,Shield,Lock
} from 'lucide-react';

const APIsConnectivity = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
              {t('apiConnectivity.title')}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-secondary-desc max-w-4xl mx-auto leading-relaxed">
            {t('apiConnectivity.description')}
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-sub-card backdrop-blur-xl rounded-2xl shadow-sm border border-custom-border p-8">
            {/* User */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </div>
              <span className="text-lg font-semibold text-dispute-color">
                {t('apiConnectivity.flow.user')}
              </span>
            </div>

            {/* Arrow 1 */}
            <div className="flex flex-col items-center">
              <ArrowRight className="w-8 h-8 text-secondary-desc rotate-90 md:rotate-0" />
              <span className="text-xs text-secondary-desc mt-2 hidden md:block">
                {t('apiConnectivity.flow.createKey')}
              </span>
            </div>

            {/* API */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border-2 border-yellow-500 flex items-center justify-center relative">
                <Wifi className="w-10 h-10 text-yellow-500" />
              </div>
              <span className="text-lg font-semibold text-dispute-color">
                {t('apiConnectivity.flow.api')}
              </span>
              <span className="text-xs text-secondary-desc">
                {t('apiConnectivity.flow.deployApi')}
              </span>
            </div>

            {/* Arrow 2 */}
            <div className="flex flex-col items-center">
              <ArrowRight className="w-8 h-8 text-secondary-desc rotate-90 md:rotate-0" />
              <span className="text-xs text-secondary-desc mt-2 hidden md:block">
                {t('apiConnectivity.flow.connect')}
              </span>
            </div>

            {/* SC-Lite Ecosystem */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-xl flex items-center justify-center relative">
                <img src="/images/logo.png" alt="" className="w-full" />
              </div>
              <span className="text-lg font-semibold text-dispute-color text-center">
                {t('apiConnectivity.flow.ecosystem')}
              </span>
            </div>
          </div>
        </div>

        {/* Trading Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Spot Trading */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-sm border border-custom-border p-8">
            <h3 className="text-2xl font-bold text-dispute-color mb-6">
              {t('apiConnectivity.spotTrading.title')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.spotTrading.spot')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <LineChart className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.spotTrading.margin')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <ArrowLeftRight className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.spotTrading.convert')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <Settings className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.spotTrading.spotAlgo')}
                </span>
              </div>
            </div>
          </div>

          {/* Derivatives Trading */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-sm border border-custom-border p-8">
            <h3 className="text-2xl font-bold text-dispute-color mb-6">
              {t('apiConnectivity.derivativesTrading.title')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <Banknote className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.derivativesTrading.usdm')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <Coins className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.derivativesTrading.coinm')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.derivativesTrading.vanilla')}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
                <LineChart className="w-5 h-5 text-accent" />
                <span className="text-secondary-desc font-medium">
                  {t('apiConnectivity.derivativesTrading.futures')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Data Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-sm border border-custom-border p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <LineChart className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-dispute-color">
              {t('apiConnectivity.marketData.title')}
            </h3>
          </div>
          <p className="text-secondary-desc mb-6">
            {t('apiConnectivity.marketData.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg px-6 py-3 border border-custom-border">
              <LineChart className="w-5 h-5 text-accent" />
              <span className="text-secondary-desc font-medium">
                {t('apiConnectivity.marketData.data')}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-primary-bg/50 rounded-lg px-6 py-3 border border-custom-border">
              <Wifi className="w-5 h-5 text-accent" />
              <span className="text-secondary-desc font-medium">
                {t('apiConnectivity.marketData.websocket')}
              </span>
            </div>
          </div>
        </div>

        {/* Investment & Services Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-sm border border-custom-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-dispute-color">
              {t('apiConnectivity.investment.title')}
            </h3>
          </div>
          <p className="text-secondary-desc mb-6">
            {t('apiConnectivity.investment.description')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Wallet className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.wallet')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Repeat className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.simpleEarn')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Pickaxe className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.mining')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Users className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.c2c')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Banknote className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.fiat')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg p-4 border border-custom-border">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-sm text-secondary-desc font-medium text-center">
                {t('apiConnectivity.investment.ethStaking')}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-2 bg-primary-bg/50 rounded-lg px-6 py-3 border border-custom-border">
              <Lock className="w-5 h-5 text-accent" />
              <span className="text-secondary-desc font-medium">
                {t('apiConnectivity.investment.cryptoLoan')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIsConnectivity;