import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Components/Common/Login';
import SignUp from './Components/Admin/SignUp';
import AddSalesExecutive from './Components/Admin/AddSalesExecutive';
import AddDeliveryDriver from './Components/Admin/AddDeliveryDriver';
import SalesExecutiveHome from './Components/SalesExecutive/SalesExecutiveHome';
import DeliveryDriverHome from './Components/DeliveryDriver/DeliveryDriverHome';
import AdminHome from './Components/Admin/AdminHome';
import AllSalesExecutive from './Components/Admin/AllSalesExecutives';
import UpdateSalesExecutive from './Components/Admin/UpdateSalesExecutive';
import AllDeliveryDriver from './Components/Admin/AllDeliveryDrivers';
import UpdateDeliveryDriver from './Components/Admin/UpdateDeliveryDriver';
import ApplyForLeaveSE from './Components/SalesExecutive/ApplyForLeaveSE';
import ApplyForLeaveDD from './Components/DeliveryDriver/ApplyForLeaveDD';
import AdHome from './Components/Admin/Home';
import SEHome from './Components/SalesExecutive/Home';
import DDHome from './Components/DeliveryDriver/Home';
import AllLeave from './Components/Admin/AllLeaves';
import AddSalary from './Components/Admin/AddSalary';
import UpdateLeave from './Components/Admin/UpdateLeaveApplication';
import UpdateLeave1 from './Components/Admin/EditStatus';
import Allleave1 from './Components/Admin/test';


function App() {
  return (
    
    <div>
     
      <Router> 
        <Routes>
        <Route exact path="/" element = {<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path = "/addse" element={<AddSalesExecutive/>}/>
        <Route exact path = "/adddd" element={<AddDeliveryDriver/>}/>
        <Route exact path='/sehome' element={<SalesExecutiveHome/>}/>
        <Route exact path='/shome' element={<SEHome/>}/>
        <Route exact path='/ddhome' element={<DeliveryDriverHome/>}/>
        <Route exact path='/dhome' element={<DDHome/>}/>
        <Route exact path = '/adhome' element = {<AdminHome/>}/>
        <Route exact path = '/ahome' element = {<AdHome/>}/>
        <Route exact path='/allse' element={<AllSalesExecutive/>}/>
        <Route exact path ='/updatese/:id' element={<UpdateSalesExecutive/>}/>
        <Route exact path = '/alldd' element = {<AllDeliveryDriver/>}/>
        <Route exact path = '/updatedd/:id' element = {<UpdateDeliveryDriver/>}/>
        <Route exact path = '/applyse' element = {<ApplyForLeaveSE/>}/>
        <Route exact path = '/applydd' element = {<ApplyForLeaveDD/>}/>
        <Route exact path = '/allleave' element = {<AllLeave/>}/>
        <Route exact path = '/addsalary' element = {<AddSalary/>}/>
        <Route exact path = '/updatela/:id' element = {<UpdateLeave/>}/> 
        <Route exact path = '/update/:id' element = {<UpdateLeave1/>}/> 
        <Route exact path = '/test' element = {<Allleave1/>}/>
        </Routes>
        
  </Router>

    </div>
   
  );
}

export default App;
