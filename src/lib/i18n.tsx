import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ca" | "es";

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
  ca: {
    nav: [
      { href: "#inici", label: "Inici" },
      { href: "#avantatges", label: "Avantatges" },
      { href: "#productes", label: "Productes" },
      { href: "#cafe", label: "Cafè" },
      { href: "#com-funciona", label: "Com funciona" },
      { href: "#contacte", label: "Contacte" },
    ],
    ticker: [
      "Sense inversió",
      "Servei 24 hores",
      "Reposició inclosa",
      "Comissió mensual",
      "Instal·lació en 48h",
      "Barcelona i àrea metropolitana",
    ],
    advantages: [
      { n: "01", title: "Zero inversió inicial", text: "No pagueu res per la màquina, els productes ni la instal·lació. La col·loquem, i tot el manteniment corre pel nostre compte." },
      { n: "02", title: "Ingressos passius mensuals", text: "Rebeu el 12% dels ingressos per vendes cada mes, transferit directament al vostre compte." },
      { n: "03", title: "Servei 24 hores, 365 dies", text: "Els vostres hostes i socis tenen accés continuat, sense trencar la dinàmica del recinte." },
      { n: "04", title: "Reposició i neteja incloses", text: "Un equip tècnic revisa el catàleg, reposa producte i manté la màquina impecable." },
      { n: "05", title: "Instal·lació en 48 hores", text: "Des de la confirmació fins a la posada en marxa, en menys de dos dies." },
      { n: "06", title: "Contracte breu i clar", text: "Un document senzill, sense permanències dissimulades ni lletra petita." },
    ],
    mixes: [
      {
        name: "Equilibri",
        accent: "mint",
        tag: "Wellness",
        who: "Gimnasos, spas i clubs esportius",
        items: ["Barretes proteiques", "Fruita seca", "Aigua i infusions", "Batuts", "Snacks integrals"],
      },
      {
        name: "Confort",
        accent: "yellow",
        tag: "Clàssic",
        who: "Hotels de ciutat, apart·hotels i hostals",
        items: ["Xocolata i galetes", "Snacks salats", "Refrescos i sucs", "Aigua freda", "Dolços tradicionals"],
      },
      {
        name: "Curat",
        accent: "red",
        tag: "Selecció",
        who: "Hotels boutique, coworkings premium",
        items: ["Selecció artesana local", "Begudes sense sucre", "Snacks eco i sense gluten", "Aigua mineral premium", "Rotació estacional"],
      },
    ],
    steps: [
      { n: "01", title: "Primer contacte", text: "Ens truqueu o ompliu el formulari. Us responem en menys de 24 hores." },
      { n: "02", title: "Visita i proposta", text: "Analitzem l'espai, el flux de persones i us proposem la màquina i el catàleg adequats." },
      { n: "03", title: "Instal·lació", text: "En menys de 48 hores la màquina queda muntada, connectada i plena." },
      { n: "04", title: "Cobrament mensual", text: "Cada mes rebeu la vostra comissió al compte, amb un informe clar de vendes." },
    ],
    header: { location: "Barcelona", cta: "Sol·licitar proposta" },
    hero: {
      eyebrow: "Vending per a qualsevol empresa",
      h1: ["Poseu una màquina.", "Cobreu cada mes.", "Sense fer res més."],
      paragraph:
        "Instal·lem, reposem i mantenim màquines expenedores a qualsevol empresa de Barcelona que tingui un espai per cedir. Vosaltres cediu l'espai, nosaltres ens encarreguem de la resta i cada mes rebeu el 12% dels ingressos al vostre compte.",
      ctaPrimary: "Sol·licitar proposta",
      ctaSecondary: "Veure el procés",
      stats: [
        { k: "0€", v: "Inversió inicial" },
        { k: "48h", v: "Instal·lació" },
        { k: "24/7", v: "Disponibilitat" },
      ],
    },
    advantagesSection: {
      eyebrow: "Avantatges — 06",
      title: "Un servei pensat per a espais que ja funcionen bé.",
      paragraph:
        "Sabem que qualsevol empresa ja té les seves rutines. La nostra feina és sumar sense interferir: una màquina discreta, un catàleg cuidat i un cobrament recurrent.",
    },
    productes: {
      eyebrow: "Catàleg — 03 mescles",
      title: ["Trieu el catàleg que", "encaixa amb el vostre públic."],
      paragraph:
        "Cada màquina es configura amb un mix adaptat al vostre espai. Ajustem el percentatge i rotem el catàleg segons la demanda real.",
      per: "Per a",
      footnote:
        "→ Cada empresa decideix el percentatge exacte de cada categoria. Rotem el catàleg segons què es ven més al vostre espai.",
    },
    cafe: {
      eyebrow: "Cafè de màquina",
      title: ["També ens ocupem del", "cafè."],
      paragraph:
        "La mateixa lògica: instal·lem la màquina, la mantenim i la reomplim. Vosaltres oferiu un cafè de qualitat als vostres hostes o socis i cobreu la vostra comissió cada mes.",
      list: [
        "Cafè en gra, càpsula o soluble",
        "Opcions amb llet, sucre i vasos inclosos",
        "Manteniment i descalcificació preventiva",
        "Adequada per a office, gimnàs o zona d'hostes",
      ],
      card: {
        label: "Cafè · VEN24",
        drink: "Espresso.",
        subtitle: "Selecció barrejada · torradors de Barcelona",
        options: ["Espresso", "Tallat", "Americà"],
      },
    },
    comFunciona: {
      eyebrow: "Procés — 04 passos",
      title: ["Del primer contacte a la", "primera comissió."],
    },
    contacte: {
      eyebrow: "Contacte",
      title: ["El vostre espai es mereix una màquina.", "I una comissió cada mes."],
      paragraph:
        "Responem en menys de 24 hores amb una proposta clara, adaptada al vostre espai i al vostre públic.",
      zonaLabel: "Zona",
      zonaValue: "Barcelona i àrea metropolitana",
    },
    footer: { location: "Barcelona" },
    form: {
      label: "Sol·licitud",
      status: "● Resposta en 24h",
      placeholders: {
        nom: "Nom",
        empresa: "Nom de l'empresa",
        correu: "Correu",
        telefon: "Telèfon",
        missatge: "Expliqueu-nos l'espai: tipus d'establiment, ubicació, nombre d'usuaris...",
      },
      submit: "Enviar sol·licitud",
      note: "En enviar, s'obre el vostre client de correu amb el missatge preparat.",
      mailtoLabels: { nom: "Nom", empresa: "Empresa", email: "Email", telefon: "Telèfon" },
      subjectPrefix: "Sol·licitud de màquina — ",
    },
    vendingMachine: {
      brand: "Vend·BCN 3000",
      serie: "Sèrie 04",
      slots: [
        { code: "A1", title: "Zero inversió", detail: "No pagues res per la màquina, els productes ni la instal·lació.", accent: "yellow", icon: "€" },
        { code: "A2", title: "Comissió mensual", detail: "Cada mes ingresses el 12% de les vendes, sense mínims.", accent: "red", icon: "%" },
        { code: "A3", title: "Servei 24 hores", detail: "Disponible per als vostres hostes i clients les 24h, tots els dies.", accent: "yellow", icon: "24" },
        { code: "B1", title: "Reposició inclosa", detail: "L'equip s'encarrega que sempre estigui plena i operativa.", accent: "mint", icon: "↻" },
        { code: "B2", title: "Instal·lació en 48h", detail: "En menys de 48 hores queda muntada i funcionant al vostre espai.", accent: "red", icon: "→" },
        { code: "B3", title: "Neteja i manteniment", detail: "Tècnics acreditats revisen, netegen i mantenen l'equip.", accent: "mint", icon: "✦" },
        { code: "C1", title: "Mix personalitzat", detail: "Trieu el catàleg: saludable, clàssic o una mescla ajustada al vostre públic.", accent: "ink", icon: "★" },
        { code: "C2", title: "Contracte clar", detail: "Un document breu, sense lletra petita ni permanències dissimulades.", accent: "yellow", icon: "✎" },
        { code: "C3", title: "Cafè disponible", detail: "També disposem de màquines de cafè amb les mateixes condicions.", accent: "coffee", icon: "☕" },
      ],
      dropLabel: "Retirar producte",
      codeLabel: "Codi",
      chooseCode: "Trieu un codi...",
      caption: "Piqueu un codi · o toqueu un slot",
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
  const [lang, setLangState] = useState<Lang>("ca");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ca" || stored === "es") setLangState(stored);
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
