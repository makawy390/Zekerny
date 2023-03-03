import  { useState , useEffect } from 'react';
// import { axiosAzkar, azkar, prayerApi } from '../../api/axiosInstance';
import axios from 'axios';
import './preyer.css'
function Prayer() {
const date = new Date();
const day = date.getUTCDate();
const month = date.getMonth();
const year = date.getFullYear();
const [value , setValue]= useState();
const [prayer, setPrayer]= useState([]);
const watch = date.toLocaleTimeString();
console.log(watch);
    const prayerFun = ()=>{
        axios.get(`https://api.aladhan.com/v1/timingsByAddress/${day}-${month+1}-${year}?address=${value}&method=8`)
        .then((res)=> {
            if (res.data.data.timings) {
                setPrayer(res.data.data.timings)
            }
            else {
                setPrayer(res.data)
            }
        })
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        prayerFun();
    },[value]);
    return ( 
        <div className='prayer'>
            <div className="container">                
            <div className="big-box">
            <div dir='ltr'>
        <input type="search" className='search' 
        placeholder='ُEnter Your Location'  value={value} onChange={(e)=> setValue(e.target.value)} dir='ltr' />
            </div>
        <div className="row">
        <div className="col-md">
            <div className="boxess">
                <h3>الفجر</h3>
            <h5>{prayer.Fajr}</h5>
            </div>
        </div>
        <div className="col-md">
            <div className="boxess">
            <h3>الشروق</h3>
        <h5>{prayer.Imsak}</h5>
            </div>
        </div>

        <div className="col-md">
            <div className="boxess">
            <h3>الظهر</h3>            
        <h5>{prayer.Dhuhr}</h5>
            </div>
        </div>
        <div className="col-md">
            <div className="boxess">
            <h3>العصر</h3>
        <h5>{prayer.Asr}</h5>
            </div>
        </div>
        <div className="col-md">
            <div className="boxess">
            <h3>المغرب</h3>
        <h5>{prayer.Maghrib}</h5>
            </div>
        </div>
        <div className="col-md">
            <div className="boxess">
            <h3>العشاء</h3>
        <h5>{prayer.Isha}</h5>
            </div>
        </div>
        </div>
            </div>
            </div>
        </div>
     );
}

export default Prayer;