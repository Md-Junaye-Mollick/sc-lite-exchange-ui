import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

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
        navigate("/trade/spot");
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
            className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-gradient-teal-hover btn-transition shadow-glow hover:shadow-glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
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
    </div>
  );
};

export default SignInPage;
