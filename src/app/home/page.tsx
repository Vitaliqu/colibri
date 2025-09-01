'use client'
import React, {useState} from "react";
import {
    Shield,
    Phone,
    Clock,
    MapPin
} from "lucide-react";
import {Button} from "@/components/ui/button";
import HeroSection from "../../components/HeroSection";
import ServicesPreview from "../../components/ServicesPreview";

export default function Home() {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055143";
    };
    return (
        <div className="overflow-hidden mt-10">
            <HeroSection/>
            <ServicesPreview/>

            {/* CTA Секція */}
            <section className="py-20 bg-gradient-to-br from-lime-50 via-white to-green-50 relative">
                <div className="absolute inset-0 opacity-50">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2384cc16' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="flex justify-center text-center  px-4 sm:px-6 lg:px-8 relative">
                    <div
                        className="transform w-full transition-all mx- flex justify-center flex-col items-center  duration-1000 translate-y-0 opacity-100">
                        <h2 className="text-3xl md:text-5xl font-bold -mt-8 md:mt-16 text-gray-900 mb-6">
                            Готові трансформувати
                            <span className="text-lime-600"><br/> свою усмішку?</span>
                        </h2>
                        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Запишіться на консультацію сьогодні та дізнайтеся, чому тисячі пацієнтів
                            довіряють Colibri Dental для свого догляду за порожниною рота.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-12">
                            <Button
                                onClick={handlePhoneClick}
                                className={`h-10 md:hidden px-4 cursor-pointer text-lg lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-white hover:bg-gray-100 text-lime-600 border border-lime-600"
                                        : "bg-lime-600 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? <div className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4"/>+380 96-80-55-143
                                </div> : "Записатися на прийом"}
                            </Button>
                        </div>

                        <div className="grid grid-cols-1  w-fit justify-start items-start md:grid-cols-3 gap-8 mt-16">
                            <div className="flex items-center justify-center space-x-3 text-gray-600">
                                <Clock className="w-6 h-6 text-lime-600"/>
                                <div className="text-left">
                                    <p className="font-semibold">Прийом у той же день</p>
                                    <p className="text-sm">Доступно у разі невідкладних ситуацій</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-3 text-gray-600">
                                <Shield className="w-6 h-6 text-lime-600"/>
                                <div className="text-left">
                                    <p className="font-semibold">Приймаємо страхування</p>
                                    <p className="text-sm">Більшість основних планів приймаються</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start space-x-3 text-gray-600">
                                <MapPin className="w-6 h-6 text-lime-600"/>
                                <div className="text-left">
                                    <p className="font-semibold">Зручне розташування</p>
                                    <p className="text-sm">Легке паркування доступне</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
