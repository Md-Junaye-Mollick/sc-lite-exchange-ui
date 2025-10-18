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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-lg">Community</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                <span>🐦</span><span>Twitter</span>
              </a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                <span>📱</span><span>Telegram</span>
              </a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                <span>💬</span><span>Discord</span>
              </a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                <span>📸</span><span>Instagram</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">About Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Announcements</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Legal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Products</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Exchange</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Buy Crypto</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Pay</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Academy</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Live</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">NFT</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Business</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">P2P Merchant</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">P2P Merchant Application</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Listing Application</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Institutional & VIP</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Labs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">24/7 Chat Support</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Product Feedback</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Fees</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Trading Rules</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">SCLight Exchange Verify</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">◆</span>
              </div>
              <span className="text-sm text-gray-400">© 2025 SCLight Exchange. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Cookie Preferences</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
