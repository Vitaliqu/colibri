"use client";

import React from "react";
import {
    Award,
    Users,
    Clock,
    Shield,
    Heart,
    Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: Award,
        title: "Експертні стоматологи",
        description: "Сертифіковані спеціалісти з понад 15-річним досвідом",
        stat: "15+ Років"
    },
    {
        icon: Users,
        title: "Індивідуальний підхід",
        description: "Персоналізовані плани лікування для ваших унікальних потреб",
        stat: "5000+ Пацієнтів"
    },
    {
        icon: Clock,
        title: "Гнучкий графік",
        description: "Прийом вечорами та у вихідні для вашої зручності",
        stat: "7 Днів на тиждень"
    },
    {
        icon: Shield,
        title: "Сучасні технології",
        description: "Сучасне обладнання для точного та комфортного лікування",
        stat: "Новітнє обладнання"
    },
    {
        icon: Heart,
        title: "Комфорт понад усе",
        description: "Дбайливий підхід із варіантами седативного лікування без стресу",
        stat: "Безболісно"
    },
    {
        icon: Star,
        title: "Перевірені результати",
        description: "98% задоволених пацієнтів з відмінними результатами",
        stat: "98% Задоволених"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gradient-to-br from-lime-50 via-white to-green-50 relative">
            <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.03'%3E%3Cpath d='M40 40c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-32 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Heart className="w-4 h-4" />
                        <span>Чому обирають Колібрі</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Різниця <span className="text-lime-600">Colibri</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ми поєднуємо сучасні стоматологічні технології з теплим та персональним підходом,
                        щоб забезпечити відмінний догляд і перевершити ваші очікування під час кожного візиту.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="group bg-white/80 backdrop-blur border-0 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="p-8 relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-8 h-8 text-lime-600" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-600 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <span className="text-sm font-semibold text-lime-600 bg-lime-50 px-2 py-1 rounded-full">
                                                {feature.stat}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-white/80 backdrop-blur rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-lime-600 mb-2">15+</div>
                                <div className="text-gray-600 font-medium">Років досвіду</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-lime-600 mb-2">5000+</div>
                                <div className="text-gray-600 font-medium">Щасливих пацієнтів</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-lime-600 mb-2">98%</div>
                                <div className="text-gray-600 font-medium">Задоволені пацієнти</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-lime-600 mb-2">24/7</div>
                                <div className="text-gray-600 font-medium">Екстрена підтримка</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
