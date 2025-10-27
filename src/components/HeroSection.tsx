"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import clinicImage from "./clinic.jpg";
import aboutImageFake from "./fake.jpg";

import {ArrowRight, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function HeroSection() {
    const [fadeOut, setFadeOut] = useState(false);
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055446";
    };

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden">

            {/* Заднє фото */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${aboutImageFake.src})`}}
            ></div>

            {/* Переднє фото з fade-out */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[10000ms] ${
                    fadeOut ? "opacity-0" : "opacity-100"
                }`}
                style={{backgroundImage: `url(${clinicImage.src})`}}
            ></div>

            {/* Темний градієнт */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Контент */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 mt-20 gap-6 items-center">
                    <div className="space-y-8 col-span-2 text-white">
                        <h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg opacity-0 animate-fade-in"
                        >
                            Ваша ідеальна
                            <span className="block animate-fade-in-delay">Усмішка</span>
                            <span className="animate-fade-in-delay2">чекає на вас</span>
                        </h1>

                        <p
                            className="text-lg leading-relaxed max-w-lg drop-shadow-sm opacity-0 animate-fade-in-delay3"
                        >
                            Отримайте дбайливий та комплексний стоматологічний догляд, який ставить
                            ваш комфорт на перше місце
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay4">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group relative overflow-hidden"
                            >
                                <Link href="/about">
                                    <span className="relative z-10 flex items-center">
                                        Детальніше
                                        <ArrowRight
                                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                                    </span>
                                    {/* shimmer ефект */}
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                                </Link>
                            </Button>

                            <Button
                                onClick={handlePhoneClick}
                                className={`h-10 px-6 text-lg lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 animate-pulse-slow"
                                        : "bg-lime-600 border-gray-300 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5"/> +380 96-80-55-446
                                    </div>
                                ) : (
                                    "Записатися на прийом"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
