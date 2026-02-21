"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <p className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Відгуки пацієнтів</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Що кажуть
                        <span className="text-lime-600"> наші пацієнти</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-lime-500" />
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-gray-200">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-white p-8 hover:bg-gray-50 transition-colors duration-300 group"
                        >
                            <div className="flex items-center mb-5">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>
                                ))}
                            </div>

                            <div className="relative mb-6">
                                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-lime-200"/>
                                <p className="text-gray-600 leading-relaxed text-sm italic pl-5">
                                    {testimonial.content}
                                </p>
                            </div>

                            <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                                <Image
                                    width={200}
                                    height={200}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rating bar */}
                <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-gray-900">4.9</span>
                        <div>
                            <div className="flex gap-0.5 mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current"/>
                                ))}
                            </div>
                            <p className="text-gray-500 text-xs">На основі понад 500 перевірених відгуків</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
