import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import SectionHeader from "@/app/components/sectionHeader";
import AboutHeader from '@/assets/about/header/about_header.jpg';
import Image from "next/image";
import titleImg from "@/assets/component/Testimonials/testimonials_title.jpg";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import blogData from "@/data/blogData.json";
import { notFound } from "next/navigation";

interface BlogDetailProps {
    params: Promise<{ lang: Locale; id: string }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const { lang, id } = await params;
    const dict = await getDictionary(lang);

    // JSON dan blog ma'lumotini topish
    const blog = blogData.blogs.find((b) => b.id === id);

    // Agar blog topilmasa, 404 sahifasiga yo'naltirish
    if (!blog) {
        notFound();
    }

    // Boshqa bloglarni olish (Related Posts uchun)
    const relatedBlogs = blogData.blogs.filter((b) => b.id !== id).slice(0, 3);

    return (
        <>
            <SectionHeader
                title={blog.title}
                linkName="Blog"
                titleImage={AboutHeader}
                badge={dict.badge}
            />

            <div className="container py-16">
                {/* Main Image */}
                <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-8">
                    <Image
                        src={titleImg}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h1 className="font-dm font-bold text-[40px] md:text-[50px] leading-tight text-[#222222] mb-6">
                            {blog.title}
                        </h1>

                        <p className="font-manrope text-[18px] text-[#666666] leading-relaxed mb-8">
                            {blog.content.intro}
                        </p>

                        <div className="mb-12">
                            <h2 className="font-dm font-bold text-[32px] md:text-[40px] text-[#222222] mb-6">
                                {blog.content.section1.title}
                            </h2>
                            <p className="font-manrope text-[18px] text-[#666666] leading-relaxed mb-8">
                                {blog.content.section1.text}
                            </p>

                            {/* Images Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {blog.content.section1.images.map((img, idx) => (
                                    <div key={idx} className="relative h-[300px] rounded-2xl overflow-hidden">
                                        <Image
                                            src={titleImg}
                                            alt={`Section image ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <p className="font-manrope text-[18px] text-[#666666] leading-relaxed">
                                {blog.content.section2}
                            </p>
                        </div>

                        {/* Post Tags Section */}
                        <div className="border-t border-b border-gray-200 py-6 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span className="font-manrope font-bold text-sm text-[#222222] uppercase">
                                    Post Tags:
                                </span>
                                <span className="font-manrope text-sm text-[#666666]">
                                    {blog.category}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-manrope font-bold text-sm text-[#222222] uppercase">
                                    Share:
                                </span>
                                <div className="flex gap-2">
                                    <Link href="#" className="w-8 h-8 rounded bg-[#5A5A5A] hover:bg-[#162C43] flex items-center justify-center transition">
                                        <Facebook size={16} className="text-white" />
                                    </Link>
                                    <Link href="#" className="w-8 h-8 rounded bg-[#5A5A5A] hover:bg-[#162C43] flex items-center justify-center transition">
                                        <Twitter size={16} className="text-white" />
                                    </Link>
                                    <Link href="#" className="w-8 h-8 rounded bg-[#5A5A5A] hover:bg-[#162C43] flex items-center justify-center transition">
                                        <Linkedin size={16} className="text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            {/* Author Info */}
                            <div className="bg-[#DAD3C8] rounded-2xl p-6 mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-7 bg-[#162C43]"></div>
                                        <div className="w-1 h-7 bg-[#162C43]"></div>
                                    </div>
                                    <h3 className="font-manrope font-bold text-sm tracking-[2px] uppercase text-[#222222]">
                                        Post Info
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <p className="font-manrope text-sm text-[#666666]">Author</p>
                                        <p className="font-dm font-bold text-lg text-[#222222]">{blog.author}</p>
                                    </div>
                                    <div>
                                        <p className="font-manrope text-sm text-[#666666]">Published</p>
                                        <p className="font-dm font-bold text-lg text-[#222222]">{blog.date}</p>
                                    </div>
                                    <div>
                                        <p className="font-manrope text-sm text-[#666666]">Category</p>
                                        <p className="font-dm font-bold text-lg text-[#222222]">{blog.category}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="bg-[#DAD3C8] rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-7 bg-[#162C43]"></div>
                                        <div className="w-1 h-7 bg-[#162C43]"></div>
                                    </div>
                                    <h3 className="font-manrope font-bold text-sm tracking-[2px] uppercase text-[#222222]">
                                        Related Posts
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {relatedBlogs.map((relatedBlog) => (
                                        <Link
                                            key={relatedBlog.id}
                                            href={`/${lang}/blog/${relatedBlog.id}`}
                                            className="block group"
                                        >
                                            <div className="flex gap-3">
                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={titleImg}
                                                        alt={relatedBlog.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-dm font-bold text-sm text-[#222222] group-hover:text-[#162C43] transition line-clamp-2">
                                                        {relatedBlog.title}
                                                    </h4>
                                                    <p className="font-manrope text-xs text-[#666666] mt-1">
                                                        {relatedBlog.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}