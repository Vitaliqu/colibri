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

const stats = [
    {value: "15+", label: "Років досвіду"},
    {value: "5000+", label: "Щасливих пацієнтів"},
    {value: "98%", label: "Задоволені пацієнти"},
    {value: "24/7", label: "Екстрена підтримка"},
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-900 text-white">
            {/* Top stats bar */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div key={stat.label} className={`py-8 px-6 text-center ${i < stats.length - 1 ? "border-r border-gray-800" : ""}`}>
                                <div className="text-3xl font-bold text-lime-400 mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="mb-14">
                    <p className="text-lime-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Чому обирають нас</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Різниця <span className="text-lime-400">Colibri</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-lime-500" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group bg-gray-900 p-8 hover:bg-gray-800 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-gray-800 group-hover:bg-gray-700 rounded flex items-center justify-center mb-5 transition-colors duration-300">
                                <feature.icon className="w-6 h-6 text-lime-400"/>
                            </div>
                            <div className="text-xs font-semibold text-lime-400 tracking-wider uppercase mb-2">
                                {feature.stat}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
