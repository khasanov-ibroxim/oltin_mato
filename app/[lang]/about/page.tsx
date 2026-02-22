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
import AboutStat from "@/app/components/home/about_stat";


interface AboutProps {
    params: Promise<{ lang: Locale }>;
}

export default async function About({params}: AboutProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (<>
        <SectionHeader title={dict.about.title} linkName={dict.about.title} titleImage={AboutHeader} badge={dict.badge}/>
        <AboutUs dict={dict.about.about} page={"about"}/>
        <AboutStat dict={dict.about.aboutStat}/>


        <WhyChooseUs dict={dict.about.why_choose} page={"about"}/>
        <OurProjects dict={dict.home.ourProject} lang={lang}/>

        <HowItWorks dict={dict.about.howItWorks}/>

        <GetInTouch dict={dict.home.get_in_touch}/>
    </>)
}