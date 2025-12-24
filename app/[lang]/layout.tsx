import { i18n, Locale } from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {Navbar} from "@/app/components/navbar";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({children, params}: {
    children: React.ReactNode,
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return(<>
        <Navbar dict={dict} lang={lang}/>
            {children}
        </>)
}