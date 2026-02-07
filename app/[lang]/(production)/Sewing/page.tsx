import SewingHeader from "@/app/components/productions/sewing/SewingHeader";
import SewingOur from "@/app/components/productions/sewing/SewingOur";
import SewingOurTypes from "@/app/components/productions/sewing/SewingOurTypes";
import SewingCreate from "@/app/components/productions/sewing/SewingCreate";
import React from "react";

const PageSewing = () => {
    return (
        <div>
            <SewingHeader/>
            <SewingOur/>
            <SewingOurTypes/>
            <SewingCreate/>
        </div>
    );
};

export default PageSewing;