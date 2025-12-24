import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import HomeHeader from "@/app/components/home/home_header";
import AboutUs from "@/app/components/repiatComponent/aboutUs";

interface HomeProps {
    params: Promise<{ lang: Locale }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function IndexPage({params, searchParams}: HomeProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);


    return (<div className={"w-full"}>
        <HomeHeader dict={dict}/>
        <AboutUs dict={dict}/>
    </div>)
}