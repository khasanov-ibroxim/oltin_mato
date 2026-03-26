import React from "react";
import DyeingHeader from "@/app/components/productions/dyeing/DyeingHeader";
import DyeingOur from "@/app/components/productions/dyeing/DyeingOur";
import DyeingPrecision from "@/app/components/productions/dyeing/DyeingPrecision";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n-config";

interface AboutProps {
    params: Promise<{ lang: Locale }>;
}

export default async function PageDyeing({params}: AboutProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <>
            <DyeingHeader dict={dict.productions.dyeing}/>
            <DyeingOur dict={dict.productions.dyeing}/>
            <DyeingPrecision dict={dict.productions.dyeing}/>
        </>
    );
};

