import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

const STORAGE_KEY = "ven24-lang";

export type Slot = {
  code: string;
  title: string;
  detail: string;
  accent: "red" | "yellow" | "mint" | "coffee" | "ink";
  icon: string;
};

export type Translation = {
  nav: { href: string; label: string }[];
  ticker: string[];
  advantages: { n: string; title: string; text: string }[];
  mixes: {
    name: string;
    accent: "mint" | "yellow" | "red";
    tag: string;
    who: string;
    items: string[];
  }[];
  steps: { n: string; title: string; text: string }[];
  header: { location: string; cta: string };
  hero: {
    eyebrow: string;
    h1: [string, string, string];
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { k: string; v: string }[];
  };
  advantagesSection: { eyebrow: string; title: string; paragraph: string };
  productes: {
    eyebrow: string;
    title: [string, string];
    paragraph: string;
    per: string;
    footnote: string;
  };
  cafe: {
    eyebrow: string;
    title: [string, string];
    paragraph: string;
    list: string[];
    card: { label: string; drink: string; subtitle: string; options: string[] };
  };
  comFunciona: { eyebrow: string; title: [string, string] };
  contacte: {
    eyebrow: string;
    title: [string, string];
    paragraph: string;
    zonaLabel: string;
    zonaValue: string;
  };
  footer: { location: string };
  form: {
    label: string;
    status: string;
    placeholders: { nom: string; empresa: string; correu: string; telefon: string; missatge: string };
    submit: string;
    note: string;
    mailtoLabels: { nom: string; empresa: string; email: string; telefon: string };
    subjectPrefix: string;
  };
  vendingMachine: {
    brand: string;
    serie: string;
    slots: Slot[];
    dropLabel: string;
    codeLabel: string;
    chooseCode: string;
    caption: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: [
      { href: "#inici", label: "Home" },
      { href: "#avantatges", label: "Advantages" },
      { href: "#productes", label: "Products" },
      { href: "#cafe", label: "Coffee" },
      { href: "#com-funciona", label: "How it works" },
      { href: "#contacte", label: "Contact" },
    ],
    ticker: [
      "No investment",
      "24-hour service",
      "Restocking included",
      "Monthly commission",
      "Installation in 48h",
      "Barcelona and metropolitan area",
    ],
    advantages: [
      { n: "01", title: "Zero initial investment", text: "You don't pay anything for the machine, the products, or the installation. We install it, and all maintenance is on us." },
      { n: "02", title: "Monthly passive income", text: "You receive 12% of sales revenue every month, transferred directly to your account." },
      { n: "03", title: "24-hour service, 365 days", text: "Your guests and members have continuous access, without disrupting your venue's routine." },
      { n: "04", title: "Restocking and cleaning included", text: "A technical team checks the catalog, restocks products, and keeps the machine spotless." },
      { n: "05", title: "Installation in 48 hours", text: "From confirmation to launch, in less than two days." },
      { n: "06", title: "Short, clear contract", text: "A simple document, with no hidden commitments or small print." },
    ],
    mixes: [
      {
        name: "Balance",
        accent: "mint",
        tag: "Wellness",
        who: "Gyms, spas and sports clubs",
        items: ["Protein bars", "Nuts", "Water and infusions", "Smoothies", "Wholegrain snacks"],
      },
      {
        name: "Comfort",
        accent: "yellow",
        tag: "Classic",
        who: "City hotels, aparthotels and hostels",
        items: ["Chocolate and cookies", "Salty snacks", "Soft drinks and juices", "Cold water", "Traditional sweets"],
      },
      {
        name: "Curated",
        accent: "red",
        tag: "Selection",
        who: "Boutique hotels, premium coworkings",
        items: ["Local artisan selection", "Sugar-free drinks", "Eco and gluten-free snacks", "Premium mineral water", "Seasonal rotation"],
      },
    ],
    steps: [
      { n: "01", title: "First contact", text: "Call us or fill in the form. We respond in under 24 hours." },
      { n: "02", title: "Visit and proposal", text: "We assess the space, foot traffic, and propose the right machine and catalog." },
      { n: "03", title: "Installation", text: "In under 48 hours the machine is set up, connected and stocked." },
      { n: "04", title: "Monthly payout", text: "Every month you receive your commission in your account, with a clear sales report." },
    ],
    header: { location: "Barcelona", cta: "Request a proposal" },
    hero: {
      eyebrow: "Vending for any business",
      h1: ["Get a machine.", "Get paid every month.", "Without lifting a finger."],
      paragraph:
        "We install, restock and maintain vending machines at any business in Barcelona with a space to spare. You provide the space, we take care of everything else, and every month you receive 12% of the revenue in your account.",
      ctaPrimary: "Request a proposal",
      ctaSecondary: "See how it works",
      stats: [
        { k: "0€", v: "Initial investment" },
        { k: "48h", v: "Installation" },
        { k: "24/7", v: "Availability" },
      ],
    },
    advantagesSection: {
      eyebrow: "Advantages — 06",
      title: "A service designed for spaces that already run well.",
      paragraph:
        "We know any business already has its own routines. Our job is to add value without getting in the way: a discreet machine, a curated catalog and a recurring payout.",
    },
    productes: {
      eyebrow: "Catalog — 03 mixes",
      title: ["Choose the catalog that", "fits your audience."],
      paragraph:
        "Each machine is configured with a mix adapted to your space. We adjust the ratio and rotate the catalog based on real demand.",
      per: "For",
      footnote:
        "→ Each business decides the exact ratio of each category. We rotate the catalog based on what sells best in your space.",
    },
    cafe: {
      eyebrow: "Machine coffee",
      title: ["We also take care of the", "coffee."],
      paragraph:
        "Same logic: we install the machine, maintain it and refill it. You offer quality coffee to your guests or members and collect your commission every month.",
      list: [
        "Bean, capsule or instant coffee",
        "Options with milk, sugar and cups included",
        "Maintenance and preventive descaling",
        "Suited for offices, gyms or guest areas",
      ],
      card: {
        label: "Coffee · VEN24",
        drink: "Espresso.",
        subtitle: "Blended selection · Barcelona roasters",
        options: ["Espresso", "Cortado", "Americano"],
      },
    },
    comFunciona: {
      eyebrow: "Process — 04 steps",
      title: ["From first contact to your", "first commission."],
    },
    contacte: {
      eyebrow: "Contact",
      title: ["Your space deserves a machine.", "And a commission every month."],
      paragraph:
        "We respond in under 24 hours with a clear proposal, tailored to your space and your audience.",
      zonaLabel: "Area",
      zonaValue: "Barcelona and metropolitan area",
    },
    footer: { location: "Barcelona" },
    form: {
      label: "Request",
      status: "● Response within 24h",
      placeholders: {
        nom: "Name",
        empresa: "Company name",
        correu: "Email",
        telefon: "Phone",
        missatge: "Tell us about the space: type of venue, location, number of users...",
      },
      submit: "Send request",
      note: "When you submit, your email client opens with the message ready to send.",
      mailtoLabels: { nom: "Name", empresa: "Company", email: "Email", telefon: "Phone" },
      subjectPrefix: "Machine request — ",
    },
    vendingMachine: {
      brand: "Vend·BCN 3000",
      serie: "Series 04",
      slots: [
        { code: "A1", title: "Zero investment", detail: "You don't pay anything for the machine, the products, or the installation.", accent: "yellow", icon: "€" },
        { code: "A2", title: "Monthly commission", detail: "Every month you earn 12% of sales, no minimums.", accent: "red", icon: "%" },
        { code: "A3", title: "24-hour service", detail: "Available to your guests and customers 24h, every day.", accent: "yellow", icon: "24" },
        { code: "B1", title: "Restocking included", detail: "The team makes sure it's always full and working.", accent: "mint", icon: "↻" },
        { code: "B2", title: "Installation in 48h", detail: "In under 48 hours it's set up and running in your space.", accent: "red", icon: "→" },
        { code: "B3", title: "Cleaning and maintenance", detail: "Certified technicians check, clean and maintain the equipment.", accent: "mint", icon: "✦" },
        { code: "C1", title: "Custom mix", detail: "Choose the catalog: healthy, classic, or a mix tailored to your audience.", accent: "ink", icon: "★" },
        { code: "C2", title: "Clear contract", detail: "A short document, with no small print or hidden commitments.", accent: "yellow", icon: "✎" },
        { code: "C3", title: "Coffee available", detail: "We also offer coffee machines under the same terms.", accent: "coffee", icon: "☕" },
      ],
      dropLabel: "Collect item",
      codeLabel: "Code",
      chooseCode: "Choose a code...",
      caption: "Enter a code · or tap a slot",
    },
  },
  es: {
    nav: [
      { href: "#inici", label: "Inicio" },
      { href: "#avantatges", label: "Ventajas" },
      { href: "#productes", label: "Productos" },
      { href: "#cafe", label: "Café" },
      { href: "#com-funciona", label: "Cómo funciona" },
      { href: "#contacte", label: "Contacto" },
    ],
    ticker: [
      "Sin inversión",
      "Servicio 24 horas",
      "Reposición incluida",
      "Comisión mensual",
      "Instalación en 48h",
      "Barcelona y área metropolitana",
    ],
    advantages: [
      { n: "01", title: "Cero inversión inicial", text: "No pagáis nada por la máquina, los productos ni la instalación. La colocamos y todo el mantenimiento corre por nuestra cuenta." },
      { n: "02", title: "Ingresos pasivos mensuales", text: "Recibís el 12% de los ingresos por ventas cada mes, transferido directamente a vuestra cuenta." },
      { n: "03", title: "Servicio 24 horas, 365 días", text: "Vuestros huéspedes y socios tienen acceso continuo, sin romper la dinámica del local." },
      { n: "04", title: "Reposición y limpieza incluidas", text: "Un equipo técnico revisa el catálogo, repone producto y mantiene la máquina impecable." },
      { n: "05", title: "Instalación en 48 horas", text: "Desde la confirmación hasta la puesta en marcha, en menos de dos días." },
      { n: "06", title: "Contrato breve y claro", text: "Un documento sencillo, sin permanencias disimuladas ni letra pequeña." },
    ],
    mixes: [
      {
        name: "Equilibrio",
        accent: "mint",
        tag: "Wellness",
        who: "Gimnasios, spas y clubes deportivos",
        items: ["Barritas proteicas", "Frutos secos", "Agua e infusiones", "Batidos", "Snacks integrales"],
      },
      {
        name: "Confort",
        accent: "yellow",
        tag: "Clásico",
        who: "Hoteles de ciudad, apart-hoteles y hostales",
        items: ["Chocolate y galletas", "Snacks salados", "Refrescos y zumos", "Agua fría", "Dulces tradicionales"],
      },
      {
        name: "Selecto",
        accent: "red",
        tag: "Selección",
        who: "Hoteles boutique, coworkings premium",
        items: ["Selección artesana local", "Bebidas sin azúcar", "Snacks eco y sin gluten", "Agua mineral premium", "Rotación estacional"],
      },
    ],
    steps: [
      { n: "01", title: "Primer contacto", text: "Nos llamáis o rellenáis el formulario. Os respondemos en menos de 24 horas." },
      { n: "02", title: "Visita y propuesta", text: "Analizamos el espacio, el flujo de personas y os proponemos la máquina y el catálogo adecuados." },
      { n: "03", title: "Instalación", text: "En menos de 48 horas la máquina queda montada, conectada y llena." },
      { n: "04", title: "Cobro mensual", text: "Cada mes recibís vuestra comisión en la cuenta, con un informe claro de ventas." },
    ],
    header: { location: "Barcelona", cta: "Solicitar propuesta" },
    hero: {
      eyebrow: "Vending para cualquier empresa",
      h1: ["Poned una máquina.", "Cobrad cada mes.", "Sin hacer nada más."],
      paragraph:
        "Instalamos, reponemos y mantenemos máquinas expendedoras en cualquier empresa de Barcelona que tenga un espacio para ceder. Vosotros cedéis el espacio, nosotros nos encargamos del resto y cada mes recibís el 12% de los ingresos en vuestra cuenta.",
      ctaPrimary: "Solicitar propuesta",
      ctaSecondary: "Ver el proceso",
      stats: [
        { k: "0€", v: "Inversión inicial" },
        { k: "48h", v: "Instalación" },
        { k: "24/7", v: "Disponibilidad" },
      ],
    },
    advantagesSection: {
      eyebrow: "Ventajas — 06",
      title: "Un servicio pensado para espacios que ya funcionan bien.",
      paragraph:
        "Sabemos que cualquier empresa ya tiene sus rutinas. Nuestro trabajo es sumar sin interferir: una máquina discreta, un catálogo cuidado y un cobro recurrente.",
    },
    productes: {
      eyebrow: "Catálogo — 03 mezclas",
      title: ["Elegid el catálogo que", "encaja con vuestro público."],
      paragraph:
        "Cada máquina se configura con un mix adaptado a vuestro espacio. Ajustamos el porcentaje y rotamos el catálogo según la demanda real.",
      per: "Para",
      footnote:
        "→ Cada empresa decide el porcentaje exacto de cada categoría. Rotamos el catálogo según lo que más se vende en vuestro espacio.",
    },
    cafe: {
      eyebrow: "Café de máquina",
      title: ["También nos ocupamos del", "café."],
      paragraph:
        "La misma lógica: instalamos la máquina, la mantenemos y la reponemos. Vosotros ofrecéis un café de calidad a vuestros huéspedes o socios y cobráis vuestra comisión cada mes.",
      list: [
        "Café en grano, cápsula o soluble",
        "Opciones con leche, azúcar y vasos incluidos",
        "Mantenimiento y descalcificación preventiva",
        "Adecuada para office, gimnasio o zona de huéspedes",
      ],
      card: {
        label: "Café · VEN24",
        drink: "Espresso.",
        subtitle: "Selección mezclada · tostadores de Barcelona",
        options: ["Espresso", "Cortado", "Americano"],
      },
    },
    comFunciona: {
      eyebrow: "Proceso — 04 pasos",
      title: ["Del primer contacto a la", "primera comisión."],
    },
    contacte: {
      eyebrow: "Contacto",
      title: ["Vuestro espacio se merece una máquina.", "Y una comisión cada mes."],
      paragraph:
        "Respondemos en menos de 24 horas con una propuesta clara, adaptada a vuestro espacio y a vuestro público.",
      zonaLabel: "Zona",
      zonaValue: "Barcelona y área metropolitana",
    },
    footer: { location: "Barcelona" },
    form: {
      label: "Solicitud",
      status: "● Respuesta en 24h",
      placeholders: {
        nom: "Nombre",
        empresa: "Nombre de la empresa",
        correu: "Correo",
        telefon: "Teléfono",
        missatge: "Contadnos el espacio: tipo de establecimiento, ubicación, número de usuarios...",
      },
      submit: "Enviar solicitud",
      note: "Al enviar, se abre vuestro cliente de correo con el mensaje preparado.",
      mailtoLabels: { nom: "Nombre", empresa: "Empresa", email: "Email", telefon: "Teléfono" },
      subjectPrefix: "Solicitud de máquina — ",
    },
    vendingMachine: {
      brand: "Vend·BCN 3000",
      serie: "Serie 04",
      slots: [
        { code: "A1", title: "Cero inversión", detail: "No pagas nada por la máquina, los productos ni la instalación.", accent: "yellow", icon: "€" },
        { code: "A2", title: "Comisión mensual", detail: "Cada mes ingresas el 12% de las ventas, sin mínimos.", accent: "red", icon: "%" },
        { code: "A3", title: "Servicio 24 horas", detail: "Disponible para vuestros huéspedes y clientes las 24h, todos los días.", accent: "yellow", icon: "24" },
        { code: "B1", title: "Reposición incluida", detail: "El equipo se encarga de que siempre esté llena y operativa.", accent: "mint", icon: "↻" },
        { code: "B2", title: "Instalación en 48h", detail: "En menos de 48 horas queda montada y funcionando en vuestro espacio.", accent: "red", icon: "→" },
        { code: "B3", title: "Limpieza y mantenimiento", detail: "Técnicos acreditados revisan, limpian y mantienen el equipo.", accent: "mint", icon: "✦" },
        { code: "C1", title: "Mix personalizado", detail: "Elegid el catálogo: saludable, clásico o una mezcla ajustada a vuestro público.", accent: "ink", icon: "★" },
        { code: "C2", title: "Contrato claro", detail: "Un documento breve, sin letra pequeña ni permanencias disimuladas.", accent: "yellow", icon: "✎" },
        { code: "C3", title: "Café disponible", detail: "También disponemos de máquinas de café con las mismas condiciones.", accent: "coffee", icon: "☕" },
      ],
      dropLabel: "Retirar producto",
      codeLabel: "Código",
      chooseCode: "Elige un código...",
      caption: "Marca un código · o toca un slot",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
