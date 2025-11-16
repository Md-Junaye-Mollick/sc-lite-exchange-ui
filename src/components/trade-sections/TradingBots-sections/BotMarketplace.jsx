import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Copy, ChevronDown, Search, Info } from 'lucide-react';

const BotMarketplace = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('spot');
  const [filters, setFilters] = useState({ market: 'All', days: '1-7 Days', roi: 'All', mdd: 'All', sort: 'Top PNL' });
  const [dropdowns, setDropdowns] = useState({});
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClick = (e) => {
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && !dropdownRefs.current[key].contains(e.target)) {
          setDropdowns(prev => ({ ...prev, [key]: false }));
        }
      });
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const spotBots = [
    { pair: 'GIGGLE/USDT', pnl: '+18,269.49', roi: '+9.13%', runtime: '6d 13h 9m', min: '20.64 USDT', trades: '14/155', mdd: '2.64%', data: [20, 25, 22, 28, 32, 30, 35, 38, 36, 40] },
    { pair: 'GIGGLE/USDT', pnl: '+8,895.46', roi: '+4.44%', runtime: '6d 13h 7m', min: '22.16 USDT', trades: '14/57', mdd: '0.72%', data: [15, 18, 20, 22, 25, 28, 30, 32, 35, 38] },
    { pair: 'BTC/FDUSD', pnl: '+7,528.81', roi: '+1.29%', runtime: '1d 4h 35m', min: '312.27 FDUSD', trades: '14/18', mdd: '0.01%', data: [25, 26, 28, 27, 29, 31, 30, 33, 35, 38] },
    { pair: 'ASTER/USDT', pnl: '+5,716.33', roi: '+5.23%', runtime: '1d 14h 15m', min: '321.58 USDT', trades: '3/64', mdd: '1.27%', data: [18, 22, 20, 25, 28, 27, 30, 32, 35, 37] },
    { pair: 'SOL/USDC', pnl: '+4,064.79', roi: '+0.23%', runtime: '1d 12h 35m', min: '607.36 USDC', trades: '24/60', mdd: '1.17%', data: [30, 28, 25, 27, 26, 29, 28, 30, 29, 31] },
    { pair: 'ZEC/USDT', pnl: '+3,138.98', roi: '+14.94%', runtime: '5d 56m', min: '326.78 USDT', trades: '240/667', mdd: '16.96%', data: [10, 15, 18, 22, 25, 28, 32, 35, 38, 40] },
    { pair: 'ZEN/USDT', pnl: '+2,583.29', roi: '+10.33%', runtime: '3d 11h 31m', min: '749.503 USDT', trades: '233/50', mdd: '3.91%', data: [12, 16, 19, 23, 26, 29, 32, 35, 37, 39] },
    { pair: 'ASTER/USDT', pnl: '+2,055.23', roi: '+7.83%', runtime: '6d 19h 19m', min: '1,172.390 USDT', trades: '79/982', mdd: '7.72%', data: [14, 18, 21, 24, 27, 30, 33, 36, 38, 40] },
    { pair: 'BNB/FDUSD', pnl: '+1,940.37', roi: '+0.97%', runtime: '1d 12h 55m', min: '1,286.74 FDUSD', trades: '4/04', mdd: '0.66%', data: [22, 24, 26, 28, 30, 31, 33, 35, 37, 38] }
  ];

  const futuresBots = [
    { pair: 'ASTERUSDT', tags: ['Perp', 'Long 10x'], pnl: '+36,505.82', roi: '+95.63%', runtime: '4d 56m', min: '66.30 USDT', trades: '54/410', mdd: '53.13%', data: [10, 18, 15, 25, 30, 28, 35, 38, 36, 40] },
    { pair: 'ETHUSDT', tags: ['Perp', 'Neutral 10x'], pnl: '+9,272.67', roi: '+0.47%', runtime: '1d 11h 25m', min: '994.50 USDT', trades: '7/17', mdd: '0.22%', data: [25, 22, 28, 24, 30, 27, 32, 29, 33, 31] },
    { pair: 'ETHUSDC', tags: ['Perp', 'Short 10x'], pnl: '+5,868.88', roi: '+31.07%', runtime: '2d 19h 44m', min: '246.08 USDC', trades: '25/249', mdd: '4.50%', data: [12, 16, 20, 24, 28, 32, 35, 37, 39, 40] },
    { pair: 'BTCUSDT', tags: ['Perp', 'Short 5x'], pnl: '+3,465.87', roi: '+17.32%', runtime: '5d 14h 21m', min: '8,956.40 USDT', trades: '122/1514', mdd: '4.34%', data: [15, 18, 22, 25, 28, 31, 34, 36, 38, 39] },
    { pair: 'ASTERUSDT', tags: ['Perp', 'Long 5x'], pnl: '+2,800.91', roi: '+23.34%', runtime: '2d 10h 25m', min: '18.20 USDT', trades: '4/19', mdd: '6.35%', data: [18, 22, 26, 29, 32, 34, 36, 38, 39, 40] },
    { pair: 'UAIUSDT', tags: ['Perp', 'Neutral 10x', 'Trailing'], pnl: '+1,865.38', roi: '+93.26%', runtime: '3d 10h 7m', min: '36.16 USDT', trades: '521/1642', mdd: '62.29%', data: [8, 15, 20, 25, 30, 33, 36, 38, 39, 40] },
    { pair: 'PAXGUSDT', tags: ['Perp', 'Long 10x'], pnl: '+1,836.64', roi: '+3.47%', runtime: '1d 12h 37m', min: '212.07 USDT', trades: '24/82', mdd: '1.48%', data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 37] },
    { pair: 'ASTERUSDT', tags: ['Perp', 'Long 10x'], pnl: '+1,818.27', roi: '+36.36%', runtime: '6d 12h 47m', min: '80.58 USDT', trades: '506/12', mdd: '22.30%', data: [14, 19, 23, 27, 30, 33, 35, 37, 38, 39] },
    { pair: 'ETHUSDT', tags: ['Perp', 'Long 10x'], pnl: '+1,621.50', roi: '+5.40%', runtime: '1d 15h 9m', min: '181.94 USDT', trades: '40/161', mdd: '2.76%', data: [16, 20, 24, 27, 30, 32, 34, 36, 37, 38] }
  ];

  const arbitrageBots = [
    { pairs: ['LAUSDT Perp', 'LA/USDT'], apr3d: '1724.75%', apr7d: '1027.38%', apr30d: '332.42%', spread: '4.7858%', funding: '-0.4360%', countdown: '00:36:47', data: [35, 32, 28, 25, 22, 20, 18, 16, 14, 12] },
    { pairs: ['LSKUSDT Perp', 'LSK/USDT'], apr3d: '1186.12%', apr7d: '1398.23%', apr30d: '677.86%', spread: '0.8822%', funding: '-0.09262%', countdown: '00:36:47', data: [28, 30, 27, 29, 26, 28, 25, 27, 26, 28] },
    { pairs: ['RESOLVUSDT Perp', 'RESOLV/USDT'], apr3d: '677.45%', apr7d: '453.72%', apr30d: '186.27%', spread: '0.2035%', funding: '-0.07639%', countdown: '02:36:47', data: [30, 28, 26, 24, 22, 20, 18, 16, 15, 14] },
    { pairs: ['KAVAUSDT Perp', 'KAVA/USDT'], apr3d: '577.77%', apr7d: '735.75%', apr30d: '604.20%', spread: '0.4576%', funding: '-0.02465%', countdown: '00:36:47', data: [25, 27, 24, 26, 23, 25, 22, 24, 23, 25] },
    { pairs: ['GLMUSDT Perp', 'GLM/USDT'], apr3d: '434.82%', apr7d: '611.21%', apr30d: '512.30%', spread: '0.2340%', funding: '-0.04343%', countdown: '02:36:47', data: [28, 26, 29, 25, 28, 24, 27, 23, 26, 25] },
    { pairs: ['AVNTUSDT Perp', 'AVNT/USDT'], apr3d: '360.18%', apr7d: '183.51%', apr30d: '187.63%', spread: '0.4064%', funding: '-0.13006%', countdown: '02:36:47', data: [30, 28, 27, 25, 24, 22, 21, 20, 19, 18] },
    { pairs: ['DASHUSDT Perp', 'DASH/USDT'], apr3d: '302.91%', apr7d: '162.67%', apr30d: '89.90%', spread: '0.6389%', funding: '-1.17292%', countdown: '02:36:47', data: [32, 30, 28, 27, 25, 24, 23, 22, 21, 20] },
    { pairs: ['OGUSDT Perp', 'OG/USDT'], apr3d: '258.00%', apr7d: '807.26%', apr30d: '815.13%', spread: '0.1367%', funding: '-0.10634%', countdown: '00:36:47', data: [22, 25, 23, 26, 24, 27, 25, 28, 26, 27] },
    { pairs: ['PARTIUSDT Perp', 'PARTI/USDT'], apr3d: '256.56%', apr7d: '152.67%', apr30d: '95.60%', spread: '0.1367%', funding: '-0.02516%', countdown: '02:36:47', data: [28, 26, 24, 22, 21, 19, 18, 17, 16, 15] }
  ];

  const Dropdown = ({ name, options, value }) => (
    <div className="relative" ref={el => dropdownRefs.current[name] = el}>
      <button onClick={() => setDropdowns(prev => ({ ...prev, [name]: !prev[name] }))} className="px-4 py-2 bg-sub-card border border-custom-border rounded-lg text-dispute-color text-sm flex items-center gap-2 hover:bg-gradient/5">
        {value} <ChevronDown size={14} />
      </button>
      {dropdowns[name] && (
        <div className="absolute top-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl z-50 min-w-[160px]">
          {name === 'market' && <div className="p-2 border-b border-custom-border"><div className="relative"><Search className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary-desc" size={14} /><input placeholder={t('botMarketplace.search')} className="w-full bg-primary-bg border border-custom-border rounded px-8 py-1.5 text-xs text-dispute-color" /></div></div>}
          <div className="max-h-60 overflow-y-auto p-1">
            {options.map(opt => (
              <button key={opt} onClick={() => { setFilters(prev => ({ ...prev, [name]: opt })); setDropdowns(prev => ({ ...prev, [name]: false })); }} className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gradient/5 ${value === opt ? 'text-dispute-color' : 'text-secondary-desc'}`}>
                <div className="flex justify-between items-center">{opt} {value === opt && <span className="text-yellow-500">✓</span>}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const MiniChart = ({ data }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((v, i) => `${i * 6},${30 - ((v - min) / range) * 25}`).join(' ');
    const isPositive = data[data.length - 1] > data[0];
    
    return (
      <svg width="60" height="30" viewBox="0 0 60 30" className="overflow-visible">
        <defs>
          <linearGradient id={`grad-${data[0]}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={`0,30 ${points} 60,30`} fill={`url(#grad-${data[0]})`} />
        <polyline points={points} fill="none" stroke={isPositive ? '#22c55e' : '#ef4444'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-primary-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-3xl font-bold text-gradient">{t('botMarketplace.title')}</h1>
          <Info size={18} className="text-secondary-desc" />
        </div>

        <div className="flex gap-6 mb-6 border-b border-custom-border">
          {[['spot', t('botMarketplace.spotGrid')], ['futures', t('botMarketplace.futuresGrid')], ['arbitrage', t('botMarketplace.arbitrage')]].map(([key, label]) => (
            <button key={key} onClick={() => setActiveTab(key)} className={`pb-3 text-sm font-medium ${activeTab === key ? 'text-dispute-color border-b-2 border-yellow-500' : 'text-secondary-desc'}`}>{label}</button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {activeTab === 'spot' && <><Dropdown name="market" options={['All', 'OG/USDT', '1000CAT/USDT', 'BTC/USDT']} value={filters.market} /><Dropdown name="days" options={['All', '<1 Day', '1-7 Days', '7-30 Days', '≥30 Days']} value={filters.days} /><Dropdown name="roi" options={['All', '≥100%', '70%-100%', '50%-70%', '20%-50%', '10%-20%', '5%-10%', '0-5%']} value={filters.roi} /><Dropdown name="mdd" options={['All', '0%-20%', '20%-40%', '40%-60%']} value={filters.mdd} /><Dropdown name="sort" options={[t('botMarketplace.topPNL'), 'Top ROI', 'Top Copied', 'Most Matched']} value={filters.sort} /></>}
          {activeTab === 'futures' && <><Dropdown name="market" options={['USDC-M', 'All']} value="USDC-M" /><Dropdown name="market2" options={['Market', 'All']} value="Market" /><Dropdown name="direction" options={['Direction', 'All', 'Long', 'Short', 'Neutral']} value="Direction" /><Dropdown name="days" options={['1-7 Days', 'All', '<1 Day', '7-30 Days']} value="1-7 Days" /><Dropdown name="roi" options={['ROI', 'All']} value="ROI" /><Dropdown name="leverage" options={['5-10x', 'All']} value="5-10x" /><Dropdown name="mdd2" options={['7D MDD', 'All']} value="7D MDD" /><Dropdown name="sort" options={[t('botMarketplace.topPNL')]} value={t('botMarketplace.topPNL')} /></>}
          {activeTab === 'arbitrage' && <><Dropdown name="zone" options={['Zone', 'All']} value="Zone" /><Dropdown name="direction" options={['Direction', 'All']} value="Direction" /><Dropdown name="sort" options={['Sort By 3d APR', 'All']} value="Sort By 3d APR" /></>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === 'spot' && spotBots.map((bot, i) => (
            <div key={i} className="bg-sub-card border border-custom-border rounded-xl p-4 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div><h3 className="text-dispute-color font-semibold text-sm">{bot.pair}</h3><p className="text-secondary-desc text-xs">PLS</p></div>
                <button className="bg-accent text-white px-4 py-1.5 rounded text-xs font-medium">{t('botMarketplace.copy')}</button>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div><p className="text-secondary-desc text-xs">{t('botMarketplace.pnl')}</p><p className="text-green-500 text-lg font-bold">{bot.pnl}</p></div>
                <MiniChart data={bot.data} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div><p className="text-secondary-desc">{t('botMarketplace.roi')}</p><p className="text-dispute-color">{bot.roi}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.runtime')}</p><p className="text-dispute-color">{bot.runtime}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.minInvestment')}</p><p className="text-dispute-color">{bot.min}</p></div>
              </div>
              <div className="flex justify-between text-xs pt-3 border-t border-custom-border">
                <div><p className="text-secondary-desc">{t('botMarketplace.matchedTrades')}</p><p className="text-dispute-color">{bot.trades}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.mdd')}</p><p className="text-dispute-color">{bot.mdd}</p></div>
              </div>
            </div>
          ))}

          {activeTab === 'futures' && futuresBots.map((bot, i) => (
            <div key={i} className="bg-sub-card border border-custom-border rounded-xl p-4 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div><h3 className="text-dispute-color font-semibold text-sm">{bot.pair}</h3><div className="flex gap-1 mt-1">{bot.tags.map((tag, j) => <span key={j} className="text-secondary-desc text-xs">{tag} {j < bot.tags.length - 1 && '|'}</span>)}</div></div>
                <button className="bg-accent text-white px-4 py-1.5 rounded text-xs font-medium">{t('botMarketplace.copy')}</button>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div><p className="text-secondary-desc text-xs">{t('botMarketplace.pnl')}</p><p className="text-green-500 text-lg font-bold">{bot.pnl}</p></div>
                <MiniChart data={bot.data} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div><p className="text-secondary-desc">{t('botMarketplace.roi')}</p><p className="text-dispute-color">{bot.roi}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.runtime')}</p><p className="text-dispute-color">{bot.runtime}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.minInvestment')}</p><p className="text-dispute-color">{bot.min}</p></div>
              </div>
              <div className="flex justify-between text-xs pt-3 border-t border-custom-border">
                <div><p className="text-secondary-desc">{t('botMarketplace.matchedTrades')}</p><p className="text-dispute-color">{bot.trades}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.mdd')}</p><p className="text-dispute-color">{bot.mdd}</p></div>
              </div>
            </div>
          ))}

          {activeTab === 'arbitrage' && arbitrageBots.map((bot, i) => (
            <div key={i} className="bg-sub-card border border-custom-border rounded-xl p-4 hover:border-accent/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>{bot.pairs.map((p, j) => <h3 key={j} className={`font-semibold text-sm ${j === 0 ? 'text-green-500' : 'text-red-500'}`}>{j === 0 ? '⬆' : '⬇'} {p}</h3>)}</div>
                <button className="bg-accent text-white px-4 py-1.5 rounded text-xs font-medium">{t('botMarketplace.create')}</button>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div><p className="text-secondary-desc text-xs">3d {t('botMarketplace.apr')}</p><p className="text-green-500 text-lg font-bold">{bot.apr3d}</p></div>
                <MiniChart data={bot.data} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div><p className="text-secondary-desc">7d {t('botMarketplace.apr')}</p><p className="text-green-500">{bot.apr7d}</p></div>
                <div><p className="text-secondary-desc">30d {t('botMarketplace.apr')}</p><p className="text-green-500">{bot.apr30d}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.spreadRate')}</p><p className="text-dispute-color">{bot.spread}</p></div>
              </div>
              <div className="flex justify-between text-xs pt-3 border-t border-custom-border">
                <div><p className="text-secondary-desc">{t('botMarketplace.nextFunding')}</p><p className="text-dispute-color">{bot.funding}</p></div>
                <div><p className="text-secondary-desc">{t('botMarketplace.countdown')}</p><p className="text-dispute-color">{bot.countdown}</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4, 5, '...', 50].map((p, i) => (
            <button key={i} className={`px-3 py-1.5 rounded ${p === 1 ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:text-dispute-color'} text-sm`}>{p}</button>
          ))}
          <button className="px-3 py-1.5 text-secondary-desc hover:text-dispute-color text-sm">›</button>
        </div>
      </div>
    </div>
  );
};

export default BotMarketplace;