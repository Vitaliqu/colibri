import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Colibri Dental Clinic",
    description: "Modern dental clinic website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <main className="">
            <Header />
            <main>{children}</main>
            <Footer />
        </main>
        </body>
        </html>
    );
}