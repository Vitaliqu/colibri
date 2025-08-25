"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../components/logo.png'
import { usePathname } from "next/navigation";
import {
    Menu,
    Phone,
    Mail,
    Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navigationItems = [
    { title: "Головна", url: "/home" },
    { title: "Послуги", url: "/services" },
    { title: "Про нас", url: "/about" },
    { title: "Контакти", url: "/contact" }
];

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Логотип */}
                    <Link href="/home" className="flex items-center group">
                        <div className="relative">
                            <Image className={'w-20 -mr-2'} src={logo} alt={"Логотип"} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Colibri</h1>
                            <p className="text-xs text-lime-600 font-medium">Стоматологічна клініка</p>
                        </div>
                    </Link>

                    {/* Навігація для десктопу */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                                    pathname === item.url
                                        ? "text-lime-600"
                                        : "text-gray-600 hover:text-lime-600"
                                }`}
                            >
                                {item.title}
                                {pathname === item.url && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-500 rounded-full"></div>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA для десктопу */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+1234567890" className="text-lime-600 hover:text-lime-700 transition-colors">
                            <Phone className="w-5 h-5" />
                        </a>
                        <Button className="bg-lime-600 hover:bg-lime-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Записатися на прийом
                        </Button>
                    </div>

                    {/* Мобільне меню */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 bg-white">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between py-6 border-b border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-white transform rotate-12" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">Colibri</h2>
                                            <p className="text-xs text-lime-600">Стоматологічна клініка</p>
                                        </div>
                                    </div>
                                </div>

                                <nav className="flex-1 py-8">
                                    <div className="space-y-2">
                                        {navigationItems.map((item) => (
                                            <SheetClose asChild key={item.title}>
                                                <Link
                                                    href={item.url}
                                                    className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                                                        pathname === item.url
                                                            ? "bg-lime-50 text-lime-600 border-l-4 border-lime-600"
                                                            : "text-gray-600 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </nav>

                                <div className="border-t border-gray-100 pt-6 pb-8 space-y-4">
                                    <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                                        Записатися на прийом
                                    </Button>
                                    <div className="text-center space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Phone className="w-4 h-4" />
                                            <span>+1 (555) 123-4567</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <Mail className="w-4 h-4" />
                                            <span>info@colibri.dental</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
