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
        <SectionHeader title={dict.contact.title} linkName={dict.contact.title} titleImage={AboutHeader} badge={dict.badge}/>
        <ContactForm dict={dict.contact.form}/>
        <Questions dict={dict.home.questions}/>
        <Testimonials dict={dict.home.testimonials}/>
    </>)
}