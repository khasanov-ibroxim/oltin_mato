import { i18n, Locale } from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {Navbar} from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;  // ✅ Changed from Locale to string
}

export default async function LangLayout({children, params}: LangLayoutProps) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);  // ✅ Type assertion
    return(<>
        <Navbar dict={dict} lang={lang}/>
        {children}
        <Footer dict={dict}/>
    </>)
}