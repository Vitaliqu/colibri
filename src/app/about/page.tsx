import type {Metadata} from "next";
import AboutPageClient from "./AboutPageClient";

const pageTitle = "Про нас – Стоматологія Колібрі | Хуст";
const pageDescription =
    "Дізнайтеся більше про команду Стоматології Колібрі у Хусті. Наші лікарі — професіонали з багаторічним досвідом у лікуванні, протезуванні та імплантації зубів.";

const siteUrl = "https://kolibri-khust.com";
const ogImage = `${siteUrl}/opengraph-image.png`;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: `${siteUrl}/about`,
        },
        openGraph: {
            type: "website",
            url: `${siteUrl}/about`,
            title: pageTitle,
            description: pageDescription,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: "Стоматологія Колібрі у Хусті",
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

export default function AboutPage() {
    return <AboutPageClient/>;
}
