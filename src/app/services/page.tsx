import React from "react";
import {
    Heart,
    Sparkles,
    Shield,
    Zap,
    Scissors,
    Search,
    Calendar,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        icon: Heart,
        title: "Загальна стоматологія",
        description: "Повний догляд за здоров’ям порожнини рота для всієї родини",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Професійна чистка", "Пломби", "Лікування кореневих каналів", "Видалення зубів", "Лікування ясен"],
        price: "Від $80"
    },
    {
        icon: Sparkles,
        title: "Косметична стоматологія",
        description: "Покращте усмішку за допомогою сучасних естетичних процедур",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Відбілювання зубів", "Вініри з порцеляни", "Бондинг", "Мейковери усмішки", "Корекція ясен"],
        price: "Від $300"
    },
    {
        icon: Shield,
        title: "Ортодонтія",
        description: "Випрямлення зубів за допомогою сучасних ортодонтичних рішень",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80",
            treatments: ["Прозорі капи", "Традиційні брекети", "Ретейнери", "Корекція прикусу", "Ортодонтія для дорослих"],
        price: "Від $2,500"
    },
    {
        icon: Scissors,
        title: "Хірургія порожнини рота",
        description: "Спеціалізовані хірургічні процедури з точністю та турботою",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Імпланти", "Видалення зубів мудрості", "Кісткова пластика", "Сінус-ліфти", "Операції на щелепі"],
        price: "Від $800"
    },
    {
        icon: Search,
        title: "Профілактика",
        description: "Підтримуйте здоров’я порожнини рота за допомогою профілактичних процедур",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=400&q=80",
        treatments: ["Професійна чистка", "Фторування", "Секрети зубів", "Скринінг на рак порожнини рота", "Рентген"],
        price: "Від $60"
    },
    {
        icon: Zap,
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
            <section className="relative py-24 bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        <span>Наші послуги</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Комплексна стоматологія
                        <span className="text-lime-600 block">Послуги</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Від рутинного догляду до складних процедур, наша команда забезпечує повний
                        стоматологічний догляд із використанням новітніх технологій та методик.
                    </p>
                    <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        Запис на консультацію
                    </Button>
                </div>
            </section>

            {/* Сітка послуг */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card
                                key={service.title}
                                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105"
                            >
                                <div className="relative">
                                    <div className="aspect-[3/2] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                                            <service.icon className="w-6 h-6 text-lime-600" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                                            Процедури включають:
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.treatments.slice(0, 3).map((treatment) => (
                                                <li key={treatment} className="flex items-center text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0" />
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

                                    <Button variant="ghost" className="text-lime-600 hover:text-lime-700 p-0 h-auto font-semibold group w-full justify-start">
                                        Дізнатися більше про {service.title}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Секція */}
            <section className="py-20 bg-gradient-to-br from-lime-600 to-green-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Готові розпочати
                        <span className="block">свою стоматологічну подорож?</span>
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Запишіться на консультацію сьогодні та отримайте персоналізований
                        стоматологічний догляд, який ставить комфорт та здоров’я на перше місце.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <Calendar className="w-5 h-5 mr-2" />
                            Дзвоніть (555) 123-4567
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
