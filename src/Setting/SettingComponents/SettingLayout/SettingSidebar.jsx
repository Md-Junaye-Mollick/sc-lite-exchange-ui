import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Package, ShoppingCart, Gift, UserPlus, User,
  ChevronDown, ChevronUp, Settings
} from "lucide-react";

const menuItems = [
  { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
  {
    name: "Assets", icon: Package, sub: [
      { path: "/assets/overview", name: "Overview" },
      { path: "/assets/spot", name: "Spot" },
      { path: "/assets/margin", name: "Margin" },
      {
        name: "Third-Party Wallet", sub: [
          { path: "/assets/wallet/sc-lite-tr", name: "SC-Lite TR" },
          { path: "/assets/wallet/tokocrypto", name: "Tokocrypto" },
          { path: "/assets/wallet/sc-lite-th", name: "SC-Lite TH" },
        ],
      },
    ],
  },
  {
    name: "Orders", icon: ShoppingCart, sub: [
      { path: "/orders/history", name: "Assets History" },
      { path: "/orders/spot", name: "Spot Order" },
      { path: "/orders/p2p", name: "P2P Order" },
    ],
  },
  { path: "/rewards", name: "Rewards Hub", icon: Gift },
  { path: "/referral", name: "Referral", icon: UserPlus },
  {
    name: "Account", icon: User, sub: [
      { path: "/account/identification", name: "Identification" },
      { path: "/account/security", name: "Security" },
      { path: "/account/payment", name: "Payment" },
      { path: "/account/api", name: "API Management" },
      { path: "/account/statement", name: "Account Statement" },
      { path: "/account/reports", name: "Financial Reports" },
    ],
  },
  { path: "/sub-accounts", name: "Sub Accounts", icon: User },
  { path: "/settings", name: "Settings", icon: Settings },
];

const Sidebar = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState({});

  useEffect(() => {
    const expand = (items, parent) => {
      for (const i of items) {
        if (i.sub && expand(i.sub, i.name)) return true;
        if (i.path && pathname.startsWith(i.path)) {
          if (parent) setOpen(o => ({ ...o, [parent]: true }));
          return true;
        }
      }
      return false;
    };
    menuItems.forEach(i => i.sub && expand(i.sub, i.name));
  }, [pathname]);

  const toggle = name => setOpen(o => ({ ...o, [name]: !o[name] }));

  const MenuItem = ({ item, level = 0 }) => {
    const Icon = item.icon;
    const active = item.path && pathname.startsWith(item.path);
    const openDrop = open[item.name];

    if (item.sub) {
      const activeChild = item.sub.some(s =>
        s.path ? pathname.startsWith(s.path) : false
      );
      return (
        <div>
          <button
            onClick={() => toggle(item.name)}
            className={`flex w-full items-center justify-between gap-3 py-2 px-2 rounded-lg transition-all 
              ${activeChild ? "bg-card text-dispute-color shadow" : "text-secondary-desc hover:bg-card hover:text-dispute-color hover:shadow-sm"}
              ${level > 0 ? "pl-6" : ""}`}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 
                  ${activeChild ? "bg-gradient text-white" : "backdrop-blur-md bg-white/10 border border-white/20"}`}>
                  <Icon size={15} />
                </div>
              )}
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </div>
            {isOpen && (openDrop ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
          </button>

          {isOpen && openDrop && (
            <div className="ml-3 mt-1 border-l border-custom-border pl-3 space-y-1">
              {item.sub.map(s => <MenuItem key={s.path || s.name} item={s} level={level + 1} />)}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-3 py-2 px-2 rounded-lg transition-all
          ${isActive ? "bg-card text-dispute-color shadow" : "text-secondary-desc hover:bg-card hover:text-dispute-color hover:shadow-sm"}
          ${level > 0 ? "pl-6" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            {Icon && (
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 
                ${isActive ? "bg-gradient text-white" : "backdrop-blur-md bg-white/10 border border-white/20"}`}>
                <Icon size={15} />
              </div>
            )}
            {isOpen && <span className="text-sm font-medium">{item.name}</span>}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed left-0 top-[65px] z-50 h-[calc(100vh-70px)] bg-sub-card border-r border-custom-border shadow-2xl transition-all duration-300
      ${isOpen ? "w-64" : "w-[72px]"}`}
    >
      <div className="overflow-y-auto py-2 px-3 space-y-2">
        {menuItems.map(i => <MenuItem key={i.path || i.name} item={i} />)}
      </div>
    </aside>
  );
};

export default Sidebar;