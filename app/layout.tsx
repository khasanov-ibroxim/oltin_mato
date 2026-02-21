import type {Metadata} from "next";
import {DM_Serif_Display, Manrope , Playfair_Display} from "next/font/google";
import "./globals.css";



const dm = Playfair_Display({
    variable: "--font-playfair-pisplay",
    subsets: ["latin"],
    weight: "400",
    display: "swap", // ✅ Qo'shing
});

const manrope = Playfair_Display({
    variable: "--font-playfair-pisplay",
    subsets: ["latin"],
    display: "swap", // ✅ Qo'shing
});

export const metadata: Metadata = {
    title: "Oltin mato group",
    description: "Oltin mato",
    icons:"/logo.svg"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${dm.variable} ${manrope.variable} antialiased index__bg`}
            suppressHydrationWarning
        >
        {children}
        </body>
        </html>
    );
}
