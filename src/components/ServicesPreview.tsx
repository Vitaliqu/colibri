"use client";

import React, {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import cosmetic from "./images/cosmetic.webp"
import orthodental from "./images/orthodental.webp"
import general from "./images/general.webp"
import ServiceLink from "@/components/ServiceLink";

const services = [
    {
        title: "Загальна стоматологія та ендодонтія",
        description:
            "Комплексний догляд за ротовою порожниною включає пломбування зубів , лікування каналів , гігієнічні чистки та профілактичні процедури",
        image: general,
        color: "from-lime-400 to-green-500",
    },
    {
        title: "Косметична стоматологія",
        description:
            "Покращте свою усмішку за допомогою відбілювання, вінірів та естетичної корекція ясен.",
        image: cosmetic,
        color: "from-green-400 to-lime-500",
    },
    {
        title: "Ортодонтія",
        description:
            "Вирівнювання зубів дорослим і дітям за допомогою брекет-техніки, трейнерів, пластинок та елайнерів.",
        image: orthodental,
        color: "from-lime-500 to-green-400",
    }
];

export default function ServicesPreview() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.2}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Наші послуги</p>
                    <div className="flex items-end justify-between gap-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                            Комплексний стоматологічний догляд
                            <span className="text-lime-600"> для будь-яких потреб</span>
                        </h2>
                        <div className="hidden lg:block w-px h-16 bg-gray-300 flex-shrink-0"/>
                        <p className="hidden lg:block text-gray-600 max-w-sm leading-relaxed text-sm">
                            Від регулярних чисток до повного перетворення усмішки – наша команда
                            забезпечує персоналізований догляд з використанням сучасних технологій.
                        </p>
                    </div>
                    <div className="w-12 h-0.5 bg-lime-500 mt-8"/>
                </div>

                {/* Service grid */}
                <div className="grid md:grid-cols-3 gap-2 ">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className={`group relative overflow-hidden rounded-md border flex flex-col transition-all duration-700 last:border-r-0 border-gray-200  ${
                                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                            style={{transitionDelay: `${i * 150}ms`}}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    fill
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 "/>
                            </div>

                            {/* Text */}
                            <div
                                className="p-6 flex flex-col flex-1 justify-between border-t border-gray-200 bg-white ">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div
                                    className="flex items-center text-lime-600 text-sm font-medium gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ServiceLink
                                        targetId={`${i + 1}`}
                                        className={"flex "}
                                        aria-label={`Детальніше про ${service.title}`}
                                    >
                                        Детальніше <ArrowRight className="w-4 h-4"/>
                                    </ServiceLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-start">
                    <Button
                        asChild
                        className="h-12 px-8 bg-gray-900 text-white hover:bg-gray-800 text-sm font-medium tracking-wide group"
                    >
                        <Link href="/services" className="flex items-center gap-2">
                            Переглянути всі послуги
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
