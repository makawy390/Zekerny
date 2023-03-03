import  { useState , useEffect } from 'react';
import { audioQuran } from '../../api/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
function QuranAudio() {
    const [quranAudio , setQuranAudio] = useState([]);

    useEffect(()=>{
        audioQuran.get()
        .then((res)=> setQuranAudio(res.data["audio_files"]))
        .catch((err)=> console.log(err))
    },[])
    const loader = useSelector((state)=> state.isLoader)
    const filterAudio = quranAudio.map(({audio_url , chapter_id})=>(
      <div className="col-md-4" key={chapter_id}>
       <div className="box">
       <audio controls preload="metadata" >
  <source src={audio_url} type="audio/mpeg" />
</audio>
       </div>
      </div>
    ))
    return ( 
      <>
      {loader?
      <Loader />
      :
            <div className="quran-audio">
          <div className='container'>
        <h6 className='h5 mb-4'>القران الكريم بصوت القارئ الشيخ : عبد الباسط عبد الصمد</h6>
        <div className="row">
        {filterAudio}

        </div>
        </div>
      </div>
}
      </>
     );
}

export default QuranAudio;
