'use client';

import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import {CheckCircle, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import servicesImage from "@/components/images/services.webp";
import general from "@/components/images/general.webp";
import cosmetic from "@/components/images/cosmetic.webp";
import paradent from "@/components/images/paradent.webp";
import surgery from "@/components/images/surgery.webp";
import orthodental from "@/components/images/orthodental.webp";
import implant from "@/components/images/implant.webp";
import prosthesis from "@/components/images/prosthesis.webp";

export default function ServicesPageClient() {
    const [heroVisible, setHeroVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const services = [
        {
            title: "Загальна стоматологія",
            description:
                "Комплексний догляд за зубами та яснами для дорослих і дітей.",
            image: general,
            treatments: [
                "Професійна чистка",
                "Пломбування зубів",
                "Лікування кореневих каналів",
                "Переліковування раніше лікованих каналів",
                "Використання стоматологічного мікроскопу",
            ],
        },
        {
            title: "Косметична стоматологія",
            description:
                "Сучасні естетичні рішення для створення ідеальної усмішки — від відбілювання до трансформації.",
            image: cosmetic,
            treatments: [
                "Відбілювання зубів",
                "Попереднє проектування посмішки",
                "Вініри",
                "Естетична корекція ясен",
            ],
        },
        {
            title: "Ортодонтія",
            description:
                "Вирівнювання зубів для дітей та дорослих за допомогою сучасних методів.",
            image: orthodental,
            treatments: [
                "Традиційні брекети",
                "Самоліговані системи",
                "Трейнери",
                "Мікроімпланти",
                "Пластинки",
            ],
        },
        {
            title: "Хірургія порожнини рота",
            description:
                "Безпечні втручання з турботою про комфорт пацієнта.",
            image: surgery,
            treatments: [
                "Видалення зубів мудрості",
                "Пластика вуздечки",
                "Резекції і кістектомії",
                "П'єзохірургія",
            ],
        },
        {
            title: "Пародонтологія",
            description:
                "Підтримуйте здоров’я ясен і профілактику пародонтозу.",
            image: paradent,
            treatments: [
                "Професійна чистка",
                "Під’яснева чистка",
                "Кюретаж кишень",
                "Лазерна терапія",
            ],
        },
        {
            title: "Протезування",
            description:
                "Відновлення функціональності та естетики з використанням сучасних матеріалів.",
            image: prosthesis,
            treatments: [
                "Протезування на імплантах",
                "Коронки e-max, цирконій",
                "Мікропротези",
            ],
        },
        {
            title: "Імплантація",
            description:
                "Відновлення втрачених зубів без шкоди сусіднім, преміальні системи MIS.",
            image: implant,
            treatments: [
                "Системи MIS V3, C1",
                "Шаблони для точного встановлення",
                "Остеопластика",
            ],
        },
    ];

    // Hero animation
    useEffect(() => setHeroVisible(true), []);

    // Section animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setServicesVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.05});
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Герой-секція */}
            <section
                style={{
                    backgroundImage: `url(${servicesImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative min-h-[calc(100vh-4.5rem)] flex justify-center mt-18 flex-col overflow-hidden"
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        className={`space-y-8 text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                            <span className="block">Послуги</span>
                        </div>
                        <p className="text-sm md:text-xl mt-2 leading-relaxed mb-8">
                            Ми пропонуємо повний спектр стоматологічних послуг — від профілактики до складних операцій.
                            Сучасне обладнання та досвід наших лікарів гарантують безпеку, ефективність і комфорт
                            кожного пацієнта.
                        </p>
                    </div>
                </div>
            </section>

            {/* Сітка послуг */}
            <section ref={sectionRef} className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, i) => (
                            <Card
                                key={service.title}
                                className={`group bg-white border-0 overflow-hidden transform transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{transitionDelay: `${i * 150}ms`}}
                            >
                                <div className="relative">
                                    <div className="aspect-[3/2] overflow-hidden">
                                        <Image
                                            fill
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <CardContent className="p-8 group-hover:translate-y-[-4px] transition-all duration-500">
                                    <h3 className="md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Процедури
                                            включають:</h4>
                                        <ul className="space-y-2">
                                            {service.treatments.map((treatment) => (
                                                <li key={treatment}
                                                    className="flex items-center text-sm cursor-default text-gray-600 transition-all duration-300 hover:text-lime-600">
                                                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0"/>
                                                    {treatment}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                    <div className="grid md:grid-cols-2 px-4 lg:grid-cols-4 py-16 gap-4">
                        {services.slice(3).map((service, i) => (
                            <Card
                                key={service.title}
                                className={`group bg-white border-0 overflow-hidden transform transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{transitionDelay: `${i * 150}ms`}}
                            >
                                <div className="relative">
                                    <div className="aspect-[3/2] overflow-hidden">
                                        <Image
                                            fill
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <CardContent className="p-8 group-hover:translate-y-[-4px] transition-all duration-500">
                                    <h3 className="md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Процедури
                                            включають:</h4>
                                        <ul className="space-y-2">
                                            {service.treatments.map((treatment) => (
                                                <li key={treatment}
                                                    className="flex items-center text-sm text-gray-600 transition-all duration-300 hover:text-lime-600">
                                                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0"/>
                                                    {treatment}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA Секція */}
            <section
                className={`py-20 bg-gradient-to-br from-lime-600 to-green-700 text-white relative overflow-hidden transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full"
                         style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                         }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Подбайте про свою усмішку
                        <span className="block">вже сьогодні</span>
                    </h2>
                    <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Запишіться зараз і довірте свій комфорт та усмішку професіоналам.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => window.location.href = "tel:+380968055446"}
                            className="w-full py-2 text-sm hover:bg-lime-500 hover:text-white cursor-pointer text-gray-900 transition-all duration-300 bg-white border border-lime-600 shadow-lg hover:shadow-2xl"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4"/>+380 96-80-55-446
                            </div>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
