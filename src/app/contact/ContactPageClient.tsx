'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import {MapPin, Phone, Mail, Clock} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import viberLogo from "@/components/images/viber.png"
import contactImage from "@/components/images/contacts.webp";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_API_KEY ?? "";

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
            style: "mapbox://styles/mapbox/standard",
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

export default function ContactPageClient() {
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
            {/* Hero */}
            <section
                style={{
                    backgroundImage: `url(${contactImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
                className="relative min-h-[calc(100vh-4rem)] flex items-center mt-16 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`max-w-2xl text-white transition-all duration-1000 ${
                            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="text-4xl md:text-6xl font-bold mb-6">
                            Контакти <span className="text-lime-400">Колібрі</span>
                        </div>
                        <div className="w-12 h-0.5 bg-lime-500 mb-8"/>
                        <p className="text-white leading-relaxed">
                            Ми готові допомогти вам із будь-якими стоматологічними потребами.
                            Звертайтеся, щоб записатися на прийом або отримати консультацію.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section ref={contactRef} className="py-16 bg-white">
                <div
                    className="w-[90%] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:grid lg:grid-cols-5 gap-8">
                    {/* Map */}
                    <Card
                        className={`shadow-sm lg:col-span-3 h-[32rem] overflow-hidden border border-gray-200 transition-all duration-700 transform rounded-none ${
                            contactsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <CardContent className="p-0 relative h-full">
                            <ClinicMap coordinates={clinicCoordinates} googleMapsLink=""/>
                            <Button
                                className="absolute right-3 top-3 bg-gray-900 text-white hover:bg-gray-800 text-xs rounded-none shadow-md">
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

                    {/* Contact Info */}
                    <Card
                        className={`shadow-sm col-span-2 border border-gray-200 transition-all duration-700 transform rounded-none ${
                            contactsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <CardContent className="p-8 h-full flex flex-col justify-between gap-6">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-600 mb-2">
                                    Де нас знайти
                                </p>
                                <p className="font-bold text-2xl text-gray-900">
                                    Контактна інформація
                                </p>
                                <div className="w-8 h-0.5 bg-lime-500 mt-3"/>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 shrink-0 text-lime-600 mt-0.5"/>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Телефон</p>
                                    <p className="text-gray-500 text-sm mb-3">+380 96-80-55-446</p>
                                    <div className="flex items-center gap-2">
                                        {/* Telegram */}
                                        <a
                                            href="https://t.me/+380968055446"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Telegram"
                                            className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-80"
                                            style={{backgroundColor: "#2AABEE"}}
                                        >
                                            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                                <path
                                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                            </svg>
                                        </a>
                                        {/* WhatsApp */}
                                        <a
                                            href="https://wa.me/380968055446"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="WhatsApp"
                                            className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-80"
                                            style={{backgroundColor: "#25D366"}}
                                        >
                                            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                                <path
                                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                                            </svg>
                                        </a>
                                        {/* Viber */}
                                        <a
                                            href="viber://add?number=380968055446"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Viber"
                                            className="flex items-center justify-center size-7 rounded-full transition-opacity hover:opacity-80">
                                            <Image alt={"viber"} width={128} height={128} src={viberLogo} className=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="w-5 shrink-0 h-5 text-lime-600 mt-0.5"/>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Email</p>
                                    <p className="text-gray-500 text-sm">kolibri.khust@gmail.com</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Відповідаємо протягом 24 годин</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 shrink-0 h-5 text-lime-600 mt-0.5"/>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Адреса</p>
                                    <p className="text-gray-500 text-sm">
                                        вулиця Пирогова 5а, Хуст, Закарпатська область, Україна, 90400
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-5 shrink-0 h-5 text-lime-600 mt-0.5"/>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">Години роботи</p>
                                    <p className="text-gray-500 text-sm">Пн-Пт: 8:00 - 20:00</p>
                                    <p className="text-gray-500 text-sm">Сб: 9:00 - 16:00</p>
                                    <p className="text-gray-500 text-sm">Нд: вихідний</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
