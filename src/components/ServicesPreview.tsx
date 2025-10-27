"use client";

import React, {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const services = [
    {
        title: "Загальна стоматологія",
        description:
            "Комплексний догляд за ротовою порожниною, включаючи чистки, пломби та профілактичні процедури.",
        image:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&h=300&q=80",
        color: "from-lime-400 to-green-500",
    },
    {
        title: "Косметична стоматологія",
        description:
            "Покращте свою усмішку за допомогою відбілювання, вінірів та естетичної корекція ясен.",
        image:
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
        color: "from-green-400 to-lime-500",
    },
    {
        title: "Ортодонтія",
        description:
            "Вирівнювання зубів дорослим і дітям за допомогою брекет-техніки, трейнерів, пластинок та елайнерів.",
        image:
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
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
        <section
            ref={sectionRef}
            className="py-8 md:py-24 bg-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-lime-50/30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Заголовок */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
                        Комплексний стоматологічний догляд
                        <span className="text-lime-600 block">для будь-яких потреб</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Від регулярних чисток до повного перетворення усмішки – наша команда
                        забезпечує персоналізований догляд з використанням сучасних
                        технологій та методик. А наявность у клініці стоматологічного мікроскопу,
                        п&#39;єзотому, діодного лазера, інтраорального сканера Medit 700i та багато
                        інших сучасних інструментів та матеріалів дозволяє вирішувати
                        найскладніші завдання.
                    </p>
                </div>

                {/* Сітка послуг */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 mb-12">
                    {services.map((service, i) => (
                        <Card
                            key={service.title}
                            className={`border-0 bg-white overflow-hidden transform transition-all duration-700 ${
                                visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                            style={{transitionDelay: `${i * 200}ms`}}
                        >
                            <div className="relative group">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        fill
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
                                ></div>
                            </div>
                            <CardContent className="p-6 group-hover:translate-y-[-4px] transition-all duration-500">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Кнопка перегляду всіх послуг */}
                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="relative bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden"
                    >
                        <Link href="/services" className="relative z-10 flex items-center">
                            Переглянути всі послуги
                            <ArrowRight className="w-5 h-5 ml-2"/>
                            {/* shimmer ефект */}
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
