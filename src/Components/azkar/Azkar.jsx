import { useState, useEffect } from "react";
import { azkarMassa, azkarSabah } from "../../api/axiosInstance";
import './azkr.css'
function Azkar() {
  const [azkarSabahaa, setAzkarShabhaa] = useState([]);
  const [azkarmassa, setAzkarMassa] = useState([]);

  const azkarSabaha = () => {
    azkarSabah.get()
      .then((res) => setAzkarShabhaa(res.data.content))
      .catch((err) => console.log(err));
  };
  const azkarMassaa = () => {
    azkarMassa.get()
      .then((res) => setAzkarMassa(res.data.content))
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    azkarSabaha();
    azkarMassaa();
  },[])
  // console.log(azkarSabahaa);
  // console.log(azkarmassa);
  const handelEvent = (e)=>{
    e.target.value <= 0 ? e.preventDefault() : e.target.value-- ;
  }
  const filterZekr = azkarSabahaa.map((sabah, id)=>(
    <div  className="zekra mb-3" key={id}>
        <h5 className="h4">{sabah.zekr}</h5>
        <span className="bless">{sabah.bless}</span>
        <div className="btns">
        <span>التكرار</span>
        <input type="button" className={`btn btn-sm ${sabah.value == 0?'true' : 'false'}`} value={sabah.repeat} onClick={(e)=> handelEvent(e)} />
        </div>
    </div>
))
const filterazkarMass = azkarmassa.map((m, ind)=>(
  <div  className="zekra mb-3" key={ind}>
      <h6 className="h5">{m.zekr}</h6>
      <span className="bless">{m.bless}</span>
      <div className="btns">
      <span>التكرار</span>
      <input type="button" className="btne btn-sm" value={m.repeat} onClick={(e)=> handelEvent(e)} />
      </div>
  </div>
))
// azkarmassa
const date = new Date();
console.log(date.toLocaleTimeString());
console.log(date.toLocaleTimeString().endsWith(""));

const result =  date.toLocaleTimeString().endsWith("PM")? 
 <>
 <h2 className="mb-4">أذكار المساء</h2> {filterazkarMass}
 </>  :
<>  <h2 className="mb-4">أذكار الصباح</h2>  {filterZekr}
</>;
  return (
    <div className="azkr mt-5">
            <div className="container">
             
    {result}
    </div>
    </div>

  );
}

export default Azkar;
