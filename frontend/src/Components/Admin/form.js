import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";

export default function Form(){
    return(
        <>
        <div> 
        <AdminDashBoard></AdminDashBoard>
        <div> 
            
      
        <div className="container1" >
                        <div className="row justify-content-center">
                            <div className="col-lg-5" >
                                <br/><br/><br/>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Add Salary</h3></div>
                                    <div className="card-body">
                                        <form>
                                        <div className="form-floating mb-3">
                                                <label>Employee Id :</label><br/><br/>
                                                <input className="form-control"  type="text" />
                                               
                                            </div>

                                        
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block"  type = 'submit' >Submit</button>
                                                </div>
                                               
                                           
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
           </div>
           </div>
           
           </div>
        <Footer></Footer>
        </div>
        </>
    )
}