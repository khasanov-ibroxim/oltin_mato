import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";

interface ContactParams{
    params: Promise<{ lang: Locale }>;
    name: string;
    tel: string;
    msg: string;
}

export default async function  Contact({params}: ContactParams){
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return(<>
        Contact
    </>)
}