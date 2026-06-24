import ProductsS2 from "@/app/components/products/products_s2";
import SectionHeader from "@/app/components/sectionHeader";
import AboutHeader from "@/assets/about/header/about_header.jpg";


const Page = () => {
    return (
        <div>
            <SectionHeader title={"products"} linkName={"product"} titleImage={AboutHeader} badge={"asdsad"}/>

            <ProductsS2/>
        </div>
    );
};

export default Page;