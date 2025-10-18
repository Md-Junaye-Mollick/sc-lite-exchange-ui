// src/utils/header.options.js
import {
  BarChart2, DollarSign, Wallet, Users, LayoutDashboard, Zap, Bot, Repeat2,
  HardHat, Link as LinkIcon, PiggyBank, BriefcaseBusiness, TrendingUp,
  CandlestickChart, CreditCard, Gift, Handshake, ShieldCheck, HelpCircle, Settings,
} from "lucide-react";

export const getNavItems = (t, {
  BarChart2, DollarSign, Wallet, Users, LayoutDashboard, Zap, Bot, Repeat2,
  HardHat, LinkIcon, PiggyBank, BriefcaseBusiness, TrendingUp, CandlestickChart,
  CreditCard, Gift, Handshake, ShieldCheck, HelpCircle, Settings
}) => [
  {
    name: t("buyCrypto"),
    path: "/buy-crypto",
    // DROPDOWN PROPERTY IS REMOVED HERE
    // When dropdown is absent, it will be treated as a simple link.
  },
  {
    name: t("markets"),
    path: "/markets",
    dropdown: {
      basic: [
        {
          name: t("spotMarkets"),
          description: t("spotMarketsDesc"),
          icon: BarChart2,
          iconColor: "#10b981",
          path: "/markets/spot",
        },
        {
          name: t("futuresMarkets"),
          description: t("futuresMarketsDesc"),
          icon: TrendingUp,
          iconColor: "#ef4444",
          path: "/markets/futures",
        },
      ],
      advanced: [
        {
          name: t("defiMarkets"),
          description: t("defiMarketsDesc"),
          icon: LinkIcon,
          iconColor: "#a855f7",
          path: "/markets/defi",
        },
      ],
    },
  },
  {
    name: t("trade"),
    path: "/trade",
    dropdown: {
      basic: [
        {
          name: t("spotTrading"),
          description: t("spotTradingDesc"),
          icon: CandlestickChart,
          iconColor: "#06b6d4",
          path: "/trade/spot",
        },
        {
          name: t("marginTrading"),
          description: t("marginTradingDesc"),
          icon: Zap,
          iconColor: "#eab308",
          path: "/trade/margin",
        },
        {
          name: t("p2pTrading"),
          description: t("p2pTradingDesc"),
          icon: Users,
          iconColor: "#f97316",
          path: "/trade/p2p",
        },
        {
          name: t("convertBlockTrade"),
          description: t("convertBlockTradeDesc"),
          icon: Repeat2,
          iconColor: "#22c55e",
          path: "/trade/convert-block",
        },
        {
          name: t("demoTrading"),
          description: t("demoTradingDesc"),
          icon: HardHat,
          iconColor: "#6366f1",
          path: "/trade/demo",
        },
      ],
      advanced: [
        {
          name: t("dex"),
          description: t("dexDesc"),
          icon: LayoutDashboard,
          iconColor: "#8b5cf6",
          path: "/trade/dex",
        },
        {
          name: t("alpha"),
          description: t("alphaDesc"),
          icon: DollarSign,
          iconColor: "#d946ef",
          path: "/trade/alpha",
        },
        {
          name: t("tradingBots"),
          description: t("tradingBotsDesc"),
          icon: Bot,
          iconColor: "#f43f5e",
          path: "/trade/bots",
        },
        {
          name: t("copyTrading"),
          description: t("copyTradingDesc"),
          icon: Users,
          iconColor: "#3b82f6",
          path: "/trade/copy-trading",
        },
        {
          name: t("apis"),
          description: t("apisDesc"),
          icon: LinkIcon,
          iconColor: "#facc15",
          path: "/trade/apis",
        },
      ],
    },
  },
  {
    name: t("futures"),
    path: "/futures",
    dropdown: {
      basic: [
        {
          name: t("futuresOverview"),
          description: t("futuresOverviewDesc"),
          icon: TrendingUp,
          iconColor: "#f59e0b",
          path: "/futures/overview",
        },
      ],
      advanced: [
        {
          name: t("futuresTrading"),
          description: t("futuresTradingDesc"),
          icon: CandlestickChart,
          iconColor: "#0ea5e9",
          path: "/futures/trading",
        },
      ],
    },
  },
  {
    name: t("earn"),
    path: "/earn",
    dropdown: {
      basic: [
        {
          name: t("savings"),
          description: t("savingsDesc"),
          icon: PiggyBank,
          iconColor: "#4ade80",
          path: "/earn/savings",
        },
      ],
      advanced: [
        {
          name: t("staking"),
          description: t("stakingDesc"),
          icon: Wallet,
          iconColor: "#a78bfa",
          path: "/earn/staking",
        },
      ],
    },
  },
  {
    name: t("more"),
    path: "/more",
    dropdown: {
      basic: [
        {
          name: t("aboutUs"),
          description: t("aboutUsDesc"),
          icon: BriefcaseBusiness,
          iconColor: "#e879f9",
          path: "/about",
        },
        {
          name: t("security"),
          description: t("securityDesc"),
          icon: ShieldCheck,
          iconColor: "#2563eb",
          path: "/security",
        },
      ],
      advanced: [
        {
          name: t("support"),
          description: t("supportDesc"),
          icon: HelpCircle,
          iconColor: "#fca5a5",
          path: "/support",
        },
        {
          name: t("settings"),
          description: t("settingsDesc"),
          icon: Settings,
          iconColor: "#6b7280",
          path: "/settings",
        },
      ],
    },
  },
];