import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, QrCode } from "lucide-react";

const SignInPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === "test@example.com" && password === "password123") {
        console.log("Sign In Successful!", { email });
        navigate("/landing");
      } else {
        setError(t("signInError"));
      }
    } catch (err) {
      console.error(err);

      setError(t("somethingWentWrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pre-bg p-4 text-sm">
      <div className="w-full max-w-6xl flex gap-8 items-center">
        {/* Left Side - Sign In Form */}
        <div className="bg-card rounded-3xl shadow-lg p-4 sm:p-8 w-full max-w-lg border border-custom-border animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            {/* App Logo */}
            <div className="mb-4">
              {/* Using your provided image path */}
              {/* Make sure '/images/logo.png' exists in your 'public' folder */}
              <img
                src="/images/logo.png"
                alt={t("appName")}
                className="w-20 h-20 object-contain"
              />
              {/* Fallback if image not found or if you prefer an icon for now */}
              {/* <Droplet size={64} className="text-accent" /> */}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-dispute-color mb-2">
              {t("login")}
            </h1>
            <p className="text-dispute-color text-opacity-70 text-center">
              {t("signInDescription")}
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dispute-color mb-2"
              >
                {t("emailAddress")}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail
                    size={20}
                    className="text-dispute-color text-opacity-60"
                  />
                </span>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-sub-card border border-custom-border focus:ring-2 focus:ring-accent focus:border-accent outline-none text-dispute-color placeholder-text-color-dark btn-transition"
                  placeholder={t("yourEmail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-dispute-color mb-2"
              >
                {t("password")}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock
                    size={20}
                    className="text-dispute-color text-opacity-60"
                  />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-sub-card border border-custom-border focus:ring-2 focus:ring-accent focus:border-accent outline-none text-dispute-color placeholder-text-color-dark btn-transition"
                  placeholder={t("yourPassword")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-dispute-color text-opacity-60 hover:text-accent btn-transition"
                  aria-label={t(showPassword ? "hidePassword" : "showPassword")}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center font-medium">
                {error}
              </p>
            )}

            {/* Forgot Password Link */}
            <div className="text-right ">
              <Link
                to="/forgot-password"
                className="text-accent hover:underline text-sm btn-transition"
              >
                {t("forgotPassword")}?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient text-white font-semibold text-lg hover:bg-gradient-teal-hover btn-transition shadow-glow hover:shadow-glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin inset-0" />
                </>
              ) : (
                <>
                  {t("login")}
                  {/* <ArrowRight size={20} className="ml-2" /> */}
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-dispute-color text-opacity-80 mt-6 text-sm">
            {t("dontHaveAccount")}?{" "}
            <Link
              to="/signup"
              className="text-accent hover:underline font-medium btn-transition"
            >
              {t("signup")}
            </Link>
          </p>
        </div>

        {/* Right Side - QR Code Section */}
        <div className="hidden lg:flex bg-card rounded-3xl shadow-lg p-8 border border-custom-border ml-10">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-2xl font-bold text-dispute-color">Quick Log In - Scan using App</h2>
            
            <div className="relative group cursor-pointer overflow-hidden w-80 h-64 flex items-center justify-center">
              <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-x-16">
                <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DeltaIndiaAppLogin" 
                    alt="QR Code for App Login" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                
                {Array(4).fill().map((_, i) => (
                  <div key={i} className={`absolute ${i===0?'-top-2 -left-2':i===1?'-top-2 -right-2':i===2?'-bottom-2 -left-2':'-bottom-2 -right-2'} w-6 h-6`}>
                    <div className={`absolute ${i===0||i===2?'left-0':'right-0'} ${i===0||i===1?'top-0':'bottom-0'} w-6 h-1 bg-accent`}></div>
                    <div className={`absolute ${i===0||i===2?'left-0':'right-0'} ${i===0||i===1?'top-0':'bottom-0'} w-1 h-6 bg-accent`}></div>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                <div className="w-32 h-56 bg-black rounded-3xl border-4 border-zinc-700 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-6 left-2 right-2 bottom-6 bg-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                    <div className="h-6 bg-zinc-900 flex items-center justify-center">
                      <div className="w-12 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900 relative">
                      <div className="w-16 h-16 border-2 border-blue-400 rounded-lg relative">
                        {Array(4).fill().map((_, i) => (
                          <div key={i} className={`absolute ${i===0?'-top-1 -left-1':i===1?'-top-1 -right-1':i===2?'-bottom-1 -left-1':'-bottom-1 -right-1'} w-3 h-3 ${i===0?'border-l-2 border-t-2':i===1?'border-r-2 border-t-2':i===2?'border-l-2 border-b-2':'border-r-2 border-b-2'} border-blue-400`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-zinc-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-dispute-color text-opacity-70">
              <QrCode className="w-6 h-6 text-accent" />
              <p className="max-w-xs text-sm">
                Scan this code with the latest Delta India App to log in instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;