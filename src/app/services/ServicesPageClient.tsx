'use client';

import React, {useEffect, useState, useRef} from "react";
import Image, {StaticImageData} from "next/image";
import {CheckCircle, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import servicesImage from "@/components/images/services.webp";
import general from "@/components/images/general.webp";
import cosmetic from "@/components/images/cosmetic.webp";
import paradent from "@/components/images/paradent.webp";
import surgery from "@/components/images/surgery.webp";
import orthodental from "@/components/images/orthodental.webp";
import implant from "@/components/images/implant.webp";
import prosthesis from "@/components/images/prosthesis.webp";
import {useSearchParams} from 'next/navigation';

interface Service {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    treatments: string[];
}

function ServiceCard({service, index, visible}: { service: Service; index: number; visible: boolean }) {
    return (
        <div
            id={service.id}
            className={`group bg-white rounded-md border border-gray-200 overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{transitionDelay: `${index * 100}ms`}}
        >
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                    fill
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"/>
            </div>

            {/* Content */}
            <div
                className="p-6 border-t-2 border-transparent group-hover:border-lime-500 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                <div className="space-y-1.5">
                    <h4 className="font-semibold text-gray-700 text-xs uppercase tracking-wider mb-2">
                        Процедури включають:
                    </h4>
                    <ul className="space-y-1.5">
                        {service.treatments.map((treatment) => (
                            <li key={treatment}
                                className="flex items-start text-sm text-gray-500 hover:text-lime-600 transition-colors">
                                <CheckCircle className="w-4 h-4 text-lime-500 mr-2 flex-shrink-0 mt-0.5"/>
                                {treatment}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPageClient() {
    const [heroVisible, setHeroVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const services: Service[] = [
        {
            id: '1',
            title: "Загальна стоматологія та ендодонтія",
            description: "Комплексний догляд за зубами та яснами для дорослих і дітей.",
            image: general,
            treatments: [
                "Професійна чистка",
                "Пломбування зубів",
                "Лікування кореневих каналів",
                "Переліковування раніше лікованих кореневих каналів",
                "Використання стоматологічного мікроскопу",
            ],
        },
        {
            id: '2',
            title: "Косметична стоматологія",
            description: "Сучасні естетичні рішення для створення ідеальної усмішки: від відбілювання до повної трансформації.",
            image: cosmetic,
            treatments: [
                "Відбілювання зубів",
                "Попереднє проектування посмішки",
                "Вініри",
                "Естетична корекція ясен",
            ],
        },
        {
            id: '3',
            title: "Ортодонтія",
            description: "Ефективне та комфортне вирівнювання зубів дорослим і дітям завдяки сучасним методам.",
            image: orthodental,
            treatments: [
                "Традиційні брекети, в тому числі самоліговані",
                "Елайнери",
                "Трейнери",
                "Хайрекси",
                "Ортодонтичні мікроімпланти",
                "Пластинки",
            ],
        },
        {
            id: '4',
            title: "Хірургія порожнини рота",
            description: "Безпечні хірургічні втручання з особливою увагою до вашого комфорту.",
            image: surgery,
            treatments: [
                "Видалення ретинованих зубів",
                "Видалення зубів мудрості",
                "Пластика вуздечки язика і губ",
                "Ясневі пластики",
                "Резекції і кістектомії",
                "Використання п'єзотому",
            ],
        },
        {
            id: '5',
            title: "Лікування ясен, парадонтологія",
            description: "Підтримуйте здоров'я ясен та гігієну порожнини рота.",
            image: paradent,
            treatments: [
                "Професійна гігієнічна чистка зубів",
                "Складання парадонтологічної карти",
                "Під'яснева чистка зубів з використанням гліцину",
                "Кюретаж кишень з допомогою кюрет Грейсі",
                "Використання стоматологічного лазера",
                "Парадонтологічні операції",
                "Диспансерний облік",
            ],
        },
        {
            id: '6',
            title: "Протезування",
            description: "Відновлення функціональності та повернення естетики і впевненості.",
            image: prosthesis,
            treatments: [
                "Мікропротезування",
                "Протезування на імплантах",
                "Використання e-max, оксиду циркона",
                "Адгезивна фіксація коронок, вінірів, вкладок",
                "Попереднє планування протезування з можливістю візуалізації",
                "Використання внутрішньоротового бездротового сканера Megit 700i",
            ],
        },
        {
            id: '7',
            title: "Імплантація",
            description: "Це дивовижна можливість знайти колись втрачене, відновити зубний ряд не псуючи сусідніх зубів, або викинути ваш знімний протез і повернути радість життя",
            image: implant,
            treatments: [
                "Імлантаційна система преміального рівня MIS V3, або середнього MIS C1",
                "Хірургічні шаблони для точного встановлення імплантів",
                "Операції для збільшення об'єму кістки, матеріали фірми \"OsteoBiol\"",
                "Використання п'єзотому",
                "Використання борів \"Densah\"",
                "Збільшення об'єму ясни",
                "Створення зони прикріпленої кератинізованої ясни",
            ],
        },
    ];

    const searchParams = useSearchParams();
    useEffect(() => {
        const targetId = searchParams.get('scrollTo');
        if (!targetId) return;

        // Multiple grids (mobile + desktop) create duplicate IDs in the DOM.
        // getElementById returns the first match, which may be display:none.
        // Pick the element that is actually laid out (offsetParent !== null).
        const findVisible = (id: string): Element | null => {
            const matches = Array.from(document.querySelectorAll(`[id="${id}"]`));
            return (
                matches.find((el) => (el as HTMLElement).offsetParent !== null) ??
                matches[0] ??
                null
            );
        };

        // Retry until the visible element is rendered (handles animation delay).
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            const element = findVisible(targetId);
            if (element && (element as HTMLElement).offsetParent !== null) {
                const top = element.getBoundingClientRect().top + window.scrollY - 128;
                window.scrollTo({top, behavior: 'smooth'});
                clearInterval(interval);
            } else if (attempts >= 20) {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [searchParams]);

    useEffect(() => setHeroVisible(true), []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setServicesVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.05});
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section
                style={{
                    backgroundImage: `url(${servicesImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative min-h-[calc(100vh-4rem)] flex items-center mt-16 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        className={`max-w-2xl text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Послуги
                        </h1>
                        <div className="w-12 h-0.5 bg-lime-500 mb-8"/>
                        <p className="text-white text-base md:text-lg leading-relaxed">
                            Сучасні технології, обладнання та досвід наших лікарів гарантують якість, безпеку й комфорт
                            кожного пацієнта.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section ref={sectionRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14">
                        <p className="text-lime-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Що ми
                            пропонуємо</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Повний спектр стоматологічних послуг
                        </h2>
                        <div className="w-12 h-0.5 bg-lime-500"/>
                    </div>

                    <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <ServiceCard
                                key={s.id}
                                service={s}
                                index={i}
                                visible={servicesVisible}
                            />
                        ))}
                    </div>
                    {/* First 3 — larger */}
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {services.slice(0, 3).map((s, i) => (
                            <ServiceCard key={s.id} service={s} index={i} visible={servicesVisible}/>
                        ))}
                    </div>

                    {/* Last 4 — smaller */}
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {services.slice(3).map((s, i) => (
                            <ServiceCard key={s.id} service={s} index={i + 3} visible={servicesVisible}/>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lime-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                                Записатися на прийом
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Подбайте про свою усмішку
                                <span className="block text-lime-400">вже сьогодні</span>
                            </h2>
                            <div className="w-12 h-0.5 bg-lime-500 mb-6"/>
                            <p className="text-gray-300 leading-relaxed">
                                Запишіться зараз і довірте свій комфорт та усмішку професіоналам.
                            </p>
                        </div>
                        <div className="flex justify-start lg:justify-end">
                            <Button
                                onClick={() => window.location.href = "tel:+380968055446"}
                                className="h-12 px-8 text-sm font-medium bg-lime-600 text-white hover:bg-lime-700 cursor-pointer transition-all duration-300"
                            >
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4"/>+380 96-80-55-446
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
