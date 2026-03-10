"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GlassEffect, GlassFilter } from "./ui/liquid-glass";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {/* Required Filter for Liquid Glass */}
            <GlassFilter />

            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"
                    } px-4 md:px-[5%]`}
            >
                <div className="max-w-[900px] mx-auto relative">
                    {/* Glass Effect Navbar Wrapper */}
                    <GlassEffect
                        className={`w-full flex items-center justify-between transition-all duration-700 overflow-visible ${scrolled
                            ? "bg-white/10 shadow-[0_8px_12px_rgba(0,0,0,0.25),0_0_20px_rgba(0,0,0,0.15)] h-14 rounded-3xl hover:h-[68px] hover:rounded-4xl hover:bg-white/15"
                            : "bg-transparent h-14 px-2 rounded-3xl hover:h-[68px] hover:rounded-4xl"
                            }`}
                    >
                        <div className="flex items-center w-full h-full px-2 md:px-6">
                            {/* Logo */}
                            <div className="flex-1 flex justify-start">
                                <Link
                                    href="/"
                                    className="text-[22px] font-extrabold tracking-[-0.8px] text-black relative z-30 flex items-center gap-1"
                                >
                                    fl
                                    <span className="w-2.5 h-2.5 bg-[#c8f74a] rounded-full inline-block" />
                                    wwork
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <nav aria-label="Main navigation" className="hidden md:flex flex-none items-center justify-center gap-8 relative z-30">
                                <Link
                                    href="#services"
                                    className="text-[14px] text-black font-semibold hover:text-[#2a3d0a] transition-colors"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="text-[14px] text-black font-semibold hover:text-[#2a3d0a] transition-colors"
                                >
                                    How It Works
                                </Link>
                                <Link
                                    href="#problem"
                                    className="text-[14px] text-black font-semibold hover:text-[#2a3d0a] transition-colors"
                                >
                                    Problem
                                </Link>
                                <Link
                                    href="#faq"
                                    className="text-[14px] text-black font-semibold hover:text-[#2a3d0a] transition-colors"
                                >
                                    FAQ
                                </Link>
                            </nav>

                            {/* CTA Button (desktop) */}
                            <div className="flex-1 flex justify-end items-center gap-3">
                                <a
                                    href="https://cal.com/lavparab/free-ai-automation-audit-with-lavparab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-30 hidden sm:inline-flex items-center justify-center bg-[#c8f74a] text-black px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold shadow-[0_2px_8px_rgba(200,247,74,0.2)] hover:bg-[#b5e042] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(200,247,74,0.4)] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.2)]"
                                >
                                    Book a Free Audit
                                </a>

                                {/* Mobile hamburger */}
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="md:hidden relative z-30 flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-transparent border-none cursor-pointer gap-[5px]"
                                    aria-label="Toggle menu"
                                    aria-expanded={mobileOpen}
                                >
                                    <span className={`block w-5 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                                    <span className={`block w-5 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                    <span className={`block w-5 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                                </button>
                            </div>
                        </div>
                    </GlassEffect>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#f0ede8]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 transition-all duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-6">
                    <Link
                        href="#services"
                        onClick={() => setMobileOpen(false)}
                        className="text-[22px] font-bold text-[#1a1a1a] hover:text-[#8bc34a] transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="#how-it-works"
                        onClick={() => setMobileOpen(false)}
                        className="text-[22px] font-bold text-[#1a1a1a] hover:text-[#8bc34a] transition-colors"
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#problem"
                        onClick={() => setMobileOpen(false)}
                        className="text-[22px] font-bold text-[#1a1a1a] hover:text-[#8bc34a] transition-colors"
                    >
                        Problem
                    </Link>
                    <Link
                        href="#faq"
                        onClick={() => setMobileOpen(false)}
                        className="text-[22px] font-bold text-[#1a1a1a] hover:text-[#8bc34a] transition-colors"
                    >
                        FAQ
                    </Link>
                </nav>
                <a
                    href="https://cal.com/lavparab/free-ai-automation-audit-with-lavparab"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center bg-[#c8f74a] text-black px-8 py-3.5 rounded-full text-[15px] font-bold shadow-[0_4px_16px_rgba(200,247,74,0.3)] hover:bg-[#b5e042] transition-all duration-300 mt-4"
                >
                    Book a Free Audit
                </a>
            </div>
        </>
    );
}
