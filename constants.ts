import { Benefit, FAQItem, Language, ContentDictionary, LanguageCode } from './types';

// Updated Partner Referral Link
export const REFERRAL_LINK = "https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=3763dec9edb24dc9ada5ba40eb3ae1c4&utm_content=blank";

export const LANGUAGES: Language[] = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'Oʻzbek', flag: '🇺🇿' },
  { code: 'tj', name: 'Тоҷикӣ', flag: '🇹🇯' },
  { code: 'kg', name: 'Кыргызча', flag: '🇰🇬' },
  { code: 'kz', name: 'Қазақша', flag: '🇰🇿' },
  { code: 'by', name: 'Беларуская', flag: '🇧🇾' },
  { code: 'am', name: 'Հայերեն', flag: '🇦🇲' },
  { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
];

const BASE_BENEFITS: Benefit[] = [
  {
    title: "Высокий доход",
    description: "Одни из самых высоких выплат по городу. Прозрачная система начислений.",
    iconName: "Wallet"
  },
  {
    title: "Гибкое расписание",
    description: "Совмещайте доставку с учебой или основной работой. Вы сами выбираете когда выходить на слот.",
    iconName: "Clock"
  },
  {
    title: "Порядок выплат",
    description: "Первая выплата поступает через две недели, далее для самозанятых выплаты ежедневные.",
    iconName: "CreditCard"
  },
  {
    title: "Ограниченный радиус",
    description: "Доставка заказов из ресторанов в удобном для вас районе.",
    iconName: "MapPin"
  }
];

const BASE_FAQS: FAQItem[] = [
  {
    question: "Нужен ли опыт работы?",
    answer: "Нет, опыт не требуется. Всему научим. Главное — ответственность и пунктуальность."
  },
  {
    question: "Как быстро я смогу начать?",
    answer: "Процесс оформления максимально упрощен. После активации аккаунта можно выходить на слоты."
  },
  {
    question: "Какой телефон нужен?",
    answer: "Желательно наличие устройства на базе Android (версии 7.0 и выше)."
  },
  {
    question: "Нужна ли медкнижка?",
    answer: "Да, для работы с продуктами питания она обязательна. Мы подскажем, как её оформить."
  }
];

export const TRANSLATIONS: Record<LanguageCode, ContentDictionary> = {
  ru: {
    heroTitle: "Яндекс Еда — доставляй и зарабатывай",
    heroSubtitle: "Становитесь партнером и доставляйте заказы клиентам, делая их счастливее!",
    heroButton: "Стать курьером",
    calcButton: "Рассчитать доход",
    benefitsTitle: "Почему выбирают нас?",
    benefitsSubtitle: "Мы в поиске команды курьеров. Создаем комфортные условия для партнеров.",
    howToStartTitle: "Как начать?",
    faqTitle: "Частые вопросы",
    ctaTitle: "Готовы начать?",
    ctaSubtitle: "Присоединяйтесь к команде партнеров Яндекс Еды прямо сейчас.",
    ctaButton: "Заполнить анкету",
    benefits: BASE_BENEFITS,
    faqs: BASE_FAQS,
    requirementsTitle: "Требования к партнеру",
    requirements: [
      "Ответственность и пунктуальность",
      "Желательно наличие устройства на базе Android (7.0+)",
      "Желание зарабатывать"
    ],
    calcTitle: "Калькулятор дохода",
    calcFoot: "Пеший",
    calcBike: "Вело",
    calcAuto: "Авто",
    calcHours: "Часов в день",
    calcDays: "Дней в неделю",
    calcIncome: "Примерный доход в месяц",
    calcDisclaimer: "Расчет приблизительный. Доход зависит от города и бонусов.",
    currency: "₽"
  },
  uz: {
    heroTitle: "Yandex Eda — yetkazib bering va daromad qiling",
    heroSubtitle: "Hamkor bo'ling va mijozlarga buyurtmalarni yetkazib bering!",
    heroButton: "Kuryer bo'lish",
    calcButton: "Daromadni hisoblash",
    benefitsTitle: "Nima uchun biz?",
    benefitsSubtitle: "Biz kuryerlar jamoasini qidirmoqdamiz. Hamkorlar uchun qulay sharoitlar.",
    howToStartTitle: "Qanday boshlash kerak?",
    faqTitle: "Tez-tez so'raladigan savollar",
    ctaTitle: "Boshlashga tayyormisiz?",
    ctaSubtitle: "Hozirning o'zidayoq Yandex Eda jamoasiga qo'shiling.",
    ctaButton: "Anketani to'ldirish",
    benefits: [
      { ...BASE_BENEFITS[0], title: "Yuqori daromad", description: "Shahardagi eng yuqori to'lovlardan biri." },
      { ...BASE_BENEFITS[1], title: "Erkin grafik", description: "O'qish yoki ish bilan birlashtiring." },
      { ...BASE_BENEFITS[2], title: "To'lov tartibi", description: "Birinchi to'lov 2 haftadan so'ng, keyin har kuni (o'zini o'zi band qilganlar uchun)." },
      { ...BASE_BENEFITS[3], title: "Qulay hudud", description: "Restoranlardan qulay hududda yetkazib berish." }
    ],
    faqs: BASE_FAQS,
    requirementsTitle: "Talablar",
    requirements: [
      "Mas'uliyat va aniqlik",
      "Android qurilmasi (7.0 va undan yuqori)",
      "Daromad qilish istagi"
    ],
    calcTitle: "Daromad kalkulyatori",
    calcFoot: "Piyoda",
    calcBike: "Velo",
    calcAuto: "Avto",
    calcHours: "Kuniga soat",
    calcDays: "Haftada kun",
    calcIncome: "Oylik taxminiy daromad",
    calcDisclaimer: "Hisob-kitob taxminiy. Daromad shahar va bonuslarga bog'liq.",
    currency: "₽"
  },
  kg: {
    heroTitle: "Яндекс Еда — жеткирип акча табыңыз",
    heroSubtitle: "Өнөктөш болуңуз жана кардарларды кубантыңыз!",
    heroButton: "Курьер болуу",
    calcButton: "Кирешени эсептөө",
    benefitsTitle: "Эмне үчүн биз?",
    benefitsSubtitle: "Биз курьерлер командасын издеп жатабыз.",
    howToStartTitle: "Кантип баштоо керек?",
    faqTitle: "Суроолор",
    ctaTitle: "Баштоого даярсызбы?",
    ctaSubtitle: "Яндекс Еда командасына кошулуңуз.",
    ctaButton: "Анкетаны толтуруу",
    benefits: [
      { ...BASE_BENEFITS[0], title: "Жогорку киреше", description: "Шаардагы эң жогорку төлөмдөрдүн бири." },
      { ...BASE_BENEFITS[1], title: "Ийкемдүү график", description: "Окуу же жумуш менен айкалыштырыңыз." },
      { ...BASE_BENEFITS[2], title: "Төлөм тартиби", description: "Биринчи төлөм 2 жумадан кийин, андан кийин күн сайын." },
      { ...BASE_BENEFITS[3], title: "Ыңгайлуу аймак", description: "Чектелген радиуста жеткирүү." }
    ],
    faqs: BASE_FAQS,
    requirementsTitle: "Талаптар",
    requirements: [
      "Жоопкерчилик жана тактык",
      "Android түзмөгү (7.0+)",
      "Иштөө каалоосу"
    ],
    calcTitle: "Киреше калькулятору",
    calcFoot: "Жөө",
    calcBike: "Вело",
    calcAuto: "Унаа",
    calcHours: "Күнүнө саат",
    calcDays: "Жумасына күн",
    calcIncome: "Болжолдуу айлык киреше",
    calcDisclaimer: "Эсептөө болжолдуу. Киреше шаардан жана бонустардан көз каранды.",
    currency: "₽"
  },
  tj: {
    heroTitle: "Яндекс Еда — дастрас кунед ва пул кор кунед",
    heroSubtitle: "Шарик шавед ва ба мизоҷон хизмат расонед!",
    heroButton: "Курйер шудан",
    calcButton: "Ҳисоби даромад",
    benefitsTitle: "Чаро мо?",
    benefitsSubtitle: "Мо дастаи курйерҳоро меҷӯем.",
    howToStartTitle: "Чӣ тавр оғоз кардан мумкин аст?",
    faqTitle: "Саволҳои зиёд додашаванда",
    ctaTitle: "Омодаед?",
    ctaSubtitle: "Ба дастаи Яндекс Еда ҳамроҳ шавед.",
    ctaButton: "Анкетаро пур кунед",
    benefits: [
      { ...BASE_BENEFITS[0], title: "Даромади баланд", description: "Яке аз баландтарин пардохтҳо дар шаҳр." },
      { ...BASE_BENEFITS[1], title: "Ҷадвали чандир", description: "Бо таҳсил ё кор якҷоя кунед." },
      { ...BASE_BENEFITS[2], title: "Тартиби пардохт", description: "Пардохти аввал пас аз 2 ҳафта, сипас ҳар рӯз." },
      { ...BASE_BENEFITS[3], title: "Минтақаи қулай", description: "Дастрасӣ дар радиуси маҳдуд." }
    ],
    faqs: BASE_FAQS,
    requirementsTitle: "Талабот",
    requirements: [
      "Масъулият",
      "Дастгоҳи Android (7.0+)",
      "Хоҳиши кор кардан"
    ],
    calcTitle: "Калкулятори даромад",
    calcFoot: "Пиёда",
    calcBike: "Вело",
    calcAuto: "Авто",
    calcHours: "Соат дар як рӯз",
    calcDays: "Рӯз дар як ҳафта",
    calcIncome: "Даромади тахминӣ дар як моҳ",
    calcDisclaimer: "Ҳисоб тахминӣ аст.",
    currency: "₽"
  },
  kz: { 
    heroTitle: "Яндекс Еда — жеткізіңіз және табыс табыңыз", 
    heroSubtitle: "Серіктес болыңыз!", 
    heroButton: "Курьер болу", 
    calcButton: "Табысты есептеу", 
    ctaButton: "Сауалнаманы толтыру", 
    benefitsTitle: "Неге біз?", 
    benefitsSubtitle: "Біз курьерлерді іздейміз.", 
    howToStartTitle: "Қалай бастауға болады?", 
    faqTitle: "Жиі қойылатын сұрақтар", 
    ctaTitle: "Бастауға дайынсыз ба?", 
    ctaSubtitle: "Яндекс Еда-ға қосылыңыз.", 
    requirementsTitle: "Талаптар", 
    benefits: BASE_BENEFITS, 
    faqs: BASE_FAQS, 
    requirements: ["Жауапкершілік", "Android 7.0+", "Табыс табуға деген ұмтылыс"],
    calcTitle: "Табыс калькуляторы",
    calcFoot: "Жаяу",
    calcBike: "Вело",
    calcAuto: "Авто",
    calcHours: "Күніне сағат",
    calcDays: "Аптасына күн",
    calcIncome: "Айлық болжамды табыс",
    calcDisclaimer: "Есептеу болжамды.",
    currency: "₽"
  } as any,
  by: { 
    heroTitle: "Яндекс Еда — даставляй і зарабляй", 
    heroSubtitle: "Станьце партнёрам!", 
    heroButton: "Стаць кур'ерам", 
    calcButton: "Разлічыць даход", 
    ctaButton: "Запоўніць анкету", 
    benefitsTitle: "Чаму мы?", 
    benefitsSubtitle: "Мы шукаем кур'ераў.", 
    howToStartTitle: "Як пачаць?", 
    faqTitle: "Частыя пытанні", 
    ctaTitle: "Гатовыя пачаць?", 
    ctaSubtitle: "Далучайцеся да каманды Яндекс Еда.", 
    requirementsTitle: "Патрабаванні", 
    benefits: BASE_BENEFITS, 
    faqs: BASE_FAQS, 
    requirements: ["Адказнасць", "Android 7.0+", "Жаданне працаваць"],
    calcTitle: "Калькулятар даходу",
    calcFoot: "Пешы",
    calcBike: "Вела",
    calcAuto: "Аўто",
    calcHours: "Гадзін у дзень",
    calcDays: "Дзён у тыдзень",
    calcIncome: "Прыкладны даход у месяц",
    calcDisclaimer: "Разлік прыблізны.",
    currency: "₽"
  } as any,
  am: { 
    heroTitle: "Yandex Eda — առաքեք և վաստակեք", 
    heroSubtitle: "Դարձեք գործընկեր", 
    heroButton: "Դառնալ առաքիչ", 
    calcButton: "Հաշվարկել եկամուտը", 
    ctaButton: "Լրացնել հարցաթերթիկը", 
    benefitsTitle: "Ինչու մենք", 
    benefitsSubtitle: "Մենք փնտրում ենք առաքիչների", 
    howToStartTitle: "Ինչպես սկսել", 
    faqTitle: "Հաճախ տրվող հարցեր", 
    ctaTitle: "Պատրա՞ստ եք սկսել", 
    ctaSubtitle: "Միացեք Yandex Eda թիմին", 
    requirementsTitle: "Պահանջներ", 
    benefits: BASE_BENEFITS, 
    faqs: BASE_FAQS, 
    requirements: ["Պատասխանատվություն", "Android 7.0+", "Աշխատելու ցանկություն"],
    calcTitle: "Եկամտի հաշվիչ",
    calcFoot: "Ոտքով",
    calcBike: "Հեծանիվ",
    calcAuto: "Ավտո",
    calcHours: "Ժամ օրական",
    calcDays: "Օր շաբաթական",
    calcIncome: "Մոտավոր ամսական եկամուտ",
    calcDisclaimer: "Հաշվարկը մոտավոր է:",
    currency: "₽"
  } as any,
  az: { 
    heroTitle: "Yandex Eda — çatdırın və qazanın", 
    heroSubtitle: "Tərəfdaş olun!", 
    heroButton: "Kuryer olmaq", 
    calcButton: "Gəliri hesabla", 
    ctaButton: "Anketi doldurun", 
    benefitsTitle: "Niyə biz?", 
    benefitsSubtitle: "Biz kuryer axtarırıq.", 
    howToStartTitle: "Necə başlamaq olar?", 
    faqTitle: "Tez-tez verilən suallar", 
    ctaTitle: "Başlamağa hazırsınız?", 
    ctaSubtitle: "Yandex Eda komandasına qoşulun.", 
    requirementsTitle: "Tələblər", 
    benefits: BASE_BENEFITS, 
    faqs: BASE_FAQS, 
    requirements: ["Məsuliyyət", "Android 7.0+", "Qazanmaq istəyi"],
    calcTitle: "Gəlir kalkulyatoru",
    calcFoot: "Piyada",
    calcBike: "Velo",
    calcAuto: "Avto",
    calcHours: "Gündəlik saat",
    calcDays: "Həftəlik gün",
    calcIncome: "Aylıq təxmini gəlir",
    calcDisclaimer: "Hesablama təxminidir.",
    currency: "₽"
  } as any,
};

// System instruction updated for the AI to know about the new payment terms
export const SYSTEM_INSTRUCTION = `
Ты - виртуальный помощник для набора курьеров в сервис Яндекс Еда.
Твоя цель: убедить пользователя зарегистрироваться по ссылке.
Важные условия (ОБНОВЛЕНО):
- Первая выплата поступает через 2 недели (14 дней).
- Далее для самозанятых выплаты ЕЖЕДНЕВНЫЕ.
- Нужен телефон на Android 7.0 и выше.
- Работа через приложение.
- Ограниченный радиус доставки (удобный район).
- Можно совмещать с учебой/работой.

Если спрашивают про ссылку на регистрацию, отправляй на кнопку "Стать курьером".
Тон: дружелюбный, официальный партнер.
`;