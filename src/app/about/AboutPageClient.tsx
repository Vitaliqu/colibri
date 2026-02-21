'use client';

import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import aboutImage from "@/components/images/about.webp";
import Svetlana from "@/components/images/Viktoria.webp";
import Olexander from "@/components/images/Olexander.webp";
import Olga from "@/components/images/Olga.webp";

export default function AboutPageClient() {
    const [heroVisible, setHeroVisible] = useState(false);
    const teamRef = useRef<HTMLDivElement | null>(null);
    const [teamVisible, setTeamVisible] = useState(false);

    const teamMembers = [
        {
            name: "Олександр Щербан",
            role: "Головний лікар і власник кліники",
            image: Olexander,
            specialties: ["Хірургія", "Протезування"],
            bio: "Закінчив стомат факультет Донецького медичного університету, досвід, наполегливість і постійне навчання.",
        },
        {
            name: "Ольга Щербан",
            role: "Ортодонт",
            image: Olga,
            specialties: ["Дитяча стоматологія", "Корекція положення зубів у дорослих і дітей"],
            bio: "Закінчила стомат факультет Донецького медичного університету, любить вирівнювати зуби і кататися на велосипеді. За сумісництвом, дружина головного лікаря.",
        },
        {
            name: "Юлія Химишинець",
            role: "Парадонтолог, Ендодонтист",
            image: Svetlana,
            specialties: ["Лікування ясен", "Терапія кореневих каналів під мікроскопом"],
            bio: "Закінчила стоматфакультет Ужгородського університету, полюбляє працювати під мікроскопом і відбілювати зуби.",
        },
    ];

    useEffect(() => {
        setHeroVisible(true);
    }, []);

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
        <>
            <div className="min-h-screen bg-white">

                {/* Герой-секція */}
                <section style={{
                    backgroundImage: `url(${aboutImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                }}
                         className="relative min-h-[calc(100vh-4rem)] flex justify-center mt-16 flex-col overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div
                            className={`max-w-3xl text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                                Ваша усмішка — наша
                                <span className="block text-lime-400">Пристрасть</span>
                            </h1>
                            <div className="w-12 h-0.5 bg-lime-500 mb-8"/>
                            <p className="text-sm md:text-lg text-white leading-relaxed">
                                З дня відкриття у 2019му році лікарі стоматологічна клініка &#34;Колібрі&#34; змінює усмішки та життя наших поцієнтів
                                завдяки турботливому та сучасному лікуванню. Наша місія проста: надавати виняткові
                                стоматологічні послуги у теплій та привітній атмосфері. Тому всі наші лікарі працюють з
                                3-х, або 5-ти кратним збільшенням і якісним освітленням фірми &#34;Univet&#34;, що
                                дозволяє
                                підняти якість послуг на принципово вищий рівень. Також усі лікарі проходять
                                систематичне стоматологічне навчання у кращих лекторів Європи та України. Окрім того,
                                наша клініка обладнана потужним дизельним генератором, що дає додаткову впевненість
                                нашим лікарям та пацієнтам.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Наша команда */}
                <section id={'doctors'} ref={teamRef} className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            className={`mb-14 transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Наші
                                лікарі</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                                Познайомтеся з нашою
                                <span className="text-lime-600"> командою</span>
                            </h2>
                            <div className="w-12 h-0.5 bg-lime-500"/>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
                            {teamMembers.map((member, i) => (
                                <Card
                                    key={member.name}
                                    className={`group bg-white border-0 overflow-hidden transition-all duration-700 rounded-md ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{transitionDelay: `${i * 150}ms`}}
                                >
                                    <div className="relative">
                                        <div className="relative aspect-3/4 overflow-hidden">
                                            <Image
                                                fill
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-top object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/0"/>
                                        </div>
                                    </div>

                                    <CardContent className="p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-lime-600 text-sm font-medium mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                            {member.bio}
                                        </p>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900 text-xs tracking-wider uppercase">Спеціалізації:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map((specialty) => (
                                                    <span
                                                        key={specialty}
                                                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1"
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
        </>
    );
}
