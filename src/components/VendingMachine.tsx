import { useEffect, useRef, useState } from "react";
import { useLanguage, type Slot } from "@/lib/i18n";

const ACCENT_BG: Record<Slot["accent"], string> = {
  red: "bg-vend-red text-vend-cream",
  yellow: "bg-vend-yellow text-vend-ink",
  mint: "bg-vend-mint text-vend-cream",
  coffee: "bg-vend-coffee text-vend-cream",
  ink: "bg-vend-ink text-vend-cream",
};

export function VendingMachine() {
  const { t } = useLanguage();
  const slots = t.vendingMachine.slots;

  const [buffer, setBuffer] = useState("");
  const [selectedCode, setSelectedCode] = useState<string | null>(slots[4].code);
  const [dropKey, setDropKey] = useState(0);
  const [dispensedCode, setDispensedCode] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const selected = slots.find((s) => s.code === selectedCode) ?? null;
  const dispensed = slots.find((s) => s.code === dispensedCode) ?? null;

  const dispense = (slot: Slot) => {
    setSelectedCode(slot.code);
    setDispensedCode(slot.code);
    setDropKey((k) => k + 1);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDispensedCode(null), 2000);
  };

  const pressKey = (key: string) => {
    setBuffer((prev) => {
      const next = (prev + key).slice(-2);
      if (next.length === 2) {
        const match = slots.find((s) => s.code === next.toUpperCase());
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
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">{t.vendingMachine.brand}</span>
          </div>
          <span className="font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">{t.vendingMachine.serie}</span>
        </div>

        {/* Glass window */}
        <div className="relative overflow-hidden rounded-lg bg-vend-panel p-3 ring-1 ring-vend-line">
          {/* Shelves */}
          <div className="relative z-10 grid grid-cols-3 gap-2">
            {slots.map((slot) => {
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
            {t.vendingMachine.dropLabel}
          </span>
        </div>

        {/* LCD + keypad */}
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
          <div className="rounded-md bg-vend-ink p-3">
            <div className="font-mono-ticket text-[9px] uppercase tracking-[0.2em] text-vend-cream/40">
              {t.vendingMachine.codeLabel} · <span className="text-vend-yellow">{buffer || "--"}</span>
            </div>
            <div className="mt-1 min-h-[60px] font-mono-ticket text-[12px] leading-snug text-vend-cream">
              {selected ? (
                <>
                  <div className="text-vend-yellow">{selected.code} · {selected.title}</div>
                  <div className="mt-1 text-vend-cream/80 lcd-cursor">{selected.detail}</div>
                </>
              ) : (
                <div className="lcd-cursor">{t.vendingMachine.chooseCode}</div>
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
                      const match = slots.find((s) => s.code === buffer.toUpperCase());
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
        {t.vendingMachine.caption}
      </p>
    </div>
  );
}
