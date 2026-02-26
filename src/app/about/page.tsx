import type {Metadata} from "next";
import AboutPageClient from "./AboutPageClient";

const siteUrl = "https://kolibri-khust.com";

export const metadata: Metadata = {
    title: "Про нас",
    description: "Дізнайтеся більше про нас. Наші лікарі — професіонали з багаторічним досвідом у лікуванні, протезуванні та імплантації зубів.",
    alternates: {
        canonical: `${siteUrl}/about`,
        languages: {
            "uk": `${siteUrl}/about`,
            "x-default": `${siteUrl}/about`,
        },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/about`,
        title: "Про нас — Стоматологія Колібрі | Хуст",
        description: "Дізнайтеся більше про команду Стоматології Колібрі у Хусті. Наші лікарі — професіонали з багаторічним досвідом у лікуванні, протезуванні та імплантації зубів.",
        images: [{url: `${siteUrl}/about-opengraph-image.png`, width: 1200, height: 630, alt: "Команда стоматологічної клініки Колібрі у Хусті", type: "image/png"}],
        locale: "uk_UA",
        siteName: "Стоматологія Колібрі",
    },
    twitter: {
        card: "summary_large_image",
        title: "Про нас — Стоматологія Колібрі | Хуст",
        description: "Дізнайтеся більше про команду Стоматології Колібрі у Хусті.",
        images: [{url: `${siteUrl}/about-opengraph-image.png`}],
    },
};

export default function AboutPage() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Головна", "item": siteUrl},
            {"@type": "ListItem", "position": 2, "name": "Про нас", "item": `${siteUrl}/about`},
        ],
    };

    const aboutPage = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${siteUrl}/about#webpage`,
        "name": "Про нас — Стоматологія Колібрі",
        "url": `${siteUrl}/about`,
        "inLanguage": "uk",
        "isPartOf": {"@id": `${siteUrl}/#website`},
        "about": {"@id": `${siteUrl}/#organization`},
    };

    const physicians = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Physician",
                "@id": `${siteUrl}/about#shcherban-olexander`,
                "name": "Олександр Щербан",
                "jobTitle": "Головний лікар і власник кліники",
                "medicalSpecialty": ["Dentistry", "OralSurgery", "Prosthodontics"],
                "worksFor": {"@id": `${siteUrl}/#organization`},
                "alumniOf": {"@type": "CollegeOrUniversity", "name": "Донецький медичний університет"},
                "url": `${siteUrl}/about#shcherban-olexander`,
            },
            {
                "@type": "Physician",
                "@id": `${siteUrl}/about#shcherban-olga`,
                "name": "Ольга Щербан",
                "jobTitle": "Ортодонт",
                "medicalSpecialty": ["Orthodontics", "Dentistry"],
                "worksFor": {"@id": `${siteUrl}/#organization`},
                "alumniOf": {"@type": "CollegeOrUniversity", "name": "Донецький медичний університет"},
                "url": `${siteUrl}/about#shcherban-olga`,
            },
            {
                "@type": "Physician",
                "@id": `${siteUrl}/about#khymyshinets-yuliia`,
                "name": "Юлія Химишинець",
                "jobTitle": "Парадонтолог, Ендодонтист",
                "medicalSpecialty": ["Dentistry", "Endodontics"],
                "worksFor": {"@id": `${siteUrl}/#organization`},
                "alumniOf": {"@type": "CollegeOrUniversity", "name": "Ужгородський національний університет"},
                "url": `${siteUrl}/about#khymyshinets-yuliia`,
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(aboutPage)}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(physicians)}}/>
            <AboutPageClient/>
        </>
    );
}
