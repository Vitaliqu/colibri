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

export default function ContactPage() {
    const clinicCoordinates: [number, number] = [23.30012078, 48.17384617];
    const [heroVisible, setHeroVisible] = useState(false);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const [contactsVisible, setContactsVisible] = useState(false);

    useEffect(() => {
        setHeroVisible(true);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setContactsVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.05});
        if (contactRef.current) observer.observe(contactRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section
                style={{
                    backgroundImage: `url(${contactImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                }}
                className="relative min-h-[calc(100vh)] flex items-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`space-y-8 text-white transition-all duration-1000 ${
                            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                            Контакти <span className="text-lime-400">Колібрі</span>
                        </h1>
                        <p className="text-sm md:text-lg leading-relaxed max-w-2xl">
                            Ми готові допомогти вам із будь-якими стоматологічними потребами. Звертайтеся, щоб
                            записатися на прийом або отримати консультацію.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section ref={contactRef} className="py-12 bg-white">
                <div
                    className="w-[90%] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:grid lg:grid-cols-5 gap-8">
                    {/* Основна інформація */}
                    <Card
                        className={`shadow-lg lg:col-span-3 h-[32rem] overflow-hidden transition-all duration-700 transform ${
                            contactsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <CardContent className="p-0 relative h-full">
                            <ClinicMap coordinates={clinicCoordinates} googleMapsLink=""/>
                            <Button
                                className="absolute right-2 top-2 bg-lime-600 text-white hover:bg-lime-700 shadow-lg"
                            >
                                <a
                                    href="https://maps.app.goo.gl/TxLQPMqRmQgLQa8XA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 w-full h-full"
                                />
                                Перейти на карту
                            </Button>
                        </CardContent>
                    </Card>
                    <Card
                        className={`shadow-lg col-span-2 h-[32rem] transition-all py-6 duration-700 transform ${
                            contactsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >

                        <CardContent className="h-full flex flex-col justify-between">
                            <div className="flex items-start space-x-3">
                                <p className="font-semibold text-2xl text-slate-900"> Контактна інформація</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 shrink-0 text-lime-600 mt-1"/>
                                <div>
                                    <p className="font-medium text-slate-900">Телефон</p>
                                    <p className="text-slate-600">+380 96-80-55-446</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 shrink-0 h-5 text-lime-600 mt-1"/>
                                <div>
                                    <p className="font-medium text-slate-900">Email</p>
                                    <p className="text-slate-600">info@colibri.dental</p>
                                    <p className="text-slate-600">appointments@colibri.dental</p>
                                    <p className="text-slate-500 text-sm">Відповідаємо протягом 24 годин</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 shrink-0 h-5 text-lime-600 mt-1"/>
                                <div>
                                    <p className="font-medium text-slate-900">Адреса</p>
                                    <p className="text-slate-600">
                                        вулиця Пирогова 5а, Хуст, Закарпатська область, Україна, 90400
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 shrink-0 h-5 text-lime-600 mt-1"/>
                                <div>
                                    <p className="font-medium text-slate-900">Години роботи</p>
                                    <p className="text-slate-600">Пн-Пт: 8:00 - 20:00</p>
                                    <p className="text-slate-600">Сб: 9:00 - 16:00</p>
                                    <p className="text-slate-600">Нд: вихідний</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Карта */}

                </div>
            </section>
        </div>
    );
}
