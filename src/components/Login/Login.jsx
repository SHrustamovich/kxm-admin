import './Login.scss'
import LoginIcon from '../../lib/image/userIcon.png'
import ParolIcon from '../../lib/image/parol.png'
import {useLogin} from '../../lib/Context/Context'
import { Redirect } from 'react-router-dom'


const Login = () => { 
    const [token,setToken ] = useLogin()
 const handlySubmit = e => {
     e.preventDefault()
     const {name,password} = e.target.elements
    //  console.log(name.value,password.value);
     fetch('http://localhost:5000/login',{
         method:'POST',
         headers:{
            'Content-Type': 'application/json'
         },
         body:JSON.stringify({
             name:name.value,
             password:password.value
         })
        })
         .then(res => res.json())
         .then(data =>{
             setToken(data.token)
             if(data){
                window.location.href = "/"
             }
         }
         )
         .catch(err => console.log(err))
 }
    return(
       <>
       {
           token?<Redirect to='/main'/>:<Redirect to='/login'/>
       }
       
        <div className="login">
              <div className="login-wrapper">
                  <form action="" className="login-form" onSubmit={handlySubmit}>
                      <p className="login-h3">Kirish</p>
                       <div className="login-field">
                        <img src={LoginIcon} alt="icon" className="login-icon" />
                       <input name='name' type="text" className="login-input" />
                       </div>
                       <div className="login-field">
                        <img src={ParolIcon} alt="icon" className="login-icon" />
                       <input name='password' type="text" className="login-input" />
                       </div>
                      <button className="login-btn"><span className='login-p'>Kirish</span></button>
                  </form>
              </div>
        </div>
       </>
    )
}
export default Login;