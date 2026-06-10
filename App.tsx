import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeEuro,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Database,
  Download,
  FileCheck2,
  FileText,
  Lock,
  PenLine,
  ShieldCheck,
  UserRound,
  XCircle,
} from 'lucide-react';

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const auditHref = '#audit-flash';

const PrimaryCTA = ({ className = '' }: { className?: string }) => (
  <a
    href={auditHref}
    className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary-base px-6 text-sm font-medium text-white shadow-fancy-buttons-neutral transition duration-200 ease-out hover:bg-zinc-800 hover:shadow-lg ${className}`}
  >
    Demander un Audit Flash — offert, livré sous 72h
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
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
  <div className={`flex max-w-3xl flex-col gap-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{eyebrow}</p>
    )}
    <h2 className="text-balance text-3xl font-medium text-text-strong-950 sm:text-4xl">{title}</h2>
    {children && <div className="text-base leading-relaxed text-text-sub-600 sm:text-lg">{children}</div>}
  </div>
);

const Header = () => (
  <header className="sticky top-5 z-50 px-4 sm:px-5">
    <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-stroke-soft-200 bg-white/85 px-3 py-2 shadow-regular-xs backdrop-blur-md">
      <a href="#" className="pl-3 text-lg font-bold tracking-tight text-text-strong-950">
        Finoptic
      </a>
      <PrimaryCTA className="hidden h-10 px-4 sm:inline-flex" />
    </div>
  </header>
);

const Hero = () => (
  <section className="px-5 pb-20 pt-16 sm:pb-28 sm:pt-28">
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
      <p className="mb-5 font-caveat text-2xl text-zinc-500">Production documentaire senior, sans heures perdues</p>
      <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.95] text-text-strong-950 sm:text-7xl md:text-8xl">
        Vos associés passent 15 heures par semaine à produire des documents. Finoptic en récupère{' '}
        <span className="gradient-text italic">12.</span>
      </h1>
      <p className="mt-7 max-w-3xl text-base leading-relaxed text-text-sub-600 sm:text-xl">
        Systèmes de production documentaire augmentés par l'IA pour cabinets patrimoniaux,
        family offices et conseil financier : reportings non cotés, notes d'analyse, mémos,
        packs clients — au niveau de qualité que vous validez.
      </p>
      <div className="mt-9 flex w-full flex-col items-center gap-4">
        <PrimaryCTA className="w-full sm:w-auto" />
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
          Sans engagement. Vous recevez une analyse personnalisée de vos process documentaires + un
          exemple de livrable refait à notre standard.
        </p>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="border-y border-stroke-soft-200 bg-white px-5 py-20 sm:py-24">
    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionIntro title="Le non-coté est entré dans tous les portefeuilles. La charge documentaire aussi.">
        <p>Le problème n'est pas le manque d'outils. C'est le temps senior absorbé par la production.</p>
      </SectionIntro>
      <div className="space-y-5 text-lg leading-relaxed text-text-sub-600">
        <p>Chaque fonds envoie son PDF dans son format.</p>
        <p>Chaque client attend sa synthèse.</p>
        <p>
          Chaque trimestre, la même course : récupérer, comprendre, structurer, reformuler,
          contrôler, envoyer.
        </p>
        <p>Et ce sont vos heures les plus chères qui y passent.</p>
        <div className="rounded-2xl border border-stroke-soft-200 bg-bg-weak-50 p-6 shadow-regular-xs">
          <p className="text-xl font-medium leading-snug text-text-strong-950">
            ChatGPT vous fait gagner 20 minutes sur un email. Il ne tient pas un processus de
            production avec contrôle qualité.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const engineSteps: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: 'Ingestion',
    desc: 'PDF de fonds, reportings, notes, fichiers Excel et pièces clients entrent dans un flux unique.',
    icon: Database,
  },
  {
    title: 'Structuration',
    desc: 'Les données utiles sont extraites, normalisées et rapprochées avec vos standards internes.',
    icon: ClipboardCheck,
  },
  {
    title: 'Production',
    desc: "Le livrable est généré dans votre format : note d'analyse, mémo, reporting ou pack client.",
    icon: PenLine,
  },
  {
    title: 'Contrôle humain',
    desc: "Rien ne sort sans validation. Les points sensibles remontent à l'équipe avant envoi.",
    icon: ShieldCheck,
  },
];

const EngineStep = ({ step, index }: { step: (typeof engineSteps)[number]; index: number }) => {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col rounded-2xl border border-stroke-soft-200 bg-white p-6 shadow-regular-xs">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke-soft-200 bg-bg-weak-50 text-sm font-semibold text-zinc-500">
          {index + 1}
        </span>
        <Icon className="h-6 w-6 text-zinc-400" strokeWidth={1.7} />
      </div>
      <h3 className="text-lg font-semibold text-text-strong-950">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-sub-600">{step.desc}</p>
    </div>
  );
};

const DocumentEngineSection = () => (
  <section className="px-5 py-24 sm:py-32">
    <div className="mx-auto max-w-5xl">
      <SectionIntro eyebrow="Mécanisme" title="Le Document Engine Finoptic">
        <p>
          Un système complet, branché sur vos sources, vos templates et votre standard de validation.
        </p>
      </SectionIntro>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {engineSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <EngineStep step={step} index={index} />
            {index < engineSteps.length - 1 && (
              <div className="absolute left-full top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke-soft-200 bg-white text-zinc-400 shadow-regular-xs">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DocumentMockup = ({
  type,
  title,
  label,
}: {
  type: 'raw' | 'final';
  title: string;
  label: string;
}) => (
  <div className="rounded-2xl border border-stroke-soft-200 bg-white p-4 shadow-regular-xs">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">{label}</span>
      <FileText className="h-5 w-5 text-zinc-400" />
    </div>
    <div className="min-h-[340px] rounded-xl border border-zinc-200 bg-bg-weak-50 p-5">
      <div className="mb-6 h-8 w-36 rounded bg-zinc-200" />
      <h3 className="text-xl font-semibold leading-tight text-text-strong-950">{title}</h3>
      <div className="mt-6 space-y-3">
        <div className="h-3 w-full rounded bg-zinc-200" />
        <div className="h-3 w-11/12 rounded bg-zinc-200" />
        <div className="h-3 w-8/12 rounded bg-zinc-200" />
      </div>
      {type === 'raw' ? (
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="h-20 rounded-lg border border-zinc-200 bg-white" />
          <div className="h-20 rounded-lg border border-zinc-200 bg-white" />
          <div className="col-span-2 h-24 rounded-lg border border-zinc-200 bg-white" />
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <div className="mb-3 h-3 w-24 rounded bg-zinc-900" />
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded bg-zinc-200" />
              <div className="h-2.5 w-9/12 rounded bg-zinc-200" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg border border-zinc-200 bg-white" />
            <div className="h-16 rounded-lg border border-zinc-200 bg-white" />
            <div className="h-16 rounded-lg border border-zinc-200 bg-white" />
          </div>
          <div className="rounded-lg bg-zinc-900 p-4 text-sm font-medium text-white">
            Points de vigilance validés
          </div>
        </div>
      )}
    </div>
  </div>
);

const ExampleProofSection = () => (
  <section className="bg-white px-5 py-24 sm:py-32">
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionIntro title="Voir un livrable plutôt qu'une promesse.">
          <p>
            Le sujet n'est pas de produire plus de texte. C'est de produire le bon document, dans le
            bon format, avec les bons contrôles.
          </p>
        </SectionIntro>
        <a
          href="/exemple-anonymise-placeholder.txt"
          download
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stroke-soft-200 bg-white px-5 text-sm font-medium text-text-strong-950 shadow-regular-xs transition-colors hover:bg-zinc-50"
        >
          <Download className="h-4 w-4" />
          Télécharger un exemple anonymisé
        </a>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <DocumentMockup type="raw" label="Avant" title="PDF de fonds brut" />
        <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-stroke-soft-200 bg-bg-weak-50 text-zinc-500 lg:flex">
          <ArrowRight className="h-5 w-5" />
        </div>
        <DocumentMockup type="final" label="Après" title="Note client finale générée" />
      </div>
    </div>
  </section>
);

const fitItems = [
  'Cabinet de 3 à 30 personnes.',
  'Poche non cotée ou production documentaire dense.',
  'Le dirigeant décide.',
  'Vous voulez récupérer du temps senior, pas un logiciel de plus.',
];

const notFitItems = [
  "Grande structure avec DSI et appels d'offres.",
  'Vous cherchez de la prospection ou des leads.',
  'Vous débutez sans process existant.',
];

const FitList = ({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: 'yes' | 'no';
}) => {
  const Icon = variant === 'yes' ? CheckCircle2 : XCircle;

  return (
    <div className="rounded-2xl border border-stroke-soft-200 bg-white p-7 shadow-regular-xs">
      <h3 className="text-xl font-semibold text-text-strong-950">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-sub-600">
            <Icon className="mt-0.5 h-5 w-5 flex-none text-zinc-900" strokeWidth={1.8} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FitSection = () => (
  <section className="px-5 py-24 sm:py-32">
    <div className="mx-auto max-w-5xl">
      <SectionIntro align="center" title="Pour les cabinets qui ont déjà une exigence de production.">
        <p>Finoptic intervient quand le standard existe déjà, mais que le temps manque.</p>
      </SectionIntro>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <FitList title="C'est pour vous si" items={fitItems} variant="yes" />
        <FitList title="Ce n'est pas pour vous si" items={notFitItems} variant="no" />
      </div>
    </div>
  </section>
);

const processSteps: Array<{
  title: string;
  price: string;
  duration: string;
  desc: string;
  icon: IconComponent;
}> = [
  {
    title: 'Audit Flash',
    price: 'Offert',
    duration: '72h',
    desc: 'Analyse personnalisée de vos process documentaires et exemple de livrable refait à notre standard.',
    icon: Clock3,
  },
  {
    title: 'Diagnostic Finoptic',
    price: '2 500€',
    duration: '1 semaine',
    desc: "Cartographie chiffrée, 3 cas d'usage priorisés et roadmap opérationnelle.",
    icon: BadgeEuro,
  },
  {
    title: "Sprint d'implémentation",
    price: 'Sur devis',
    duration: '3-4 semaines',
    desc: 'Un système complet livré avec SOP, formation et garantie de moyens. Le prix se discute en call.',
    icon: FileCheck2,
  },
];

const ProcessPricingSection = () => (
  <section className="border-y border-stroke-soft-200 bg-white px-5 py-24 sm:py-32">
    <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <SectionIntro eyebrow="Entrée en mission" title="On chiffre d'abord le temps récupérable. Ensuite seulement, on implémente.">
        <p>
          L'objectif est simple : identifier les livrables où l'effet est visible, mesurable et
          validable par vos équipes.
        </p>
      </SectionIntro>
      <div className="relative pl-7">
        <div className="absolute bottom-8 left-[19px] top-3 w-px bg-stroke-soft-200" />
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative pb-12 last:pb-0">
              <div className="absolute -left-7 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-stroke-soft-200 bg-white shadow-regular-xs">
                <Icon className="h-5 w-5 text-zinc-600" strokeWidth={1.7} />
              </div>
              <div className="rounded-2xl border border-stroke-soft-200 bg-bg-weak-50 p-6 shadow-regular-xs">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-zinc-400">Étape {index + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold text-text-strong-950">{step.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-stroke-soft-200 bg-white px-3 py-1 text-sm font-semibold text-text-strong-950">
                      {step.price}
                    </span>
                    <span className="rounded-full border border-stroke-soft-200 bg-white px-3 py-1 text-sm font-medium text-text-sub-600">
                      {step.duration}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-sub-600">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="px-5 py-24">
    <div className="mx-auto max-w-5xl rounded-3xl bg-primary-base p-8 text-white shadow-fancy-buttons-neutral sm:p-12">
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
          <ShieldCheck className="h-6 w-6" strokeWidth={1.7} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Garantie de niveau</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">
            Nous fixons ensemble le standard de qualité au départ.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Si le système ne l'atteint pas, nous itérons gratuitement jusqu'à validation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FounderSection = () => (
  <section className="bg-white px-5 py-24 sm:py-32">
    <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div className="mx-auto flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-3xl border border-stroke-soft-200 bg-bg-weak-50 shadow-regular-xs">
        <UserRound className="h-16 w-16 text-zinc-300" strokeWidth={1.4} />
      </div>
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Fondateur</p>
        <h2 className="text-3xl font-medium text-text-strong-950 sm:text-4xl">
          Des livrables au standard de la banque d'affaires.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-sub-600">
          Finoptic est fondé par Ousmane Thienta, issu du financement et de l'investissement en
          private markets (direct lending, dette privée, M&A). Des livrables au standard de la banque
          d'affaires, produits avec l'IA et validés par l'humain.
        </p>
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
    a: "Un outil n'est pas un système. Finoptic installe un processus complet : sources, templates, règles de contrôle, validation humaine et suivi du niveau de qualité.",
  },
  {
    q: 'Combien de temps ?',
    a: "L'Audit Flash est livré sous 72h. Le Diagnostic Finoptic prend 1 semaine. Un sprint d'implémentation dure généralement 3 à 4 semaines.",
  },
  {
    q: 'Et après le sprint ?',
    a: 'Une option Desk mensuel peut couvrir la maintenance, les évolutions et les nouveaux templates. Le nombre de places est limité.',
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stroke-soft-200 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium text-text-strong-950">{q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-zinc-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-zinc-900' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base leading-relaxed text-text-sub-600">{a}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="px-5 py-24 sm:py-32">
    <div className="mx-auto max-w-3xl">
      <SectionIntro align="center" title="Questions fréquentes" />
      <div className="mt-10 rounded-3xl border border-stroke-soft-200 bg-white px-6 shadow-regular-xs sm:px-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="px-5 py-20">
    <div className="mx-auto max-w-5xl rounded-3xl border border-stroke-soft-200 bg-white p-8 text-center shadow-regular-xs sm:p-12">
      <p className="font-caveat text-2xl text-zinc-500">Deux places de pilote ouvertes ce trimestre.</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-medium text-text-strong-950 sm:text-5xl">
        Faites auditer votre production documentaire avant le prochain trimestre.
      </h2>
      <div className="mt-8">
        <PrimaryCTA className="w-full sm:w-auto" />
      </div>
    </div>
  </section>
);

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
    <section id="audit-flash" className="scroll-mt-24 bg-white px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro eyebrow="Audit Flash" title="Demander une analyse de vos process documentaires.">
            <p>
              Décrivez votre goulot documentaire. Nous revenons avec une lecture claire de ce qui peut
              être standardisé, accéléré et contrôlé.
            </p>
          </SectionIntro>
          <div className="mt-8 space-y-4 text-sm text-text-sub-600">
            <div className="flex gap-3">
              <Lock className="mt-0.5 h-5 w-5 flex-none text-zinc-900" strokeWidth={1.7} />
              <p>Sans engagement. NDA possible avant partage de documents sensibles.</p>
            </div>
            <div className="flex gap-3">
              <Building2 className="mt-0.5 h-5 w-5 flex-none text-zinc-900" strokeWidth={1.7} />
              <p>Réservé aux cabinets patrimoniaux, family offices, DAF externalisés et sociétés de gestion.</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-stroke-soft-200 bg-bg-weak-50 p-5 shadow-regular-xs sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950">
              Nom
              <input
                required
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950">
              Cabinet
              <input
                required
                value={formData.firm}
                onChange={(event) => updateField('firm', event.target.value)}
                className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              />
            </label>
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
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950">
              Email pro
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950 sm:col-span-2">
              Lien site ou LinkedIn
              <input
                value={formData.link}
                onChange={(event) => updateField('link', event.target.value)}
                className="h-11 rounded-xl border border-stroke-soft-200 bg-white px-4 text-sm font-normal text-text-strong-950 outline-none transition focus:border-zinc-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-text-strong-950 sm:col-span-2">
              Votre principal goulot documentaire
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
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary-base px-6 text-sm font-medium text-white shadow-fancy-buttons-neutral transition duration-200 ease-out hover:bg-zinc-800"
          >
            Envoyer la demande d'Audit Flash
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
    <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
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
        <FitSection />
        <ProcessPricingSection />
        <GuaranteeSection />
        <FounderSection />
        <FAQSection />
        <FinalCTA />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
}
