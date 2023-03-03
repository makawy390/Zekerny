    import { useState, useEffect } from "react";
import {axiosInstance} from "../../api/axiosInstance";
import {useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux'
import './quran.css'
// import { likeSura } from "../../data/action";
// import QuranAudio from "./QuranAudio";
import Loader from "../loader/Loader";
function Quran() {
    const [sura , setSura] =  useState([]);
    const navigate = useNavigate('');
    const FilterQuran = ()=>{
        axiosInstance.get().then((res)=> setSura(res.data))
        .catch((err)=> console.log(err))
    }
    console.log(sura);
    useEffect(()=>{
        FilterQuran();
    },[]);
    // const dispatch = useDispatch();
    const loader = useSelector((state)=> state.isLoader)
    const restQuran = sura.map(({name, id, type , name_translation })=>(
        <div className="col-md-3 mb-2" key={id}>
            <div className="quran-box mb-2" onClick={()=> navigate(`${name}`)}>
           <div className="spans">
           <span>{name}</span>
           <span dir="ltr">{id}.{name_translation}</span>
           </div>
           <div className="spans">
           <span>{type}</span>
           </div>
            </div>
        </div>
    ));
    return (  
        <div className="container">
           {loader&&
           <Loader />
           }
        <div className="quran mt-5">
            <div className="container">
                <div className="row">
                    {restQuran}
                    {/* <QuranAudio /> */}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Quran;