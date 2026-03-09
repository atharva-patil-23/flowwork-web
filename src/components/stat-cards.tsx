"use client";

import { useRef, useState, useEffect } from "react";
import { FileText, Users, ShieldCheck, DollarSign } from "lucide-react";

export function StatCards() {
    return (
        <>
            <DraggableCard
                initialTop="15%"
                initialLeft="5%"
                icon={<FileText className="w-5 h-5 text-gray-700" />}
                num="80% Time Saved"
                label="Document Processing"
                delay="0s"
            />
            <DraggableCard
                initialTop="55%"
                initialLeft="8%"
                icon={<Users className="w-5 h-5 text-gray-700" />}
                num="3× More Leads"
                label="Distributor Outreach"
                delay="0.2s"
            />
            <DraggableCard
                initialTop="20%"
                initialLeft="auto"
                initialRight="5%"
                icon={<ShieldCheck className="w-5 h-5 text-gray-700" />}
                num="+94% Compliance"
                label="Accuracy Rate"
                delay="0.4s"
            />
            <DraggableCard
                initialTop="60%"
                initialLeft="auto"
                initialRight="10%"
                icon={<DollarSign className="w-5 h-5 text-gray-700" />}
                num="$40K+ Saved"
                label="Annual Per Client"
                delay="0.6s"
            />
        </>
    );
}

function DraggableCard({
    initialTop,
    initialLeft,
    initialRight = "auto",
    icon,
    num,
    label,
    delay,
}: {
    initialTop: string;
    initialLeft: string;
    initialRight?: string;
    icon: React.ReactNode;
    num: string;
    label: string;
    delay: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const posRef = useRef({ x: 0, y: 0, top: 0, left: 0 });

    useEffect(() => {
        // Initial Positioning
        if (cardRef.current) {
            if (initialLeft !== "auto") {
                cardRef.current.style.left = initialLeft;
            } else {
                cardRef.current.style.right = initialRight;
            }
            cardRef.current.style.top = initialTop;
            cardRef.current.style.animationDelay = delay;
        }
    }, [initialLeft, initialRight, initialTop, delay]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        const rect = cardRef.current!.getBoundingClientRect();
        posRef.current = {
            x: e.clientX,
            y: e.clientY,
            top: rect.top,
            left: rect.left,
        };
        e.preventDefault(); // Stop text selection
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !cardRef.current) return;
            const dx = e.clientX - posRef.current.x;
            const dy = e.clientY - posRef.current.y;
            cardRef.current.style.left = `${posRef.current.left + dx}px`;
            cardRef.current.style.top = `${posRef.current.top + dy}px`;
            cardRef.current.style.right = "auto"; // Override right if dragging
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={cardRef}
            onMouseDown={handleMouseDown}
            className={`absolute z-30 hidden lg:block w-max cursor-grab select-none ${isDragging ? "!z-40 cursor-grabbing" : ""}`}
        >
            <div
                className={`flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-3 pr-4 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 opacity-0 animate-[fadeIn_0.5s_ease_forwards,statFloat1_4s_ease-in-out_infinite_alternate] ${isDragging ? "scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.1)] [animation-play-state:paused]" : ""
                    }`}
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/60 shadow-sm shrink-0 pointer-events-none">
                    {icon}
                </div>
                <div className="pointer-events-none">
                    <div className="text-[15px] font-extrabold text-[#1a1a1a] leading-tight mb-0.5">
                        {num}
                    </div>
                    <div className="text-[12px] font-medium text-[#4a4a4a] leading-none uppercase tracking-wide">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
}
