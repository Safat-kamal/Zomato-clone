import React from 'react'
import './footer.css';
import Flag from '../../../india.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width'>
        <div className='footer-header'> 
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-logo" className='footer-logo'/>
          <div className='footer-header-right'>
              <div className="country">
                <span className='flag'> <img src={Flag} alt=''/></span> <span>India</span> <i className="fi fi-sr-angle-small-down absolute-center"></i>
              </div>
              <div className='language'>
              <i className="fi fi-rr-globe absolute-center"></i> <span>English</span> <i className="fi fi-sr-angle-small-down absolute-center"></i>
              </div>
          </div>
        </div>
        <div className='footer-row'>
            <div className='col'>
              <ul>
                <li className='column-heading'>ABOUT ZOMATO</li>
                <li><a href="/">Who We Are</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Work With Us</a></li>
                <li><a href="/">Investor Relations</a></li>
                <li><a href="/">Report Fraud</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul>
                <li className='column-heading'>ZOMAVERSE</li>
                <li><a href="/">Zomato</a></li>
                <li><a href="/">Feeding India</a></li>
                <li><a href="/">Hyperpure</a></li>
                <li><a href="/">Zomaland</a></li>
              </ul>
            </div>
            <div className='col'>
                <div className='footer-row'>
                  <ul>
                    <li className='column-heading'>FOR RESTAURANTS</li>
                    <li><a href="/">Partner With Us</a></li>
                    <li><a href="/">Apps For You</a></li>
                </ul>
                </div>
                <div className='footer-row'>
                  <ul>
                    <li className='column-heading'>FOR ENTERPRISES</li>
                    <li><a href="/">Zomato For Work</a></li>
                </ul>
                </div>
            </div>
            <div className='col'>
              <ul>
                <li className='column-heading'>LEARN MORE</li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Security</a></li>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Sitemap</a></li>
              </ul>
            </div>
            <div className='socials'>
              <ul className='heading'>
                <li className='column-heading'>SOCIAL LINKS</li>
              </ul>
              <ul className='social-icons'>
                <li><a href="/"><i className="fi fi-brands-linkedin"></i></a></li>
                <li><a href="/"><i className="fi fi-brands-instagram"></i></a></li>
                <li><a href="/"><i className="fi fi-brands-twitter"></i></a></li>
                <li><a href="/"><i className="fi fi-brands-youtube"></i></a></li>
                <li><a href="/"><i className="fi fi-brands-facebook"></i></a></li>
              </ul>
              <div className='app-store-cover'>
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app-store" className="app-store-image"/>
              </div>
              <div className='play-store-cover'>
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt='play-store' className='play-store-image'/>
              </div>
            </div>
        </div>
        <div className='footer-seperator'></div>
        <div className='footer-bottom'>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
        </div>
      </div>
      
    </div>
  )
}

export default Footer
