import type {Metadata} from "next";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
    title: {
        absolute: "Стоматологія Колібрі | Хуст",
    },
    description: "Стоматологічна клініка Колібрі у Хусті — лікування зубів, імплантація, протезування, ортодонтія, дитяча стоматологія. Досвідчені лікарі, сучасне обладнання. Тел.: +380 96-80-55-446.",
    alternates: {
        canonical: "https://kolibri-khust.com",
        languages: {
            "uk": "https://kolibri-khust.com",
            "x-default": "https://kolibri-khust.com",
        },
    },
};

export default function HomePage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Як записатися на прийом у стоматологію Колібрі?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Зателефонуйте за номером +380 96-80-55-446, напишіть у Telegram або WhatsApp, або надішліть email на kolibri.khust@gmail.com. Ми працюємо Пн–Пт: 8:00–20:00, Сб: 9:00–16:00.",
                },
            },
            {
                "@type": "Question",
                "name": "Де знаходиться стоматологія Колібрі у Хусті?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ми знаходимось за адресою: вулиця Пирогова 5а, Хуст, Закарпатська область, 90400. Орієнтир на карті: maps.app.goo.gl/TxLQPMqRmQgLQa8XA.",
                },
            },
            {
                "@type": "Question",
                "name": "Коли працює стоматологія Колібрі?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Понеділок–П'ятниця: 8:00–20:00, Субота: 9:00–16:00, Неділя: вихідний.",
                },
            },
            {
                "@type": "Question",
                "name": "Чи робить клініка Колібрі імплантацію зубів у Хусті?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Так. Ми використовуємо імплантаційні системи MIS V3 та MIS C1, хірургічні шаблони для точного встановлення імплантів та матеріали фірми OsteoBiol для збільшення об'єму кістки.",
                },
            },
            {
                "@type": "Question",
                "name": "Які послуги надає стоматологія Колібрі?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Клініка Колібрі надає повний спектр стоматологічних послуг: загальна стоматологія та ендодонтія, косметична стоматологія, ортодонтія, хірургія порожнини рота, лікування ясен і пародонтологія, протезування та імплантація.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            <HeroSection/>
            <ServicesPreview/>
            <HomeClient/>
        </>
    );
}
