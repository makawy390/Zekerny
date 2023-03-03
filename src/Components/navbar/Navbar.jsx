import {NavLink, Link , useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';

import './nav.css'
import {actionLogin} from '../../data/action';
function Navbar() {
    const link = [
      {name : "الرئسية", url : '/'},
        {name : " القران الكريم", url : '/قران'},
        {name : "مؤاقيت الصلاه", url : '/مؤاقيت'},
        {name : "اذكار المسلم", url : '/اذكاري'},
        {name : "دعاء الختم", url : '/ختم '},
    ];
    const login = useSelector((state)=> state.init);
    const like = useSelector((state)=> state.counter);
console.log(login);
    const navigate = useNavigate();
    const dispatch = useDispatch ();
    const handelChange = ()=>{
      dispatch(actionLogin("تسجيل الدخول"))
      navigate('/تسجيل الدخول')
    }
    return ( 

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/"> ذكرني</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto me-2 mb-lg-0">
        {link.map(({name, url}, id)=>(
             <li className="nav-item" key={id}>
          <NavLink className="nav-link" to={url} end>{name}</NavLink>
        </li> 
        ))}
        </ul>
      <div className="d-flex">
        <span className='logins'  onClick={()=> handelChange() } >{login}</span>
      </div>
    </div>
  </div>
</nav>
     );
}

export default Navbar;