import {BrowserRouter as Router , Route , Routes, Navigate} from 'react-router-dom'
import Quran from "../quran/Quran";
import Navbar from '../navbar/Navbar';
import Azkar from '../azkar/Azkar';
import Ayaa from '../quran/Ayaa';
import Login from '../froms/Login';
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Error from '../Error/Error';
import Khtm from '../khtm/Khtm';
import Prayer from '../Payer/Pary';
import QuranAudio from '../quran/QuranAudio';
import Footer from '../footer/Footer';

function App() {
 
  return ( 
    <div dir="rtl">
<Router>
  <Navbar />
  <Routes>
  {/* <Route path='/'  element ={<Home />}/> */}
    <Route path='/'  element ={<Quran />}/>
    <Route path='/:id'  element ={<Ayaa />} />
    <Route path='/قران'  element ={<QuranAudio />}/>
    <Route path='/اذكاري'  element ={<Azkar />} />
    <Route path='/مؤاقيت'  element ={<Prayer />} />
    <Route path='/تسجيل الدخول'  element ={<Login />} />
    <Route path='/ختم'  element ={<Khtm />} />
    <Route path='/*' element = {<Error />} />
  </Routes>
  <Footer />
</Router>
    </div>
   );
}


export default App;