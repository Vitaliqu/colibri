'use client'
import React from "react";
import Image from "next/image";
import {CheckCircle, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Card, CardContent
} from "@/components/ui/card";

const services = [
    {
        title: "Загальна стоматологія",
        description: "Повний догляд за здоров’ям порожнини рота для всієї родини",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Професійна чистка", "Пломби", "Лікування кореневих каналів", "Видалення зубів", "Лікування ясен"],
        price: "Від $80"
    },
    {
        title: "Косметична стоматологія",
        description: "Покращте усмішку за допомогою сучасних естетичних процедур",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Відбілювання зубів", "Вініри з порцеляни", "Бондинг", "Мейковери усмішки", "Корекція ясен"],
        price: "Від $300"
    },
    {
        title: "Ортодонтія",
        description: "Випрямлення зубів за допомогою сучасних ортодонтичних рішень",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Прозорі капи", "Традиційні брекети", "Ретейнери", "Корекція прикусу", "Ортодонтія для дорослих"],
        price: "Від $2,500"
    },
    {
        title: "Хірургія порожнини рота",
        description: "Спеціалізовані хірургічні процедури з точністю та турботою",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Імпланти", "Видалення зубів мудрості", "Кісткова пластика", "Сінус-ліфти", "Операції на щелепі"],
        price: "Від $800"
    },
    {
        title: "Профілактика",
        description: "Підтримуйте здоров’я порожнини рота за допомогою профілактичних процедур",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Професійна чистка", "Фторування", "Секрети зубів", "Скринінг на рак порожнини рота", "Рентген"],
        price: "Від $60"
    },
    {
        title: "Екстрена допомога",
        description: "Негайна стоматологічна допомога, коли вона потрібна найбільше",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Полегшення зубного болю", "Відновлення зламаного зуба", "Заміна пломби", "Травми зубів", "Післяробоча допомога"],
        price: "Від $150"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Герой-секція */}
            <section className="relative py-16 bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-7xl mt-16 md:mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className
                            ="text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-lime-600 block">Послуги</span>
                    </h1>
                    <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed md:mb-10">
                        Від рутинного догляду до складних процедур, наша команда забезпечує повний
                        стоматологічний догляд із використанням новітніх технологій та методик.
                    </p>
                </div>
            </section>

            {/* Сітка послуг */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card
                                key={service.title}
                                className="group bg-white border-0 overflow-hidden transform"
                            >
                                <div className="relative">
                                    <div className="aspect-[3/2] overflow-hidden">
                                        <Image
                                            fill
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4">
                                    </div>

                                    <div className="absolute bottom-4 right-4 opacity-0">
                                        <span
                                            className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-8">
                                    <h3 className="md:text-2xl font-bold text-gray-900 mb-3 ">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                                            Процедури включають:
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.treatments.slice(0, 3).map((treatment) => (
                                                <li key={treatment} className="flex items-center text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0"/>
                                                    {treatment}
                                                </li>
                                            ))}
                                            {service.treatments.length > 3 && (
                                                <li className="text-sm text-gray-500 italic">
                                                    +{service.treatments.length - 3} інших процедур...
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Секція */}
            <section className="py-20 bg-gradient-to-br from-lime-600
            to-green-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Готові розпочати
                        <span className="block">свою стоматологічну подорож?</span>
                    </h2>
                    <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Запишіться на консультацію сьогодні та отримайте персоналізований
                        стоматологічний догляд, який ставить комфорт та здоров’я на перше місце.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => window.location.href = "tel:+380968055143"}
                            className={`w-full py-2 text-sm hover:bg-gray-100 text-gray-900 transition-all duration-300 bg-white border border-lime-600`}
                        >
                            <div className="flex cursor-pointer items-center justify-center gap-2">
                                <Phone className="w-4 h-4"/>+380 96-80-55-143
                            </div>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
