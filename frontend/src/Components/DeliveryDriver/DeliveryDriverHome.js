import React from "react";
import DeliveryDriverDashBoard from "./DeliveryDriverDashBoard";
import Footer from "../Common/Footer";

function DDHome(){
    var user = JSON.parse(localStorage.getItem('DDInfo'));
    return(
        <>
        <div>

        <DeliveryDriverDashBoard></DeliveryDriverDashBoard>
            
            <main>
                <div className="container-fluid px-4">
                    <br/><br/><br/>
                    <h1 className="mt-4">Welcome {user.fullname} !!</h1>
        
                    <img id="logo" src={require('../Common/images/logo.png')}/>
                    <br/><br/><br/>

                
                </div>
            </main>
        <Footer></Footer>
        </div>
        </>
    )
    }


export default DDHome;