"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Menu, Phone, Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetClose,
} from "@/components/ui/sheet";
import logo from "./images/logo.png";

const navigationItems = [
    {title: "Головна", url: "/"},
    {title: "Послуги", url: "/services"},
    {title: "Про нас", url: "/about"},
    {title: "Контакти", url: "/contact"},
];

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);

    useEffect(() => {
        setSheetOpen(false);
    }, [pathname]);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055446";
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b  z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-0">
                    <Image src={logo} alt="Логотип стоматологічної клініки Колібрі" priority className="w-16 mb-1"/>
                    <div>
                        <div className="text-xl font-bold text-gray-600 leading-tight mb-0">
                            Колібрі
                        </div>
                        <p className="text-sm text-lime-600 font-medium leading-tight mt-0">
                            Легко і точно
                        </p>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            className={`text-sm lg:text-base font-medium tracking-wide transition-colors duration-200 ${
                                pathname === item.url
                                    ? "text-lime-600 border-b border-lime-600"
                                    : "text-gray-600 hover:text-black"
                            }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Button
                        onClick={handlePhoneClick}
                        className={`h-10 px-5 cursor-pointer text-sm font-medium tracking-wide transition-all duration-300 ${
                            isPhoneOpen
                                ? "bg-transparent hover:bg-gray-200 text-lime-600 border border-lime-600"
                                : "bg-lime-600 text-white hover:bg-lime-700"
                        }`}
                    >
                        {isPhoneOpen ? <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4"/>+380 96-80-55-446
                        </div> : "Записатися на прийом"}
                    </Button>
                </div>

                {/* Mobile menu */}
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-800">
                            <Menu className="size-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 bg-white border-gray-400 flex flex-col">
                        <SheetHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center py-3 space-x-3">
                                <Image src={logo} alt="Логотип стоматологічної клініки Колібрі" className="w-14"/>
                                <div>
                                    <SheetTitle className="text-xl font-bold text-gray-600">Колібрі</SheetTitle>
                                    <SheetDescription className="text-xs text-lime-600">
                                        Легко і точно
                                    </SheetDescription>
                                </div>
                            </div>
                            <SheetClose asChild>
                                <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800" size="icon">
                                    ✕
                                </Button>
                            </SheetClose>
                        </SheetHeader>

                        <nav className="flex-1 px-4 space-y-1 mt-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                                        pathname === item.url
                                            ? "text-lime-600 border-l-2 border-lime-600 pl-3"
                                            : "text-gray-600 hover:text-white hover:bg-gray-800 rounded"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="border-t border-gray-400 pt-6 pb-8 px-4 space-y-4">
                            <Button
                                onClick={handlePhoneClick}
                                className={`w-full py-2 text-sm transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-transparent text-lime-600 border border-lime-600 hover:bg-gray-800"
                                        : "bg-lime-600 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4"/>+380 96-80-55-446
                                    </div>
                                ) : (
                                    "Записатися на прийом"
                                )}
                            </Button>
                            <div className="text-center text-sm text-gray-500 flex flex-col items-center gap-1">
                                <a href="mailto:kolibri.khust@gmail.com" className="flex items-center gap-2 hover:text-gray-700 transition-colors">
                                    <Mail className="w-4 h-4"/>kolibri.khust@gmail.com
                                </a>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
