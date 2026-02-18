import Image from "next/image";
import getInTouchImage from "@/assets/component/Get_in_touch/get_in_touch.jpg"
import React from "react";
import LinkUI from "@/app/components/UI/linkUI";

interface GetInTouchProps {
    dict: {
        [key: string]: any;
    };
}

const GetInTouch = ({dict}: GetInTouchProps) => {
    return (
        <div className={"w-full h-[500px] relative  flex justify-start items-center"}>
            <div className="absolute inset-0 z-20   bg-gradient-to-r  from-black/40 via-black/40 to-transparent"></div>
            <Image src={getInTouchImage} alt={"Oltin mato"}
                   className={"w-full object-cover absolute z-10 h-full"}
            />
            <div className=" left-0 z-30 w-full  lg:w-1/2 lg:px-0 ml-2 sm:ml-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className={'flex gap-1'}>
                        <div className="w-1 h-7 bg-[#42C0DF]"></div>
                        <div className="w-1 h-7 bg-[#42C0DF]"></div>
                    </div>

                    <h3 className="text-[#fff]  font-manrope font-bold text-sm md:text-base tracking-[2px] uppercase">
                        {dict.title}
                    </h3>
                </div>
                <h2 className={"font-dm font-bold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-tight text-[#fff]"}>
                    {dict.subtitle}
                </h2>
                <p className={"font-manrope w-[90%] leading-tight text-[#fff] text-[18px] mt-5 mb-10"}>
                    {dict.p}
                </p>
                <LinkUI text={dict.btn} link={"/contact"}/>
            </div>

        </div>
    );
};

export default GetInTouch;