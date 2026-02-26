import type {Metadata} from "next";
import ServicesPageClient from "./ServicesPageClient";
import {Suspense} from "react";

const siteUrl = "https://kolibri-khust.com";

export const metadata: Metadata = {
    title: "Послуги",
    description: "Повний спектр стоматологічних послуг у Хусті: лікування, імплантація, протезування, ортодонтія, косметична стоматологія, хірургія та парадонтологія.",
    alternates: {
        canonical: `${siteUrl}/services`,
        languages: {
            "uk": `${siteUrl}/services`,
            "x-default": `${siteUrl}/services`,
        },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/services`,
        title: "Послуги — Стоматологія Колібрі | Хуст",
        description: "Повний спектр стоматологічних послуг у Хусті: лікування, імплантація, протезування, ортодонтія, косметична стоматологія, хірургія та парадонтологія.",
        images: [{url: `${siteUrl}/services-opengraph-image.png`, width: 1200, height: 630, alt: "Стоматологічні послуги клініки Колібрі у Хусті", type: "image/png"}],
        locale: "uk_UA",
        siteName: "Стоматологія Колібрі",
    },
    twitter: {
        card: "summary_large_image",
        title: "Послуги — Стоматологія Колібрі | Хуст",
        description: "Повний спектр стоматологічних послуг у Хусті: лікування, імплантація, протезування, ортодонтія.",
        images: [{url: `${siteUrl}/services-opengraph-image.png`}],
    },
};

export default function ServicesPage() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Головна", "item": siteUrl},
            {"@type": "ListItem", "position": 2, "name": "Послуги", "item": `${siteUrl}/services`},
        ],
    };

    const medicalWebPage = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/services#webpage`,
        "name": "Стоматологічні послуги у Хусті — Клініка Колібрі",
        "url": `${siteUrl}/services`,
        "specialty": "Dentistry",
        "inLanguage": "uk",
        "isPartOf": {"@id": `${siteUrl}/#website`},
        "about": {"@id": `${siteUrl}/#organization`},
    };

    const servicesList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Стоматологічні послуги клініки Колібрі у Хусті",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Загальна стоматологія та ендодонтія", "url": `${siteUrl}/services?scrollTo=1`},
            {"@type": "ListItem", "position": 2, "name": "Косметична стоматологія", "url": `${siteUrl}/services?scrollTo=2`},
            {"@type": "ListItem", "position": 3, "name": "Ортодонтія", "url": `${siteUrl}/services?scrollTo=3`},
            {"@type": "ListItem", "position": 4, "name": "Хірургія порожнини рота", "url": `${siteUrl}/services?scrollTo=4`},
            {"@type": "ListItem", "position": 5, "name": "Лікування ясен, пародонтологія", "url": `${siteUrl}/services?scrollTo=5`},
            {"@type": "ListItem", "position": 6, "name": "Протезування", "url": `${siteUrl}/services?scrollTo=6`},
            {"@type": "ListItem", "position": 7, "name": "Імплантація", "url": `${siteUrl}/services?scrollTo=7`},
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(medicalWebPage)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(servicesList)}}/>
            <Suspense fallback={<div className="min-h-screen bg-white"/>}>
                <ServicesPageClient/>
            </Suspense>
        </>
    );
}
