import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Стоматологія Колібрі",
    description: "Стоматологія Колібрі у Хусті — сучасна клініка з турботою про вашу усмішку. Професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія!",
    openGraph: {
        title: "Стоматологія Колібрі | Хуст",
        description: "Безболісна сучасна стоматологія у Хусті.",
        siteName: "Стоматологія Колібрі",
        images: [
            {
                url: '../components/fake.jpg',
                width: 1200,
                height: 630,
                alt: "Стоматологія Колібрі — сучасна клініка у Хусті",
            },
        ],
        locale: "uk_UA",
        type: "website",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">

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