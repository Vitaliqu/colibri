"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
} from "lucide-react";
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
            "Покращте свою усмішку за допомогою вінірів, відбілювання та естетичних процедур.",
        image:
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
        color: "from-green-400 to-lime-500",
    },
    {
        title: "Ортодонтія",
        description:
            "Вирівнювання зубів за допомогою традиційних брекетів та сучасних прозорих кап.",
        image:
            "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
        color: "from-lime-500 to-green-400",
    },
    {
        title: "Екстрена допомога",
        description:
            "Негайна стоматологічна допомога у разі потреби, доступна того ж дня.",
        image:
            "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&h=300&q=80",
        color: "from-green-500 to-lime-400",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-8 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-lime-50/30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
                        Комплексний стоматологічний догляд
                        <span className="text-lime-600 block">для будь-яких потреб</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Від регулярних чисток до повного перетворення усмішки – наша команда
                        забезпечує персоналізований догляд з використанням сучасних технологій та методик.
                    </p>
                </div>

                {/* Сітка послуг */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="border-0 bg-white overflow-hidden "
                        >
                            <div className="relative">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        fill
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
                                ></div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 ">
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
                        className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
                    >
                        <Link href="/services">
                            Переглянути всі послуги
                            <ArrowRight className="w-5 h-5 ml-2"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
