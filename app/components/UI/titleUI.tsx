"use client";

import React from 'react';

interface IProps {
    text: string;
    classNameGroup?: string;
    classNameText?: string;
}

const TitleUi = ({text, classNameGroup = "" , classNameText=""}: IProps) => {
    return (
        <div className={`flex items-center gap-3 ${classNameGroup}`}>
            <div className={'flex gap-1'}>
                <div className="w-1 h-7 bg-[#CBA655]"></div>
                <div className="w-1 h-7 bg-[#CBA655]"></div>
            </div>

            <h3 className={`${classNameText ? classNameText : "text-black"}  font-manrope font-bold text-sm md:text-base tracking-[2px] uppercase`}>
                {text}
            </h3>
        </div>
    );
};

export default TitleUi;