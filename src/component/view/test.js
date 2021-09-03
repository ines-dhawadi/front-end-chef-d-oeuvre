import React from 'react'
import "../css/cardartisan.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { deleteArtisanB ,allArtisan} from "../redux/action/actionArtisan"
import  UpdateArtisan from "../view/updateArtisan"

const GetArtisan=()=>{
    const artisan = useSelector(state =>state.artisanStore.datas)
    
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)
  
  

  //Delete ARTISAN
  const deleteARTISAN =(id)=>{
    dispatch (deleteArtisanB(id) )
    console.log(deleteArtisanB(id))
  }
  
  
    return(
    <div id="card-artisan">

{artisan.map((el,key)=>(
<div>

<div class="card" key={key}>
  <div class="">
{/* <img className="card-logo " src='images/logo.webp'/> */}
<img class="img-avatar" src={el.imageP} alt="" />
  </div>
  <div class="card-text">
    <div class="portada" >
 
    <img class="portada"  src={el.image1}/>
    </div>
    <div class="title-total">   
      <div class="title">{el.role}</div>
      <h2>{el.non} {el.prenom}</h2>
  
  <div class="desc">{el.desc}</div>
  <div class="actions">
    <button><i class="far fa-heart"></i></button>
    <button onClick={() => deleteARTISAN(el._id)}><i class="far fa-trash-alt"></i> </button>

< UpdateArtisan id={el._id}  el={el}/>

  
    
    {/* <button><i class="far fa-envelope"></i></button>
    <button><i class="fas fa-user-friends"></i></button> */}
  </div></div>
 
  </div>
  
 
  
</div>


  
</div>



))}

{/* END CARD */}




    </div>
   )

 }

export default  GetArtisan



//get one publication controller
getPublicationById:async(req,res)=>{
  try {
    const publication = await PUBLICATION.findById(req.params.id);
    res.json(publication);
}
catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
},
// get  publication by id action 

export const getPubById=(id)=> async (dispatch)=> {
try{
const res = await axios.get(http://localhost:4000/app/publication/getPublicationById/${id})
dispatch({
type:"GET_PUBID_SUCCEDED",
payload:res.data 

})
console.log('getPubById',res.data)
}
catch (error) {
        console.log(error);
       }
}
// reducer
case "GET_PUBID_SUCCEDED":

  return {
    ...state,
    datas: payload,
    loading: false
  };
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import { getPubById} from '../redux/actions/publicationAction'
import PubById from './publication'
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function BlogCard() {
const datas = useSelector(state => state.pubReducer.datas)
const loading = useSelector(state => state.pubReducer.loading)
const dispatch = useDispatch()


useEffect(() => {
dispatch(getPub());
},[]);
console.log(datas, "did we ?");

const getItem =(id)=>{
dispatch (getPubById(id) )

}
return (
<div>
     <div className="d-flex justify-content-between flex-wrap mb-3 blog">
{datas.map(el => (<div>
  <Card style={{ width: '20rem' }}>
<Card.Img variant="top" src={el.image} style={{ height: '16rem' }}/>
<Card.Body>
<Card.Title><a href="#">{el.titre}</a></Card.Title>

<Card.Text>
<p className="text-muted">Par {el.auteur}</p><br/>
<p>{el.texte}</p><br/>

</Card.Text>
<Button variant="primary">Lire la suite</Button>
{/* <PubById id={el._id} /> */}
<Link to={/PubById/${el._id}}>
<button
                type='button'
                className='btn btn-danger btn-sm'
                onClick={() => getItem(el._id)}

            >

                get
</button></Link>

</Card.Body>
</Card>


  </div>
))}
</div>

</div>
)
}
Mohamed Mansouri — Aujourd’hui à 16:57
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPubById} from "../redux/actions/publicationAction"
import{Card,Button} from 'react-bootstrap'


export default function PubById({id}) {


const datas = useSelector(state => state.pubReducer.datas)
const loading = useSelector(state => state.pubReducer.loading)
const dispatch = useDispatch()


useEffect(() => {
dispatch(getPubById( id));
},[]);
console.log(datas, "pub by id");






return (
<div>
    {/* <h1 className="text-center">Liste des datas</h1> /}

<div className="d-flex desc text-center justify-content-between flex-wrap ">

  <Card style={{ width: '18rem' }}>
{/ <Card.Img variant="top" src={el.image} style={{ height: '16rem' }}/> */}
<Card.Body>
<Card.Title>{datas.date}</Card.Title>

<Card.Text>

{datas.titre}<br/>
{datas.texte}<br/>
{datas.auteur}
</Card.Text>

</Card.Body>
</Card>


</div>

</div>
)
}
message.txt
4 Ko