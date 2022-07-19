import React, { useEffect, useState } from 'react'
import { logout } from '../../../externals/Redux/actions/actions';
import {useDispatch, useSelector } from 'react-redux';
import Login from '../../login/Login';
import Signup from '../../signup/Signup';
import './header.css';

const Header = () => {
  const [signupopen,setSignUpOpen] = useState(false);
  const [loginopen,setLoginOpen] = useState(false);
  const storeData = useSelector((state)=>state.reducer);
  const dispathch = useDispatch();

  useEffect(()=>{
    if(signupopen || loginopen){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "scroll"
    }
  },[signupopen,loginopen])

  const signUpCardhandler = ()=>{
    setSignUpOpen(false);
  }
  const LoginCardhandler = ()=>{
    setLoginOpen(false);
  }
  const cardSwitchhandler = (type)=>{
    if(type === 'login'){
      setLoginOpen(false);
      setSignUpOpen(true);
    }
    else if(type === 'signup'){
      setSignUpOpen(false);
      setLoginOpen(true);
    }
  }

  const logouthandler = ()=>{
    setLoginOpen(false);
    dispathch(logout())
  }

  return (
    <div className='max-width'>
      <div className="header">
        <div className="header-left">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className='header-logo' alt="zomato-logo" />
        </div>
        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <i className="fi fi-sr-marker location-icon absolute-center"></i>
                <div>Sahibabad</div>
              </div>
              <i className="fi fi-rr-caret-down caret-icon absolute-center"></i>
            </div>
            <div className="header-location-seperater"></div>
            <div className="header-search-container">
              <i className="fi fi-rr-search absolute-center search-icon"></i>
                <input className='seach-input' placeholder='Search for restaurant,cuisine or a dish'/>
            </div>
          </div>

        </div>
        <div className="header-accounts">
          {storeData.user?storeData.user.fullName:<div className="login" onClick={(e)=>setLoginOpen(true)}>Log In</div>}
          {storeData.user?  <div className="logout" onClick={logouthandler}>Log Out</div>:<div className="signup" onClick={(e)=>setSignUpOpen(true)}>Sign Up</div>}
          {loginopen && <Login controller={LoginCardhandler} switchController={cardSwitchhandler}/>}
          {signupopen && <Signup controller={signUpCardhandler} switchController={cardSwitchhandler}/>}
        </div>
      </div>
      <div className="breadcrumb">
        <a href="/" className='breadcrumb-active'>Home</a> 
        <span className='breadcrumb-slash'>/ </span> 
        <a href="/" className='breadcrumb-active'>India</a> 
        <span className='breadcrumb-slash'>/ </span> 
        <a href="/" className='breadcrumb-active'>Delhi NCR</a> 
        <span className='breadcrumb-slash'>/ </span> 
        <a href="/" className='breadcrumb-active'>Ghaziabad</a> 
        <span className='breadcrumb-slash'>/ </span> 
        <a href="/" className='breadcrumb-inactive'>Sahibabad Resrtaurants</a> 
      </div>
    </div>
  )
}


export default Header;