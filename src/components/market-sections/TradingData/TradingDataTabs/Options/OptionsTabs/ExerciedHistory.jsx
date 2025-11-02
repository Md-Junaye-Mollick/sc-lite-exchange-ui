import React from 'react';

const ExercisedHistory = () => {
  const history = [
    { date: '2025-11-01', underlying: 'SOLUSDT', price: '185.76564737' },
    { date: '2025-10-31', underlying: 'SOLUSDT', price: '185.47713304' },
    { date: '2025-10-30', underlying: 'SOLUSDT', price: '195.82177412' },
    { date: '2025-10-29', underlying: 'SOLUSDT', price: '195.54444781' },
    { date: '2025-10-28', underlying: 'SOLUSDT', price: '202.55912208' },
    { date: '2025-10-27', underlying: 'SOLUSDT', price: '202.95745598' },
    { date: '2025-10-26', underlying: 'SOLUSDT', price: '194.06939649' },
    { date: '2025-10-25', underlying: 'SOLUSDT', price: '194.05388041' },
    { date: '2025-10-24', underlying: 'SOLUSDT', price: '192.41340299' },
    { date: '2025-10-23', underlying: 'SOLUSDT', price: '187.38499293' },
    { date: '2025-10-22', underlying: 'SOLUSDT', price: '184.61450687' },
    { date: '2025-10-21', underlying: 'SOLUSDT', price: '184.94144854' },
    { date: '2025-10-20', underlying: 'SOLUSDT', price: '193.31989854' },
    { date: '2025-10-19', underlying: 'SOLUSDT', price: '185.80646462' },
    { date: '2025-10-18', underlying: 'SOLUSDT', price: '187.21267339' },
    { date: '2025-10-17', underlying: 'SOLUSDT', price: '178.66251837' },
    { date: '2025-10-16', underlying: 'SOLUSDT', price: '192.93665146' },
    { date: '2025-10-15', underlying: 'SOLUSDT', price: '203.88830278' },
    { date: '2025-10-14', underlying: 'SOLUSDT', price: '194.68361330' },
    { date: '2025-10-13', underlying: 'SOLUSDT', price: '197.67894181' }
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="bg-sub-card border border-custom-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-custom-border bg-card">
                <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium">Expiration Date</th>
                <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium">Underlying</th>
                <th className="px-4 py-3 text-left text-xs text-gray-500 font-medium">Settlement Price</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-custom-border hover:bg-sub-card/5 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-dispute-color">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-dispute-color">{item.underlying}</td>
                  <td className="px-4 py-3 text-sm text-dispute-color">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">←</button>
        {[1, 2,].map(page => (
          <button
            key={page}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors border ${
              page === 1
                ? 'bg-gradient text-white border-custom-border'
                : 'bg-sub-card text-dispute-color border-custom-border'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
      </div>
    </div>
  );
};

export default ExercisedHistory;