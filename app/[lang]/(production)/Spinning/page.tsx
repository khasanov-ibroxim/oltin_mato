import ModernSpinning from "@/app/components/productions/spinning/modernSpinning";
import SpinningHeader from "@/app/components/productions/spinning/SpinningHeader";
import SpinningOur from "@/app/components/productions/spinning/spinningOur";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";


interface AboutProps {
    params: Promise<{ lang: Locale }>;
}

export default async function PageSpinning({params}: AboutProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <>
            <SpinningHeader dict={dict.productions.spinning}/>
            <SpinningOur dict={dict.productions.spinning}/>
            <ModernSpinning dict={dict.productions.spinning}/>
        </>
    );
};

