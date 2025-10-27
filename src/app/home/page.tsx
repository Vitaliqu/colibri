'use client'
import React, {useState, useEffect, useRef} from "react";
import {
    Phone,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import HeroSection from "../../components/HeroSection";
import ServicesPreview from "../../components/ServicesPreview";

export default function Home() {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055446";
    };

    // ефект появи при скролі
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
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);

    return (
        <div className="overflow-hidden mt-18">
            <HeroSection/>
            <ServicesPreview/>

            {/* CTA Секція */}
            <section
                ref={sectionRef}
                className={`py-10 bg-gradient-to-br from-lime-50 via-white to-green-50 relative transform transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            >
                <div className="absolute inset-0 opacity-50">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2384cc16' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="flex justify-center text-center px-4 sm:px-6 lg:px-8 relative">
                    <div className="w-full mx-auto flex justify-center flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold mt-6 md:mt-16 text-gray-900 mb-6 mt56 animate-fade-in">
                            Готові трансформувати
                            <span className="text-lime-600 block">свою усмішку?</span>
                        </h2>
                        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
                            Запишіться на консультацію сьогодні та дізнайтеся, чому тисячі пацієнтів
                            довіряють Колібрі.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-12">
                            <Button
                                onClick={handlePhoneClick}
                                className={`h-12 px-6 cursor-pointer text-lg rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
                                ${isPhoneOpen
                                    ? "bg-white hover:bg-gray-100 text-lime-600 border border-lime-600"
                                    : "bg-lime-600 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5"/>+380 96-80-55-446
                                    </div>
                                ) : "Записатися на прийом"}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
