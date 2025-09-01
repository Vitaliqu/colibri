"use client";

import React, {useState} from "react";
import Link from "next/link";
import clinicImage from './clinic.jpg'

import {ArrowRight, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function HeroSection() {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055143";
    };

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${clinicImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Фоновий градієнт поверх фото для кращої читабельності */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 mt-20 gap-6 items-center">
                    <div className="space-y-8 col-span-2 text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                            Ваша ідеальна
                            <span className="block">Усмішка</span>
                            <span>чекає на вас</span>
                        </h1>

                        <p className="text-lg leading-relaxed max-w-lg drop-shadow-sm">
                            Отримайте дбайливий та комплексний стоматологічний догляд, який ставить
                            ваш комфорт на перше місце...
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
                            >
                                <Link href="/about">
                                    Детальніше
                                    <ArrowRight
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </Button>

                            <Button
                                onClick={handlePhoneClick}
                                className={`h-10 md:hidden px-4 cursor-pointer text-lg lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-white hover:bg-gray-100 text-lime-600 border border-lime-600"
                                        : "bg-lime-600 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4"/>+380 96-80-55-143
                                    </div>
                                ) : "Записатися на прийом"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
