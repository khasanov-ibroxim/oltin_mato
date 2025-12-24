"use client";

import React from 'react';
import Link from "next/link";
import {MoveRight} from "lucide-react";

interface IProps {
    text: string;
    link: string;
}

const LinkUi = ({text , link}:IProps) => {
    return (
        <Link href={link}
              className={"index__btn_colors min-w-1/3 max-w-1/2 flex items-center justify-center rounded-lg py-2 px-5 gap-1 "}>
            {text}<MoveRight size={24}/></Link>
    );
};

export default LinkUi;