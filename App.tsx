import React, { useState } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Lock, 
  Server, 
  History, 
  FileCheck, 
  Search, 
  Database,
  Menu,
  X
} from 'lucide-react';

// --- Navbar Component ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-6 left-0 z-[50] px-4 sm:px-5">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-2">
          <div className="mx-auto flex w-full items-center justify-between">
            <div className="flex w-full flex-1 items-center justify-between rounded-full border border-stroke-soft-200 bg-white/80 p-2 backdrop-blur-md shadow-sm">
              <div className="pl-4">
                <a href="#" className="flex w-fit items-center gap-2 text-lg font-bold tracking-tight text-text-strong-950">
                  Finoptic
                </a>
              </div>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex flex-1 items-center justify-center gap-1">
                <nav>
                  <ul className="flex items-center gap-1">
                    <li><a href="#solutions" className="flex h-10 items-center px-3.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">Solutions</a></li>
                    <li><a href="#use-cases" className="flex h-10 items-center px-3.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">Cas d'usage</a></li>
                    <li><a href="#process" className="flex h-10 items-center px-3.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">Process</a></li>
                    <li><a href="#security" className="flex h-10 items-center px-3.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">Sécurité</a></li>
                    <li><a href="#faq" className="flex h-10 items-center px-3.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">FAQ</a></li>
                  </ul>
                </nav>
              </div>

              {/* CTA & Mobile Menu Toggle */}
              <div className="flex items-center pr-1 gap-2">
                <a href="#contact" className="hidden sm:inline-flex group relative items-center justify-center whitespace-nowrap text-sm font-medium outline-none transition duration-200 ease-out bg-zinc-900 text-white shadow-fancy-buttons-neutral gap-2 rounded-full px-4 h-10 hover:bg-zinc-800">
                  Réserver un audit
                </a>
                <button 
                  onClick={toggleMenu}
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 text-zinc-900"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[5.5rem] z-[40] flex flex-col justify-center px-4 sm:px-5 md:hidden">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-stroke-soft-200 bg-white/95 p-6 shadow-lg backdrop-blur-md">
            <ul className="flex flex-col gap-4 text-lg font-medium text-zinc-600">
              <li><a href="#solutions" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-zinc-900">Solutions</a></li>
              <li><a href="#use-cases" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-zinc-900">Cas d'usage</a></li>
              <li><a href="#process" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-zinc-900">Process</a></li>
              <li><a href="#security" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-zinc-900">Sécurité</a></li>
              <li><a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-zinc-900">FAQ</a></li>
              <li className="pt-4 border-t border-zinc-100">
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex w-full items-center justify-center rounded-full bg-zinc-900 py-3 text-white">
                  Réserver un audit
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hero Component ---

const Hero = () => {
  return (
    <div className="mx-auto w-full flex-1 px-5">
      <div className="mt-16 flex flex-col items-center gap-6 sm:mt-32 text-center">
        <h1 className="max-w-4xl text-pretty font-sans text-4xl font-medium text-zinc-900 sm:text-6xl md:text-7xl leading-[1.1]">
          Automatisez vos opérations Private Markets. <span className="font-serif italic gradient-text pr-1">Simplement.</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-zinc-600 leading-relaxed">
          Finoptic conçoit et déploie des automatisations IA sur-mesure pour LP, CGP et GPs : lecture de documents, extraction de données, mises à jour d’outils, contrôles et alertes.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <ul className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-600 font-medium">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Moins de ressaisie, moins d'erreurs</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Dossiers traités plus vite</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Données hébergées en Europe (RGPD)</li>
          </ul>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="w-full sm:w-auto group relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition duration-200 ease-out bg-zinc-900 text-white shadow-fancy-buttons-neutral gap-3 rounded-full px-6 h-12 hover:bg-zinc-800 hover:shadow-lg">
            Réserver un audit (20 min)
          </a>
          <a href="#use-cases" className="w-full sm:w-auto group relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition duration-200 ease-out border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 gap-3 rounded-full px-6 h-12">
            Voir des exemples d'automatisations
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Trust Strip Component ---

const TrustStrip = () => {
  return (
    <section className="mt-24 border-y border-zinc-100 bg-white py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600 font-medium mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">
            <ShieldCheck className="w-4 h-4 text-zinc-800" /> Compatible NDA
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">
            <Server className="w-4 h-4 text-zinc-800" /> Données en Europe
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">
            <History className="w-4 h-4 text-zinc-800" /> Traçabilité
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-zinc-400 mb-6 font-semibold">Intégrations natives</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="text-base md:text-lg font-semibold flex items-center gap-2"><img src="https://cdn.simpleicons.org/microsoft/5e5e5e" className="w-5 h-5" alt=""/> Microsoft 365</span>
             <span className="text-base md:text-lg font-semibold flex items-center gap-2"><img src="https://cdn.simpleicons.org/google/5e5e5e" className="w-5 h-5" alt=""/> Google Workspace</span>
             <span className="text-base md:text-lg font-semibold flex items-center gap-2"><img src="https://cdn.simpleicons.org/salesforce/5e5e5e" className="w-6 h-6" alt=""/> CRM</span>
             <span className="text-base md:text-lg font-semibold flex items-center gap-2"><Database className="w-5 h-5" /> Datarooms</span>
             <span className="text-base md:text-lg font-semibold flex items-center gap-2"><Server className="w-5 h-5" /> SFTP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Solutions Component ---

const SolutionCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col gap-6 rounded-3xl border border-stroke-soft-200 bg-bg-weak-50 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-stroke-soft-200 bg-white flex items-center justify-center group">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 opacity-50 group-hover:opacity-80 transition-opacity"></div>
      <Icon className="w-16 h-16 text-zinc-800/10 group-hover:text-zinc-800/20 transition-colors duration-500 absolute top-4 right-4 rotate-12" strokeWidth={1} />
      <Icon className="w-12 h-12 text-zinc-900 relative z-10" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col gap-2 px-4 pb-6">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Solutions = () => {
  return (
    <section id="solutions" className="mt-32 scroll-mt-24 px-5">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex w-full max-w-3xl flex-col gap-4 sm:pl-2">
          <h2 className="text-3xl font-medium sm:text-4xl text-zinc-900">Nos Solutions</h2>
          <p className="text-lg text-zinc-600">
            Trois piliers pour structurer et accélérer vos opérations.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <SolutionCard 
            icon={FileText}
            title="Automatisations documentaires"
            desc="IM, mémos, reportings : extraction intelligente, synthèse et export vers vos formats."
          />
          <SolutionCard 
            icon={Layers}
            title="Automatisations opérations"
            desc="Appels de fonds, distributions, KYC : pré-saisie, contrôles de cohérence et consolidation."
          />
          <SolutionCard 
            icon={BarChart3}
            title="Automatisations pilotage"
            desc="Alertes, rapprochements bancaires, mises à jour CRM et tableaux de suivi automatisés."
          />
        </div>
      </div>
    </section>
  );
};

// --- Use Cases Component ---

const UseCaseItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="group rounded-3xl border border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
    <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
      <ArrowRight className="w-5 h-5" />
    </div>
    <h3 className="mb-2 font-medium text-zinc-900">{title}</h3>
    <p className="text-sm text-zinc-500">{desc}</p>
  </div>
);

const UseCases = () => {
  return (
    <section id="use-cases" className="mt-32 scroll-mt-24 rounded-3xl bg-zinc-50 py-24 mx-5 border border-zinc-100">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-balance font-medium text-zinc-900 text-3xl sm:text-4xl">
            Cas d'usage <span className="font-serif italic gradient-text">Private Markets</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Des solutions concrètes pour LP, CGP et GPs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UseCaseItem title="Lecture d'IM" desc="Résumé automatique et extraction des points clés (thèse, équipe, track record)." />
          <UseCaseItem title="Amendements NDA" desc="Comparaison de versions, checklist de risques et version commentée." />
          <UseCaseItem title="Appels de fonds" desc="Extraction des montants, pré-saisie des virements et contrôles." />
          <UseCaseItem title="Reporting / NAV" desc="Extraction des KPIs, consolidation multi-fonds et exports Excel/PDF." />
          <UseCaseItem title="KYC / Packs" desc="Vérification de complétude, relances automatiques et assemblage." />
          <UseCaseItem title="Monitoring" desc="Suivi de portefeuille, alertes actualités et gestion des deadlines." />
        </div>
      </div>
    </section>
  );
};

// --- Process Component ---

const Process = () => {
  return (
    <section id="process" className="py-32 px-5 scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-x-6 gap-y-12 xl:flex-row">
        <div className="h-full max-w-3xl xl:sticky xl:top-32">
          <div className="space-y-4">
            <h2 className="text-balance font-medium text-zinc-900 text-3xl sm:text-4xl">
              Notre process de <span className="font-serif italic gradient-text">déploiement</span>
            </h2>
            <p className="text-lg text-zinc-600">
              Une méthode éprouvée pour des résultats rapides et fiables.
            </p>
            <a href="#contact" className="inline-block mt-6 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-700">
              Démarrer maintenant
            </a>
          </div>
        </div>
        <div className="relative pl-6 xl:max-w-md mt-4 xl:mt-0">
          {/* Vertical line */}
          <div className="absolute top-2 bottom-0 left-[11px] w-px bg-zinc-200"></div>
          
          <div className="relative mb-16 last:mb-0">
            <span className="absolute -left-[29px] top-1 flex size-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 ring-4 ring-[#FBFBFB]">1</span>
            <h3 className="mb-2 text-lg font-medium text-zinc-900">Audit (20–30 min)</h3>
            <p className="text-sm text-zinc-600">On identifie ensemble 1 à 2 automatisations à ROI immédiat pour votre équipe.</p>
          </div>

          <div className="relative mb-16 last:mb-0">
            <span className="absolute -left-[29px] top-1 flex size-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 ring-4 ring-[#FBFBFB]">2</span>
            <h3 className="mb-2 text-lg font-medium text-zinc-900">Prototype (7–10 jours)</h3>
            <p className="text-sm text-zinc-600">Nous construisons un workflow testable directement sur vos données réelles.</p>
          </div>

          <div className="relative mb-0 last:mb-0">
            <span className="absolute -left-[29px] top-1 flex size-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 ring-4 ring-[#FBFBFB]">3</span>
            <h3 className="mb-2 text-lg font-medium text-zinc-900">Déploiement & Suivi</h3>
            <p className="text-sm text-zinc-600">Passage en production, documentation complète et maintenance continue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Security Component ---

const Security = () => {
  return (
    <section id="security" className="mt-10 mx-5 rounded-3xl bg-zinc-900 py-20 px-6 sm:px-10 scroll-mt-24 shadow-xl overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto w-full max-w-5xl text-white relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">Sécurité et Confidentialité</h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Vos données sont sensibles. Notre infrastructure est conçue pour garantir leur intégrité et leur confidentialité à chaque étape.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <Server className="text-zinc-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Données hébergées en Europe</h4>
                  <p className="text-sm text-zinc-500">Conformité RGPD totale ou déploiement sur votre infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <Lock className="text-zinc-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Accès strictement nécessaires</h4>
                  <p className="text-sm text-zinc-500">Durée limitée et moindres privilèges pour chaque automatisation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <History className="text-zinc-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Traçabilité des exécutions</h4>
                  <p className="text-sm text-zinc-500">Logs complets et auditables de toutes les actions effectuées.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <ShieldCheck className="text-zinc-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">NDA possible</h4>
                  <p className="text-sm text-zinc-500">Engagement de confidentialité signé dès le premier échange.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
             <div className="aspect-square w-64 h-64 rounded-full border border-zinc-700 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-zinc-800 rounded-full scale-150 opacity-30"></div>
                <div className="absolute inset-0 border border-zinc-800 rounded-full scale-75 opacity-50"></div>
                <ShieldCheck className="w-24 h-24 text-white opacity-80" strokeWidth={1} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pricing Component ---

const Pricing = () => {
  return (
    <section id="pricing" className="mt-32 px-5 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium sm:text-4xl text-zinc-900">Offre simple et transparente</h2>
          <p className="mt-4 text-lg text-zinc-600">Commencez sans risque, scalez selon vos besoins.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col hover:border-zinc-300 transition-colors">
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600 w-fit">Découverte</div>
            <h3 className="text-2xl font-medium mb-2 text-zinc-900">Audit</h3>
            <div className="text-4xl font-bold mb-6 text-zinc-900">Gratuit</div>
            <p className="text-sm text-zinc-600 mb-8 flex-1">
              Identification des leviers de productivité et faisabilité technique.
            </p>
            <ul className="space-y-4 mb-8 text-sm text-zinc-600">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> 20 min d'échange</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> Analyse des workflows</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> Rapport d'opportunités</li>
            </ul>
            <a href="#contact" className="w-full block text-center rounded-full border border-zinc-200 bg-white py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">Réserver</a>
          </div>

          {/* Card 2 (Featured) */}
          <div className="rounded-3xl border border-zinc-900 bg-zinc-900 text-white p-8 flex flex-col relative overflow-hidden shadow-2xl transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-semibold text-white w-fit border border-zinc-700">Engagement limité</div>
            <h3 className="text-2xl font-medium mb-2">Prototype</h3>
            <div className="text-4xl font-bold mb-6">Forfait</div>
            <p className="text-sm text-zinc-300 mb-8 flex-1">
              Un workflow testable sur vos données en 7 à 10 jours.
            </p>
            <ul className="space-y-4 mb-8 text-sm text-zinc-300">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0"/> Développement agile</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0"/> Tests sur données réelles</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white flex-shrink-0"/> Ajustements itératifs</li>
            </ul>
            <a href="#contact" className="w-full block text-center rounded-full bg-white text-zinc-900 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">Demander un devis</a>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col hover:border-zinc-300 transition-colors">
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600 w-fit">Production</div>
            <h3 className="text-2xl font-medium mb-2 text-zinc-900">Déploiement</h3>
            <div className="text-4xl font-bold mb-6 text-zinc-900">Sur-mesure</div>
            <p className="text-sm text-zinc-600 mb-8 flex-1">
              Industrialisation, documentation et maintenance.
            </p>
            <ul className="space-y-4 mb-8 text-sm text-zinc-600">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> Setup complet</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> Formation équipe</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-400 flex-shrink-0"/> Maintenance & Support</li>
            </ul>
            <a href="#contact" className="w-full block text-center rounded-full border border-zinc-200 bg-white py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">Nous contacter</a>
          </div>
        </div>

        <div className="mt-12 text-center bg-zinc-100/50 rounded-xl p-4 border border-zinc-100">
          <p className="text-sm text-zinc-600 font-medium">
            "Si aucune automatisation pertinente n’est identifiée après l’audit, on vous le dit et on s’arrête là."
          </p>
        </div>
      </div>
    </section>
  );
};

// --- FAQ Component ---

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left hover:bg-zinc-50/50 transition-colors group"
      >
        <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-900'}`}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-zinc-900' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-base text-zinc-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Comment se déroule l’audit ?", a: "Il s'agit d'un échange visio de 20 à 30 minutes. Vous nous expliquez vos processus actuels, nous identifions les points de friction et proposons des pistes d'automatisation immédiates." },
    { q: "À quoi ressemble un prototype ?", a: "C'est une version fonctionnelle de l'automatisation, connectée à vos outils ou fonctionnant sur un échantillon de vos données. Il permet de valider la valeur avant le déploiement total." },
    { q: "En combien de temps livrez-vous ?", a: "Un prototype est généralement livré sous 7 à 10 jours ouvrés. Un déploiement complet dépend de la complexité, mais comptez 2 à 4 semaines pour la plupart des projets." },
    { q: "Quels outils pouvez-vous connecter ?", a: "Nous nous connectons à la majorité des outils du marché : Microsoft 365, Google Workspace, CRMs (Salesforce, HubSpot, Attio...), Datarooms, SFTP, et outils métiers via API." },
    { q: "Où sont hébergées les données ?", a: "Par défaut, nous utilisons des infrastructures sécurisées en Europe conformes au RGPD. Nous pouvons également déployer les solutions sur votre propre infrastructure." },
    { q: "Peut-on déployer sur nos serveurs ?", a: "Oui, c'est une option que nous proposons pour les clients ayant des contraintes de sécurité strictes. Cela fait partie de notre offre sur-mesure." },
    { q: "Combien ça coûte ?", a: "L'audit est gratuit. Le prototype est au forfait (défini après l'audit). Le déploiement final fait l'objet d'un devis précis incluant le setup et la maintenance." },
  ];

  return (
    <section id="faq" className="mt-32 px-5 max-w-3xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium sm:text-4xl text-zinc-900">Questions fréquentes</h2>
      </div>
      <div className="flex flex-col bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
        {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
      </div>
    </section>
  );
};

// --- Final CTA Component ---

const FinalCTA = () => {
  return (
    <section id="contact" className="mt-32 mb-20 px-5 scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 text-center sm:px-16 shadow-2xl">
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl font-medium text-white sm:text-5xl tracking-tight">Prêt à simplifier vos opérations ?</h2>
          <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
            En 20 minutes, on identifie les leviers de productivité immédiats pour votre équipe.
          </p>
          <div className="flex flex-col gap-3 items-center w-full">
             <a href="mailto:contact@finoptic.com" className="group relative inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition duration-200 ease-out bg-white text-zinc-900 shadow-lg gap-3 rounded-full px-8 h-14 hover:bg-zinc-100 hover:scale-105 w-full sm:w-auto">
                Réserver un audit (20 min)
             </a>
             <p className="text-xs text-zinc-500 font-medium">Sans engagement • Réponse sous 24h</p>
          </div>
        </div>
        {/* Background gradient effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-none opacity-25 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-[120px]"></div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---

const Footer = () => {
  return (
    <footer className="bg-bg-weak-50 border-t border-zinc-200 pt-16 pb-8 px-5">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight text-zinc-900">Finoptic</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-900 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Confidentialité</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl mt-12 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Finoptic. Tous droits réservés.
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <UseCases />
        <Process />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}