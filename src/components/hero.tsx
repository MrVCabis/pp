import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const nameRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-amber-400 opacity-15 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-6">
          <h1 className="text-gray-900">
            <div 
              ref={nameRef}
              className="block relative inline-block cursor-default"
              style={{
                fontSize: '88px',
                fontFamily: language === 'zh' ? "'Long Cang', cursive" : "'Caveat', cursive",
                fontWeight: 700,
                backgroundImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, #3b82f6, #8b5cf6, #ec4899, #f97316)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('common.name')}
            </div>
            <span className="block mt-4 text-gray-700">{t('hero.title')}</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>

        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-purple-500 animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}