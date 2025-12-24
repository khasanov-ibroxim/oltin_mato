import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import SectionHeader from "@/app/components/sectionHeader";
import AboutHeader from '@/assets/about/header/about_header.jpg'
import ContactForm from "@/app/components/contact/ContactForm";
import Questions from "@/app/components/home/Questions";
import Testimonials from "@/app/components/repiatComponent/Testimonials";

interface ContactParams{
    params: Promise<{ lang: string }>;  // ✅ Changed from Locale to string
}

export default async function  Contact({params}: ContactParams){
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);  // ✅ Type assertion
    return(<>
        <SectionHeader title={"Get In Touch"} linkName={"contact"} titleImage={AboutHeader}/>
        <ContactForm dict={dict}/>
        <Questions dict={dict}/>
        <Testimonials dict={dict}/>
    </>)
}