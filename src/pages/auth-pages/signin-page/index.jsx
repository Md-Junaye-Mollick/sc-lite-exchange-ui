import React, { useState, useEffect, useRef } from "react";
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
  const canvasRef = useRef(null);

  const navigate = useNavigate();

  // Add keyframe animations for QR scanning effect
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scan-line {
        0% {
          top: 0;
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          top: 100%;
          opacity: 0;
        }
      }
      @keyframes pulse-ring {
        0% {
          transform: scale(1);
          opacity: 0.5;
        }
        50% {
          transform: scale(1.05);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0.5;
        }
      }
      .animate-scan-line {
        animation: scan-line 3s ease-in-out infinite;
      }
      .animate-pulse-ring {
        animation: pulse-ring 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Advanced Trading Chart Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const candleCount = Math.floor(canvas.width / 40);
    const candles = [];
    const particles = [];
    const trendLines = [];
    let offset = 0;
    let time = 0;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 160; // Blue to cyan range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Candlestick {
      constructor(x, prevCandle) {
        this.x = x;
        const trend = Math.sin(time * 0.02) * 0.3;
        const basePrice = prevCandle ? prevCandle.close : 250;
        this.open = basePrice + (Math.random() - 0.5) * 30;
        this.close = this.open + (Math.random() - 0.5 + trend) * 60;
        this.high = Math.max(this.open, this.close) + Math.random() * 40;
        this.low = Math.min(this.open, this.close) - Math.random() * 40;
        this.bullish = this.close > this.open;
        this.opacity = 1;
        this.pulse = 0;
      }

      draw(baseY) {
        const bodyTop = Math.min(this.open, this.close);
        const bodyBottom = Math.max(this.open, this.close);
        const bodyHeight = Math.abs(this.close - this.open);
        
        // Pulsing effect
        this.pulse = Math.sin(time * 0.1 + this.x * 0.05) * 0.2 + 1;
        
        // Draw wick with gradient
        const wickGradient = ctx.createLinearGradient(this.x, baseY - this.high, this.x, baseY - this.low);
        wickGradient.addColorStop(0, this.bullish ? `rgba(34, 197, 94, ${this.opacity * 0.8})` : `rgba(248, 113, 113, ${this.opacity * 0.8})`);
        wickGradient.addColorStop(1, this.bullish ? `rgba(34, 197, 94, ${this.opacity * 0.3})` : `rgba(248, 113, 113, ${this.opacity * 0.3})`);
        ctx.strokeStyle = wickGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, baseY - this.high);
        ctx.lineTo(this.x, baseY - this.low);
        ctx.stroke();

        // Draw body with glow
        ctx.shadowBlur = 15 * this.pulse;
        ctx.shadowColor = this.bullish ? 'rgba(34, 197, 94, 0.8)' : 'rgba(248, 113, 113, 0.8)';
        
        const bodyGradient = ctx.createLinearGradient(this.x - 10, baseY - bodyTop, this.x + 10, baseY - bodyBottom);
        bodyGradient.addColorStop(0, this.bullish ? `rgba(34, 197, 94, ${this.opacity})` : `rgba(248, 113, 113, ${this.opacity})`);
        bodyGradient.addColorStop(1, this.bullish ? `rgba(22, 163, 74, ${this.opacity * 0.7})` : `rgba(220, 38, 38, ${this.opacity * 0.7})`);
        ctx.fillStyle = bodyGradient;
        ctx.fillRect(this.x - 10, baseY - bodyTop, 20, bodyHeight || 3);
        
        ctx.shadowBlur = 0;

        // Draw volume indicator
        const volumeHeight = Math.random() * 30 + 10;
        ctx.fillStyle = this.bullish ? `rgba(34, 197, 94, ${this.opacity * 0.2})` : `rgba(248, 113, 113, ${this.opacity * 0.2})`;
        ctx.fillRect(this.x - 8, baseY + 20, 16, volumeHeight);
      }
    }

    class TrendLine {
      constructor(colorIndex) {
        this.points = [];
        const colors = [
          'rgba(59, 130, 246, 0.7)',   // Blue
          'rgba(168, 85, 247, 0.7)',   // Purple
          'rgba(236, 72, 153, 0.7)',   // Pink
          'rgba(20, 184, 166, 0.7)'    // Teal
        ];
        this.color = colors[colorIndex % colors.length];
        this.offset = 0;
        this.phase = Math.random() * Math.PI * 2;
        this.amplitude = 60 + Math.random() * 40;
        this.frequency = 0.015 + Math.random() * 0.01;
        
        for (let i = 0; i < candleCount + 30; i++) {
          const x = i * 40;
          const y = Math.sin(i * this.frequency + this.phase) * this.amplitude + 200 + Math.random() * 50;
          this.points.push({ x, y });
        }
      }

      draw(baseY) {
        if (this.points.length < 2) return;
        
        // Draw line with gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, this.color.replace('0.7', '0'));
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, this.color.replace('0.7', '0'));
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.moveTo(this.points[0].x - this.offset, baseY - this.points[0].y);
        
        for (let i = 1; i < this.points.length - 1; i++) {
          const xc = (this.points[i].x + this.points[i + 1].x) / 2;
          const yc = (this.points[i].y + this.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(
            this.points[i].x - this.offset, 
            baseY - this.points[i].y, 
            xc - this.offset, 
            baseY - yc
          );
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw dots at data points
        for (let i = 0; i < this.points.length; i += 5) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.points[i].x - this.offset, baseY - this.points[i].y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      update() {
        this.offset += 0.8;
        if (this.offset > 40) {
          this.offset = 0;
          this.points.shift();
          const lastPoint = this.points[this.points.length - 1];
          const x = lastPoint.x + 40;
          const y = Math.sin(this.points.length * this.frequency + this.phase) * this.amplitude + 200 + Math.random() * 50;
          this.points.push({ x, y });
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Initialize candles
    let prevCandle = null;
    for (let i = 0; i < candleCount; i++) {
      const candle = new Candlestick(i * 40 + 20, prevCandle);
      candles.push(candle);
      prevCandle = candle;
    }

    // Initialize trend lines
    for (let i = 0; i < 4; i++) {
      trendLines.push(new TrendLine(i));
    }

    let animationId;
    const animate = () => {
      time++;
      
      // Clear with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseY = canvas.height * 0.6;

      // Draw animated particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw grid with pulsing effect
      const gridOpacity = 0.1 + Math.sin(time * 0.02) * 0.05;
      ctx.strokeStyle = `rgba(100, 116, 139, ${gridOpacity})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        const y = (canvas.height / 8) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw trend lines
      trendLines.forEach(line => {
        line.update();
        line.draw(baseY);
      });

      // Update candles (scroll effect)
      offset += 0.8;
      if (offset >= 40) {
        offset = 0;
        const lastCandle = candles[candles.length - 1];
        candles.shift();
        candles.push(new Candlestick(candleCount * 40 + 20, lastCandle));
      }

      // Draw candles with fade
      candles.forEach((candle, i) => {
        const fadeDistance = 8;
        if (i < fadeDistance) {
          candle.opacity = i / fadeDistance;
        } else if (i > candles.length - fadeDistance) {
          candle.opacity = (candles.length - i) / fadeDistance;
        } else {
          candle.opacity = 1;
        }
        
        const newCandle = Object.assign(Object.create(Object.getPrototypeOf(candle)), candle);
        newCandle.x = candle.x - offset;
        newCandle.draw(baseY);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="min-h-screen flex items-center justify-center bg-pre-bg p-4 text-sm relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      <div className="w-full max-w-6xl flex gap-8 items-center relative z-10">
        {/* Left Side - Sign In Form */}
        <div className="bg-card rounded-3xl shadow-lg p-4 sm:p-8 w-full max-w-lg border border-custom-border animate-fade-in backdrop-blur-sm">
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
        <div className="hidden lg:flex bg-card rounded-3xl shadow-lg p-8 border border-custom-border ml-10 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-2xl font-bold text-dispute-color">Quick Log In - Scan using App</h2>
            
            <div className="relative group cursor-pointer overflow-hidden w-80 h-64 flex items-center justify-center">
              <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-x-16">
                <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl relative overflow-hidden">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DeltaIndiaAppLogin" 
                    alt="QR Code for App Login" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                  
                  {/* Animated Scanning Line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan-line opacity-70 blur-sm"></div>
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan-line opacity-100"></div>
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-accent animate-pulse-ring opacity-0"></div>
                </div>
                
                {Array(4).fill().map((_, i) => (
                  <div key={i} className={`absolute ${i===0?'-top-2 -left-2':i===1?'-top-2 -right-2':i===2?'-bottom-2 -left-2':'-bottom-2 -right-2'} w-6 h-6`}>
                    <div className={`absolute ${i===0||i===2?'left-0':'right-0'} ${i===0||i===1?'top-0':'bottom-0'} w-6 h-1 bg-accent transition-all duration-300 group-hover:shadow-glow`}></div>
                    <div className={`absolute ${i===0||i===2?'left-0':'right-0'} ${i===0||i===1?'top-0':'bottom-0'} w-1 h-6 bg-accent transition-all duration-300 group-hover:shadow-glow`}></div>
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