import React from 'react'
import "../admin/admin.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {GetAllClientA,deleteClientA} from "../redux/action/actionClient"
import {deleteUsersA} from '../redux/action/actionUserss'
import UpdateClientC from "../view/updateClient"



const GetAllClientC =()=>{

   
    const clients = useSelector(state => state.clientStore.dataClient);
    const usersData = useSelector((state) => state.usersStore.dataUsersss);
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch( GetAllClientA());
},[]);

// DELETE CLIENT 
const deleteclientC=(id)=>{
  dispatch(deleteUsersA(id))
}
// const deleteclientC=(id)=>{
//   dispatch(deleteClientA(id))
// }



  return(
    <div>


        <div className="all-dash-user" >

{/* 
***** start table */}
<div class="col-lg-10 col-md-12 users-dh-achbord">
                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title">users Stats</h4>
                      <p class="card-category">All users of my app</p>
                    </div>
                    <div class="card-body table-responsive">
                      <table class="table table-hover">
                        <thead class="text-warning">
                        <th> </th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>edit  close</th>
                        </thead>
                        <tbody>
                        {usersData.map((el,key)=>(
                          <tr key={key}>
                             <td> <img class="image-client-dashbord" src={el.picture}   alt=""  /></td>
                            <td>{el._id}</td>
                            <td>{el.pseudo} </td>
                            <td> {el.email}</td>
                            <td class="td-actions ">
                                  <button type="button" rel="tooltip" title="Edit Task" class="btn btn-white btn-link btn-sm mr-3">
                                    
                                    <UpdateClientC el={el}  id={el._id} />
                                  </button>
                                  <button onClick={()=>deleteclientC(el._id)} type="button" rel="tooltip" title="Remove" class="btn btn-white btn-link btn-sm">
                                  <i class="material-icons">close</i>



                                  </button>
                                </td>
                          
                          </tr>
                          ))
}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ********* END table */}

        </div>
 



    </div>
   )

 }

export default  GetAllClientC 