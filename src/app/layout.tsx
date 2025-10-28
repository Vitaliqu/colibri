import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata} from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Стоматологія Колібрі у Хусті",
    metadataBase: new URL("https://kolibri-khust.com/"),
    alternates: {
        canonical: "https://kolibri-khust.com",
    },
    description:
        "Стоматологія Колібрі у Хусті — сучасна клініка з професійним лікуванням зубів. Імплантація, протезування, гігієна, дитяча стоматологія.",
    openGraph: {
        title: "Стоматологія Колібрі у Хусті",
        url: "https://kolibri-khust.com",
        images: {
            url: 'opengraph-image.png'
        },
        description:
            "Стоматологія Колібрі у Хусті — професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія. Турбота про вашу усмішку.",
        siteName: "Стоматологія Колібрі",
        locale: "uk_UA",
        type: "website",
    },
    icons: {
        icon: '/favicon.ico',
    },
    twitter: {
        card: "summary_large_image",
        title: "Стоматологія Колібрі у Хусті",
        description:
            "Сучасна стоматологічна клініка у Хусті. Професійне лікування зубів, імплантація, протезування та дитяча стоматологія.",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="uk">
        <head>
            <link rel="icon" href="/favicon.ico?" type="image/x-icon"/>
            {/* ✅ Structured data for Google (LocalBusiness) */}
            <Script
                id="schema-localbusiness"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Стоматологія Колібрі",
                        image: "https://kolibri-khust.com/logo.png",
                        logo: "https://kolibri-khust.com/favicon.ico",
                        url: "https://kolibri-khust.com",
                        telephone: "+380968055446",
                        email: "info@colibri.dental",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "вул. Пирогова 5а",
                            addressLocality: "Хуст",
                            addressRegion: "Закарпатська область",
                            postalCode: "90400",
                            addressCountry: "UA",
                        },
                        openingHours: "Mo-Fr 08:00-20:00, Sa 09:00-16:00",
                    }),
                }}
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
