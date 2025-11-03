import type {Metadata} from "next";
import ContactPageClient from "./СontactPageClient";

const pageTitle = "Контакти – Стоматологія Колібрі | Хуст";
const pageDescription =
    "Зв’яжіться зі Стоматологією Колібрі у Хусті. Телефон, адреса, години роботи, карта розташування клініки.";

const siteUrl = "https://kolibri-khust.com";
const ogImage = `${siteUrl}/opengraph-image.png`;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: `${siteUrl}/contacts`,
        },
        openGraph: {
            type: "website",
            url: `${siteUrl}/contacts`,
            title: pageTitle,
            description: pageDescription,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: "Контакти Стоматології Колібрі у Хусті",
                },
            ],
            locale: "uk_UA",
            siteName: "Стоматологія Колібрі | Хуст",
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: pageDescription,
            images: [ogImage],
        },
    };
}

export default function ContactsPage() {
    return <ContactPageClient/>;
}
