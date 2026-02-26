import type {Metadata} from "next";
import ContactPageClient from "./ContactPageClient";

const siteUrl = "https://kolibri-khust.com";

export const metadata: Metadata = {
    title: "Контакти",
    description: "Зв'яжіться зі Стоматологією Колібрі у Хусті. Тел.: +380 96-80-55-446. Адреса: вул. Пирогова 5а, Хуст, 90400. Пн-Пт: 8:00–20:00, Сб: 9:00–16:00, Нд: вихідний.",
    alternates: {
        canonical: `${siteUrl}/contact`,
        languages: {
            "uk": `${siteUrl}/contact`,
            "x-default": `${siteUrl}/contact`,
        },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/contact`,
        title: "Контакти — Стоматологія Колібрі | Хуст",
        description: "Зв'яжіться зі Стоматологією Колібрі у Хусті. Тел.: +380 96-80-55-446. Адреса: вул. Пирогова 5а, Хуст, 90400.",
        images: [{url: `${siteUrl}/contacts-opengraph-image.png`, width: 1200, height: 630, alt: "Контакти стоматологічної клініки Колібрі у Хусті", type: "image/png"}],
        locale: "uk_UA",
        siteName: "Стоматологія Колібрі",
    },
    twitter: {
        card: "summary_large_image",
        title: "Контакти — Стоматологія Колібрі | Хуст",
        description: "Стоматологія Колібрі у Хусті. Тел.: +380 96-80-55-446. Вул. Пирогова 5а.",
        images: [{url: `${siteUrl}/contacts-opengraph-image.png`}],
    },
};

export default function ContactsPage() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Головна", "item": siteUrl},
            {"@type": "ListItem", "position": 2, "name": "Контакти", "item": `${siteUrl}/contact`},
        ],
    };

    const contactPage = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact#webpage`,
        "name": "Контакти — Стоматологія Колібрі | Хуст",
        "url": `${siteUrl}/contact`,
        "inLanguage": "uk",
        "isPartOf": {"@id": `${siteUrl}/#website`},
        "about": {"@id": `${siteUrl}/#organization`},
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(contactPage)}}/>
            <ContactPageClient/>
        </>
    );
}
