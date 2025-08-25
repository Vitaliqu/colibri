"use client"
import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Calendar,
    Send,
    CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Імітація відправки форми
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Скидання форми після успіху
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Завітайте до нас",
            details: ["123 Dental Street", "Health City, HC 12345"],
            color: "from-lime-400 to-green-500"
        },
        {
            icon: Phone,
            title: "Зателефонуйте нам",
            details: ["+1 (555) 123-4567", "Невідкладні випадки: +1 (555) 987-6543"],
            color: "from-green-400 to-lime-500"
        },
        {
            icon: Mail,
            title: "Напишіть нам",
            details: ["info@colibri.dental", "appointments@colibri.dental"],
            color: "from-lime-500 to-green-400"
        },
        {
            icon: Clock,
            title: "Години роботи",
            details: ["Пн-Пт: 8:00 - 18:00", "Сб: 9:00 - 15:00", "Нд: вихідний"],
            color: "from-green-500 to-lime-400"
        }
    ];

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
                        <Mail className="w-4 h-4" />
                        <span>Зв’яжіться з нами</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Контакт
                        <span className="text-lime-600"> Colibri</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Ми готові допомогти вам із будь-якими стоматологічними потребами. Звертайтеся, щоб записатися на прийом,
                        поставити питання або дізнатися більше про наші послуги.
                    </p>
                    <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        Записатися на прийом
                    </Button>
                </div>
            </section>

            {/* Картки контактної інформації */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info) => (
                            <Card
                                key={info.title}
                                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105 text-center"
                            >
                                <CardContent className="p-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {info.title}
                                    </h3>
                                    <div className="space-y-2">
                                        {info.details.map((detail, i) => (
                                            <p key={i} className="text-gray-600">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Карта та форма контакту */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Заглушка карти */}
                        <Card className="bg-white border-0 shadow-lg overflow-hidden">
                            <div className="h-full min-h-[600px] min-w-full w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-br w-full from-lime-100 to-green-100 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <MapPin className="w-16 h-16 text-lime-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Завітайте до нашої клініки
                                        </h3>
                                        <div className="space-y-2 text-gray-600">
                                            <p className="font-semibold">123 Dental Street</p>
                                            <p>Health City, HC 12345</p>
                                            <p className="text-sm mt-4">
                                                Зручне розташування з безкоштовною парковкою
                                            </p>
                                        </div>
                                        <Button className="mt-6 bg-lime-600 hover:bg-lime-700">
                                            Як дістатися
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
