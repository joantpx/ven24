import { createFileRoute } from "@tanstack/react-router";
import { VendingMachine } from "@/components/VendingMachine";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#inici", label: "Inici" },
  { href: "#avantatges", label: "Avantatges" },
  { href: "#productes", label: "Productes" },
  { href: "#cafe", label: "Cafè" },
  { href: "#com-funciona", label: "Com funciona" },
  { href: "#contacte", label: "Contacte" },
];

const TICKER = [
  "Sense inversió",
  "Servei 24 hores",
  "Reposició inclosa",
  "Comissió mensual",
  "Instal·lació en 48h",
  "Barcelona i àrea metropolitana",
];

const ADVANTAGES = [
  { n: "01", title: "Zero inversió inicial", text: "No pagueu res per la màquina, els productes ni la instal·lació. La col·loquem, i tot el manteniment corre pel nostre compte." },
  { n: "02", title: "Ingressos passius mensuals", text: "Rebeu una comissió sobre les vendes cada mes, transferida directament al vostre compte." },
  { n: "03", title: "Servei 24 hores, 365 dies", text: "Els vostres hostes i socis tenen accés continuat, sense trencar la dinàmica del recinte." },
  { n: "04", title: "Reposició i neteja incloses", text: "Un equip tècnic revisa el catàleg, reposa producte i manté la màquina impecable." },
  { n: "05", title: "Instal·lació en 48 hores", text: "Des de la confirmació fins a la posada en marxa, en menys de dos dies." },
  { n: "06", title: "Contracte breu i clar", text: "Un document senzill, sense permanències dissimulades ni lletra petita." },
];

const MIXES = [
  {
    name: "Equilibri",
    accent: "mint" as const,
    tag: "Wellness",
    who: "Gimnasos, spas i clubs esportius",
    items: ["Barretes proteiques", "Fruita seca", "Aigua i infusions", "Batuts", "Snacks integrals"],
  },
  {
    name: "Confort",
    accent: "yellow" as const,
    tag: "Clàssic",
    who: "Hotels de ciutat, apart·hotels i hostals",
    items: ["Xocolata i galetes", "Snacks salats", "Refrescos i sucs", "Aigua freda", "Dolços tradicionals"],
  },
  {
    name: "Curat",
    accent: "red" as const,
    tag: "Selecció",
    who: "Hotels boutique, coworkings premium",
    items: ["Selecció artesana local", "Begudes sense sucre", "Snacks eco i sense gluten", "Aigua mineral premium", "Rotació estacional"],
  },
];

const ACCENT_CARD: Record<"mint" | "yellow" | "red", string> = {
  mint: "bg-vend-mint text-vend-cream",
  yellow: "bg-vend-yellow text-vend-ink",
  red: "bg-vend-red text-vend-cream",
};

const STEPS = [
  { n: "01", title: "Primer contacte", text: "Ens truqueu o ompliu el formulari. Us responem en menys de 24 hores." },
  { n: "02", title: "Visita i proposta", text: "Analitzem l'espai, el flux de persones i us proposem la màquina i el catàleg adequats." },
  { n: "03", title: "Instal·lació", text: "En menys de 48 hores la màquina queda muntada, connectada i plena." },
  { n: "04", title: "Cobrament mensual", text: "Cada mes rebeu la vostra comissió al compte, amb un informe clar de vendes." },
];

function Index() {
  return (
    <div className="min-h-screen bg-vend-bg text-vend-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-vend-line bg-vend-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#inici" className="flex items-center gap-2">
            <img src="/logo-ven24.png" alt="VEN24" className="h-14 w-auto" />
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em] text-vend-ink-soft">Barcelona</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-vend-ink-soft transition hover:text-vend-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacte"
            className="group inline-flex items-center gap-2 rounded-full bg-vend-ink px-5 py-2.5 text-sm text-vend-cream transition hover:bg-vend-ink/90"
          >
            Sol·licitar proposta
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </header>

      {/* Ticker */}
      <div className="overflow-hidden border-b border-vend-line bg-vend-surface py-2.5">
        <div className="marquee-track font-mono-ticket text-[11px] uppercase tracking-[0.25em] text-vend-ink-soft">
          {[...Array(3)].flatMap((_, i) =>
            TICKER.map((m, j) => (
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
                Vending per a hotels i gimnasos
              </span>
            </div>
            <h1 className="mt-8 font-display text-[3.5rem] leading-[0.95] tracking-tight text-vend-ink md:text-7xl lg:text-[6rem]">
              Poseu una màquina.
              <br />
              <em className="italic text-vend-red">Cobreu cada mes.</em>
              <br />
              Sense fer res més.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-vend-ink-soft">
              Instal·lem, reposem i mantenim màquines expenedores a hotels,
              gimnasos i centres de treball de Barcelona. Vosaltres cediu
              l'espai, nosaltres ens encarreguem de la resta i cada mes rebeu
              la vostra comissió al compte.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contacte"
                className="inline-flex items-center gap-2 rounded-full bg-vend-ink px-6 py-3.5 text-sm text-vend-cream transition hover:bg-vend-ink/90"
              >
                Sol·licitar proposta
                <span>→</span>
              </a>
              <a
                href="#com-funciona"
                className="inline-flex items-center gap-2 text-sm text-vend-ink underline decoration-vend-line underline-offset-4 transition hover:decoration-vend-ink"
              >
                Veure el procés
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 border-t border-vend-line pt-8">
              {[
                { k: "0€", v: "Inversió inicial" },
                { k: "48h", v: "Instal·lació" },
                { k: "24/7", v: "Disponibilitat" },
              ].map((s) => (
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
                Avantatges — 06
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                Un servei pensat per a espais que ja funcionen bé.
              </h2>
              <p className="mt-6 text-vend-ink-soft">
                Sabem que un hotel o un gimnàs ja té les seves rutines. La nostra feina
                és sumar sense interferir: una màquina discreta, un catàleg cuidat i
                un cobrament recurrent.
              </p>
            </div>

            <div className="divide-y divide-vend-line border-y border-vend-line">
              {ADVANTAGES.map((a) => (
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
                Catàleg — 03 mescles
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                Trieu el catàleg que
                <em className="italic"> encaixa amb el vostre públic.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-vend-ink-soft">
              Cada màquina es configura amb un mix adaptat al vostre espai.
              Ajustem el percentatge i rotem el catàleg segons la demanda real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {MIXES.map((m, i) => (
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
                    Per a
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
            → Cada empresa decideix el percentatge exacte de cada categoria.
            Rotem el catàleg segons què es ven més al vostre espai.
          </p>
        </div>
      </section>

      {/* CAFÈ */}
      <section id="cafe" className="border-y border-vend-line bg-vend-panel/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <span className="font-mono-ticket text-[11px] uppercase tracking-[0.25em]" style={{ color: "#6B4A2E" }}>
              Cafè de màquina
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
              També ens ocupem del
              <em className="italic" style={{ color: "#6B4A2E" }}> cafè.</em>
            </h2>
            <p className="mt-6 max-w-md text-vend-ink-soft">
              La mateixa lògica: instal·lem la màquina, la mantenim i la reomplim.
              Vosaltres oferiu un cafè de qualitat als vostres hostes o socis i
              cobreu la vostra comissió cada mes.
            </p>
            <ul className="mt-8 space-y-4 border-t border-vend-line pt-6">
              {[
                "Cafè en gra, càpsula o soluble",
                "Opcions amb llet, sucre i vasos inclosos",
                "Manteniment i descalcificació preventiva",
                "Adequada per a office, gimnàs o zona d'hostes",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 text-vend-ink">
                  <span className="mt-2 h-px w-6" style={{ backgroundColor: "#6B4A2E" }} />
                  <span>{t}</span>
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
                    Cafè · VEN24
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-vend-yellow" />
                </div>
                <div>
                  <div className="font-display text-6xl italic leading-none">Espresso.</div>
                  <div className="mt-2 font-mono-ticket text-xs uppercase tracking-[0.2em] opacity-70">
                    Selecció barrejada · torradors de Barcelona
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-vend-cream/20 pt-4">
                  {["Espresso", "Tallat", "Americà"].map((c) => (
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
                Procés — 04 passos
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-vend-ink md:text-6xl">
                Del primer contacte a la
                <em className="italic"> primera comissió.</em>
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
            {STEPS.map((s) => (
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
                Contacte
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] text-vend-cream md:text-6xl">
                El vostre espai es mereix una màquina.
                <br />
                <em className="italic text-vend-yellow">
                  I una comissió cada mes.
                </em>
              </h2>
              <p className="mt-6 max-w-md text-vend-cream/70">
                Responem en menys de 24 hores amb una proposta clara,
                adaptada al vostre espai i al vostre públic.
              </p>

              <dl className="mt-10 space-y-4 border-t border-vend-cream/15 pt-8">
                {[
                  { k: "Telèfon", v: "+34 600 00 00 00" },
                  { k: "Correu", v: "hola@vendbcn.cat" },
                  { k: "Zona", v: "Barcelona i àrea metropolitana" },
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
            <span className="font-mono-ticket text-[10px] uppercase tracking-[0.25em]">Barcelona</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono-ticket text-[11px] uppercase tracking-[0.2em]">
            {NAV.map((n) => (
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nom = f.get("nom") ?? "";
    const empresa = f.get("empresa") ?? "";
    const email = f.get("email") ?? "";
    const tel = f.get("tel") ?? "";
    const msg = f.get("missatge") ?? "";
    const body = encodeURIComponent(
      `Nom: ${nom}\nEmpresa: ${empresa}\nEmail: ${email}\nTelèfon: ${tel}\n\n${msg}`
    );
    const subject = encodeURIComponent(`Sol·licitud de màquina — ${empresa || nom}`);
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
          Sol·licitud
        </span>
        <span className="font-mono-ticket text-[11px] text-vend-mint">● Resposta en 24h</span>
      </div>
      <div className="grid gap-2">
        <input required name="nom" placeholder="Nom" className={field} />
        <input required name="empresa" placeholder="Hotel, gimnàs o empresa" className={field} />
        <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
          <input required type="email" name="email" placeholder="Correu" className={field} />
          <input name="tel" placeholder="Telèfon" className={field} />
        </div>
        <textarea
          name="missatge"
          placeholder="Expliqueu-nos l'espai: tipus d'establiment, ubicació, nombre d'usuaris..."
          rows={4}
          className={`${field} resize-none`}
        />
        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-vend-cream px-6 py-3.5 text-sm text-vend-ink transition hover:bg-vend-yellow"
        >
          Enviar sol·licitud
          <span>→</span>
        </button>
        <p className="mt-2 font-mono-ticket text-[10px] uppercase tracking-[0.2em] text-vend-cream/40">
          En enviar, s'obre el vostre client de correu amb el missatge preparat.
        </p>
      </div>
    </form>
  );
}
