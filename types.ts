import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type LanguageCode = 'ru' | 'uz' | 'tj' | 'kg' | 'kz' | 'by' | 'am' | 'az';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export interface ContentDictionary {
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroButton: string;
  calcButton: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  howToStartTitle: string;
  faqTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  benefits: Benefit[];
  faqs: FAQItem[];
  requirementsTitle: string;
  requirements: string[];
  // Calculator translations
  calcTitle: string;
  calcFoot: string;
  calcBike: string;
  calcAuto: string;
  calcHours: string;
  calcDays: string;
  calcIncome: string;
  calcDisclaimer: string;
  currency: string;
}