import React,{ useState } from 'react';
import './signup.css';
import logo from './google.png';
import axios from '../../externals/axios/axios';
import provider from '../../externals/firebase/firebase';
import { getAuth, signInWithPopup } from "firebase/auth";


const Signup = ({controller,switchController}) => {
    const [inputs,setInputs] = useState({
            fullName:'',
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

    const signuphandler = (e)=>{
        e.preventDefault();
        setProcessing(true);
        if(inputs.fullName !== ''  && inputs.email !=='' && inputs.password !== ''){
            axios.post('/sign-up', inputs).then(response => {
                setProcessing(false);
                if(response.status === 201){
                    setInputs({
                        fullName:'',
                        email:'',
                        password:''
                    });
                    setAlert({
                        message : response.data,
                        type : '#2ecc71',
                        visible :'block'                
                    });
                    setTimeout(()=>{
                        setAlert({
                            message : '',
                            type : '',
                            visible :'none'    
                        })
                    },3500);   
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
                        fullName:'',
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
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }


  return (
    <div className="auth_container">
        <div className='signup_container'>
        <div id="signup_header">
            <h3>Sign up</h3>
            <i className="fi fi-rr-cross-small" onClick={()=>controller()}></i>
        </div>
        <div className="notification" style={{backgroundColor:alert.type,color:"white",padding:"10px",borderRadius:"5px",display:alert.visible}}>{alert.message}</div>
        <div id="signup_body">
            <form id="signup_form">
                <input type="text" name="fullName" id="fullName" placeholder='Full Name...' value={inputs.fullName} onChange={handleChange}/>
                <input type="email" name="email" id="email" placeholder='Email...' value={inputs.email} onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder='Password...' value={inputs.password} onChange={handleChange}/>
                <button type="submit" id="signup_button" onClick={signuphandler}>{processing ? 'processing...':'Create account'}</button>
            </form> 
            <div className="divider"><span>or</span></div>
            <button id='google_signupButton' onClick={googleLogin}><img src={logo} alt="" /> Continue with Google</button>
            <div className="divider"></div>
            <p id="signup_footer">Already have an account? <span onClick={()=>switchController('signup')}>Log in</span></p>
        </div>
        </div>
    </div>
  )
}

export default Signup
