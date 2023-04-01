import React from "react";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import Footer from "../Common/Footer";

function SEHome(){
    return(
        <>
        <div>

        <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
            
            <main>
                <div className="container-fluid px-4">
                    <br/><br/><br/>
                    <h1 className="mt-4">Welcome!!!</h1>
        
                    <img id="logo" src={require('../Common/images/logo.png')}/>
                    <br/><br/><br/>

                
                </div>
            </main>
  
        <Footer></Footer>
        </div>
        </>
    )
    }


export default SEHome;