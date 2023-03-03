import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {actionLogin} from '../../data/action';
function Login() {
    const [user, setUser] = useState(
        {email :'' , password : ""}
    );
    const navigate = useNavigate();
    // const login = useSelector((state)=> state.init);
    const dispatch = useDispatch ();
    const onSubmitting = (e)=>{
       if (user.email === '' || user.password === '') {
        e.preventDefault();
        console.log(user);
        Swal.fire({
            icon: 'error',
            title:  ` يلهووووي يلهووووي`,
            text: 'البريد الالكتروني او كلمه المرور غلط يا الماني',
            footer: 'وانت كنت فين'
          })
       }
       else{
        dispatch(actionLogin("تسجيل الدخول"? "تسجيل الخروج" : "تسجيل الدخول" ))
        navigate('/')
        Swal.fire(
            'عمل جيدا يا صديقي',
            'تمت المهمه بنجاح',
            'success'   
          )

       }
    }
    const handelInput = (e)=>{
        if (e.target.name == "email") {
            setUser({...user , email : e.target.value})
        }
        else if (e.target.name == "password"){
            setUser({...user , password : e.target.value})
        }
    }



    return ( 
        <div className="login mt-5">
                    <div className="container">
              <div className="row">
                <div className="col-md-4">
                <form className='form' onSubmit={(e)=> onSubmitting(e)}>
            <input type="email" name="email" className='form-control' value={user.email} onChange={(e)=> handelInput(e)}  placeholder='البريد الألكتروني' />
            {user.email.length ==0 ? <small className='text-danger'>برجاء ادخال البريد الالكتروني الخاصه بك</small> : '' }
            <input type="password" name="password" value={user.password} onChange={(e)=> handelInput(e)} className='form-control mt-3' placeholder='كلمة السر' />
            {user.password.length ==0 ? <small className='text-danger'>برجاء ادخال كلمه المرور الخاصه بك</small> : '' } <br/>
            
            <button className='btn  mt-3'>تسجيل الدخول</button>
        </form>
                </div>
              </div>
        </div>
        </div>
     );
}

export default Login;