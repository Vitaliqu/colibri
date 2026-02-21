"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import clinicImage from "./images/clinic.webp";
import aboutImageFake from "./images/fake.webp";

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
        <section className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">

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

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Контент */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 opacity-0 animate-fade-in">
                        Ваша ідеальна
                        <span className="block text-lime-400 animate-fade-in-delay">Усмішка</span>
                        <span className="block animate-fade-in-delay2">чекає на вас</span>
                    </h1>

                    <div className="w-16 h-0.5 bg-lime-500 mb-8 opacity-0 animate-fade-in-delay2"></div>

                    <p className="text-lg text-white max-w-xl mb-10 opacity-0 animate-fade-in-delay3">
                        Отримайте дбайливий та комплексний стоматологічний догляд, де якість стоїть на першому
                        місті.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay4">
                        <Button
                            onClick={handlePhoneClick}
                            className={`h-12 px-8 text-base font-medium cursor-pointer shadow-lg transition-all duration-300 ${
                                isPhoneOpen
                                    ? "bg-transparent hover:bg-white/10 text-white border border-white"
                                    : "bg-lime-600 text-white hover:bg-lime-700"
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

                        <Button
                            asChild
                            variant="outline"
                            className="h-12 px-8 text-base font-medium border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white group"
                        >
                            <Link href="/about">
                                Детальніше
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
