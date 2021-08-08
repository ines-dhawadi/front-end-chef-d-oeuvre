import React from 'react'
import "../admin/admin.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {GetAllClientA} from "../redux/action/actionClient"
//import  UpdateArtisan from "../view/updateArtisan"



const GetAllClientC =()=>{

   
    const clients = useSelector(state => state.clientStore.dataClient);
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch( GetAllClientA());
},[]);




// const artisan = useSelector(state =>state.artisanStore.datas)
    
//     const dispatch = useDispatch()
//     useEffect(()=>{
//       dispatch( allArtisan());
//     },[]);
//     console.log("produit", artisan)
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
                          <th>phone</th>
                          <th>edit  close</th>
                        </thead>
                        <tbody>
                        {clients.map((el,key)=>(
                          <tr key={key}>
                             <td> <img class="image-client-dashbord" src={el.image}   alt=""  /></td>
                            <td>{el._id}</td>
                            <td>{el.nom} {el.prenom}</td>
                            <td> {el.telephone}</td>
                            <td class="td-actions ">
                                  <button type="button" rel="tooltip" title="Edit Task" class="btn btn-white btn-link btn-sm mr-3">
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" class="btn btn-white btn-link btn-sm">
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