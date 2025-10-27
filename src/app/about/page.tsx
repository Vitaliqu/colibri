'use client'
import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import aboutImage from "@/components/about.jpg";
import Svetlana from "../../components/Viktoria.jpg";
import Olexander from "../../components/Olexander.jpg";
import Olga from "../../components/Olga.jpg";


export default function AboutPage() {
    const [heroVisible, setHeroVisible] = useState(false);
    const valuesRef = useRef<HTMLDivElement | null>(null);
    const teamRef = useRef<HTMLDivElement | null>(null);
    const [teamVisible, setTeamVisible] = useState(false);


    const teamMembers = [
        {
            name: "Олександр Щербан",
            role: "Головний лікар і власник кліники",
            image: Olexander,
            specialties: ["Хірургія", "Ортопедія"],
            bio: "Закінчив стомат факультет Донецького медичного університету, досвід, наполегливість іпостійне навчання."
        },
        {
            name: "Ольга Щербан",
            role: "Ортодонт",
            image: Olga,
            specialties: ["дитяча стоматологія", "Ортодонтія"],
            bio: "Закінчила стомат факультет Донецького медичного університету, любить вирівнювати зуби і кататися на велосипеді. За сумісництвом, дружина головного лікаря."
        },
        {
            name: "Юлія Химишинець",
            role: "Щелепно-лицевий хірург",
            image: Svetlana,
            specialties: ["Парадонтолог", "Ендоентист"],
            bio: "Закінчила стоматфакультет Ужгородського університету , полюбляє працювати під мікроскопом і відбілювати зуби."
        }
    ];
    // Анімація героя одразу після завантаження
    useEffect(() => {
        setHeroVisible(true);
    }, []);

    // IntersectionObserver для цінностей
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect();
            }
        }, {threshold: 0.1});
        if (valuesRef.current) observer.observe(valuesRef.current);
    }, []);

    // IntersectionObserver для команди
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTeamVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.05});
        if (teamRef.current) observer.observe(teamRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-white">

            {/* Герой-секція */}
            <section style={{
                backgroundImage: `url(${aboutImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
                     className="relative min-h-[calc(100vh-4.5rem)] flex justify-center mt-18 flex-col overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        className={`space-y-8 col-span-2 text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                            Ваша усмішка — наша
                            <span className="block">Пристрасть</span>
                        </h1>
                        <p className="text-sm md:text-xl h-auto mt-2 leading-relaxed mb-8">
                            Вже понад 6 років стоматологічна клініка Колібрі змінює усмішки
                            та життя завдяки турботливому та сучасному лікуванню. Нашамісія проста: надавати виняткові
                            стоматологічні послуги у теплійта привітній атмосфері. Тому всі наші лікарі працюють з
                            3хкратним, або 5-ти кратним збільшенням і якісним освітленнямфірми &#34;Univet&#34;, що
                            дозволяє
                            підняти якість послуг на принципововищий рівень. Також усі лікарі проходять
                            періодичнестоматологічне навчання у кращих лекторів Європи та України.
                        </p>
                    </div>
                </div>
            </section>

            {/* Наша команда */}
            <section id={'doctors'} ref={teamRef}
                     className="py-8 md:py-24 flex w-full justify-center items-center bg-gradient-to-br from-lime-50 via-white to-green-50">
                <div className="max-w-8xl flex flex-col items-center mx-auto md:gap-6 sm:px-6 px-8">
                    <div
                        className={`text-center mb-8 transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Познайомтеся з нашою
                            <span className="text-lime-600"> командою</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Наші досвідчені фахівці віддані наданню виняткової стоматологічної допомоги з ніжним та
                            індивідуальним підходом.
                        </p>
                    </div>

                    <div className="grid  md:p-10 w-full md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <Card
                                key={member.name}
                                className={`group mx-2 md:mx-0 bg-white/80 backdrop-blur transition-all border-0 overflow-hidden transform duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{transitionDelay: `${i * 150}ms`}}
                            >
                                <div className="relative">
                                    <div className="aspect-6/7 overflow-hidden">
                                        <Image
                                            fill
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <CardContent className="p-8 flex flex-col justify-between w-full h-full">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-lime-600 font-semibold mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900 text-sm">Спеціалізації:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialties.map((specialty) => (
                                                <span
                                                    key={specialty}
                                                    className="bg-lime-100 text-lime-800 text-xs px-3 py-1 rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
