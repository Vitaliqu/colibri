import React from "react";
import {MapPin, Phone, Mail, Clock} from "lucide-react";
import ServiceLink from "@/components/ServiceLink";

export const Footer: React.FC = () => {
    const services = [
        {name: "Загальна стоматологія та ендодонтія", id: 1},
        {name: "Косметична стоматологія", id: 2},
        {name: "Ортодонтія", id: 3},
        {name: "Хірургія порожнини рота", id: 4},
        {name: "Лікування ясен, парадонтологія", id: 5},
        {name: "Протезування", id: 6},
        {name: "Імплантація", id: 7},
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-lime-900 opacity-90"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Бренд */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold">Колібрі</h3>
                                <p className="text-lime-300 text-sm">Стоматологічна клініка</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Ваша усмішка — наша пристрасть. Отримайте професійний стоматологічний догляд з турботою та
                            індивідуальним підходом, щоб кожен візит був комфортним та плідним.
                        </p>
                    </div>


                    {/* Послуги */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-lime-300">Послуги</h4>
                        <ul className="space-y-3 text-gray-300">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <ServiceLink targetId={`${service.id}`}>{service.name}</ServiceLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Контактна інформація */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-lime-300">Контакти</h4>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"/>
                                <div>
                                    <p>вулиця Пирогова 5а, </p>
                                    <p>Хуст, Закарпатська область, Україна, 90400</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-lime-400"/>
                                <span>+380 96-80-55-446</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-lime-400"/>
                                <span>kolibri.khust@gmail.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 h-5 text-lime-400 mt-0.5"/>
                                <div>
                                    <p>Пн-Пт: 8:00 - 20:00</p>
                                    <p>Сб: 09:00 - 16:00</p>
                                    <p>Нд: Вихідний</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Колібрі. Всі права захищені.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
