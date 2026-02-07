import React from 'react';
import Link from "next/link";

const SpinningHeader = () => {
    return (
        <div className="w-full h-[80vh] relative " style={{
            background: `url("/images/production/spinning/bakan_2.jpg") center center no-repeat`,
            backgroundSize: "cover",
        }}>
            <div className="absolute top-0 left-0 bottom-0 bg-black/30 w-full h-full z-0"></div>
            <div className="w-full absolute text-center text-white flex items-center justify-center flex-col h-full z-10 ">
                <h1 className={"text-3xl md:text-7xl"}>Yarn Production</h1>
                <p className={"text-base md:text-xl mt-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                    reprehenderit.</p>
                <div className={"flex items-center justify-center flex-col md:flex-row  w-full md:w-1/3  gap-3 mt-3"}>
                    <Link href={"#"} className={"w-1/2 bg-[#C8A248] hover:bg-[#C8A248]/90 text-center py-2 rounded-sm"}>Request a
                        Quote</Link>
                    <Link href={"#"} className={"w-1/2 bg-gray-100 hover:bg-gray-100/90 text-black text-center py-2 rounded-sm"}>Download
                        Yarn specs</Link>
                </div>
            </div>
        </div>
    );
};

export default SpinningHeader;