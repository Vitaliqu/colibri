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
import logo from "../components/logo.png";

const navigationItems = [
    {title: "Головна", url: "/"},
    {title: "Послуги", url: "/services"},
    {title: "Про нас", url: "/about"},
    {title: "Контакти", url: "/contact"},
];

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false); // control sheet

    // Close sheet when pathname changes
    useEffect(() => {
        setSheetOpen(false);
    }, [pathname]);

    const handlePhoneClick = () => {
        if (!isPhoneOpen) setIsPhoneOpen(true);
        else window.location.href = "tel:+380968055446";
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 py-2 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
                <link rel="icon" href="../app/icon.ico"/>
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-0">
                    <Image src={logo} alt="Логотип" className="w-16 mb-1"/>
                    <div>
                        <div className="text-xl font-bold text-gray-900 leading-tight mb-0">
                            Колібрі
                        </div>
                        <p className="text-lg text-lime-600 font-medium leading-tight mt-0">
                            Легко і точно
                        </p>
                    </div>

                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            className={`relative text-sm lg:text-lg font-medium transition-colors ${
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

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Button
                        onClick={handlePhoneClick}
                        className={`h-10 px-4 cursor-pointer text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                            isPhoneOpen
                                ? "bg-white hover:bg-gray-100 text-lime-600 border border-lime-600"
                                : "bg-lime-600 text-white hover:bg-lime-700"
                        }`}
                    >
                        {isPhoneOpen ? <div className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4"/>+380 96-80-55-446
                        </div> : "Записатися на прийом"}
                    </Button>
                </div>

                {/* Mobile menu */}
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="size-8"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 bg-white flex flex-col">
                        <SheetHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center py-3 space-x-3">
                                <Image src={logo} alt="Логотип" className="w-16"/>
                                <div>
                                    <SheetTitle className="text-xl font-bold text-gray-900">Колібрі</SheetTitle>
                                    <SheetDescription className="text-xs text-lime-600">
                                        Легко і точно
                                    </SheetDescription>
                                </div>
                            </div>
                            <SheetClose asChild>
                                <Button variant="ghost" className="text-2xl" size="icon">
                                    ✕
                                </Button>
                            </SheetClose>
                        </SheetHeader>

                        <nav className="flex-1 px-4 space-y-2">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                                        pathname === item.url
                                            ? "bg-lime-50 text-lime-600 border-l-4 border-lime-600"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="border-t border-gray-100 pt-6 pb-8 px-4 space-y-4">
                            <Button
                                onClick={handlePhoneClick}
                                className={`w-full py-2 text-sm hover:bg-gray-100  transition-all duration-300 ${
                                    isPhoneOpen
                                        ? "bg-white text-lime-600 border border-lime-600"
                                        : "bg-lime-600 text-white hover:bg-lime-700"
                                }`}
                            >
                                {isPhoneOpen ? (
                                    <div className="flex items-center  justify-center gap-2">
                                        <Phone className="w-4 h-4"/>+380 96-80-55-446
                                    </div>
                                ) : (
                                    "Записатися на прийом"
                                )}
                            </Button>
                            <div className="text-center text-sm text-gray-600 flex flex-col items-center gap-1">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4"/>info@colibri.dental
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
