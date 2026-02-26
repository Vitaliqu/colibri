import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata, Viewport} from "next";

const metaTitle = "Стоматологія Колібрі";
const metaDescription = "Стоматологія Колібрі у Хусті — сучасна клініка з професійним лікуванням зубів. Імплантація, протезування, гігієна, дитяча стоматологія."
const site_name = "Стоматологічна клініка Колібрі";
const site_domain = "kolibri-khust.com";
const site_url = `https://${site_domain}`;
const og_image_url = `${site_url}/opengraph-image.png`;

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#ffffff"},
        {media: "(prefers-color-scheme: dark)", color: "#111827"},
    ],
};

export const metadata: Metadata = {
    title: {
        default: `${metaTitle} | Хуст`,
        template: `%s | ${site_name} | Хуст`,
    },
    description: metaDescription,
    applicationName: site_name,
    metadataBase: new URL(site_url),
    keywords: [
        "стоматологія Хуст",
        "колібрі хуст",
        "стоматологія Колібрі",
        "стоматолог Хуст",
        "зубний лікар Хуст",
        "стоматологічна клініка Хуст",
        "лікування зубів Хуст",
        "імплантація зубів Хуст",
        "протезування зубів Хуст",
        "ортодонт Хуст",
        "дитяча стоматологія Хуст",
        "Колібрі стоматологія Хуст",
        "Закарпаття стоматологія",
    ],
    alternates: {
        canonical: site_url,
        languages: {
            "uk": site_url,
            "x-default": site_url,
        },
    },
    openGraph: {
        type: "website",
        title: `${metaTitle} | Хуст`,
        images: [{url: og_image_url, width: 1200, height: 630, alt: `${metaTitle} — стоматологічна клініка у Хусті`, type: "image/png"}],
        url: site_url,
        locale: "uk_UA",
        description: metaDescription,
        siteName: site_name,
    },
    twitter: {
        title: `${metaTitle} | Хуст`,
        card: "summary_large_image",
        description: metaDescription,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    const jsonLdWebSite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${site_url}/#website`,
        "name": site_name,
        "alternateName": "Колібрі стоматологія Хуст",
        "description": metaDescription,
        "url": site_url,
        "inLanguage": "uk",
        "publisher": {
            "@id": `${site_url}/#organization`,
        },
    };

    const jsonLdNavigation = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {"@type": "SiteNavigationElement", "position": 1, "name": "Головна", "url": site_url},
            {"@type": "SiteNavigationElement", "position": 2, "name": "Про нас", "url": `${site_url}/about`},
            {"@type": "SiteNavigationElement", "position": 3, "name": "Послуги", "url": `${site_url}/services`},
            {"@type": "SiteNavigationElement", "position": 4, "name": "Контакти", "url": `${site_url}/contact`},
        ],
    };

    const jsonLdOrganization = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "@id": `${site_url}/#organization`,
        "name": "Стоматологія Колібрі",
        "alternateName": "Колібрі стоматологічна клініка Хуст",
        "url": site_url,
        "foundingDate": "2019",
        "telephone": "+380968055446",
        "email": "kolibri.khust@gmail.com",
        "image": og_image_url,
        "priceRange": "₴₴",
        "currenciesAccepted": "UAH",
        "paymentAccepted": "Готівка, Банківська картка",
        "medicalSpecialty": "Dentistry",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 3,
        },
        "sameAs": [
            "https://t.me/+380968055446",
            "https://wa.me/380968055446",
            "https://maps.app.goo.gl/TxLQPMqRmQgLQa8XA",
        ],
        "hasMap": "https://maps.app.goo.gl/TxLQPMqRmQgLQa8XA",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "вулиця Пирогова 5а",
            "addressLocality": "Хуст",
            "addressRegion": "Закарпатська область",
            "postalCode": "90400",
            "addressCountry": "UA",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.17384617,
            "longitude": 23.30012078,
        },
        "areaServed": {
            "@type": "City",
            "name": "Хуст",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Закарпатська область",
            },
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1",
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Стоматологічні послуги",
            "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Загальна стоматологія та ендодонтія"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Косметична стоматологія"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Ортодонтія"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Хірургія порожнини рота"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Лікування ясен, пародонтологія"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Протезування"}},
                {"@type": "Offer", "itemOffered": {"@type": "MedicalTherapy", "name": "Імплантація"}},
            ],
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "20:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "16:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday"],
                "opens": "00:00",
                "closes": "00:00",
            },
        ],
    };

    return (
        <html lang="uk">
        <head>
            <meta name="apple-mobile-web-app-title" content="Колібрі"/>
            <link rel="preconnect" href="https://api.mapbox.com"/>
            <link rel="preconnect" href="https://events.mapbox.com"/>
            <link rel="dns-prefetch" href="https://images.unsplash.com"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdWebSite)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOrganization)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdNavigation)}}
            />
        </head>

        <body className="font-sans">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
