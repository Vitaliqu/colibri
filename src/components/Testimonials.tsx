"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Сара Джонсон",
        role: "Маркетинг-менеджер",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
        content: "Доктор Мартінес та команда Колібрі повністю змінили мою усмішку. Процес був комфортним, а результат перевершив мої очікування. Тепер я впевнено посміхаюся!",
        rating: 5
    },
    {
        name: "Майкл Чен",
        role: "Програміст",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        content: "Я все життя боявся стоматологів, але Колібрі змінили все. Їх дбайливий підхід та сучасні технології зробили моє лікування повністю безболісним. Дуже рекомендую!",
        rating: 5
    },
    {
        name: "Емма Родрігес",
        role: "Вчителька",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
        content: "Ортодонтичне лікування тут було чудовим. Прозорі капи виправили мої зуби без проблем із традиційними брекетами. Персонал професійний і уважний.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Quote className="w-4 h-4" />
                        <span>Відгуки пацієнтів</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Що кажуть
                        <span className="text-lime-600"> наші пацієнти</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Не вірте лише на слово. Ось що кажуть справжні пацієнти про свій досвід у стоматологічній клініці Колібрі.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.name}
                            className="bg-gradient-to-br from-white to-lime-50/30 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime-200/20 to-green-200/20 rounded-full transform translate-x-16 -translate-y-16"></div>
                            <CardContent className="p-8 relative">
                                <div className="flex items-center mb-6">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <div className="relative mb-6">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-lime-200" />
                                    <p className="text-gray-700 leading-relaxed italic pl-6">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-4 ring-lime-100"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-lime-50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Star className="w-6 h-6 text-yellow-400 fill-current" />
                            <span className="text-3xl font-bold text-gray-900">4.9</span>
                            <span className="text-gray-600">з 5</span>
                        </div>
                        <p className="text-gray-600 mb-2">На основі понад 500 перевірених відгуків пацієнтів</p>
                        <div className="flex justify-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
