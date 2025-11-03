import type {Metadata} from "next";
import ServicesPageClient from "./ServicesPageClient";

const pageTitle = "Послуги – Стоматологія Колібрі | Хуст";
const pageDescription =
    "Повний спектр стоматологічних послуг у Хусті: лікування, імплантація, протезування, ортодонтія, косметична стоматологія, хірургія та парадонтологія.";

const siteUrl = "https://kolibri-khust.com";
const ogImage = `${siteUrl}/opengraph-image.png`;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: `${siteUrl}/services`,
        },
        openGraph: {
            type: "website",
            url: `${siteUrl}/services`,
            title: pageTitle,
            description: pageDescription,
            images: [{
                url: "https://kolibri-khust.com/opengraph-image.png}",
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
            images: [ogImage],
        },
    };
}

export default function ServicesPage() {
    return <ServicesPageClient/>;
}
