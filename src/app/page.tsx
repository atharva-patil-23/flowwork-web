"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { StatCards } from "@/components/stat-cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full px-4 overflow-hidden pt-20">
        <div className="relative z-20 flex flex-col items-center mt-12 lg:mt-0 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/5 text-black/60 text-[13px] font-bold tracking-wide uppercase shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.03)] border border-black/5 backdrop-blur-md mb-8 pointer-events-auto">
            Move goods faster. Let AI handle the paperwork.
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-[40px] md:text-[60px] lg:text-[76px] font-extrabold text-[#1a1a1a] leading-[1.1] tracking-[-0.04em] mb-6 max-w-[800px] pointer-events-auto">
            Trade Automation that<br />Delivers Measurable{" "}
            <span className="text-[#8bc34a] [text-shadow:0_4px_24px_rgba(139,195,74,0.3)]">
              ROI
            </span>
          </h1>

          <p className="text-[18px] md:text-[22px] text-[#4a4a4a] leading-[1.5] max-w-[650px] mb-10 font-medium tracking-tight pointer-events-auto">
            We help importers, distributors, and export trading companies automate their operations with AI — from compliance to lead generation.
          </p>

          <Link
            href="#cta"
            className="inline-flex items-center justify-center bg-[#c8f74a] text-black px-8 py-4 rounded-full text-[16px] font-bold shadow-[0_4px_16px_rgba(200,247,74,0.3)] hover:bg-[#bceb42] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,247,74,0.5)] transition-all duration-300 pointer-events-auto"
          >
            Start Your AI Transformation →
          </Link>
        </div>

        <StatCards />
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="w-full py-24 md:py-32 px-4 md:px-[5%] flex flex-col items-center">
        <div className="w-full max-w-[1100px]">
          <p className="text-[#8bc34a] text-[13px] font-bold tracking-widest uppercase mb-4 text-center">Our Services</p>
          <h2 className="text-[32px] md:text-[52px] font-extrabold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-16 text-center">
            Your Trusted Partner<br />for Trade Automation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Service 1 */}
            <div className="bg-[#e8e4dc] border border-[#d8d3c8] rounded-[24px] p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#c8c3b8]">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-[#1a1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight">Document Automation</h3>
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed">Auto-generate invoices, packing lists, certificates of origin, and HS code classifications in seconds.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#e8e4dc] border border-[#d8d3c8] rounded-[24px] p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#c8c3b8]">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-[#1a1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight">Workflow Automation</h3>
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed">Connect your ERP, freight tools, and CRM into one seamless automated operation.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#e8e4dc] border border-[#d8d3c8] rounded-[24px] p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#c8c3b8]">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-[#1a1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight">AI Lead Generation</h3>
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed">AI agents find, qualify, and follow up with importers and distributors across your target markets.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-[#e8e4dc] border border-[#d8d3c8] rounded-[24px] p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#c8c3b8]">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-[#1a1a1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight">Custom AI Agents</h3>
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed">Bespoke AI systems trained on your trade lanes, products, and compliance rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEM / MARQUEE ═══════════ */}
      <section id="problem" className="w-full py-24 md:py-32 flex flex-col items-center overflow-hidden">
        <div className="text-center px-4 md:px-0 mb-16">
          <p className="text-[#8bc34a] text-[13px] font-bold tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-[32px] md:text-[52px] font-extrabold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4">
            Hidden Barriers of<br />Trade Efficiency
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#4a4a4a] leading-[1.5] max-w-[600px] mx-auto font-medium tracking-tight">
            Running import/export operations comes with endless friction around compliance, documentation, and lead generation.
          </p>
        </div>

        {/* Marquee Tracks */}
        <div className="w-full flex flex-col gap-5 overflow-hidden pointer-events-none fade-edges py-2">
          {/* Row 1 */}
          <div className="flex w-max min-w-max shrink-0 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={`r1-${i}`} className="flex shrink-0 gap-5 pr-5">
                {[
                  "Are our HS codes classified correctly?",
                  "Which trade lanes have the highest duty risk?",
                  "How do we handle multi-country compliance?",
                  "Are our documents error-free before submission?",
                  "Can AI handle our freight documentation?",
                  "What happens if customs audits our recent shipments?",
                  "Are we claiming all applicable free trade agreements?",
                  "How do we track constantly changing tariff rates?",
                ].map((text, j) => <MarqueePill key={j} text={text} />)}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max min-w-max shrink-0 animate-marqueeReverse whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={`r2-${i}`} className="flex shrink-0 gap-5 pr-5">
                {[
                  "How do we find more distributors in new markets?",
                  "What's the ROI of automating our CRM?",
                  "How is data security managed across systems?",
                  "Where do we start with AI in trade operations?",
                  "Can we integrate with CargoWise or Flexport?",
                  "Are our sales leads highly qualified?",
                  "How do we predict our supply chain bottlenecks?",
                  "Is our competitor analyzing trade data faster than us?",
                ].map((text, j) => <MarqueePill key={j} text={text} />)}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex w-max min-w-max shrink-0 animate-marqueeSlow whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={`r3-${i}`} className="flex shrink-0 gap-5 pr-5">
                {[
                  "How do we reduce customs penalties?",
                  "Can AI replace our data entry team?",
                  "How quickly can we go live?",
                  "What does trade automation actually cost?",
                  "Is our IT stack ready for integration?",
                  "How do we scale operations without adding headcount?",
                  "What's the turnaround time for a certificate of origin?",
                  "Can we automate our email follow-ups with suppliers?",
                ].map((text, j) => <MarqueePill key={j} text={text} />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" className="w-full py-24 md:py-32 px-4 md:px-[5%] flex flex-col items-center">
        <div className="w-full max-w-[800px]">
          <p className="text-[#8bc34a] text-[13px] font-bold tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 className="text-[32px] md:text-[52px] font-extrabold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-16 text-center">
            Questions we hear<br />every time
          </h2>

          <div className="flex flex-col gap-4">
            <FaqItem question="Will this work with our existing freight software?" answer="Yes — we integrate with CargoWise, Flexport, SAP, Oracle, and custom stacks. We map your current tools before building anything." />
            <FaqItem question="What if the AI makes a compliance error?" answer="Every output includes a human review step. Your team approves before anything is submitted. AI drafts and flags — it never acts alone." />
            <FaqItem question="How long until we go live?" answer="Most clients are live in 3–4 weeks. We start with your highest-impact workflow so you see results fast." />
            <FaqItem question="Do we need a technical team to manage it?" answer="No. We build for operations teams, not engineers. Includes 30-day post-launch support and simple dashboards." />
            <FaqItem question="We operate across multiple trade lanes — can you handle that?" answer="Yes. Multi-lane complexity is exactly where automation delivers the most value. Rule sets per lane, managed from one dashboard." />
            <FaqItem question="What does it cost?" answer="Every project is scoped to your workflows. Most clients recover the investment within 90 days. Book a free audit for a clear number upfront." />
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section id="cta" className="w-full py-16 px-4 md:px-[5%] flex justify-center mb-16">
        <div className="w-full max-w-[1100px] bg-gradient-to-br from-[#c6f452] to-[#a2cc3c] rounded-[32px] md:rounded-[40px] p-10 md:p-20 relative overflow-hidden flex flex-col justify-center items-center md:items-start text-center md:text-left [clip-path:polygon(4%_0,100%_0,100%_96%,96%_100%,0_100%,0_4%)]">
          <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.05] tracking-tight mb-5 max-w-[500px]">
            Start Your Trade Transformation<br />with a Free AI Audit!
          </h2>
          <p className="text-[17px] text-[#2a2a2a] leading-[1.4] max-w-[420px] mb-8 font-medium">
            A free assessment that uncovers automation opportunities and maps your path to operational excellence.
          </p>
          <a href="https://cal.com/lavparab/free-ai-automation-audit-with-lavparab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-[16px] font-bold shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300">
            Book a Free Audit
          </a>

          <div className="absolute -bottom-12 -right-12 md:top-1/4 md:-right-20 text-[100px] md:text-[180px] font-black text-black/5 tracking-tighter leading-none select-none pointer-events-none">
            flowwork
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="w-full bg-[#e8e4dc] px-4 md:px-[5%] pt-20 pb-8 flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between pb-16 border-b border-[#d8d3c8] gap-12">
          <div className="max-w-[340px]">
            <div className="text-[28px] font-black tracking-[-1px] text-[#1a1a1a] mb-5 flex items-center gap-1">
              fl<span className="w-3 h-3 bg-[#c8f74a] rounded-full inline-block" />wwork
            </div>
            <p className="text-[16px] text-[#555] leading-[1.5] mb-8 font-medium">
              We help importers and exporters automate operations with AI — from compliance to lead generation.
            </p>
            {/* Social Icons would go here */}
          </div>
          <div className="max-w-[400px] w-full">
            <label className="block text-[14px] font-bold text-[#1a1a1a] mb-5 uppercase tracking-wider">Contact Us</label>

            {/* LinkedIn Profiles */}
            <div className="flex flex-col gap-3 mb-5">
              <a href="https://www.linkedin.com/in/atharva-patil-n23/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#1a1a1a] hover:text-[#0a66c2] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                  <svg className="w-4 h-4 text-[#0a66c2] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
                Atharva Patil
              </a>
              <a href="https://www.linkedin.com/in/lavparab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#1a1a1a] hover:text-[#0a66c2] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                  <svg className="w-4 h-4 text-[#0a66c2] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
                Lav Parab
              </a>
              <a href="https://www.linkedin.com/company/flowworkk/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[#1a1a1a] hover:text-[#0a66c2] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                  <svg className="w-4 h-4 text-[#0a66c2] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
                Flowwork
              </a>
            </div>

            {/* Email Addresses */}
            <div className="flex flex-col gap-2.5">
              <a href="mailto:atharvapatil.flowwork@gmail.com" className="inline-flex items-center gap-2.5 text-[14px] font-medium text-[#555] hover:text-[#1a1a1a] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
                  <svg className="w-4 h-4 text-[#555] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                </span>
                atharvapatil.flowwork@gmail.com
              </a>
              <a href="mailto:lavparab.flowwork@gmail.com" className="inline-flex items-center gap-2.5 text-[14px] font-medium text-[#555] hover:text-[#1a1a1a] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
                  <svg className="w-4 h-4 text-[#555] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                </span>
                lavparab.flowwork@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1100px] pt-8 text-center text-[13px] font-bold text-[#888] uppercase tracking-wider">
          © 2026 Copyright · Flowwork
        </div>
      </footer>
    </main>
  );
}

// Subcomponents
function MarqueePill({ text }: { text: string }) {
  return (
    <div className="inline-flex shrink-0 min-w-max items-center gap-2.5 bg-white/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/50 shadow-sm text-[#333] font-semibold text-[15px] whitespace-nowrap">
      <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#c8f74a] text-[#2a3d0a] text-[12px] font-black">?</div>
      {text}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#d8d3c8] rounded-[16px] bg-[#fdfaf5] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent border-none cursor-pointer"
      >
        <span className="text-[17px] font-bold text-[#1a1a1a] pr-4">{question}</span>
        <span className={`text-[24px] font-light text-[#1a1a1a] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-6 pt-1 text-[16px] text-[#4a4a4a] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
}
