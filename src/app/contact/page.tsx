import type {Metadata} from "next";
import ContactPageClient from "./ContactPageClient";

const pageTitle = "Контакти – Стоматологія Колібрі | Хуст";
const pageDescription =
    "Зв’яжіться зі Стоматологією Колібрі у Хусті. +380 96-80-55-446, вулиця Пирогова 5а, Хуст, Закарпатська область, Україна, 90400, Години роботи\n" +
    "\n" +
    "Пн-Пт: 8:00 - 20:00\n" +
    "\n" +
    "Сб: 9:00 - 16:00\n" +
    "\n" +
    "Нд: вихідний.";

const siteUrl = "https://kolibri-khust.com";

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

            images: [{
                url: "https://kolibri-khust.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Стоматологія Колібрі"
            }],

            locale: "uk_UA",
            siteName: "Стоматологія Колібрі | Хуст",
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: pageDescription,
            images: [{
                url: "https://kolibri-khust.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Стоматологія Колібрі"
            }],
        },
    };
}

export default function ContactsPage() {
    return <ContactPageClient/>;
}
