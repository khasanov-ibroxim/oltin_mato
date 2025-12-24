import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";

interface ContactParams{
    params: Promise<{ lang: string }>;  // ✅ Changed from Locale to string
}

export default async function  Contact({params}: ContactParams){
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);  // ✅ Type assertion
    return(<>
        Contact
    </>)
}