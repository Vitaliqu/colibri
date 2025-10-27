import React from "react";
import {MapPin, Phone, Mail, Clock} from "lucide-react";

export const Footer: React.FC = () => {
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
                            індивідуальним підходом, щоб кожен візит був комфортним та без стресу.
                        </p>
                    </div>


                    {/* Послуги */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-lime-300">Послуги</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li>Загальна стоматологія</li>
                            <li>Косметична стоматологія</li>
                            <li>Ортодонтія</li>
                            <li>Хірургія ротової порожнини</li>
                            <li>Профілактичний догляд</li>
                            <li>Екстрена допомога</li>
                        </ul>
                    </div>

                    {/* Контактна інформація */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-lime-300">Контакти</h4>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"/>
                                <div>
                                    <p>вул. Стоматологічна, 123</p>
                                    <p>Місто Здоров’я, HC 12345</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-lime-400"/>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-lime-400"/>
                                <span>info@colibri.dental</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 h-5 text-lime-400 mt-0.5"/>
                                <div>
                                    <p>Пн-Пт: 08:00 - 18:00</p>
                                    <p>Сб: 09:00 - 15:00</p>
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
