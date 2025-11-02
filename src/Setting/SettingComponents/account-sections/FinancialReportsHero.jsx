import React from 'react';

const FinancialReportsHero = () => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-gradient text-3xl font-semibold">Financial Reports</h1>
          <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-32">
          <div className="mb-6">
            <svg className="w-32 h-32 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-secondary-desc text-center text-base">
            There are no documents generated for you at this time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsHero;