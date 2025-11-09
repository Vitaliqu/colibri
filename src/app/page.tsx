import type {Metadata} from "next";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import HomeClient from "@/components/HomeClient";
import {metadata as layoutMetadata} from "./layout";

export async function generateMetadata(): Promise<Metadata> {
    return layoutMetadata;
}

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <ServicesPreview/>
            <HomeClient/>
        </>
    );
}
