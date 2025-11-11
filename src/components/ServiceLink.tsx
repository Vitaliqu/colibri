'use client';

import React, {MouseEvent, useTransition} from "react";
import {usePathname, useRouter} from "next/navigation";

interface ServiceLinkProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
}

export default function ServiceLink({targetId, children, className}: ServiceLinkProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [, startTransition] = useTransition();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();


        if (pathname === "/services") {
            const scrollToTarget = () => {
                const el = document.getElementById(targetId);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 88;
                    window.scrollTo({top, behavior: "smooth"});
                }
            };
            // Already on /services → scroll only
            scrollToTarget();
        } else {
            const scrollToTarget = () => {
                const el = document.getElementById(targetId);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 128;
                    window.scrollTo({top, behavior: "smooth"});
                }
            };
            // Navigate to /services (no query in URL)
            startTransition(() => {
                router.push("/services");
            });

            // Try scrolling once the element exists
            const interval = setInterval(() => {
                const el = document.getElementById(targetId);
                if (el) {
                    scrollToTarget();
                    clearInterval(interval);
                }
            }, 300);

            // Safety timeout to clear interval
            setTimeout(() => clearInterval(interval), 3000);
        }
    };

    return (
        <a
            href="/services"
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}
