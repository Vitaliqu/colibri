import React from "react";
import {MapPin, Phone, Mail, Clock} from "lucide-react";
import ServiceLink from "@/components/ServiceLink";
import Image from "next/image";
import logo from "./images/logo.png";

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
        <footer className="bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image src={logo} alt="Логотип Колібрі" className="w-12 rounded-full bg-white"/>
                            <div>
                                <h3 className="text-xl font-bold text-white">Колібрі</h3>
                                <p className="text-lime-400 text-xs tracking-wide">Стоматологічна клініка</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Ваша усмішка — це наша пристрасть. щоб кожен ваш візит був комфортним та плідним.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 mb-6">Послуги</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <ServiceLink
                                        targetId={`${service.id}`}
                                        className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {service.name}
                                    </ServiceLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 mb-6">Контакти</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0"/>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    вулиця Пирогова 5а,<br/>Хуст, Закарпатська область, Україна, 90400
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="tel:+380968055446"
                                    className="text-gray-300 text-sm flex flex-row gap-3 hover:text-white transition-colors">
                                    <Phone className="w-4 h-4 text-lime-400 flex-shrink-0"/>
                                    +380 96-80-55-446
                                </a></div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-lime-400 flex-shrink-0"/>
                                <span className="text-gray-300 text-sm">kolibri.khust@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0"/>
                                <div className="text-gray-300 text-sm">
                                    <p>Пн-Пт: 8:00 - 20:00</p>
                                    <p>Сб: 09:00 - 16:00</p>
                                    <p>Нд: Вихідний</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-gray-600 text-xs">
                        © 2025 Колібрі. Всі права захищені.
                    </p>
                </div>
            </div>
        </footer>
    );
};
