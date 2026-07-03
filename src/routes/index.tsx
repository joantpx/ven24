import { createFileRoute } from "@tanstack/react-router";
import { VendingMachine } from "@/components/VendingMachine";
import { useLanguage, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

const ACCENT_CARD: Record<"mint" | "yellow" | "red", string> = {
  mint: "bg-vend-mint text-vend-cream",
  yellow: "bg-vend-yellow text-vend-ink",
  red: "bg-vend-red text-vend-cream",
};

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const option = (value: Lang, label: string) => (
    <button
      key={value}
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={`rounded-full px-2.5 py-1 transition ${
        lang === value ? "bg-vend-ink text-vend-cream" : "text-vend-ink-soft hover:text-vend-ink"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-1 rounded-full border border-vend-line p-0.5 font-mono-ticket text-[10px] uppercase tracking-[0.15em]">
      {option("es", "ES")}
      {option("en", "EN")}
    </div>
  );
}

function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-vend-bg text-vend-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-vend-line bg-vend-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#inici" className="flex items-center gap-2">
            <img src="/logo-ven24.png" alt="VEN24" className="h-14 w-auto" />
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em] text-vend-ink-soft">{t.header.location}</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {t.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-vend-ink-soft transition hover:text-vend-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#contacte"
              className="group inline-flex items-center gap-2 rounded-full bg-vend-ink px-5 py-2.5 text-sm text-vend-cream transition hover:bg-vend-ink/90"
            >
              {t.header.cta}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Ticker */}
      <div className="overflow-hidden border-b border-vend-line bg-vend-surface py-2.5">
        <div className="marquee-track font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
          {[...Array(3)].flatMap((_, i) =>
            t.ticker.map((m, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-3">
                <span>{m}</span>
                <span className="text-vend-panel-2">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* HERO */}
      <section id="inici" className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-8 md:py-24 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-vend-ink" />
              <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
                {t.hero.eyebrow}
              </span>
            </div>
            <h1 className="mt-8 font-display text-[3.5rem] leading-[0.95] tracking-tight text-vend-ink md:text-7xl lg:text-[6rem]">
              {t.hero.h1[0]}
              <br />
              <em className="italic text-vend-red">{t.hero.h1[1]}</em>
              <br />
              {t.hero.h1[2]}
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-vend-ink-soft">
              {t.hero.paragraph}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contacte"
                className="inline-flex items-center gap-2 rounded-full bg-vend-ink px-6 py-3.5 text-sm text-vend-cream transition hover:bg-vend-ink/90"
              >
                {t.hero.ctaPrimary}
                <span>→</span>
              </a>
              <a
                href="#com-funciona"
                className="inline-flex items-center gap-2 text-sm text-vend-ink underline decoration-vend-line underline-offset-4 transition hover:decoration-vend-ink"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 border-t border-vend-line pt-8">
              {t.hero.stats.map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-4xl italic text-vend-ink md:text-5xl">{s.k}</dt>
                  <dd className="mt-1 font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center justify-center">
            <VendingMachine />
          </div>
        </div>
      </section>

      {/* AVANTATGES */}
      <section id="avantatges" className="border-t border-vend-line bg-vend-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
                {t.advantagesSection.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                {t.advantagesSection.title}
              </h2>
              <p className="mt-6 text-vend-ink-soft">
                {t.advantagesSection.paragraph}
              </p>
            </div>

            <div className="divide-y divide-vend-line border-y border-vend-line">
              {t.advantages.map((a) => (
                <div
                  key={a.n}
                  className="group grid grid-cols-[auto_1fr] gap-6 py-6 transition md:grid-cols-[80px_1fr_auto]"
                >
                  <span className="font-mono-ticket text-[11px] uppercase tracking-[0.2em] text-vend-ink-soft">
                    {a.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl italic leading-tight text-vend-ink md:text-3xl">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-vend-ink-soft md:text-base">{a.text}</p>
                  </div>
                  <span className="hidden self-center text-vend-ink-soft transition group-hover:translate-x-1 group-hover:text-vend-ink md:block">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTES */}
      <section id="productes" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
                {t.productes.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                {t.productes.title[0]}
                <em className="italic"> {t.productes.title[1]}</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-vend-ink-soft">
              {t.productes.paragraph}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.mixes.map((m, i) => (
              <article
                key={m.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-vend-surface ring-1 ring-vend-line transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(28,29,33,0.2)]"
              >
                <div className={`${ACCENT_CARD[m.accent]} px-7 py-10`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em] opacity-80">
                      {m.tag}
                    </span>
                    <span className="font-mono-ticket text-[10px] opacity-70">
                      {String(i + 1).padStart(2, "0")} / 03
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-5xl italic leading-none">{m.name}</h3>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-ink-soft">
                    {t.productes.per}
                  </p>
                  <p className="mt-1 text-vend-ink">{m.who}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-vend-line pt-6 text-sm text-vend-ink-soft">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-2 h-px w-3 bg-vend-ink-soft" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl font-mono-ticket text-xs uppercase tracking-[0.2em] text-vend-ink-soft">
            {t.productes.footnote}
          </p>
        </div>
      </section>

      {/* CAFÈ */}
      <section id="cafe" className="border-y border-vend-line bg-vend-panel/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em]" style={{ color: "#6B4A2E" }}>
              {t.cafe.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
              {t.cafe.title[0]}
              <em className="italic" style={{ color: "#6B4A2E" }}> {t.cafe.title[1]}</em>
            </h2>
            <p className="mt-6 max-w-md text-vend-ink-soft">
              {t.cafe.paragraph}
            </p>
            <ul className="mt-8 space-y-4 border-t border-vend-line pt-6">
              {t.cafe.list.map((li) => (
                <li key={li} className="flex items-start gap-4 text-vend-ink">
                  <span className="mt-2 h-px w-6" style={{ backgroundColor: "#6B4A2E" }} />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-vend-surface p-6 ring-1 ring-vend-line">
              <div
                className="flex aspect-[4/5] flex-col justify-between rounded-xl p-6 text-vend-cream"
                style={{ backgroundColor: "#6B4A2E" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em] opacity-70">
                    {t.cafe.card.label}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-vend-yellow" />
                </div>
                <div>
                  <div className="font-display text-6xl italic leading-none">{t.cafe.card.drink}</div>
                  <div className="mt-2 font-mono-ticket text-xs uppercase tracking-[0.2em] opacity-70">
                    {t.cafe.card.subtitle}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-vend-cream/20 pt-4">
                  {t.cafe.card.options.map((c) => (
                    <div key={c} className="font-mono-ticket text-[10px] uppercase tracking-[0.15em] opacity-80">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COM FUNCIONA */}
      <section id="com-funciona" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16">
            <div className="max-w-2xl">
              <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
                {t.comFunciona.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                {t.comFunciona.title[0]}
                <em className="italic"> {t.comFunciona.title[1]}</em>
              </h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/maquina-expenedora-1.png"
                alt="Màquina expenedora VEN24 instal·lada"
                className="h-64 w-auto drop-shadow-[0_20px_40px_rgba(28,29,33,0.25)] md:h-72"
              />
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-vend-line bg-vend-line md:grid-cols-4">
            {t.steps.map((s) => (
              <div key={s.n} className="group flex flex-col justify-between gap-10 bg-vend-surface p-8 transition hover:bg-vend-panel">
                <span className="font-display text-6xl italic text-vend-ink md:text-7xl">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl italic leading-tight text-vend-ink md:text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-vend-ink-soft">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTE */}
      <section id="contacte" className="border-t border-vend-line bg-vend-ink py-24 text-vend-cream md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-cream/60">
                {t.contacte.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] text-vend-cream md:text-6xl">
                {t.contacte.title[0]}
                <br />
                <em className="italic text-vend-yellow">
                  {t.contacte.title[1]}
                </em>
              </h2>
              <p className="mt-6 max-w-md text-vend-cream/70">
                {t.contacte.paragraph}
              </p>

              <dl className="mt-10 space-y-4 border-t border-vend-cream/15 pt-8">
                {[
                  { k: t.contacte.zonaLabel, v: t.contacte.zonaValue },
                ].map((c) => (
                  <div key={c.k} className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-vend-cream/10 pb-4">
                    <dt className="font-mono-ticket text-[11px] uppercase tracking-[0.2em] text-vend-cream/50">
                      {c.k}
                    </dt>
                    <dd className="text-vend-cream">{c.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-vend-ink py-10 text-vend-cream/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-vend-cream/10 px-4 pt-8 md:flex-row md:items-center md:px-8">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-vend-cream px-3 py-1.5">
              <img src="/logo-ven24.png" alt="VEN24" className="h-9 w-auto" />
            </span>
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em]">{t.footer.location}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono-ticket text-[11px] uppercase tracking-[0.2em]">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-vend-cream">
                {n.label}
              </a>
            ))}
          </div>
          <span className="font-mono-ticket text-[11px]">© {new Date().getFullYear()} VEN24</span>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nom = f.get("nom") ?? "";
    const empresa = f.get("empresa") ?? "";
    const email = f.get("email") ?? "";
    const tel = f.get("tel") ?? "";
    const msg = f.get("missatge") ?? "";
    const { nom: lNom, empresa: lEmpresa, email: lEmail, telefon: lTelefon } = t.form.mailtoLabels;
    const body = encodeURIComponent(
      `${lNom}: ${nom}\n${lEmpresa}: ${empresa}\n${lEmail}: ${email}\n${lTelefon}: ${tel}\n\n${msg}`
    );
    const subject = encodeURIComponent(`${t.form.subjectPrefix}${empresa || nom}`);
    window.location.href = `mailto:hola@vendbcn.cat?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-0 border-b border-vend-cream/20 bg-transparent px-0 py-3 text-vend-cream placeholder:text-vend-cream/40 focus:border-vend-yellow focus:outline-none focus:ring-0";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-vend-cream/[0.04] p-8 ring-1 ring-vend-cream/10 md:p-10"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-cream/60">
          {t.form.label}
        </span>
        <span className="font-mono-ticket text-[11px] text-vend-mint">{t.form.status}</span>
      </div>
      <div className="grid gap-2">
        <input required name="nom" placeholder={t.form.placeholders.nom} className={field} />
        <input required name="empresa" placeholder={t.form.placeholders.empresa} className={field} />
        <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
          <input required type="email" name="email" placeholder={t.form.placeholders.correu} className={field} />
          <input name="tel" placeholder={t.form.placeholders.telefon} className={field} />
        </div>
        <textarea
          name="missatge"
          placeholder={t.form.placeholders.missatge}
          rows={4}
          className={`${field} resize-none`}
        />
        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-vend-cream px-6 py-3.5 text-sm text-vend-ink transition hover:bg-vend-yellow"
        >
          {t.form.submit}
          <span>→</span>
        </button>
        <p className="mt-2 font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-cream/40">
          {t.form.note}
        </p>
      </div>
    </form>
  );
}
