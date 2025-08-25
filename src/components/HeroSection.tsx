"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clinicImage from './clinic.jpg'

import { Calendar, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
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
            <div className="absolute top-20 right-10 w-20 h-20 bg-lime-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-1/3 left-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-float-delayed"></div>
            <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-lime-100 rounded-full opacity-25 animate-float-slow"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Контент */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Стоматологія №1 у місті</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                            Ваша ідеальна
                            <span className="text-lime-600 block">Усмішка</span>
                            <span className="text-gray-700">чекає на вас</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Отримайте дбайливий та комплексний стоматологічний догляд, який ставить
                            ваш комфорт на перше місце. Від регулярних чисток до повного
                            перетворення усмішки – ми допоможемо вам досягти здорової та гарної усмішки.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Записатися на прийом
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
                            >
                                <Link href="/about">
                                    Детальніше
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        <div className="flex items-center space-x-8 pt-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">15+</div>
                                <div className="text-sm text-gray-600">Років досвіду</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">5000+</div>
                                <div className="text-sm text-gray-600">Задоволених пацієнтів</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">98%</div>
                                <div className="text-sm text-gray-600">Рівень задоволеності</div>
                            </div>
                        </div>
                    </div>

                    {/* Зображення */}
                    <div className="relative">
                        <div className="aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 rounded-full transform rotate-6 scale-95 opacity-20"></div>
                            <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden">
                                <Image
                                    src={clinicImage}
                                    alt="Сучасний інтер’єр стоматологічної клініки"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                                        <Star className="w-6 h-6 text-lime-600 fill-current" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Рейтинг 4.9/5</div>
                                        <div className="text-sm text-gray-600">за 500+ відгуками</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
