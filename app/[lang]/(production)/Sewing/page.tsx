import SewingHeader from "@/app/components/productions/sewing/SewingHeader";
import SewingOur from "@/app/components/productions/sewing/SewingOur";
import SewingOurTypes from "@/app/components/productions/sewing/SewingOurTypes";
import SewingCreate from "@/app/components/productions/sewing/SewingCreate";
import React from "react";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";

interface AboutProps {
    params: Promise<{ lang: Locale }>;
}

export default async function PageSewing({params}: AboutProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <div>
            <SewingHeader dict={dict.productions.sewing}/>
            <SewingOur dict={dict.productions.sewing}/>
            <SewingOurTypes dict={dict.productions.sewing}/>
            <SewingCreate dict={dict.productions.sewing}/>
        </div>
    );
};

