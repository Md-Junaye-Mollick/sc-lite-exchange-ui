import React, { useState } from 'react';
import { Eye, Copy, Clock } from 'lucide-react';

const DashboardHero = () => {
  const [expandedStep, setExpandedStep] = useState(null);
  const [showBalance, setShowBalance] = useState(true);

  const steps = [
    {
      id: 1,
      title: 'Verification Failed',
      status: 'failed',
      message: 'Please view the reasons and resubmit when you are ready.',
      buttonText: 'View Details',
      buttonStyle: 'bg-card border border-custom-border hover:bg-pre-bg',
      illustration: (
        <div className="flex justify-center my-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-pre-bg">!</span>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-16 bg-card rounded-lg flex items-center justify-center relative border border-custom-border p-2">
                <div className="w-12 h-8 bg-white rounded" />
                <div className="absolute top-1 left-2 w-2 h-2 bg-gradient rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Deposit',
      status: 'active',
      message: 'Complete a Deposit to Start Your Trading Journey on Binance',
      buttonText: 'Deposit',
      buttonStyle: 'bg-gradient text-white hover:bg-gradient-yellow-hover',
      illustration: (
        <div className="flex justify-end mt-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-pre-bg rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient rounded" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 text-4xl">🚀</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Trade',
      status: 'pending',
      message: 'You can start Binance trading journey now',
      subtitle: 'Recommended entry-level features for beginners.',
      buttonText: 'Pending',
      buttonStyle: 'bg-card border border-custom-border hover:bg-pre-bg',
      isPending: true,
      illustration: (
        <div className="flex justify-end mt-4">
          <div className="text-5xl">🚀</div>
        </div>
      )
    }
  ];

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* User Profile */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">😊</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-1 break-all">User-fd634</h1>
              <div className="flex gap-3 text-secondary-desc">
                <button className="hover:text-dispute-color transition">⊙</button>
                <button className="hover:text-dispute-color transition">𝕏</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-4 text-sm w-full lg:w-auto">
            <div className="border-l border-custom-border pl-4 sm:pl-6">
              <p className="text-secondary-desc mb-1">UID</p>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-medium break-all">1174356513</p>
                <Copy className="w-4 h-4 text-secondary-desc cursor-pointer" />
              </div>
            </div>
            <div className="border-l border-custom-border pl-4 sm:pl-6">
              <p className="text-secondary-desc mb-1">VIP Level</p>
              <p className="font-medium">Regular User ›</p>
            </div>
            <div className="border-l border-custom-border pl-4 sm:pl-6">
              <p className="text-secondary-desc mb-1">Following</p>
              <p className="font-medium">0</p>
            </div>
            <div className="border-l border-custom-border pl-4 sm:pl-6">
              <p className="text-secondary-desc mb-1">Followers</p>
              <p className="font-medium">0 ›</p>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Get Started</h2>

          {/* Progress */}
          <div className="relative mb-6">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-custom-border hidden sm:block" />
            <div className="relative flex justify-between flex-wrap gap-3 sm:gap-0">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center z-10 w-1/3 sm:w-auto">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow ${
                      step.id === expandedStep
                        ? 'bg-white text-accent'
                        : step.status === 'failed'
                        ? 'bg-card text-dispute-color'
                        : 'bg-card text-secondary-desc'
                    }`}
                  >
                    {step.id}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  expandedStep === step.id
                    ? 'md:flex-[2] border-accent bg-sub-card'
                    : 'flex-1 border-custom-border bg-sub-card'
                }`}
              >
                <div className="p-5 sm:p-6 h-full flex flex-col" onClick={() => toggleStep(step.id)}>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 ${
                      step.status === 'failed' ? 'text-red-500' : 'text-dispute-color'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {expandedStep === step.id && (
                    <div className="flex-grow mb-4">
                      <p className="text-dispute-color text-sm mb-2">{step.message}</p>
                      {step.subtitle && (
                        <p className="text-secondary-desc text-sm mb-3">{step.subtitle}</p>
                      )}
                      {step.illustration}
                    </div>
                  )}

                  <button
                    className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold transition-all mt-auto ${step.buttonStyle} ${
                      step.isPending ? 'flex items-center justify-center gap-2 text-secondary-desc' : ''
                    }`}
                  >
                    {step.isPending && <Clock className="w-4 h-4" />}
                    {step.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balance */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold">Estimated Balance</h3>
                <Eye
                  className="w-5 h-5 text-secondary-desc cursor-pointer"
                  onClick={() => setShowBalance(!showBalance)}
                />
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-bold">{showBalance ? '0.00' : '****'}</span>
                <span className="text-lg sm:text-xl text-secondary-desc">BTC</span>
                <button className="text-secondary-desc text-lg sm:text-xl">▼</button>
              </div>
              <p className="text-secondary-desc mb-3">≈ ${showBalance ? '0.00' : '****'}</p>
              <div className="flex items-center flex-wrap gap-2 text-sm">
                <span className="text-secondary-desc">Today's PnL</span>
                <button className="text-secondary-desc">ⓘ</button>
                <span className="text-secondary-desc">+ ${showBalance ? '0.00' : '****'}(0.00%)</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Deposit
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Withdraw
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Cash In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;