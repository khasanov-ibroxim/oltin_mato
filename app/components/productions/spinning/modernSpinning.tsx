import React from 'react';
import card_1 from "@/assets/production/spinning/bakan_2.jpg"
import icon_1 from "@/assets/production/spinning/ball.png"
import top_array_img from "@/assets/production/spinning/DSC06418.jpg"
import Image from "next/image";
import Link from "next/link";
import {Toolbox , Award , BadgePercent , ChartColumnIncreasing , Palette , ShieldCheck , Trophy , Cpu} from "lucide-react"

const ModernSpinning = () => {
    const top_array = [
        {
            icon:Toolbox,
            h:"Быстрое обслуживание",
            p:"Оперативная обработка заказов и своевременная отгрузка."
        },
        {
            icon:Award,
            h:"Качественная пряжа",
            p:"Отборное сырьё и строгий контроль на всех этапах производства."
        },
        {
            icon:BadgePercent,
            h:"Выгодные цены",
            p:"Прямые поставки от производителя без лишних наценок."
        },
        {
            icon:ChartColumnIncreasing,
            h:"Широкий ассортимент",
            p:"Белая и цветная пряжа различных характеристик и назначений."
        },
    ]
    const bottom_array = [
        {
            icon:Trophy,
            h:"Высокое качество",
            p:"Контроль на каждом этапе производства."
        },
        {
            icon:Cpu,
            h:"Инновационные технологии",
            p:"Современные решения для стабильных характеристик пряжи."
        },
        {
            icon:Palette,
            h:"Разнообразие продукции",
            p:"Ассортимент для любых задач и требований клиентов."
        },
        {
            icon:ShieldCheck,
            h:"Ответственный подход",
            p:"Этичность, надёжность и долгосрочное сотрудничество."
        },
    ]
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row min-h-[520px]">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 bg-[#162C43] text-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Оптовые поставки пряжи
                        </h1>
                        <p className=" mb-8">
                            Надёжный партнёр по продаже хлопковой пряжи высокого качества с широким ассортиментом и стабильными поставками по всей Средней Азии.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {top_array.map((item, i) => (
                                <div key={i} className="flex gap-1">
                                    <div className="w-20 h-20 hidden sm:flex items-center justify-center rounded-full ">
                                        <item.icon className={" text-[#08CB00]"}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.h}</h4>
                                        <p className="text-sm ">{item.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* RIGHT IMAGE + GRADIENT */}
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    {/* IMAGE */}
                    <Image
                        src={top_array_img}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* GRADIENT OVERLAY */}
                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:from-[#162C43]
        lg:bg-[#162C43]/5
        lg:to-transparent
        z-10
      "
                    />
                </div>
            </div>
            <div className="w-full mt-10 lg:mt-0 flex flex-col lg:flex-row min-h-[520px]">
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">

                    {/* IMAGE */}
                    <Image
                        src={card_1}
                        alt="factory"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* GRADIENT OVERLAY */}
                    <div
                        className="
        absolute inset-0
        bg-gradient-to-r
        lg:to-[#162C43]
        lg:bg-[#162C43]/5
        lg:from-transparent
        z-10
      "
                    />
                </div>
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 bg-[#162C43] text-white p-6 md:p-10 z-20">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">
                            Технологии. Качество. Доверие.
                        </h1>
                        <p className=" mb-8">
                            Основа нашей работы и вашего результата.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {bottom_array.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-20 h-20 hidden sm:flex items-center justify-center rounded-full ">
                                        <item.icon className={" text-[#08CB00]"}/>

                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.h}</h4>
                                        <p className="text-sm ">{item.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"flex items-center justify-center flex-col md:flex-row  w-full  gap-3 mt-10"}>
                        <Link href={"#"} className={"w-1/2 bg-[#08CB00] hover:bg-[#078c02]/90 text-center py-2 text-white font-bold rounded-sm"}>
                            Свяжитесь
                        </Link>
                        <Link href={"#"} className={"w-1/2 bg-gray-100 hover:bg-gray-100/90 text-black  text-center py-2 rounded-sm"}>
                            Заказать
                        </Link>
                    </div>
                </div>
                {/* RIGHT IMAGE + GRADIENT */}

            </div>
        </>
    );
};

export default ModernSpinning;