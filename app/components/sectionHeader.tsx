import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    linkName: string
    badge: string,
    titleImage: StaticImageData;
}

const SectionHeader = ({title, linkName, badge, titleImage}: SectionHeaderProps) => {
    return (
        <div className="bg-amber-200 h-[50vh] w-full relative">
            <div className="bg-black opacity-50 absolute z-10 top-0 left-0 w-full h-full"></div>
            <Image src={titleImage} alt={title} className="w-full h-full object-cover absolute z-0"/>
            <div className="container mx-auto px-6 h-full">
                <div className="absolute z-20 bottom-20 left-0 right-0 px-6">
                    <div className="container mx-auto">
                        <div className="flex w-full justify-between items-center">
                            <h1 className="text-white text-6xl md:text-7xl font-bold font-dm">{title}</h1>
                            <div className="text-white text-lg font-manrope">
                                <Link href={"/"}
                                      className="hover:text-[#08CB00] transition cursor-pointer uppercase">{badge}</Link>
                                <span className="text-[#08CB00] mx-3">✕</span>
                                <span className="text-[#08CB00] uppercase">{linkName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;