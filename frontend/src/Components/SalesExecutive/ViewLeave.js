import React from "react";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import ViewLeave from "../Common/ViewLeave";
import Footer from "./Footer";

function ViewLeaveSE(){
    return(
        <div>
            <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
            <ViewLeave></ViewLeave>
            <Footer></Footer>
        </div>

    )
}

export default ViewLeaveSE;