import React, { useState, useEffect } from 'react';
import { audioQuran, axiosInstance } from '../../api/axiosInstance';
import {useParams} from 'react-router-dom'
function Ayaa() {
    const [ayaa , setAyaa] = useState([]);
    const params = useParams();
    const funcAyaa = ()=>{
        axiosInstance.get().then((res)=> setAyaa(res.data))
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        funcAyaa();
    },[]);
    const getAyaa = ayaa.map(({name , id , ar})=> (
       name == params.id?  
       <div key={id}>
       <h2>سوره {name}</h2>
       <div className="quran-card" >
       <p>{ar}</p>
   </div>
       </div>
       : ''
    ))

    return ( 
        <div className='ayaa'>
            <div className="container">
                {getAyaa}
            </div>
        </div>
     );
}

export default Ayaa;