import React from 'react';
import Image from "next/image";
import icon_1 from "@/assets/production/spinning/ball.png";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";
import top_img from "@/assets/production/dyeing/IMG_9724.jpg"
import bottom_img from "@/assets/production/dyeing/DSC07384.jpg"
import footer_img from "@/assets/production/dyeing/DSC07394.jpg"
import iso from "@/assets/production/dyeing/iso.png"

const DyeingPrecision = () => {

    const top_array = [
        {
            icon: icon_1,
            h:"Точный подбор цвета",
            p:"Максимальная точность воспроизведения заданных оттенков."
        },
        {
            icon: icon_1,
            h:"Равномерное окрашивание",
            p:"Стабильный цвет по всей длине и в каждой партии."
        },
        {
            icon: icon_1,
            h:"Современное оборудование",
            p:"Новейшие линии для эффективного и контролируемого процесса."
        },
        {
            icon: icon_1,
            h:"Экологичный подход",
            p:"Безопасные технологии и забота об окружающей среде."
        }
    ]
    const bottom_array = [
        {
            icon: icon_1,
            h:"Лаборатория и обработка полотна",
            p:"контроль качества и разматывание полотна"
        },
        {
            icon: icon_1,
            h:"Крашение тканей ",
            p:"равномерное окрашивание"
        },
        {
            icon: icon_1,
            h:"Отжим полотна",
            p:"быстрая сушка"
        },
        {
            icon: icon_1,
            h:"Производительность",
            p:"20 тонн ткани и 5 тонн нити в день"
        }
    ]

    return (
        <>
            <div className="relative w-full min-h-[520px] flex items-center">

                {/* Background image */}
                <Image
                    src={top_img}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient overlay (RIGHT → LEFT) */}
                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-l
      from-[#162C43]/90
      via-[#162C43]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full lg:w-1/2 ml-auto p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3 font-dm">
                            Передовые технологии окрашивания
                        </h1>
                        <p className="mb-8">
                            Современное оборудование и турецкие технологии обеспечивают точную цветопередачу, равномерное окрашивание и экологичную обработку пряжи.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {top_array.map((item, i) => (
                                <div key={i} className="flex gap-4">

                                    <div>
                                        <h4 className="font-medium">{item.h}</h4>
                                        <p className="text-sm opacity-80">{item.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="relative w-full min-h-[520px] flex items-center">

                {/* Background image */}
                <Image
                    src={bottom_img}
                    alt="factory"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient overlay */}
                <div
                    className="
      absolute inset-0 z-10
      bg-gradient-to-r
      from-[#162C43]/90
      via-[#162C43]/80
      to-transparent
    "
                />

                {/* Content */}
                <div className="relative z-20 w-full lg:w-1/2 p-6 md:p-10 text-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3 font-dm">
                            Передовое оборудование наших заводов
                        </h1>
                        <p className="mb-8">Эффективное производство тканей и нитей высокого качества</p>

                        <div className="grid grid-cols-2 gap-6">
                            {bottom_array.map((it, i) => (
                                <div key={i} className="flex gap-4">
                                    <div>
                                        <h4 className="font-medium">{it.h}</h4>
                                        <p className="text-sm opacity-80">{it.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="relative w-full min-h-[260px] flex items-center overflow-hidden pt-5">


                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[#fff]/90 z-10" />

                <div className="relative z-20 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-dm font-serif font-semibold text-[#111] mb-2">
                            Высокие стандарты качества
                        </h2>
                        <p className="text-[#111] mb-6">
                            Равномерный цвет и долговечность по международным нормам
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 rounded-md bg-[#162C43] text-white font-medium hover:bg-[#162C43]/90 transition">
                                Свяжитесь
                            </button>
                            <button className="px-6 py-3 rounded-md bg-[#162C43] text-white font-medium hover:bg-[#162C43]/90 transition">
                                Заказать
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CERTIFICATES */}
                    <div className="flex gap-2 w-1/2 flex-col sm:flex-row pb-5">

                        <div className="bg-white max-h-[200px] w-full sm:w-1/2   rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={iso}
                                alt="OEKO TEX"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="bg-white max-h-[200px] w-full sm:w-1/2  rounded-md px-6 py-4 flex items-center justify-center">
                            <Image
                                src={iso}
                                alt="OEKO TEX"
                                className="object-cover h-full w-full"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default DyeingPrecision;