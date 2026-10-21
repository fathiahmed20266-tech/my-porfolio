/**
 * Single source of truth for both designs.
 * Do not invent stats, testimonials, case studies, or undocumented employment.
 */

export type ExperienceItem = {
  title: string;
  organization?: string;
  /** Display exactly as stored — do not reformat. */
  dates?: string;
};

export type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
};

export const profile = {
  // TODO(owner): confirm spelling (could be جربوع / العنزي)
  name: "محمد العنزي",
  headline: "مدير تطوير الأعمال",
  intro:
    "اخصائي تطوير أعمال استراتيجي بخبرة تمتد لسنوات في قنص الفرص الاستثمارية المجدية وتحويلها إلى مشاريع قائمة. أمتلك مهارة متقدمة في إجراء دراسات الجدوى المتكاملة، وصياغة الخطط التشغيلية التي تضمن تحقيق الأهداف الاستراتيجية للمنشآت. متميز في تحليل نقاط القوة والضعف  (SWOT Analysis)  وإعادة هيكلة العمليات لرفع الكفاءة التشغيلية وزيادة الربحية.",
  summary:
    "اعمل    في الإدارة التنفيذية والتطوير المؤسسي، اجمع بين الخبرة في التسويق والمبيعات والشؤون الإدارية وتطوير الأعمال. يقوم منهجي على تحليل وضع الشركة ومراجعة خطتها الاستراتيجية، ثم اقتراح حلول لإعادة الهيكلة أو ابتكار أنشطة جديدة مدرة للدخل.",
  personal: {
    nationality: "سعودي",
    birthYear: 1977,
    location: "الرياض – حي النسيم الشرقي",
  },
  contact: {
    phoneDisplay: "0592147544",
    phoneTel: "+966592147544",
    whatsapp: "https://wa.me/966592147544",
  },
  /**
   * Stored chronologically as provided.
   * TODO(owner): date format (dd/mm vs mm/dd) is ambiguous; gap 2020–2023 is undocumented — do NOT fill it.
   */
  experience: [
    {
      title: "مدير التسويق والمبيعات",
      organization: "مؤسسة الأعمال الفضية للتجارة",
      dates: "من 3/5/2003 إلى 30/5/2006",
    },
    {
      title: "مدير الشؤون الإدارية",
      organization: "مؤسسة سد مأرب للمقاولات",
      dates: "من 7/5/2006 إلى 15/10/2011",
    },
    {
      title: "مدير تنفيذى",
      organization: "شركة التعمير الدقيقة للمقاولات",
      dates: "من 1/12/2011 إلى 1/5/2020",
    },
    {
      title: "مدير تطوير الأعمال",
      organization: "شركة مركز المفروشات",
      dates: "من 2023/02/05 إلى 2024/03/31",
    },
    {
      title: "العمل في مجال تطوير الأعمال الخاصة",
    },
  ] satisfies ExperienceItem[],
  education: [
    "بكالوريوس إدارة الأعمال – جامعة الملك عبدالعزيز",
    "إجادة اللغة الإنجليزية",
    "إجادة استخدام الحاسب الآلي",
  ],
  expertise: [
    {
      id: "current-state",
      title: "تحليل الوضع الحالي",
      description:
        "تحليل الوضع الحالي للشركة ومراجعة الخطة الاستراتيجية والخطط الفرعية",
    },
    {
      id: "deviation",
      title: "قياس الانحراف",
      description: "معرفة مدى الانحراف في تنفيذ الخطط وأسباب الانحراف والضعف",
    },
    {
      id: "swot",
      title: "القوة والضعف",
      description:
        "تحليل نقاط القوة والضعف في كل إدارة (التسويق – الموارد البشرية – المالية – المشاريع)",
    },
    {
      id: "restructure",
      title: "الحلول وإعادة الهيكلة",
      description:
        "إيجاد الحلول ووضع الخطط للنهوض بعمل الشركة بإعادة هيكلة بعض الأنشطة أو ابتكار أنشطة جديدة مدرة للدخل",
    },
    {
      id: "funding",
      title: "مصادر التمويل",
      description: "البحث عن مصادر التمويل الملائمة لتمويل أنشطة الشركة",
    },
    {
      id: "org-structure",
      title: "مراجعة الهيكل الإداري",
      description:
        "مراجعة الهيكل الإداري والنظام الإداري بشكل كامل ومدى ملاءمته لنشاط الشركة",
    },
    {
      id: "board-reports",
      title: "تقارير مجلس الإدارة",
      description:
        "رفع التقارير الدورية لمجلس الإدارة حول نمو الشركة وتحسن الأعمال",
    },
  ] satisfies ExpertiseItem[],
  approach: [
    "تحليل الوضع الحالي ومراجعة الخطط",
    "تحديد الانحراف ونقاط الضعف والقوة",
    "وضع الحلول والتمويل المناسب",
    "رفع تقارير النمو والتحسن لمجلس الإدارة",
  ],
  seo: {
    alumniOf: "جامعة الملك عبدالعزيز",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  assets: {
    cvHref: "/cv.pdf",
    photoSrc: "/profile.jpg",
    photoInitials: "",
    photoCaption: "",
  },
  copy: {
    executiveLabel: "",
    heroExperienceCta: "استعرض الخبرات المهنية",
    heroCvCta: "تحميل السيرة الذاتية PDF",
    profileTitle: "الملف المهني",
    experienceTitle: "المسيرة المهنية",
    expertiseTitle: "الخبرات الإدارية والاستراتيجية",
    educationTitle: "المؤهلات",
    approachTitle: "المنهج المهني",
    contactTitle: "تواصل",
    footer: "© محمد  العنزي – جميع الحقوق محفوظة",
    documentedRoles: "4 مناصب إدارية موثقة",
    quickFacts: "بيانات سريعة",
    qualificationsMethod: "المؤهلات والمنهج",
    managementExpertise: "الخبرات الإدارية",
    whatsappCta: "مراسلة واتساب",
    formName: "الاسم",
    formMessage: "الرسالة",
    formSubmit: "إرسال عبر واتساب",
    privateNoteLabel: "ملاحظة",
  },
} as const;

/** Dated roles, newest first. The undated private-business item is excluded. */
export function datedExperienceNewestFirst(): ExperienceItem[] {
  return [...profile.experience].filter((item) => item.dates).reverse();
}

export function privateBusinessItem(): ExperienceItem | undefined {
  return profile.experience.find((item) => !item.dates);
}

/** Portfolio chip groups — presentation of the same seven expertise items. */
export const expertiseGroups = [
  {
    title: "التحليل والتخطيط",
    ids: ["current-state", "deviation", "swot"],
  },
  {
    title: "التطوير والهيكلة",
    ids: ["restructure", "org-structure"],
  },
  {
    title: "التمويل والحوكمة",
    ids: ["funding", "board-reports"],
  },
] as const;

export function expertiseById(id: string): ExpertiseItem | undefined {
  return profile.expertise.find((item) => item.id === id);
}
