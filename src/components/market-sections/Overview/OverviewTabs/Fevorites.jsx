import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Fevorites = () => {
  const { t } = useTranslation();

  const pairs = [
    { name: "BNB", price: "1,079.70", change: "-1.99%" },
    { name: "BTC", price: "109,936.49", change: "+1.38%" },
    { name: "ETH", price: "3,848.60", change: "+0.50%" },
    { name: "SOL", price: "186.78", change: "-0.59%" },
    { name: "XRP", price: "2.5135", change: "+0.74%" },
    { name: "MORPHO", price: "1.989", change: "+1.84%" },
    { name: "ZEC", price: "364.13", change: "+7.67%" },
    { name: "SUI", price: "2.3612", change: "-0.91%" },
  ];

  const [favorites, setFavorites] = useState(pairs.map((p) => p.name));

  const toggleFavorite = (pairName) => {
    setFavorites((prev) =>
      prev.includes(pairName)
        ? prev.filter((name) => name !== pairName)
        : [...prev, pairName]
    );
  };

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-3">
            {t("favorites.title")}
          </h2>
          <p className="text-secondary-desc">{t("favorites.subtitle")}</p>
        </div>

        {/* Grid of Crypto Pairs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pairs.map((pair, index) => {
            const isPositive = pair.change.startsWith("+");
            const isFavorite = favorites.includes(pair.name);

            return (
              <div
                key={index}
                className="bg-sub-card backdrop-blur-xl border border-custom-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dispute-color">
                    {pair.name}
                    <span className="text-secondary-desc text-sm">/USDT</span>
                  </h3>
                  <input
                    type="checkbox"
                    checked={isFavorite}
                    onChange={() => toggleFavorite(pair.name)}
                    className="accent-yellow-400 w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="text-xl font-semibold text-dispute-color mb-2">
                  {pair.price}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {pair.change}
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-gradient text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm sm:text-base">
            {t("favorites.addFavorites")}
          </button>
          <a
            href="#"
            className="text-yellow-400 hover:underline font-medium"
          >
            {t("favorites.addOtherPairs")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fevorites;