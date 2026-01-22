import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import HomeHeader from "@/app/components/home/home_header";
import AboutUs from "@/app/components/repiatComponent/AboutUs";
import WhyChooseUs from "@/app/components/repiatComponent/Why_Choose_US";
import OurServices from "@/app/components/repiatComponent/Our_Services";
import OurProjects from "@/app/components/repiatComponent/Our_Projects";
import GetInTouch from "@/app/components/repiatComponent/Get_in_touch";
import PricingPlan from "@/app/components/home/Pricing_Plan";
import Testimonials from "@/app/components/repiatComponent/Testimonials";
import Questions from "@/app/components/home/Questions";
import BlogPost from "@/app/components/home/Blog_Post";

interface HomeProps {
    params: Promise<{ lang: Locale }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function IndexPage({params, searchParams}: HomeProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);


    return (<div className={"w-full"}>
        <HomeHeader dict={dict}/>
        <AboutUs dict={dict.home}/>
        <WhyChooseUs dict={dict}/>
        <OurServices dict={dict}/>
        <OurProjects dict={dict}/>
        <GetInTouch dict={dict}/>
        <PricingPlan dict={dict}/>
        <Testimonials dict={dict}/>
        <Questions dict={dict}/>
        <BlogPost dict={dict}/>

    </div>)
}