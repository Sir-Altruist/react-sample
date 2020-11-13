import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti'; 
import { TiSocialTwitter } from 'react-icons/ti'; 
import { TiSocialYouTube } from 'react-icons/ti';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <p className='footer-logo'>ALTRUIST TECH HUB</p>
                        <p>Altruist Tech Hub is a tech company designed to enhance technology advancement
                            and see to the need of keeping up with technological pace.</p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-4'>
                        <p className='footer-heading'>About Us</p>
                        <ul className='list-unstyled'>
                            <li><a href='#' className='footer-link'>Home</a></li>
                            <li><a href='#' className='footer-link'>Services</a></li>
                            <li><a href='#' className='footer-link'>Blogs</a></li>
                            <li><a href='#' className='footer-link'>Events</a></li>
                        </ul>  
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-4'>
                        <p className='footer-heading'>Quick Links</p>
                        <ul className='list-unstyled'>
                            <li><a href='#' className='footer-link'>Privacy Policy</a></li>
                            <li><a href='#' className='footer-link'>Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-4'>
                        <p className='footer-heading'>Contact Us</p> 
                        <div>
                            <span><a href='#' className='footer-icon'><FontAwesomeIcon icon='phone-alt' className='footer-icon' />+234-8180907820</a></span><br />
                            <span><a href='#' className='footer-icon'><FontAwesomeIcon icon='envelope' />eshooluwasegun98@gmail.com</a></span>
                            <span style={{padding: '10px'}}><a href='#' style={{color: 'white'}}><TiSocialFacebook /></a></span>
                            <span style={{padding: '10px'}}><a href='#' style={{color: 'white'}}><TiSocialTwitter /></a></span>
                            <span style={{padding: '10px'}}><a href='#' style={{color: 'white'}}><TiSocialYoutube /></a></span>
                        </div> 
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
