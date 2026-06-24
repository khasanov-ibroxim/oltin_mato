import React from 'react';
import Link from "next/link";

const SpinningHeader = ({ dict }: { dict: any }) => {
    return (
        <>
            <div className="w-full h-[80vh] relative " style={{
                background: `url("/images/production/spinning/DSC06074.jpg") center center no-repeat`,
                backgroundSize: "100%",
            }}>
                <div className="absolute top-0 left-0 bottom-0 bg-gray-800/50 w-full h-full z-0"></div>
                <div className="w-full absolute text-white flex pl-20 justify-center flex-col h-full z-10 ">
                    <h1 className={"text-3xl md:text-7xl font-medium font-dm"}>{dict.header.title}</h1>
                    <p className={"text-base md:text-xl mt-4 "}>{dict.header.subtitle}</p>

                </div>
            </div>
        </>
    );
};

export default SpinningHeader;