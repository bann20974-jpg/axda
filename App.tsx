import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, CreditCard, MapPin, ChevronDown, Star, TrendingUp, Smartphone, ArrowRight, Wallet, Zap, Globe } from 'lucide-react';
import { TRANSLATIONS, REFERRAL_LINK, LANGUAGES } from './constants';
import { Button } from './components/Button';
import { IncomeCalculator } from './components/IncomeCalculator';
import { CourierChat } from './components/CourierChat';
import { LanguageCode } from './types';

export function App() {
  const [lang, setLang] = useState<LanguageCode>('ru');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleRegisterClick = () => {
    window.location.href = REFERRAL_LINK;
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wallet': return <Wallet className="w-6 h-6 text-yandex-black" />;
      case 'Clock': return <Clock className="w-6 h-6 text-yandex-black" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-yandex-black" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-yandex-black" />;
      default: return <Star className="w-6 h-6 text-yandex-black" />;
    }
  };

  // Function to get background gradient based on language
  const getBackgroundStyle = (code: LanguageCode) => {
    switch (code) {
      case 'uz': // Uzbekistan: Blue, White, Green (Vibrant)
        return 'linear-gradient(135deg, rgba(0, 153, 181, 0.7) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(30, 181, 58, 0.7) 100%)';
      case 'tj': // Tajikistan: Red, White, Green (Vibrant)
        return 'linear-gradient(135deg, rgba(204, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 102, 0, 0.7) 100%)';
      case 'kg': // Kyrgyzstan: Red with Sun (Yellow)
        return 'linear-gradient(135deg, rgba(239, 51, 64, 0.8) 0%, rgba(255, 240, 200, 0.5) 50%, rgba(255, 237, 0, 0.7) 100%)';
      case 'kz': // Kazakhstan: Sky Blue, Yellow (Vibrant)
        return 'linear-gradient(135deg, rgba(0, 175, 202, 0.7) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(254, 204, 45, 0.7) 100%)';
      case 'am': // Armenia: Red, Blue, Orange
        return 'linear-gradient(135deg, rgba(217, 0, 18, 0.7) 0%, rgba(0, 51, 160, 0.5) 50%, rgba(242, 168, 0, 0.7) 100%)';
      case 'az': // Azerbaijan: Blue, Red, Green
        return 'linear-gradient(135deg, rgba(0, 181, 226, 0.7) 0%, rgba(239, 51, 64, 0.5) 50%, rgba(80, 158, 47, 0.7) 100%)';
      case 'by': // Belarus: Red, Green
        return 'linear-gradient(135deg, rgba(213, 35, 35, 0.7) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(0, 142, 91, 0.7) 100%)';
      default: // Russia: White, Blue, Red
        return 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 57, 166, 0.1) 50%, rgba(213, 43, 30, 0.1) 100%)';
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-yandex-yellow selection:text-black relative transition-all duration-700">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-700 ease-in-out"
        style={{ 
          background: getBackgroundStyle(lang),
          backgroundSize: '200% 200%',
          animation: 'gradientBG 15s ease infinite'
        }}
      />
      {/* Reduced opacity White Overlay to let colors show through */}
      <div className="fixed inset-0 z-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-3">
                <div className="bg-yandex-yellow w-10 h-10 rounded-xl flex items-center justify-center font-bold text-2xl text-black shadow-sm">
                  Я
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-lg tracking-tight">Еда</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Партнерам</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Language Selector */}
                <div className="relative">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                  >
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="uppercase">{lang}</span>
                    <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLangMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)}></div>
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 max-h-64 overflow-y-auto">
                        {LANGUAGES.map((l) => (
                          <button
                            key={l.code}
                            onClick={() => {
                              setLang(l.code);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-gray-50 ${lang === l.code ? 'bg-yellow-50 text-yandex-black font-medium' : 'text-gray-600'}`}
                          >
                            <span className="text-lg">{l.flag}</span>
                            {l.name}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                  <a href="#benefits" className="hover:text-black transition-colors">{t.benefitsTitle}</a>
                  <a href="#faq" className="hover:text-black transition-colors">{t.faqTitle}</a>
                </div>
                <Button 
                  onClick={handleRegisterClick} 
                  className="hidden sm:flex text-sm py-2 px-5 rounded-lg bg-yandex-black text-white hover:bg-gray-800 ring-2 ring-transparent hover:ring-yandex-yellow transition-all"
                >
                  {t.heroButton}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yandex-yellow/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100/90 backdrop-blur-sm rounded-full text-yellow-800 font-semibold text-xs mb-8 border border-yellow-200 shadow-sm animate-fade-in-up cursor-pointer hover:bg-yellow-200 transition-colors" onClick={handleRegisterClick}>
                  <Zap className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  Бонус до 10 000₽
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  {t.heroTitle}
                </h1>
                <p className="text-xl text-gray-800 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-xl">
                  {t.heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Button 
                    onClick={handleRegisterClick} 
                    className="text-lg py-4 px-8 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60 hover:-translate-y-1 bg-gradient-to-r from-yandex-yellow to-[#FFE600] border-b-4 border-yellow-500 active:border-b-0 active:translate-y-1 transition-all duration-100 font-extrabold flex items-center justify-center gap-2"
                  >
                    🚀 {t.heroButton}
                  </Button>
                  <a href="#calculator" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-xl text-gray-700 font-bold hover:bg-white hover:border-yandex-yellow hover:text-yandex-black transition-all shadow-sm">
                    {t.calcButton}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Short Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-200/60 pt-8 bg-white/30 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">Android 7.0+</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">Без опыта</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                     <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">Гибкий график</span>
                  </div>
                </div>
              </div>
              
              {/* Calculator Widget in Hero */}
              <div className="relative lg:translate-x-10" id="calculator">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-yandex-yellow to-yellow-100 rounded-[2.5rem] blur-lg opacity-40 animate-pulse"></div>
                 {/* Pass translation to calculator */}
                 <IncomeCalculator t={t} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-white/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.benefitsTitle}</h2>
              <p className="text-gray-600 text-lg">{t.benefitsSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-yandex-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(benefit.iconName)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section (New) */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-yandex-black text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">{t.requirementsTitle}</h2>
                <ul className="space-y-4">
                  {t.requirements.map((req, idx) => (
                     <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-yandex-yellow flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-yandex-black" />
                      </div>
                      <span className="text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                   <Button onClick={handleRegisterClick} className="bg-white text-yandex-black hover:bg-gray-100 font-bold">
                      {t.ctaButton}
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-gray-50/60 backdrop-blur-md overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.howToStartTitle}</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
               {[
                 { num: 1, text: "Оставьте заявку" },
                 { num: 2, text: "Пройдите обучение" },
                 { num: 3, text: "Оформите документы" },
                 { num: 4, text: "Начните зарабатывать" }
               ].map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                     <div className="w-12 h-12 bg-yandex-yellow rounded-full flex items-center justify-center text-xl font-bold mb-4">
                       {step.num}
                     </div>
                     <h4 className="font-bold text-lg">{step.text}</h4>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
            <div className="space-y-4">
              {t.faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all hover:shadow-md">
                  <summary className="flex justify-between items-center p-6 font-bold text-lg list-none text-yandex-black">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
             <div className="mt-12 text-center">
              <Button onClick={() => document.querySelector<HTMLButtonElement>('button[aria-label="Chat"]')?.click()} variant="outline" className="bg-white">
                 Открыть чат
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 bg-yandex-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <Button 
              onClick={handleRegisterClick} 
              className="text-lg py-5 px-12 shadow-xl shadow-yellow-500/20 bg-yandex-yellow text-yandex-black hover:bg-yellow-400 hover:scale-105 transition-all font-bold"
            >
              {t.ctaButton}
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-yandex-yellow w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs">
                Я
              </div>
              <span className="font-bold text-sm">Еда Партнерам</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Партнерский лендинг.
            </div>
          </div>
        </footer>

        {/* Chat Component */}
        <CourierChat />
      </div>
    </div>
  );
}