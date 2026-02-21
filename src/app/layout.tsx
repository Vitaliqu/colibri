import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata} from "next";

const metaTitle = "Стоматологія Колібрі";
const metaDescription = "Стоматологія Колібрі у Хусті — сучасна клініка з професійним лікуванням зубів. Імплантація, протезування, гігієна, дитяча стоматологія."
const site_name = "Стоматологія Колібрі | Хуст";
const site_domain = "kolibri-khust.com";
const site_url = `https://${site_domain}`;
const og_image_url = `${site_url}/opengraph-image.png`;

export const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(site_url),
    keywords: ["Колібрі", "Стоматологія", "Хуст", "Лікування зубів", "Імплантація", "Протезування", "Дитяча стоматологія"],
    alternates: {
        canonical: site_url,
    },
    openGraph: {
        type: "website",
        title: metaTitle,
        images: [{url: og_image_url, width: 1200, height: 630, alt: metaTitle}],
        url: site_url,
        locale: "uk_UA",
        description: metaDescription,
        siteName: site_name,
    },
    twitter: {
        title: metaTitle,
        card: "summary_large_image",
        description: metaDescription,
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
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
        "@id": "https://kolibri-khust.com/#website",
        "name": site_name,
        "alternateName": "Колібрі стоматологія Хуст",
        "description": metaDescription,
        "url": "https://kolibri-khust.com",
        "publisher": {
            "@id": "https://kolibri-khust.com/#organization",
        },
    };
    const jsonLdOrganization = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "@id": "https://kolibri-khust.com/#organization",
        "name": "Стоматологія Колібрі",
        "url": "https://kolibri-khust.com",
        "telephone": "+380968055446",
        "image": og_image_url,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "вулиця Пирогова 5а",
            "addressLocality": "Хуст",
            "addressRegion": "Закарпатська область",
            "postalCode": "90400",
            "addressCountry": "UA",
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
        ],
    };
    return (
        <html lang="uk">
        <head>
            <meta name="apple-mobile-web-app-title" content="Колібрі"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdWebSite)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOrganization)}}
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
