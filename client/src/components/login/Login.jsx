import React,{useState} from 'react';
import './login.css';
import logo from './google.png';
import axios from '../../externals/axios/axios';
import provider from '../../externals/firebase/firebase';
import { getAuth, signInWithPopup } from "firebase/auth";
import { getuser } from '../../externals/Redux/actions/actions';
import { useDispatch} from 'react-redux';


const Login = ({controller,switchController}) => {
    const dispatch = useDispatch();
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    })
    const [alert,setAlert] = useState({
        message :'',
        type :'',
        visible:'none'
    });
    const [processing,setProcessing] = useState(false);
    const handleChange = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const loginhandler = (e)=>{
        e.preventDefault();
        setProcessing(true);
        if(inputs.email !=='' && inputs.password !== ''){
            axios.post('/login', inputs).then(response => {
                setProcessing(false);
                if(response.status === 200){
                    axios.post('/getuser',{},{
                        headers:{
                            "auth-token" : response.data.token
                        }
                    }).then((response2)=>{
                        dispatch(getuser(response2.data))
                        controller()
                    }).catch((eror)=>{
                        console.warn(eror);
                    })
                    setInputs({
                        email:'',
                        password:''
                    }); 
                    setAlert({
                        message : '',
                        type : '',
                        visible :'none'                
                    })   
                }
            }).catch(err => {
                setProcessing(false);
                if(err.response.status === 400){
                    setAlert({
                        message : err.response.data,
                        type : '#e74c3c',
                        visible :'block'                
                    })
                }
                else{
                    setInputs({
                        email:'',
                        password:''
                    });
                    setAlert({
                        message : 'Internal Server Error',
                        type : '#e74c3c',
                        visible :'block'                
                    })   
                    setTimeout(()=>{
                        setAlert({
                            message : '',
                            type : '',
                            visible :'none'    
                        })
                    },3500)   
                }
            })
        }
        else{
            setProcessing(false);
            setAlert({
                message : "Please FIll Required Fields",
                type : '#f39c12',
                visible :'block'                
            })   
            setTimeout(()=>{
                setAlert({
                    message : '',
                    type : '',
                    visible :'none'    
                })
            },3500)   
        }
    }
    const googleLogin = ()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(getuser({
                _id : result.user.uid,
                fullName:result.user.displayName,
                email :result.user.email,
            }))
            controller()
        }).catch((error) => {
            setAlert({
                message : error.message,
                type : '#e74c3c',
                visible :'block'                
            })   
            setTimeout(()=>{
                setAlert({
                    message : '',
                    type : '',
                    visible :'none'    
                })
            },3500)   
        });
    }


  return (
    <div className="auth_container">
        <div className='login_container'>
        <div id="login_header">
            <h3>Log in</h3>
            <i className="fi fi-rr-cross-small" onClick={(e)=>controller()}></i>
        </div>
        <div className="notification" style={{backgroundColor:alert.type,color:"white",padding:"10px",borderRadius:"5px",display:alert.visible}}>{alert.message}</div>
        <div id="login_body">
            <form id="login_form">
                <input type="email" name="email" id="email" placeholder='Email...' value={inputs.email} onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder='Password...' value={inputs.password} onChange={handleChange}/>
                <button type="submit" id="login_button" onClick={loginhandler}>{processing ? 'processing...':'Login'}</button>
            </form> 
            <div className="divider"><span>or</span></div>
            <button id='google_loginButton' onClick={googleLogin}><img src={logo} alt="" /> Continue with Google</button>
            <div className="divider"></div>
            <p id="login_footer">New to Zomato? <span onClick={()=>switchController('login')}>Create account</span></p>
        </div>
        </div>
    </div>
  )
}

export default Login
