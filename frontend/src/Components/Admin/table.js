import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AdminDashBoard from './AdminDashBoard';
import Footer from '../Common/Footer';

//npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

export default function Table(){

    return(
        <>
        <div>
        <AdminDashBoard></AdminDashBoard>
<div className="mt-5">

                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <br/><br/><br/>
                   
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                
                                <th scope='col'>Operations</th>

                            </tr>
                        </thead>
                        
                        <tbody>
                        
                                    <tr> 
                                    
                                    <td className='d-flex justify-content-between'>
                                    <button className='btn btn-primary' ><CreateIcon/></button>
                                    <button className='btn btn-danger' ><DeleteOutlineIcon/></button>
                                    </td>
                                    </tr>
                          
                            </tbody>
                          
                        </table>
    </div>
    
</div>

</div>
<Footer></Footer>
</>
    )

}