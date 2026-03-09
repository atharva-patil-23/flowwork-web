"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GlassEffect, GlassFilter } from "./ui/liquid-glass";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                            <nav className="hidden md:flex flex-none items-center justify-center gap-8 relative z-30">
                                <Link
                                    href="#services"
                                    className="text-[14px] text-black font-semibold hover:text-[#2a3d0a] transition-colors"
                                >
                                    Services
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

                            {/* CTA Button */}
                            <div className="flex-1 flex justify-end">
                                <a
                                    href="https://cal.com/lavparab/free-ai-automation-audit-with-lavparab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-30 inline-flex items-center justify-center bg-[#c8f74a] text-black px-6 py-2.5 rounded-full text-[13px] font-bold shadow-[0_2px_8px_rgba(200,247,74,0.2)] hover:bg-[#b5e042] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(200,247,74,0.4)] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.2)]"
                                >
                                    Book a Free Audit
                                </a>
                            </div>
                        </div>
                    </GlassEffect>
                </div>
            </header>
        </>
    );
}
