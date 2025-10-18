import React from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Droplet, // For app logo, if you use an icon
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t("company"),
      links: [
        { name: t("aboutUs"), path: "/about" },
        { name: t("careers"), path: "/careers" }, // New key
        { name: t("blog"), path: "/blog" }, // New key
        { name: t("security"), path: "/security" },
      ],
    },
    {
      title: t("products"), // New key
      links: [
        { name: t("spotTrading"), path: "/trade/spot" },
        { name: t("futuresTrading"), path: "/futures/trading" },
        { name: t("earn"), path: "/earn" },
        { name: t("buyCrypto"), path: "/buy-crypto" },
      ],
    },
    {
      title: t("support"),
      links: [
        { name: t("helpCenter"), path: "/support" }, // New key, reusing existing path
        { name: t("apiDocumentation"), path: "/apis" }, // New key, reusing existing path
        { name: t("fees"), path: "/fees" }, // New key
        { name: t("legal"), path: "/legal/terms" }, // New key, links to terms
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      path: "https://facebook.com/your-exchange",
    },
    { icon: <Twitter size={20} />, path: "https://twitter.com/your-exchange" },
    {
      icon: <Instagram size={20} />,
      path: "https://instagram.com/your-exchange",
    },
    {
      icon: <Linkedin size={20} />,
      path: "https://linkedin.com/company/your-exchange",
    },
    { icon: <Youtube size={20} />, path: "https://youtube.com/your-exchange" },
  ];

  return (
    <footer className="bg-card text-dispute-color border-t border-custom-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Brand Info */}
          <div className="md:w-1/4">
            <a
              href="/"
              className="flex items-center space-x-2 mb-4 text-xl font-extrabold text-accent hover:text-accent-dark btn-transition"
            >
              <img
                src="/images/logo.png"
                alt={t("appName")}
                className="w-8 h-8 object-contain"
              />
              <span>{t("appName")}</span>
            </a>
            <div className="max-w-52">
              <p className="text-sm text-dispute-color text-opacity-70">
                {t("footerTagline")}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:w-3/4">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-md font-semibold mb-4 text-accent">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="text-sm  text-opacity-70 hover:text-accent btn-transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="border-custom-border my-8 md:my-10" />

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.path}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dispute-color text-opacity-70 hover:text-accent btn-transition"
                aria-label={
                  social.path.includes("facebook")
                    ? "Facebook"
                    : social.path.includes("twitter")
                    ? "Twitter"
                    : social.path.includes("instagram")
                    ? "Instagram"
                    : social.path.includes("linkedin")
                    ? "LinkedIn"
                    : "YouTube"
                }
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-dispute-color text-opacity-70 text-center md:text-right">
            &copy; {currentYear} {t("appName")}. {t("allRightsReserved")}{" "}
            {/* New key */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
