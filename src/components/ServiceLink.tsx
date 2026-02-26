'use client';

import React, {MouseEvent, useTransition} from "react";
import {usePathname, useRouter} from "next/navigation";

interface ServiceLinkProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string;
}

// When duplicate IDs exist (mobile+desktop grids), getElementById returns the
// first match which may be display:none. This picks the visible one instead.
function findVisible(id: string): Element | null {
    const matches = Array.from(document.querySelectorAll(`[id="${id}"]`));
    return (
        matches.find((el) => (el as HTMLElement).offsetParent !== null) ??
        matches[0] ??
        null
    );
}

export default function ServiceLink({targetId, children, className, "aria-label": ariaLabel}: ServiceLinkProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [, startTransition] = useTransition();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname === "/services") {
            // Already on the page — scroll to the visible element immediately
            const el = findVisible(targetId);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 88;
                window.scrollTo({top, behavior: "smooth"});
            }
        } else {
            // Navigate with the target in the URL; ServicesPageClient handles scroll
            startTransition(() => {
                router.push(`/services?scrollTo=${targetId}`);
            });
        }
    };

    return (
        <a
            href={`/services?scrollTo=${targetId}`}
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
}
