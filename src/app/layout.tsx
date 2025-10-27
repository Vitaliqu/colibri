import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Стоматологія Колібрі",
    description: "Стоматологія Колібрі у Хусті — сучасна клініка з турботою про вашу усмішку. Професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія!",
    openGraph: {
        title: "Стоматологія Колібрі | Хуст",
        url: "https://colibri-9jo4.vercel.app",
        description: "Стоматологія Колібрі у Хусті — сучасна клініка з турботою про вашу усмішку. Професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія!",
        siteName: "Стоматологія Колібрі",
        images: ["https://colibri-9jo4.vercel.app/og-image.jpg"],
        locale: "uk_UA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        description: "Стоматологія Колібрі у Хусті — сучасна клініка з турботою про вашу усмішку. Професійне лікування зубів, імплантація, протезування, гігієна та дитяча стоматологія!",
        images: ["https://colibri-9jo4.vercel.app/og-image.jpg"],
    }
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