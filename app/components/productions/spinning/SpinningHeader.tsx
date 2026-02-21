import React from 'react';
import Link from "next/link";

const SpinningHeader = () => {
    return (
        <div className="w-full h-[80vh] relative " style={{
            background: `url("/images/production/spinning/DSC06074.jpg") center center no-repeat`,
            backgroundSize: "cover",
        }}>
            <div className="absolute top-0 left-0 bottom-0 bg-black/30 w-full h-full z-0"></div>
            <div className="w-full absolute text-center text-white flex items-center justify-center flex-col h-full z-10 ">
                <h1 className={"text-3xl md:text-7xl"}>Прядильное <br/> производство</h1>
                <p className={"text-base md:text-xl mt-4"}>Полный цикл производства пряжи с гарантией стабильного качества <br/> и соответствия международным стандартам.</p>
                <div className={"flex items-center justify-center flex-col md:flex-row  w-full md:w-1/3  gap-3 mt-3"}>
                    <Link href={"#"} className={"w-1/2 bg-[#162C43] hover:bg-[#162C43]/90 text-center py-2 rounded-sm"}>
                        Заказать
                    </Link>
                    <Link href={"#"} className={"w-1/2 bg-gray-100 hover:bg-gray-100/90 text-black text-center py-2 rounded-sm"}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpinningHeader;