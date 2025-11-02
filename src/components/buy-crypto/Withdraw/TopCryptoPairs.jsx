import React from "react";
import { useTranslation } from "react-i18next";

const TopCryptoPairs = () => {
  const { t } = useTranslation();

  const pairs = [
    { from: "USDT", to: "AZN", rate: "1.7202259", icons: ["💎", "₼"] },
    { from: "IO", to: "AZN", rate: "0.5104416", icons: ["🌀", "₼"] },
    { from: "NOT", to: "AZN", rate: "0.0012451", icons: ["⚫", "₼"] },
    { from: "BB", to: "AZN", rate: "0.1784807", icons: ["💥", "₼"] },
    { from: "REZ", to: "AZN", rate: "0.0143637", icons: ["🧬", "₼"] },
    { from: "SHIB", to: "AZN", rate: "0.0000167", icons: ["🐕", "₼"] },
  ];

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="w-fit text-3xl sm:text-4xl font-bold text-gradient mb-3 mx-auto lg:mx-0">
            {t("topCryptoPairs.title")}
          </h2>
          <p className="text-secondary-desc">
            {t("topCryptoPairs.subtitle")}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pairs.map((p, i) => (
            <div
              key={i}
              className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dispute-color mb-2">
                    {p.from} to {p.to}
                  </h3>
                  <p className="text-secondary-desc">
                    1 {p.from} = {p.rate} {p.to}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {p.icons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 bg-card border border-custom-border rounded-full flex items-center justify-center text-2xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-secondary-desc">
          {t("topCryptoPairs.disclaimer.text")}{" "}
          <a
            href="#"
            className="text-yellow-500 hover:underline"
          >
            {t("topCryptoPairs.disclaimer.privacy")}
          </a>{" "}
          {t("topCryptoPairs.disclaimer.and")}{" "}
          <a
            href="#"
            className="text-yellow-500 hover:underline"
          >
            {t("topCryptoPairs.disclaimer.terms")}
          </a>{" "}
          {t("topCryptoPairs.disclaimer.apply")}
        </div>
      </div>
    </section>
  );
};

export default TopCryptoPairs;