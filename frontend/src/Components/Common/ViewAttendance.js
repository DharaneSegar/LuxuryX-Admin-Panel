import React from "react";

function ViewAttendance(){
    return(
        <div> 

        <div className="container1" >
                        <div className="row justify-content-center">
                            <div className="col-lg-5" >
                                <br/><br/><br/>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Your Attendance</h3></div>
                                    <div className="card-body">
                                        <form method="post" action="">
                                            <div className="form-floating mb-3">
                                                <label>Date :</label><br/><br/>
                                                <input className="form-control"  type="date"  />
                                               
                                            </div>
                                            <div className="form-floating mb-3">
                                                <label>Status :</label><br/><br/>
                                                <input className="form-control"  type="text" pattern = "[0-1]{1}"placeholder="Enter 0/1" />
                                    
                                            </div>
                                        
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <br/><br/><br/><br/><br/><br/>
                    </div>
                
        </div>
 
    )
}

export default ViewAttendance;