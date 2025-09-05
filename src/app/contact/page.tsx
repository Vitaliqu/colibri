'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "mapbox-gl";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import contactImage from "@/components/contacts.jpg";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_API_KEY;

// ====== Map Component ======
interface ClinicMapProps {
    coordinates: [number, number];
    googleMapsLink: string;
}

function ClinicMap({coordinates}: ClinicMapProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/standard',
            center: coordinates,
            zoom: 16,
            attributionControl: false,
        });

        new mapboxgl.Marker({color: "green"})
            .setLngLat(coordinates)
            .addTo(mapRef.current);

        return () => mapRef.current?.remove();
    }, [coordinates]);

    return <div ref={mapContainerRef} className="h-full w-full"/>;
}

// ====== Main Page ======
export default function ContactPage() {
    const clinicCoordinates: [number, number] = [23.30012078, 48.17384617];

    const contactInfo = [
        {
            icon: MapPin,
            title: "Завітайте до нас",
            details: ["вулиця Пирогова 5а, Хуст, Закарпатська область, Украина, 90400"],
            link: "https://maps.app.goo.gl/92AYKP2QN2CqbX1x6",
            color: "from-lime-400 to-green-500",
        },
        {
            icon: Phone,
            title: "Зателефонуйте нам",
            details: ["+1 (555) 123-4567"],
            color: "from-green-400 to-lime-500",
        },
        {
            icon: Mail,
            title: "Напишіть нам",
            details: ["info@colibri.dental", "appointments@colibri.dental"],
            color: "from-lime-500 to-green-400",
        },
        {
            icon: Clock,
            title: "Години роботи",
            details: ["Пн-Пт: 8:00 - 18:00", "Сб: 9:00 - 15:00", "Нд: вихідний"],
            color: "from-green-500 to-lime-400",
        },
    ];

    const [heroVisible, setHeroVisible] = useState(false);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const [contactsVisible, setContactsVisible] = useState(false);

    // Анімація героя одразу після завантаження
    useEffect(() => {
        setHeroVisible(true);
    }, []);

    // Анімація контактних карток при скролі
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setContactsVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.2});
        if (contactRef.current) observer.observe(contactRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section style={{
                backgroundImage: `url(${contactImage.src})`,
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
                            Контакт <span className="">Colibri</span>
                        </h1>
                        <p className="text-sm md:text-xl h-auto mt-2 leading-relaxed mb-8">
                            Ми готові допомогти вам із будь-якими стоматологічними потребами. Звертайтеся, щоб
                            записатися на прийом, поставити питання або дізнатися більше про наші послуги.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section ref={contactRef} className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-16">
                        {contactInfo.map((info, i) => (
                            <Card
                                key={info.title}
                                className={`group shadow-lg bg-white mx-8 md:mx-0 transition-all duration-700 transform ${contactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{transitionDelay: `${i * 150}ms`}}
                            >
                                <CardContent className="p-8">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                                    >
                                        <info.icon className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                                    <div className="space-y-2">
                                        {info.details.map((detail, j) =>
                                            info.link ? (
                                                <p key={j} className="text-gray-600">
                                                    <a
                                                        href={info.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:underline"
                                                    >
                                                        {detail}
                                                    </a>
                                                </p>
                                            ) : (
                                                <p key={j} className="text-gray-600">{detail}</p>
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="h-[400px] md:h-[600px] mx-8 rounded-lg relative overflow-hidden shadow-lg">
                        <ClinicMap coordinates={clinicCoordinates} googleMapsLink=""/>
                        <Button
                            className={'absolute right-2 top-2 bg-lime-600 text-white hover:bg-lime-700 h-10 px-4 cursor-pointer text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300'}>
                            <a target="_blank" className={'absolute w-full h-full'}
                               href={'https://maps.app.goo.gl/TxLQPMqRmQgLQa8XA'}/> Перейти на карту
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
