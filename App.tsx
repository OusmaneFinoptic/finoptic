import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Database,
  Download,
  FileCheck2,
  FileText,
  PenLine,
  ShieldCheck,
  UserRound,
  XCircle,
} from 'lucide-react';

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>;

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

const PrimaryCTA = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <a
    href={auditHref}
    className={cx(
      'inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary-base px-6 py-3 text-sm font-medium text-white shadow-fancy-buttons-neutral transition hover:bg-zinc-800',
      className
    )}
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </a>
);

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-stroke-soft-200 bg-white/85 px-5 py-4 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
      <a href="#" className="text-xl font-bold tracking-[-0.02em] text-text-strong-950">
        Finoptic
      </a>
      <PrimaryCTA className="hidden min-h-10 px-4 py-2 sm:inline-flex">
        Demander un Audit Flash
      </PrimaryCTA>
    </div>
  </header>
);

const SectionIntro = ({
  eyebrow,
  title,
  children,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
}) => (
  <div className={cx('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{eyebrow}</p>
    )}
    <h2 className="mt-4 text-balance font-serif text-4xl font-normal leading-tight text-text-strong-950 sm:text-5xl">
      {title}
    </h2>
    {children && <div className="mt-5 text-lg leading-relaxed text-text-sub-600">{children}</div>}
  </div>
);

const Hero = () => (
  <section className="px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
    <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
        Production documentaire augmentée par l'IA
      </p>
      <h1 className="mt-6 max-w-5xl text-balance font-serif text-5xl font-normal leading-[1.02] text-text-strong-950 sm:text-7xl">
        Industrialisez vos livrables financiers récurrents, sans perdre le contrôle.
      </h1>
      <p className="mt-7 max-w-3xl text-base leading-relaxed text-text-sub-600 sm:text-xl">
        Finoptic installe des systèmes de production documentaire augmentés par l'IA pour cabinets
        patrimoniaux, family offices et conseil financier : reportings non cotés, notes d'analyse,
        mémos et packs clients — avec validation humaine à chaque étape.
      </p>
      <div className="mt-9 flex w-full max-w-2xl flex-col items-center gap-4">
        <PrimaryCTA className="w-full sm:w-auto">
          Demander un Audit Flash — offert, livré sous 72h
        </PrimaryCTA>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
          Analyse d'un workflow documentaire + exemple de livrable refait à notre standard. Sans engagement.
        </p>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="border-y border-stroke-soft-200 bg-white px-5 py-20 sm:py-24">
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionIntro title="Chaque trimestre, les mêmes documents reviennent. Rarement dans le même format." />
      <div className="space-y-6 text-lg leading-relaxed text-text-sub-600">
        <p>
          Reportings de fonds, factsheets, capital account statements, notes produits, données
          portefeuille, commentaires de gestion : les sources changent, les formats varient, mais le
          livrable client doit rester clair, fiable et professionnel.
        </p>
        <p>
          Le problème n'est pas de rédiger. C'est de maintenir un standard : les chiffres à vérifier,
          les sources à retrouver, les commentaires à harmoniser, et la relecture à sécuriser.
        </p>
        <div className="rounded-2xl border border-stroke-soft-200 bg-bg-weak-50 p-6 shadow-regular-xs">
          <p className="font-serif text-2xl leading-snug text-text-strong-950">
            ChatGPT peut aider sur une phrase. Il ne tient pas, seul, un processus documentaire financier.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const engineSteps: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: 'Ingestion',
    desc: 'Les documents sources sont centralisés : PDF fonds, notes internes, données Excel, transcripts, factsheets ou documents clients.',
    icon: Database,
  },
  {
    title: 'Structuration',
    desc: 'Les données clés sont extraites dans un schéma constant : KPIs, dates, commentaires, risques, chiffres à vérifier, sources.',
    icon: ClipboardCheck,
  },
  {
    title: 'Génération',
    desc: 'Le système produit une première version du livrable selon le format et le ton du cabinet.',
    icon: PenLine,
  },
  {
    title: 'Contrôle humain',
    desc: 'Rien ne sort automatiquement. Les chiffres, le style, la cohérence et la conformité sont relus avant validation.',
    icon: ShieldCheck,
  },
];

const DocumentEngineSection = () => (
  <section className="px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionIntro eyebrow="Mécanisme" title="Le Document Engine Finoptic" />
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {engineSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article key={step.title} className="rounded-2xl border border-stroke-soft-200 bg-white p-6 shadow-regular-xs">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke-soft-200 bg-bg-weak-50 text-sm font-medium text-text-sub-600">
                  {index + 1}
                </span>
                <Icon className="h-5 w-5 text-zinc-400" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold text-text-strong-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-sub-600">{step.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const RawDocument = () => (
  <div className="rounded-2xl border border-stroke-soft-200 bg-white p-4 shadow-regular-xs">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Document source brut</p>
    <div className="min-h-[320px] rounded-xl border border-stroke-soft-200 bg-bg-weak-50 p-5">
      <div className="h-8 w-36 rounded bg-zinc-200" />
      <div className="mt-8 space-y-3">
        <div className="h-3 w-full rounded bg-zinc-200" />
        <div className="h-3 w-11/12 rounded bg-zinc-200" />
        <div className="h-3 w-8/12 rounded bg-zinc-200" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="h-24 rounded-lg border border-stroke-soft-200 bg-white" />
        <div className="h-24 rounded-lg border border-stroke-soft-200 bg-white" />
        <div className="col-span-2 h-24 rounded-lg border border-stroke-soft-200 bg-white" />
      </div>
    </div>
  </div>
);

const StructuredNote = () => (
  <div className="rounded-2xl border border-stroke-soft-200 bg-white p-4 shadow-regular-xs">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Note client structurée</p>
    <div className="min-h-[320px] rounded-xl border border-stroke-soft-200 bg-bg-weak-50 p-5">
      <h3 className="font-serif text-3xl leading-tight text-text-strong-950">Synthèse client</h3>
      <div className="mt-6 rounded-xl border border-stroke-soft-200 bg-white p-4">
        <div className="mb-3 h-2 w-28 rounded bg-primary-base" />
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-zinc-200" />
          <div className="h-2.5 w-10/12 rounded bg-zinc-200" />
          <div className="h-2.5 w-8/12 rounded bg-zinc-200" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="h-16 rounded-lg border border-stroke-soft-200 bg-white" />
        <div className="h-16 rounded-lg border border-stroke-soft-200 bg-white" />
        <div className="h-16 rounded-lg border border-stroke-soft-200 bg-white" />
      </div>
      <div className="mt-4 rounded-xl bg-primary-base p-4 text-sm font-medium text-white">
        Points à valider avant envoi
      </div>
    </div>
  </div>
);

const ExampleProofSection = () => (
  <section className="bg-white px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionIntro eyebrow="Preuve par l'exemple" title="Voir un livrable plutôt qu'une promesse.">
          <p>
            Nous montrons un exemple anonymisé ou simulé : un document source brut transformé en note
            claire, structurée et relue.
          </p>
        </SectionIntro>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a
            href="/exemple-anonymise-placeholder.txt"
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stroke-soft-200 bg-white px-5 text-sm font-medium text-text-strong-950 shadow-regular-xs transition hover:bg-zinc-50"
          >
            <Download className="h-4 w-4" />
            Voir un exemple anonymisé
          </a>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <RawDocument />
        <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-stroke-soft-200 bg-bg-weak-50 text-zinc-400 lg:flex">
          <ArrowRight className="h-4 w-4" />
        </span>
        <StructuredNote />
      </div>
      <p className="mt-5 text-sm leading-relaxed text-zinc-500">
        Exemple illustratif. Données anonymisées ou simulées.
      </p>
    </div>
  </section>
);

const useCases = [
  {
    title: 'Reporting non coté',
    desc: 'Transformer plusieurs reportings fonds en une synthèse client structurée.',
  },
  {
    title: "Note d'analyse fonds / produit",
    desc: "Produire une première version de note à partir d'un mémorandum, d'une factsheet et d'un reporting.",
  },
  {
    title: 'Pack client trimestriel',
    desc: 'Assembler portefeuille, commentaires, allocation, points d’attention et prochaines actions.',
  },
  {
    title: 'Proposition commerciale / mémo de mission',
    desc: 'Transformer un appel client, des notes et un scope en proposition structurée.',
  },
];

const UseCasesSection = () => (
  <section className="px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionIntro eyebrow="Cas d'usage" title="Les workflows que Finoptic peut installer" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {useCases.map((item) => (
          <article key={item.title} className="rounded-2xl border border-stroke-soft-200 bg-white p-7 shadow-regular-xs">
            <FileText className="h-5 w-5 text-zinc-400" />
            <h3 className="mt-5 text-xl font-semibold text-text-strong-950">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-text-sub-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const fitItems = [
  'vous produisez régulièrement des livrables financiers ou patrimoniaux ;',
  'vous avez déjà des documents, templates ou process existants ;',
  'vous voulez un système contrôlé, pas un logiciel de plus ;',
  'le dirigeant ou associé peut décider rapidement.',
];

const notFitItems = [
  'vous cherchez de la prospection ou des leads ;',
  'vous voulez un chatbot générique ;',
  "vous n'avez aucun process documentaire existant ;",
  "vous êtes une grande structure avec DSI, appels d'offres et cycle long ;",
  'vous voulez envoyer automatiquement des documents clients sans relecture.',
];

const FitList = ({ title, items, variant }: { title: string; items: string[]; variant: 'yes' | 'no' }) => {
  const Icon = variant === 'yes' ? CheckCircle2 : XCircle;

  return (
    <div className="rounded-2xl border border-stroke-soft-200 bg-white p-7 shadow-regular-xs">
      <h3 className="text-xl font-semibold text-text-strong-950">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-sub-600">
            <Icon className="mt-0.5 h-5 w-5 flex-none text-text-strong-950" strokeWidth={1.8} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FitSection = () => (
  <section className="border-y border-stroke-soft-200 bg-white px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionIntro eyebrow="Qualification" title="Pour qui Finoptic est utile" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <FitList title="C'est pour vous si" items={fitItems} variant="yes" />
        <FitList title="Ce n'est pas pour vous si" items={notFitItems} variant="no" />
      </div>
    </div>
  </section>
);

const processSteps: Array<{ title: string; price: string; desc: string; icon: IconComponent }> = [
  {
    title: 'Audit Flash',
    price: 'Offert, 72h',
    desc: "Analyse d'un workflow documentaire à partir d'éléments publics ou d'un cas décrit. Vous recevez une mini-analyse et un exemple de livrable refait à notre standard.",
    icon: Clock3,
  },
  {
    title: 'Diagnostic Finoptic',
    price: '2 500€, 1 semaine',
    desc: "Après NDA, nous analysons vos vrais documents, vos templates, vos cas d'usage et produisons un mini-POC sur un document réel.",
    icon: BadgeEuro,
  },
  {
    title: "Sprint d'implémentation",
    price: 'Sur devis, 3 à 4 semaines',
    desc: 'Nous installons un Document Engine complet sur un workflow prioritaire : ingestion, structuration, génération, contrôle humain, SOP et formation.',
    icon: FileCheck2,
  },
  {
    title: 'Desk Finoptic',
    price: 'Option mensuelle',
    desc: 'Maintenance, nouveaux templates, adaptation aux nouveaux formats, contrôle qualité et amélioration continue.',
    icon: ShieldCheck,
  },
];

const ProcessOfferSection = () => (
  <section className="px-5 py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionIntro title="Une entrée progressive, sans demander tout votre back-office au premier échange.">
        <p>
          On commence par un workflow. Si la valeur est claire, on passe aux vrais documents sous NDA.
        </p>
      </SectionIntro>
      <div className="relative pl-7">
        <div className="absolute bottom-8 left-[19px] top-3 w-px bg-stroke-soft-200" />
        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <article key={step.title} className="relative pb-8 last:pb-0">
              <div className="absolute -left-7 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-stroke-soft-200 bg-white shadow-regular-xs">
                <Icon className="h-5 w-5 text-zinc-500" strokeWidth={1.8} />
              </div>
              <div className="rounded-2xl border border-stroke-soft-200 bg-white p-6 shadow-regular-xs">
                <p className="text-sm font-semibold text-zinc-400">{step.price}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-strong-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-sub-600">{step.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="bg-white px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl rounded-3xl border border-stroke-soft-200 bg-primary-base p-8 text-white shadow-fancy-buttons-neutral sm:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Garantie de méthode</p>
      <h2 className="mt-5 max-w-4xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
        Le standard de qualité est défini avant la livraison.
      </h2>
      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-300">
        Nous fixons ensemble le niveau attendu : structure, ton, données obligatoires, règles de
        validation, points de contrôle. Si la première version ne respecte pas ce standard, nous
        itérons jusqu'à validation.
      </p>
    </div>
  </section>
);

const FounderSection = () => (
  <section className="px-5 py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-stroke-soft-200 bg-white shadow-regular-xs">
        <UserRound className="h-16 w-16 text-zinc-300" strokeWidth={1.4} />
      </div>
      <SectionIntro title="Construit par un profil finance, pas par une agence IA généraliste.">
        <p>
          Finoptic est fondé par Ousmane Thienta, profil finance passé par des environnements de
          dette privée, direct lending, M&A et analyse financière.
        </p>
        <p className="mt-4">
          L'objectif : appliquer l'IA à des livrables exigeants, avec une logique de contrôle, de
          source et de validation humaine.
        </p>
      </SectionIntro>
    </div>
  </section>
);

const faqs = [
  {
    q: 'On utilise déjà ChatGPT. Pourquoi Finoptic ?',
    a: 'ChatGPT est un outil. Finoptic installe un processus : sources, schéma de données, templates, prompts, contrôle qualité, SOP et validation humaine.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: "L'Audit Flash peut se faire sans données confidentielles. Le Diagnostic se fait après NDA. Selon le cas, un traitement local ou souverain peut être étudié. Aucune donnée ne doit être utilisée pour entraîner des modèles.",
  },
  {
    q: 'Est-ce que les documents sortent automatiquement ?',
    a: 'Non. Le système produit une première version. La validation finale reste humaine.',
  },
  {
    q: 'Combien de temps prend une mission ?',
    a: "Audit Flash : 72h. Diagnostic : 1 semaine. Sprint d'implémentation : 3 à 4 semaines.",
  },
  {
    q: 'Et après le sprint ?',
    a: 'Finoptic peut opérer un Desk mensuel : maintenance, nouveaux formats, nouveaux templates, contrôle qualité et évolutions.',
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stroke-soft-200 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-text-strong-950">{q}</span>
        <ChevronDown className={cx('h-5 w-5 flex-none text-zinc-400 transition-transform', isOpen && 'rotate-180 text-text-strong-950')} />
      </button>
      <div className={cx('overflow-hidden transition-all duration-300', isOpen ? 'max-h-56 pb-6 opacity-100' : 'max-h-0 opacity-0')}>
        <p className="text-base leading-relaxed text-text-sub-600">{a}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="border-y border-stroke-soft-200 bg-white px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-4xl">
      <SectionIntro align="center" title="Questions fréquentes" />
      <div className="mt-10 rounded-3xl border border-stroke-soft-200 bg-white px-6 shadow-regular-xs sm:px-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="px-5 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl rounded-3xl border border-stroke-soft-200 bg-white p-8 text-center shadow-regular-xs sm:p-12">
      <h2 className="mx-auto max-w-3xl font-serif text-4xl font-normal leading-tight text-text-strong-950 sm:text-5xl">
        Commencez par un workflow.
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-text-sub-600">
        Envoyez-nous le type de document qui vous prend le plus de temps à produire. Nous vous dirons,
        sous 72h, ce qui peut être structuré, ce qui doit rester humain, et à quoi pourrait ressembler
        un livrable Finoptic.
      </p>
      <div className="mt-8">
        <PrimaryCTA className="w-full sm:w-auto">Demander un Audit Flash — offert</PrimaryCTA>
      </div>
    </div>
  </section>
);

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
  <label className={cx('flex flex-col gap-2 text-sm font-medium text-text-strong-950', className)}>
    {label}
    <input
      required={required}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
    />
  </label>
);

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
    <section id="audit-flash" className="scroll-mt-24 bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro eyebrow="Audit Flash" title="Décrivez votre principal goulot documentaire.">
            <p>
              Le formulaire reste volontairement court. L'objectif est d'identifier un workflow
              prioritaire, pas de cartographier tout votre back-office au premier échange.
            </p>
          </SectionIntro>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/exemple-anonymise-placeholder.txt"
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stroke-soft-200 bg-white px-5 text-sm font-medium text-text-strong-950 shadow-regular-xs transition hover:bg-zinc-50"
            >
              <Download className="h-4 w-4" />
              Voir un exemple anonymisé
            </a>
            <a
              href="/audit-flash-sample.pdf"
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stroke-soft-200 bg-white px-5 text-sm font-medium text-text-strong-950 shadow-regular-xs transition hover:bg-zinc-50"
            >
              <Download className="h-4 w-4" />
              Voir un Audit Flash sample
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-stroke-soft-200 bg-bg-weak-50 p-5 shadow-regular-xs sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom" value={formData.name} onChange={(value) => updateField('name', value)} required />
            <Field label="Cabinet" value={formData.firm} onChange={(value) => updateField('firm', value)} required />
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950">
              Type de structure
              <select
                value={formData.structureType}
                onChange={(event) => updateField('structureType', event.target.value)}
                className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              >
                <option>CGP</option>
                <option>Family office</option>
                <option>DAF externalisé</option>
                <option>Société de gestion</option>
                <option>Autre</option>
              </select>
            </label>
            <Field label="Email professionnel" type="email" value={formData.email} onChange={(value) => updateField('email', value)} required />
            <Field label="Site ou LinkedIn" value={formData.link} onChange={(value) => updateField('link', value)} className="sm:col-span-2" />
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950 sm:col-span-2">
              Principal goulot documentaire
              <textarea
                required
                rows={4}
                value={formData.bottleneck}
                onChange={(event) => updateField('bottleneck', event.target.value)}
                className="resize-none rounded-xl border border-stroke-soft-200 bg-white px-4 py-3 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-primary-base px-6 text-sm font-medium text-white shadow-fancy-buttons-neutral transition hover:bg-zinc-800"
          >
            Demander un Audit Flash — offert
            <ArrowRight className="h-4 w-4" />
          </button>
          {submitted && (
            <p className="mt-4 text-center text-sm font-medium text-text-sub-600">
              Demande enregistrée côté front. Envoi à brancher.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-stroke-soft-200 px-5 py-10">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-semibold text-text-strong-950">Finoptic</p>
      <p>© {new Date().getFullYear()} Finoptic. Tous droits réservés.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-weak-50 font-sans text-text-strong-950 selection:bg-primary-base selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <DocumentEngineSection />
        <ExampleProofSection />
        <UseCasesSection />
        <FitSection />
        <ProcessOfferSection />
        <GuaranteeSection />
        <FounderSection />
        <FAQSection />
        <FinalCTASection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
}
