import { useEffect, useRef, useState } from "react";

type Slot = {
  code: string;
  title: string;
  detail: string;
  accent: "red" | "yellow" | "mint" | "coffee" | "ink";
  icon: string;
};

const SLOTS: Slot[] = [
  { code: "A1", title: "Zero inversió", detail: "No pagues res per la màquina, els productes ni la instal·lació.", accent: "yellow", icon: "€" },
  { code: "A2", title: "Comissió mensual", detail: "Cada mes ingresses el 12% de les vendes, sense mínims.", accent: "red", icon: "%" },
  { code: "A3", title: "Servei 24 hores", detail: "Disponible per als vostres hostes i clients les 24h, tots els dies.", accent: "yellow", icon: "24" },
  { code: "B1", title: "Reposició inclosa", detail: "L'equip s'encarrega que sempre estigui plena i operativa.", accent: "mint", icon: "↻" },
  { code: "B2", title: "Instal·lació en 48h", detail: "En menys de 48 hores queda muntada i funcionant al vostre espai.", accent: "red", icon: "→" },
  { code: "B3", title: "Neteja i manteniment", detail: "Tècnics acreditats revisen, netegen i mantenen l'equip.", accent: "mint", icon: "✦" },
  { code: "C1", title: "Mix personalitzat", detail: "Trieu el catàleg: saludable, clàssic o una mescla ajustada al vostre públic.", accent: "ink", icon: "★" },
  { code: "C2", title: "Contracte clar", detail: "Un document breu, sense lletra petita ni permanències dissimulades.", accent: "yellow", icon: "✎" },
  { code: "C3", title: "Cafè disponible", detail: "També disposem de màquines de cafè amb les mateixes condicions.", accent: "coffee", icon: "☕" },
];

const ACCENT_BG: Record<Slot["accent"], string> = {
  red: "bg-vend-red text-vend-cream",
  yellow: "bg-vend-yellow text-vend-ink",
  mint: "bg-vend-mint text-vend-cream",
  coffee: "bg-vend-coffee text-vend-cream",
  ink: "bg-vend-ink text-vend-cream",
};

export function VendingMachine() {
  const [buffer, setBuffer] = useState("");
  const [selected, setSelected] = useState<Slot | null>(SLOTS[4]);
  const [dropKey, setDropKey] = useState(0);
  const [dispensed, setDispensed] = useState<Slot | null>(null);
  const timer = useRef<number | null>(null);

  const dispense = (slot: Slot) => {
    setSelected(slot);
    setDispensed(slot);
    setDropKey((k) => k + 1);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDispensed(null), 2000);
  };

  const pressKey = (key: string) => {
    setBuffer((prev) => {
      const next = (prev + key).slice(-2);
      if (next.length === 2) {
        const match = SLOTS.find((s) => s.code === next.toUpperCase());
        if (match) {
          dispense(match);
          return "";
        }
        return next;
      }
      return next;
    });
  };

  const clear = () => setBuffer("");

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  return (
    <div className="mx-auto w-full max-w-[380px] md:max-w-[420px]">
      {/* Machine chassis — refined, matte */}
      <div className="rounded-2xl bg-vend-surface p-4 shadow-[0_20px_60px_-30px_rgba(28,29,33,0.35)] ring-1 ring-vend-line">
        {/* Top brand plate */}
        <div className="mb-3 flex items-center justify-between border-b border-vend-line pb-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-vend-mint" />
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">Vend·BCN 3000</span>
          </div>
          <span className="font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">Sèrie 04</span>
        </div>

        {/* Glass window */}
        <div className="relative overflow-hidden rounded-lg bg-vend-panel p-3 ring-1 ring-vend-line">
          {/* Shelves */}
          <div className="relative z-10 grid grid-cols-3 gap-2">
            {SLOTS.map((slot) => {
              const isSel = selected?.code === slot.code;
              return (
                <button
                  key={slot.code}
                  onClick={() => dispense(slot)}
                  aria-label={`Slot ${slot.code}: ${slot.title}`}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-md bg-vend-surface p-1.5 text-left ring-1 ring-vend-line transition hover:-translate-y-0.5 ${isSel ? "ring-vend-ink" : ""}`}
                >
                  <div className={`flex h-full flex-col items-center justify-center gap-1 rounded-sm ${ACCENT_BG[slot.accent]} px-1 py-2`}>
                    <span className="font-display text-2xl leading-none italic">{slot.icon}</span>
                    <span className="text-center text-[9px] font-medium uppercase tracking-wide">{slot.title.split(" ").slice(0, 2).join(" ")}</span>
                  </div>
                  <span className="absolute right-1 top-1 rounded-sm bg-vend-ink/85 px-1 py-0.5 font-mono-ticket text-[9px] text-vend-cream">
                    {slot.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dispenser flap + drop area */}
        <div className="relative mt-3 h-20 overflow-hidden rounded-md bg-vend-ink/90">
          {dispensed && (
            <div key={dropKey} className="animate-drop absolute left-1/2 top-0 -translate-x-1/2">
              <div className={`flex h-12 w-12 items-center justify-center rounded-sm ${ACCENT_BG[dispensed.accent]} font-display text-xl italic shadow-lg`}>
                {dispensed.icon}
              </div>
            </div>
          )}
          <span className="absolute bottom-2 left-3 font-mono-ticket text-[9px] uppercase tracking-[0.2em] text-vend-cream/40">
            Retirar producte
          </span>
        </div>

        {/* LCD + keypad */}
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
          <div className="rounded-md bg-vend-ink p-3">
            <div className="font-mono-ticket text-[9px] uppercase tracking-[0.2em] text-vend-cream/40">
              Codi · <span className="text-vend-yellow">{buffer || "--"}</span>
            </div>
            <div className="mt-1 min-h-[60px] font-mono-ticket text-[12px] leading-snug text-vend-cream">
              {selected ? (
                <>
                  <div className="text-vend-yellow">{selected.code} · {selected.title}</div>
                  <div className="mt-1 text-vend-cream/80 lcd-cursor">{selected.detail}</div>
                </>
              ) : (
                <div className="lcd-cursor">Trieu un codi...</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {["A", "B", "C", "1", "2", "3", "CL", "0", "OK"].map((k) => {
              const isCtl = k === "CL" || k === "OK";
              return (
                <button
                  key={k}
                  onClick={() => {
                    if (k === "CL") return clear();
                    if (k === "OK") {
                      const match = SLOTS.find((s) => s.code === buffer.toUpperCase());
                      if (match) { dispense(match); setBuffer(""); }
                      return;
                    }
                    pressKey(k);
                  }}
                  aria-label={`Tecla ${k}`}
                  className={`h-7 w-7 rounded font-mono-ticket text-[11px] font-medium transition active:translate-y-px ${
                    isCtl
                      ? k === "OK"
                        ? "bg-vend-ink text-vend-cream hover:bg-vend-ink/90"
                        : "bg-vend-panel-2 text-vend-ink hover:bg-vend-panel-2/70"
                      : "bg-vend-panel text-vend-ink ring-1 ring-vend-line hover:bg-vend-panel-2/60"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Caption below machine */}
      <p className="mt-4 text-center font-mono-ticket text-[10px] uppercase tracking-[0.25em] text-vend-ink-soft">
        Piqueu un codi · o toqueu un slot
      </p>
    </div>
  );
}
