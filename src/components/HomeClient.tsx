'use client';

import React, {useState, useEffect, useRef} from "react";
import {Phone, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function HomeClient() {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055446";
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.05}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-20 bg-gray-900 relative transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Готові трансформувати
                            <span className="block text-lime-400">свою усмішку?</span>
                        </h2>
                        <div className="w-12 h-0.5 bg-lime-500 mb-8"/>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Від профілактики до складного протезування і хірургічних операцій. Ми створюємо здорову та
                            гарну усмішку без стресу та болю. Наша команда досвідчених лікарів використовує сучасне
                            обладнання та індивідуальний підхід до кожного пацієнта. </p>
                        <p className="text-gray-400 mb-10 leading-relaxed text-sm">
                            Запишіться на консультацію сьогодні, щоб отримати повну оцінку стану ваших зубів та
                            рекомендації
                            по лікуванню. Безліч пацієнтів вже обрали нас і залишилися задоволеними результатом.
                            Стоматологічна клініка Колібрі у місті Хуст — перевірений вибір для жителів Закарпаття.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handlePhoneClick}
                                className={`h-12 px-8 cursor-pointer text-sm font-medium tracking-wide transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-transparent text-lime-400 border border-lime-400 hover:bg-gray-800"
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
                                variant="ghost"
                                className="h-12 px-8 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 group"
                            >
                                <Link href="/about" className="flex items-center gap-2">
                                    Про клініку
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:block border-l border-gray-800 pl-16">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ми завжди готові відповісти на ваші запитання та допомогти обрати найкращий варіант
                            лікування.
                            Ваш комфорт і здоров&#39;я – наш головний пріоритет.
                        </p>
                        <div className="mt-8 space-y-4">
                            {["Сучасне обладнання", "Досвідчені лікарі", "Комфортна атмосфера", "Індивідуальний підхід"].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full flex-shrink-0"/>
                                    <span className="text-gray-400 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
