'use client'
import React from "react";
import {
    Award,
    Users,
    Heart,
    Shield,
    Clock
} from "lucide-react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const teamMembers = [
    {
        name: "Д-р Марія Мартінес",
        role: "Головний стоматолог та засновниця",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
        experience: "15+ років",
        specialties: ["Загальна стоматологія", "Косметичні процедури"],
        bio: "Д-р Мартінес заснувала Colibri Dental з баченням зробити стоматологічну допомогу комфортною та доступною для всіх."
    },
    {
        name: "Д-р Джеймс Вілсон",
        role: "Ортодонт",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
        experience: "12+ років",
        specialties: ["Ортодонтія", "Прозорі елайнери"],
        bio: "Спеціаліст із сучасних ортодонтичних методів лікування з акцентом на дорослих та підлітків."
    },
    {
        name: "Д-р Сара Чен",
        role: "Щелепно-лицевий хірург",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
        experience: "10+ років",
        specialties: ["Щелепно-лицева хірургія", "Дентальні імпланти"],
        bio: "Хірург із сертифікацією, що спеціалізується на складних процедурах дентальної імплантації та реконструктивній хірургії."
    },
    {
        name: "Д-awр Сара Чен",
        role: "Щелепно-лицевий хірург",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
        experience: "10+ років",
        specialties: ["Щелепно-лицева хірургія", "Дентальні імпланти"],
        bio: "Хірург із сертифікацією, що спеціалізується на складних процедурах дентальної імплантації та реконструктивній хірургії."
    }
];

const values = [
    {
        icon: Heart,
        title: "Турботливий догляд",
        description: "Ми ставимося до кожного пацієнта з емпатією, повагою та розумінням, забезпечуючи комфорт на всьому етапі лікування."
    },
    {
        icon: Shield,
        title: "Відмінність і безпека",
        description: "Ми дотримуємося найвищих стандартів стоматології, використовуючи передові технології та суворі протоколи безпеки."
    },
    {
        icon: Users,
        title: "Орієнтація на пацієнта",
        description: "Ваші потреби, комфорт та цілі — у центрі всього, що ми робимо, з індивідуальними планами лікування."
    },
    {
        icon: Award,
        title: "Постійні інновації",
        description: "Ми залишаємося на передовій стоматологічних технологій та методик, щоб забезпечити найкращі результати."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Герой-секція */}
            <section
                className="relative mt-24 bg-gradient-to-br flex flex-col from-lime-50 via-white to-green-50 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full flex justify-center h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="mx-auto max-w-7xl w-auto px-4 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 py-6 items-center">
                        <div>
                            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
                                Ваша усмішка — наша
                                <span className="text-lime-600 block">Пристрасть</span>
                            </h1>
                            <p className="text-sm md:text-xl h-auto text-gray-600 leading-relaxed mb-8">
                                Вже понад 15 років стоматологічна клініка Колібрі змінює усмішки та життя
                                завдяки турботливому та сучасному догляду. Наша місія проста:
                                надавати виняткові стоматологічні послуги у теплій та привітній атмосфері.
                            </p>
                            <div className="flex flex-col items-center sm:flex-row gap-4">
                                <Button
                                    onClick={() => {
                                        const el = document.getElementById("doctors");
                                        if (el) el.scrollIntoView({behavior: "smooth"});
                                    }}
                                    className="bg-lime-600 cursor-pointer w-min hover:bg-lime-700 text-sm sm:text-base md:text-lg font-semibold shadow-lg text-white px-6 py-3  sm:w-auto"
                                >
                                    Познайомитися з нашою командою
                                </Button>
                            </div>

                        </div>

                        <div className="relative">
                            <div className="aspect-square relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 rounded-3xl transform rotate-6 scale-95 opacity-20"></div>
                                <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=800&q=80"
                                        alt="Сучасна стоматологічна клініка"
                                        fill
                                        className="object-cover rounded-3xl"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Наші цінності */}
            <section className="py-8 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Наші основні
                            <span className="text-lime-600"> цінності</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ці принципи керують усією нашою роботою та гарантують виняткову турботу для кожного
                            пацієнта.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {values.map((value) => (
                            <Card
                                key={value.title}
                                className="group mx-12 md:mx-0 bg-white transition-all border-0"
                            >
                                <CardContent className="p-8  text-center">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="w-8 h-8 text-lime-600"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 ">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Наша команда */}
            <section id={'doctors'}
                     className="py-8 md:py-24 flex w-full justify-center items-center bg-gradient-to-br from-lime-50 via-white to-green-50">
                <div className="max-w-8xl flex flex-col items-center mx-auto md:gap-6 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Познайомтеся з нашою
                            <span className="text-lime-600"> командою</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Наші досвідчені фахівці віддані наданню виняткової стоматологічної допомоги з ніжним та
                            індивідуальним підходом.
                        </p>
                    </div>

                    <div className="grid  md:p-10 w-full md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <Card
                                key={member.name}
                                className="group mx-12 md:mx-0 bg-white/80 backdrop-blur transition-all border-0 overflow-hidden"
                            >
                                <div className="relative">
                                    <div className="aspect-square overflow-hidden">
                                        <Image
                                            fill
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0"></div>
                                    <div
                                        className="absolute bottom-4 left-4 right-4 text-white opacity-0 transform translate-y-2 transition-all duration-500">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Clock className="w-4 h-4"/>
                                            <span className="text-sm font-medium">{member.experience}</span>
                                        </div>
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
