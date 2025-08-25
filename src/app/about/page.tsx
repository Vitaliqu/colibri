import React from "react";
import {
    Award,
    Users,
    Heart,
    Shield,
    Clock
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        image: "https://images.unsplash.com/photo-1594824475592-fdf00aae1e21?auto=format&fit=crop&w=400&h=400&q=80",
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
            <section className="relative py-24 bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2384cc16' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Heart className="w-4 h-4" />
                                <span>Про Colibri</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Ваша усмішка — наша
                                <span className="text-lime-600 block">Пристрасть</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Вже понад 15 років стоматологічна клініка Colibri змінює усмішки та життя
                                завдяки турботливому та сучасному догляду. Наша місія проста:
                                надавати виняткові стоматологічні послуги у теплій та привітній атмосфері.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    Познайомитися з нашою командою
                                </Button>
                                <Button variant="outline" size="lg" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
                                    Наша історія
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 rounded-3xl transform rotate-6 scale-95 opacity-20"></div>
                                <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=800&q=80"
                                        alt="Сучасна стоматологічна клініка"
                                        fill
                                        className="object-cover rounded-3xl"
                                    />

                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                                            <Award className="w-6 h-6 text-lime-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">15+ років</div>
                                            <div className="text-sm text-gray-600">досконалості</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Наші цінності */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Наші основні
                            <span className="text-lime-600"> цінності</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ці принципи керують усією нашою роботою та гарантують виняткову турботу для кожного пацієнта.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <Card
                                key={value.title}
                                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 transform hover:scale-105"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-8 h-8 text-lime-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-lime-600 transition-colors">
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
            <section className="py-24 bg-gradient-to-br from-lime-50 via-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Познайомтеся з нашою
                            <span className="text-lime-600"> командою</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Наші досвідчені фахівці віддані наданню виняткової стоматологічної допомоги з ніжним та індивідуальним підходом.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <Card
                                key={member.name}
                                className="group bg-white/80 backdrop-blur hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105"
                            >
                                <div className="relative">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm font-medium">{member.experience}</span>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-8">
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

            {/* Статистика */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-lime-600 to-green-700 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                            <div className="w-full h-full" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                        </div>

                        <div className="relative">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    Нам довіряють тисячі
                                </h2>
                                <p className="text-xl opacity-90">
                                    Ось чого ми досягли разом
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                                    <div className="opacity-90">Задоволених пацієнтів</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                                    <div className="opacity-90">Років досвіду</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                                    <div className="opacity-90">Рівень задоволеності</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                                    <div className="opacity-90">Невідкладна допомога</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
