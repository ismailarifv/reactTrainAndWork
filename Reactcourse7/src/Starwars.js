import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Starwars() {
   const [ships,setships] = useState()

useEffect(()=>{
    axios.get("https://swapi.dev/api/starships/").then((response) =>{
    setships(response.data.results)
    })
},[])

if (ships == null) {
    return <div></div>;
  }
  return (
    <div className='row'>
        <h1>Starwars Ships</h1>
       {ships.map((i,index)=>{
        return(
            <div className='d-flex col-3 justify-content-center  mt-5'>
                <div key={index} class="card bg-danger" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">{i.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item  bg-info"><b>Max speed:</b> {i.max_atmosphering_speed}</li>
                        <li class="list-group-item text-info"><b>Passengers:</b> {i.passengers}</li>
                        <li class="list-group-item text-warning"><b>starship_class:</b> {i.starship_class}</li>
                    </ul>
                    
                    </div>
            </div>
        )
       })}
    </div>
  )
}

export default Starwars