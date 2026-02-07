import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/assets/production/spinning/bakan_2.jpg";
import card_1 from "@/assets/production/spinning/bakan_2.jpg";
import DyeingHeader from "@/app/components/productions/dyeing/DyeingHeader";
import DyeingOur from "@/app/components/productions/dyeing/DyeingOur";
import DyeingPrecision from "@/app/components/productions/dyeing/DyeingPrecision";

const PageDyeing = () => {
    return (
        <>
            <DyeingHeader/>
            <DyeingOur/>
            <DyeingPrecision/>
        </>
    );
};

export default PageDyeing;