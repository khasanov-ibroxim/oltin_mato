import ProductsS2 from "@/app/components/products/products_s2";

import Corousel_1 from "@/assets/products/corousel_1.jpg";
import Corousel_2 from "@/assets/products/corousel_2.jpg";
import Corousel_3 from "@/assets/products/corousel_3.jpg";
import ProductCorousel from "@/app/components/products/products_corousel";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";

interface ProductsProps {
    params: Promise<{ lang: Locale }>;
}
const  Page = async ({params}: ProductsProps) => {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <div>
            <ProductCorousel title={dict.nav.products} linkName={"Продукция"} titleImages={[Corousel_1, Corousel_2, Corousel_3]} badge={"asdsad"}/>

            <ProductsS2 dict={dict.product}/>
        </div>
    );
};

export default Page;