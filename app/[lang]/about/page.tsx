import SectionHeader from "@/app/components/sectionHeader";
import AboutHeader from '@/assets/about/header/about_header.jpg'
import AboutUs from "@/app/components/repiatComponent/AboutUs";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n-config";
import OurServices from "@/app/components/repiatComponent/Our_Services";
import WhyChooseUs from "@/app/components/repiatComponent/Why_Choose_US";
import OurProjects from "@/app/components/repiatComponent/Our_Projects";
import AboutGroup from "@/app/components/about/About_group";
import HowItWorks from "@/app/components/about/How_it_Works";
import Testimonials from "@/app/components/repiatComponent/Testimonials";
import GetInTouch from "@/app/components/repiatComponent/Get_in_touch";


interface AboutProps {
    params: Promise<{ lang: Locale }>;
}

export default async function About({params}: AboutProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (<>
        <SectionHeader title={"About"} linkName={"About"} titleImage={AboutHeader}/>
        <AboutUs dict={dict}/>
        <OurServices dict={dict.home.ourServices.services} type_component="services"/>

        <WhyChooseUs dict={dict.home.why_choose}/>
        <OurProjects dict={dict}/>
        <AboutGroup dict={dict}/>
        <HowItWorks dict={dict}/>
        <Testimonials dict={dict}/>
        <GetInTouch dict={dict}/>
    </>)
}