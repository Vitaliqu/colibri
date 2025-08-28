"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clinicImage from './clinic.jpg'

import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
            {/* Фоновий патерн */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            {/* Плаваючі елементи */}
            <div className='hidden md:flex'>
                <div
                    className="absolute top-20 right-10 w-20 h-20 bg-lime-200 rounded-full opacity-20 animate-float"></div>
                <div
                    className="absolute top-1/3 left-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-float-delayed"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-lime-100 rounded-full opacity-25 animate-float-slow"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 mt-20 gap-12 items-center">
                    {/* Контент */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Ваша ідеальна
                            <span className="text-lime-600 block">Усмішка</span>
                            <span className="text-gray-700">чекає на вас</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Отримайте дбайливий та комплексний стоматологічний догляд, який ставить
                            ваш комфорт на перше місце. Від регулярних чисток до повного
                            перетворення усмішки – ми допоможемо вам досягти здорової та гарної усмішки.
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
                        </div>
                    </div>

                    {/* Зображення */}
                    <div className="relative">
                        <div className="aspect-square relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 rounded-full transform rotate-6 scale-95 opacity-20"></div>
                            <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden">
                                <Image
                                    src={clinicImage}
                                    alt="Сучасний інтер’єр стоматологічної клініки"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
