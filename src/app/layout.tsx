import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Стоматологія Колібрі у Хусті",
    alternates: {
        canonical: "https://kolibri-khust.com",
    },
    description:
        "Стоматологія Колібрі у Хусті — сучасна клініка з професійним лікуванням зубів. Імплантація, протезування, гігієна, дитяча стоматологія.",
    openGraph: {
        title: "Стоматологія Колібрі у Хусті",
        url: "https://kolibri-khust.com",
        description:
            "Стоматологія Колібрі у Хусті — професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія. Турбота про вашу усмішку.",
        siteName: "Стоматологія Колібрі",
        images: ["https://kolibri-khust.com/og-image.jpg"],
        locale: "uk_UA",
        type: "website",
    },
    icons: {
        apple: "../../public/logo.png", // <-- тут ваша іконка
    },
    twitter: {
        card: "summary_large_image",
        title: "Стоматологія Колібрі у Хусті",
        description:
            "Сучасна стоматологічна клініка у Хусті. Професійне лікування зубів, імплантація, протезування та дитяча стоматологія.",
        images: ["https://kolibri-khust.com/og-image.jpg"],
    },
};


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="uk">

        <body className={'font-sans'}>
        <main className="">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </main>
        </body>
        </html>
    );
}