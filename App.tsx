import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Download,
  FileCheck2,
  FileText,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Youtube,
} from 'lucide-react';

type AuditFormState = {
  name: string;
  firm: string;
  structureType: string;
  email: string;
  link: string;
  bottleneck: string;
};

const initialFormState: AuditFormState = {
  name: '',
  firm: '',
  structureType: 'CGP',
  email: '',
  link: '',
  bottleneck: '',
};

const auditHref = '#audit-flash';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const LogoMark = () => (
  <span className="relative flex h-7 w-7 items-center justify-center">
    <span className="absolute left-1/2 top-1/2 h-2.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-text-strong-950" />
    <span className="absolute left-1/2 top-1/2 h-2.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-text-strong-950" />
    <span className="relative h-2.5 w-2.5 rounded-full bg-[#F7F5EF]" />
  </span>
);

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-[#dedbd2] bg-white/85 px-6 py-4 backdrop-blur-sm">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <LogoMark />
        <span className="text-xl font-extrabold tracking-[-0.02em] text-text-strong-950">
          Finoptic<span className="text-[#2675ff]">.fr</span>
        </span>
      </a>
      <div className="flex items-center gap-4 text-zinc-400">
        <a href={auditHref} aria-label="Audit Flash" className="transition-colors hover:text-text-strong-950">
          <Mail className="h-4 w-4" />
        </a>
        <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-text-strong-950">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Démonstration" className="transition-colors hover:text-text-strong-950">
          <Youtube className="h-4 w-4" />
        </a>
      </div>
    </div>
  </header>
);

const BlueUnderline = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-[0.35em] left-0 right-0 h-[0.35em] w-full text-[#2675ff]"
    viewBox="0 0 420 32"
    preserveAspectRatio="none"
  >
    <path
      d="M7 20C78 8 155 26 230 16c69-9 121-18 183-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="6"
    />
  </svg>
);

const StatLine = () => (
  <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-baseline justify-center gap-x-8 gap-y-3 text-center">
    <div className="flex items-baseline gap-2">
      <span className="font-serif text-2xl italic leading-none text-text-strong-950 md:text-3xl">Jusqu'à 15h</span>
      <span className="font-serif text-base italic text-[#65748b]">par semaine observées</span>
    </div>
    <span className="hidden text-[#dedbd2] md:inline">·</span>
    <div className="flex items-baseline gap-2">
      <span className="font-serif text-2xl italic leading-none text-text-strong-950 md:text-3xl">1 workflow</span>
      <span className="font-serif text-base italic text-[#65748b]">analysé gratuitement</span>
    </div>
    <span className="hidden text-[#dedbd2] md:inline">·</span>
    <div className="flex items-baseline gap-2">
      <span className="font-serif text-2xl italic leading-none text-text-strong-950 md:text-3xl">72h</span>
      <span className="font-serif text-base italic text-[#65748b]">pour l'Audit Flash</span>
    </div>
  </div>
);

const Hero = () => (
  <section className="w-full bg-[#F7F5EF] px-6 pb-12 pt-24 md:pb-16 md:pt-32">
    <div className="mx-auto max-w-7xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2675ff] md:text-sm">
        Finoptic : production documentaire augmentée
      </p>
      <h1 className="mx-auto mt-6 max-w-6xl font-serif text-[2.45rem] font-normal italic leading-[1.02] tracking-[-0.03em] text-text-strong-950 md:text-[4.1rem] lg:text-[5.35rem]">
        Vos équipes passent jusqu'à 15 heures par semaine à produire des documents.
        <span className="relative inline-block">
          Finoptic les aide à en récupérer une grande partie.
          <BlueUnderline />
        </span>
      </h1>
      <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-[#65748b] md:text-xl">
        Systèmes de production documentaire augmentés par l'IA pour cabinets patrimoniaux,
        family offices et conseil financier : reportings non cotés, notes d'analyse, mémos,
        packs clients — sans baisser votre standard de qualité.
      </p>
      <StatLine />
    </div>
  </section>
);

const SectionHeader = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="mb-10 max-w-4xl">
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2675ff]">{eyebrow}</p>
    <h2 className="mt-6 font-serif text-4xl font-normal italic leading-tight tracking-[-0.025em] text-text-strong-950 md:text-5xl lg:text-[3.35rem]">
      {title}
    </h2>
    {children && <div className="mt-5 max-w-4xl text-lg leading-relaxed text-[#65748b]">{children}</div>}
  </div>
);

const mediaCards = [
  {
    label: 'EXEMPLE ILLUSTRATIF · AVANT',
    title: 'Reporting non coté — PDF de fonds brut → note client',
    tone: 'blue',
  },
  {
    label: 'EXEMPLE ILLUSTRATIF · APRÈS',
    title: 'Mémo d’investissement — points clés, risques, décision',
    tone: 'paper',
  },
  {
    label: 'DONNÉES SIMULÉES',
    title: 'Synthèse trimestrielle — format cabinet, validation humaine',
    tone: 'dark',
  },
  {
    label: 'PROCESS PROOF',
    title: 'Chaque fonds envoie son PDF. Chaque client reçoit sa synthèse.',
    tone: 'paper',
  },
  {
    label: 'CONTRÔLE QUALITÉ',
    title: 'Rien ne sort sans validation : les points sensibles remontent.',
    tone: 'dark',
  },
  {
    label: 'TEMPS SENIOR',
    title: 'ChatGPT gagne 20 minutes. Un système tient tout le processus.',
    tone: 'blue',
  },
];

const Thumbnail = ({ tone }: { tone: string }) => (
  <div
    className={cx(
      'relative aspect-video overflow-hidden rounded-xl border border-[#d8d8d2]',
      tone === 'blue' && 'bg-[#dce8ff]',
      tone === 'paper' && 'bg-[#eef1f4]',
      tone === 'dark' && 'bg-[#1e2329]'
    )}
  >
    <div className="absolute inset-0 grid grid-cols-2">
      <div
        className={cx(
          'p-5',
          tone === 'dark' ? 'bg-white/10' : 'bg-white/55'
        )}
      >
        <div className={cx('mb-4 h-4 w-24 rounded', tone === 'dark' ? 'bg-white/35' : 'bg-[#b7c0ca]')} />
        <div className="space-y-2">
          <div className={cx('h-2 rounded', tone === 'dark' ? 'bg-white/25' : 'bg-[#c7ced6]')} />
          <div className={cx('h-2 w-4/5 rounded', tone === 'dark' ? 'bg-white/25' : 'bg-[#c7ced6]')} />
          <div className={cx('h-2 w-2/3 rounded', tone === 'dark' ? 'bg-white/25' : 'bg-[#c7ced6]')} />
        </div>
      </div>
      <div className="relative p-5">
        <div className="absolute inset-x-5 top-5 h-16 rounded-lg bg-white/45" />
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
          <span className="h-9 rounded bg-white/45" />
          <span className="h-9 rounded bg-white/45" />
          <span className="h-9 rounded bg-white/45" />
        </div>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/55 text-white shadow-lg">
        <FileCheck2 className="h-6 w-6" />
      </span>
    </div>
    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-strong-950 backdrop-blur">
      <Sparkles className="h-3 w-3 text-[#2675ff]" />
      Finoptic
    </div>
  </div>
);

const MediaGrid = () => (
  <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader eyebrow="Preuve par l'exemple" title="Un exemple vaut mieux qu'une promesse.">
        <p>
          Découvrez comment un reporting brut peut être transformé en note client claire, structurée
          et contrôlée. Les exemples ci-dessous sont illustratifs, basés sur des données simulées.
        </p>
      </SectionHeader>
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="/exemple-anonymise-placeholder.txt"
          download
          className="inline-flex items-center justify-center gap-3 rounded-md bg-[#2675ff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Voir un exemple anonymisé
        </a>
        <p className="text-sm leading-relaxed text-[#65748b]">
          Données simulées. Format représentatif du type de livrable produit.
        </p>
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {mediaCards.map((card) => (
          <article key={card.title}>
            <Thumbnail tone={card.tone} />
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#65748b]">{card.label}</p>
            <h3 className="mt-4 font-serif text-2xl font-normal italic leading-snug tracking-[-0.015em] text-text-strong-950 md:text-3xl">
              {card.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const proofCards = [
  'Reportings non cotés',
  "Notes d'analyse",
  'Mémos dirigeants',
  'Packs clients',
  'Comités internes',
  'Synthèses trimestrielles',
  'Contrôles qualité',
  'Templates cabinet',
  'SOP équipe',
];

const ProofWall = () => (
  <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader eyebrow="Ce que le système absorbe" title="Ces documents qui coûtent des heures senior.">
        <p>
          Production répétitive, sources hétérogènes, contrôle final par les associés. Finoptic structure
          le flux pour que l'équipe ne reprenne la main qu'aux bons endroits.
        </p>
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {proofCards.map((item, index) => (
          <div key={item} className="aspect-video rounded-xl border border-[#e3e0d8] bg-[#edf0f4] p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#65748b]">
                0{(index % 3) + 1}
              </span>
              <FileText className="h-4 w-4 text-[#65748b]" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-[#cfd6df]" />
              <div className="h-2 w-10/12 rounded bg-[#cfd6df]" />
              <div className="h-2 w-7/12 rounded bg-[#cfd6df]" />
            </div>
            <p className="mt-7 font-serif text-2xl italic leading-tight text-text-strong-950">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EngineSection = () => {
  const steps = [
    'Les PDF, Excel et notes entrent dans un flux unique',
    'La donnée utile est extraite et normalisée',
    'Le livrable sort dans votre format exact',
    'Les points sensibles remontent avant validation',
    'Rien ne sort sans validation humaine',
  ];

  return (
    <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Notre méthode" title="Le Document Engine Finoptic" />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-video rounded-xl border border-[#e3e0d8] bg-[#edf0f4] p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-lg bg-white/80" />
                <div className="h-20 rounded-lg bg-white/80" />
                <div className="h-20 rounded-lg bg-white/80" />
              </div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-text-strong-950 text-white shadow-xl">
                <FileCheck2 className="h-9 w-9" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-lg bg-white/80" />
                <div className="h-16 rounded-lg bg-white/80" />
              </div>
            </div>
          </div>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-4 border-b border-[#e3e0d8] pb-4 text-sm font-semibold uppercase tracking-[0.15em] text-text-strong-950">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2675ff]" />
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

const FitAndProcess = () => (
  <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader eyebrow="Qualification" title="Pour les cabinets qui ont déjà une exigence de production." />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-serif text-3xl italic text-text-strong-950">C'est pour vous si</h3>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#65748b]">
            <li>Cabinet de 3 à 30 personnes.</li>
            <li>Poche non cotée ou production documentaire dense.</li>
            <li>Le dirigeant décide.</li>
            <li>Vous voulez récupérer du temps senior, pas un logiciel de plus.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-3xl italic text-text-strong-950">Ce n'est pas pour vous si</h3>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#65748b]">
            <li>Grande structure avec DSI et appels d'offres.</li>
            <li>Vous cherchez de la prospection ou des leads.</li>
            <li>Vous débutez sans process existant.</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {[
          ['Audit Flash', 'Offert · 1 workflow · livré sous 72h'],
          ['Diagnostic Finoptic', '2 500€ · 1 semaine'],
          ["Sprint d'implémentation", 'Sur devis · 3-4 semaines'],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-xl border border-[#e3e0d8] bg-white/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2675ff]">{detail}</p>
            <h3 className="mt-5 font-serif text-3xl italic leading-tight text-text-strong-950">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader eyebrow="Qui je suis ?" title="Des livrables au standard de la banque d'affaires." />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="aspect-[3/4] rounded-xl border border-[#e3e0d8] bg-[#edf0f4] p-6">
          <div className="flex h-full items-center justify-center rounded-lg bg-white/60">
            <LogoMark />
          </div>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[#334155]">
          <p>
            Finoptic est fondé par Ousmane Thienta, issu du financement et de l'investissement en
            private markets : direct lending, dette privée, M&A.
          </p>
          <p>
            Le point de départ est simple : dans les cabinets exigeants, la production documentaire
            consomme des heures de haut niveau. Finoptic installe des systèmes qui font tomber cette
            charge, tout en gardant le contrôle humain.
          </p>
          <div className="rounded-xl border border-[#e3e0d8] bg-white/55 p-6">
            <p className="font-serif text-3xl italic leading-snug text-text-strong-950">
              Garantie de niveau. Si le système ne respecte pas le standard fixé ensemble, nous itérons
              gratuitement jusqu'à validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqs = [
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: "Traitement souverain possible, aucune donnée utilisée pour entraîner des modèles, cadre conforme RGPD. Un NDA peut être signé dès le premier échange.",
  },
  {
    q: 'On utilise déjà ChatGPT, pourquoi vous ?',
    a: "Un outil n'est pas un système. Finoptic installe les sources, les templates, les règles de contrôle, la validation humaine et le suivi du niveau de qualité.",
  },
  {
    q: 'Combien de temps ?',
    a: "Audit Flash sous 72h. Diagnostic en 1 semaine. Sprint d'implémentation en 3 à 4 semaines.",
  },
  {
    q: 'Et après le sprint ?',
    a: 'Une option Desk mensuel couvre la maintenance, les évolutions et les nouveaux templates. Le nombre de places est limité.',
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e3e0d8] last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-serif text-2xl italic text-text-strong-950">{q}</span>
        <ChevronDown className={cx('h-5 w-5 shrink-0 text-[#65748b] transition-transform', isOpen && 'rotate-180')} />
      </button>
      <div className={cx('overflow-hidden transition-all duration-300', isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0')}>
        <p className="text-base leading-relaxed text-[#65748b]">{a}</p>
      </div>
    </div>
  );
};

const AuditFormSection = () => {
  const [formData, setFormData] = useState<AuditFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof AuditFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Audit Flash request', formData);
    setSubmitted(true);
  };

  return (
    <section id="audit-flash" className="scroll-mt-20 bg-[#F7F5EF] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Audit Flash" title="Deux places de pilote ouvertes ce trimestre.">
          <p>
            Sans engagement. Vous recevez l'analyse d'un seul workflow documentaire + un exemple de
            livrable refait à notre standard. Pas un audit complet gratuit, un point d'entrée sérieux.
          </p>
        </SectionHeader>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <a
              href="/exemple-anonymise-placeholder.txt"
              download
              className="inline-flex items-center gap-3 rounded-md bg-[#2675ff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Télécharger un exemple anonymisé
            </a>
            <a
              href="/audit-flash-sample.pdf"
              download
              className="inline-flex items-center gap-3 rounded-md border border-[#dedbd2] bg-white/55 px-6 py-3 text-sm font-semibold text-text-strong-950 transition hover:bg-white"
            >
              <Download className="h-4 w-4" />
              Télécharger un Audit Flash sample
            </a>
            <div className="rounded-xl border border-[#e3e0d8] bg-white/55 p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-strong-950">
                <ShieldCheck className="h-5 w-5 text-[#2675ff]" />
                Contrôle humain
              </div>
              <p className="text-lg leading-relaxed text-[#65748b]">
                Rien ne sort sans validation. Le système réduit la charge, mais votre standard reste
                le point de contrôle final.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-[#e3e0d8] bg-white/55 p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Nom" value={formData.name} onChange={(value) => updateField('name', value)} required />
              <Field label="Cabinet" value={formData.firm} onChange={(value) => updateField('firm', value)} required />
              <label className="flex flex-col gap-2 text-sm font-semibold text-text-strong-950">
                Type de structure
                <select
                  value={formData.structureType}
                  onChange={(event) => updateField('structureType', event.target.value)}
                  className="h-11 rounded-md border border-[#dedbd2] bg-[#F7F5EF] px-3 text-sm font-normal outline-none focus:border-[#2675ff]"
                >
                  <option>CGP</option>
                  <option>Family office</option>
                  <option>DAF externalisé</option>
                  <option>Société de gestion</option>
                  <option>Autre</option>
                </select>
              </label>
              <Field label="Email pro" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required />
              <Field label="Lien site ou LinkedIn" value={formData.link} onChange={(value) => updateField('link', value)} className="md:col-span-2" />
              <label className="flex flex-col gap-2 text-sm font-semibold text-text-strong-950 md:col-span-2">
                Votre principal goulot documentaire
                <textarea
                  required
                  rows={4}
                  value={formData.bottleneck}
                  onChange={(event) => updateField('bottleneck', event.target.value)}
                  className="resize-none rounded-md border border-[#dedbd2] bg-[#F7F5EF] px-3 py-3 text-sm font-normal outline-none focus:border-[#2675ff]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-md bg-text-strong-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Demander un Audit Flash
              <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && <p className="mt-4 text-center text-sm text-[#65748b]">Demande enregistrée côté front. Envoi à brancher.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <label className={cx('flex flex-col gap-2 text-sm font-semibold text-text-strong-950', className)}>
    {label}
    <input
      required={required}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 rounded-md border border-[#dedbd2] bg-[#F7F5EF] px-3 text-sm font-normal outline-none focus:border-[#2675ff]"
    />
  </label>
);

const FAQSection = () => (
  <section className="bg-[#F7F5EF] px-6 py-16 md:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeader eyebrow="Questions fréquentes" title="Ce qu'on clarifie avant de travailler ensemble." />
      <div className="max-w-4xl">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-[#dedbd2] bg-white/70 px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#65748b] md:flex-row">
      <div className="flex items-center gap-2 font-bold text-text-strong-950">
        <LogoMark />
        Finoptic<span className="text-[#2675ff]">.fr</span>
      </div>
      <p>© {new Date().getFullYear()} Finoptic. Tous droits réservés.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] font-sans text-text-strong-950 selection:bg-[#2675ff] selection:text-white">
      <Header />
      <main>
        <Hero />
        <MediaGrid />
        <ProofWall />
        <EngineSection />
        <FitAndProcess />
        <Founder />
        <FAQSection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
}
