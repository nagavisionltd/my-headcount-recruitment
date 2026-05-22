import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import logo from "@/assets/headcount-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Headcount LTD — Hospitality Recruitment, London" },
      { name: "description", content: "Counting on connections, not just heads. Specialist hospitality recruitment for London restaurants, hotels, and bars." },
      { property: "og:title", content: "My Headcount LTD — Hospitality Recruitment" },
      { property: "og:description", content: "Connection. Clarity. Care. London's human-first hospitality recruiters." },
    ],
  }),
  component: Index,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <img src="https://github.com/nagavisionltd/my-headcount-recruitment/blob/main/src/assets/header-headcount-logo-white.png?raw=true" alt="headcount" className="h-8" />
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-cream font-medium">
          <a href="#ethos" className="hover:text-coral transition-colors">Ethos</a>
          <a href="#sectors" className="hover:text-coral transition-colors">Sectors</a>
          <a href="#numbers" className="hover:text-coral transition-colors">Numbers</a>
          <a href="#process" className="hover:text-coral transition-colors">Process</a>
          <a href="#contact" className="hover:text-coral transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-[11px] uppercase tracking-[0.2em] text-cream font-medium">
          Get in touch ↗
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden bg-ink text-cream">
      {/* Background grid */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden
      >
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </motion.div>

      {/* Floating coral blob */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
        className="absolute -right-40 top-1/4 size-[600px] rounded-full bg-coral blur-3xl opacity-30"
        aria-hidden
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 pt-48 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="size-2 rounded-full bg-coral animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">London · Est. 2024 · Hospitality</span>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="font-serif italic text-2xl md:text-3xl text-cream/70 mb-6 max-w-xl"
          >
            A recruitment agency for the people who run hospitality.
          </motion.p>

          <h1 className="font-display text-[20vw] md:text-[15vw] leading-[0.85] tracking-[-0.05em] text-cream">
            {"headcount".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.5 + i * 0.04 }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="mt-8 flex flex-wrap items-end justify-between gap-6"
          >
            <p className="max-w-md text-cream/70 text-sm md:text-base leading-relaxed">
              We place chefs, managers, sommeliers and front-of-house leaders into London's most discerning kitchens, hotels and dining rooms.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-coral text-ink px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-cream transition-colors">
                Hire talent
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#process" className="inline-flex items-center gap-3 border border-cream/20 text-cream px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-ink transition-colors">
                Find work
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-px bg-cream/40"
        />
      </motion.div>
    </section>
  );
}

/* ---------------- ETHOS ---------------- */
function Ethos() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const pillars = [
    { n: "01", k: "Connection", body: "Meaningful relationships, not transactional placements. We learn your culture before we send a CV." },
    { n: "02", k: "Clarity", body: "Honest, transparent communication across the whole journey. No ghosting. No spin." },
    { n: "03", k: "Care", body: "We genuinely look after candidates and clients — wellbeing and longevity matter more than quick fills." },
  ];

  return (
    <section ref={ref} id="ethos" className="relative h-screen w-full overflow-hidden bg-cream text-ink flex flex-col">
      {/* Marquee */}
      <motion.div style={{ x }} className="pt-24 whitespace-nowrap font-display text-[18vw] leading-none text-ink/[0.08] select-none pointer-events-none">
        Connection · Clarity · Care ·
      </motion.div>

      <div className="flex-1 grid md:grid-cols-3 gap-px bg-ink/10 mx-6 md:mx-12 mb-12 mt-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.15 }}
            className="bg-cream p-8 md:p-10 flex flex-col justify-between min-h-[280px] group cursor-default"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-ink/40">{p.n} / 03</span>
              <span className="size-2 rounded-full bg-coral group-hover:scale-150 transition-transform" />
            </div>
            <div>
              <h3 className="font-display text-5xl md:text-6xl mb-4 group-hover:text-coral transition-colors">{p.k}</h3>
              <p className="text-sm text-ink/70 leading-relaxed max-w-xs">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SECTORS ---------------- */
function Sectors() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const sectors = [
    "Fine Dining", "Boutique Hotels", "Members' Clubs", "Cocktail Bars",
    "Neighbourhood Restaurants", "Pâtisserie & Bakery", "Event Catering", "Hospitality Tech",
  ];

  return (
    <section ref={ref} id="sectors" className="relative h-[120vh] w-full overflow-hidden bg-ink text-cream flex flex-col justify-center py-32">
      <motion.div style={{ y }} className="absolute left-4 md:left-12 top-10 md:top-20 font-serif italic text-[12vw] text-coral/20 select-none pointer-events-none">
        sectors
      </motion.div>

      <div className="relative px-8 md:px-20 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-[11px] uppercase tracking-[0.3em] text-coral block mb-6"
          >
            — Where we operate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl leading-[0.95]"
          >
            Specialists across the London plate.
          </motion.h2>
        </div>

        <ul className="md:col-span-8 md:col-start-5 divide-y divide-cream/15 border-y border-cream/15">
          {sectors.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className="group flex items-center justify-between py-5 cursor-pointer hover:pl-4 transition-all"
            >
              <span className="font-display text-2xl md:text-4xl group-hover:text-coral transition-colors">{s}</span>
              <span className="font-mono text-xs text-cream/40 group-hover:text-coral transition-colors">
                {String(i + 1).padStart(2, "0")} ↗
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- NUMBERS ---------------- */
function Numbers() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stats = [
    { n: "132K", l: "UK hospitality vacancies — and we're working through them." },
    { n: "67%", l: "Industry retention. Our placements outperform this benchmark." },
    { n: "48hr", l: "Average shortlist turnaround on priority roles." },
    { n: "1:1", l: "Every candidate gets a real conversation. No bots." },
  ];

  return (
    <section ref={ref} id="numbers" className="relative h-screen w-full overflow-hidden bg-coral text-ink">
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-20" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: "radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px"
        }} />
      </motion.div>

      <div className="relative h-full px-6 md:px-12 py-24 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] block mb-6">— By the numbers</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            The market is tight. <span className="font-serif italic font-normal">We make it move.</span>
          </h2>
        </motion.div>

        <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t-2 border-ink/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            >
              <div className="font-display text-6xl md:text-8xl leading-none mb-3">{s.n}</div>
              <p className="text-xs md:text-sm text-ink/80 leading-relaxed max-w-[24ch]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  const steps = [
    { n: "01", t: "Brief", d: "We sit down with you. Kitchen, service style, culture, growth plan — all of it." },
    { n: "02", t: "Search", d: "Curated longlist from our active network. Quiet outreach to passive candidates." },
    { n: "03", t: "Shortlist", d: "Three to five people who actually fit. Notes, context, and our honest take." },
    { n: "04", t: "Land", d: "Offer support, onboarding, and a 90-day check-in. Because retention is the real KPI." },
  ];

  return (
    <section ref={ref} id="process" className="relative min-h-[120vh] h-[120vh] w-full overflow-hidden bg-cream text-ink flex flex-col">
      <div className="px-8 md:px-20 pt-24 pb-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-coral block mb-4"
        >
          — How we work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl"
        >
          Four steps. Zero noise.
        </motion.h2>
      </div>

      <div className="relative flex-1 px-8 md:px-20 pb-24">
        <div className="absolute left-[34px] md:left-[58px] top-0 bottom-0 w-px bg-ink/10" />
        <motion.div style={{ height: lineH }} className="absolute left-[34px] md:left-[58px] top-0 w-px bg-coral origin-top" />

        <div className="grid grid-cols-1 gap-6 h-full content-around pl-16 md:pl-32">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-[68px] md:-left-[84px] top-2 size-4 rounded-full bg-cream border-2 border-coral group-hover:bg-coral transition-colors" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 pb-6 border-b border-ink/10">
                <span className="font-mono text-xs text-ink/40">{s.n}</span>
                <h3 className="font-display text-3xl md:text-5xl group-hover:text-coral transition-colors">{s.t}</h3>
                <p className="text-sm text-ink/70 max-w-md md:ml-auto">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <section ref={ref} id="contact" className="relative h-[120vh] w-full overflow-hidden bg-ink text-cream flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 relative">
        <motion.div
          style={{ scale, rotate }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div className="size-[70vh] rounded-full bg-coral/20 blur-3xl" />
        </motion.div>

        <div className="relative text-center max-w-5xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.3em] text-coral block mb-8"
          >
            — Let's talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="font-display text-[14vw] md:text-[10vw] leading-[0.85]"
          >
            Counting on <span className="font-serif italic font-normal text-coral">connections</span>,
            not just heads.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <a href="mailto:hello@myheadcount.co.uk" className="group inline-flex items-center gap-3 bg-coral text-ink px-8 py-5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-cream transition-colors">
              hello@myheadcount.co.uk
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="relative border-t border-cream/10 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-cream/40">
        <span>© 2026 My Headcount LTD · London</span>
        <span>Connection · Clarity · Care</span>
        <span>Built for hospitality</span>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-cream text-ink antialiased">
      <Nav />
      <Hero />
      <Ethos />
      <Sectors />
      <Numbers />
      <Process />
      <Contact />
      {/* Hidden logo for SEO/preload — referenced for completeness */}
      <img src={logo} alt="My Headcount" className="sr-only" />
    </main>
  );
}
