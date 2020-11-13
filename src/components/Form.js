import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Form() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h4>Fill up the <span>Details</span></h4>
                    <form className='input-group'>
                        <input type='text' placeholder='Your Name*' className='form' required />
                        <input type='text' placeholder='Email Address*' className='form' required />
                        <input type='text' placeholder='Subject' className='form-1' />
                        <textarea placeholder='Message' className='form-1' />
                        <button type='button' className='btn btn-primary btn-sm form-button'>Send Message</button>
                    </form>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h4>Contact <span>Information</span></h4>
                    <div className='container'>
                        <div className='row form-icons'>
                        <div className='col-lg-4 col-md-4 col-sm-12'><FontAwesomeIcon icon='phone-alt' className='form-icon' />
                        <b>Phone</b>< br />+234-8180907820</div>
                        <div className='col-lg-8 col-md-8 col-sm-12'><FontAwesomeIcon icon='envelope' className='form-icon' />
                        <b>Email Us</b><br />eshooluwasegun98@gmail.com</div>
                        <div className='address'><FontAwesomeIcon icon='map-marker' className='form-icon-map' /><b>Address</b><br/>
                        No 2, banana island, lagos. Nigeria</div>
                        </div>
                    </div>
                    <div className='form-images'>
                        <h6>Follow Us :</h6>
                        <a href='#'><img src='/images/social-media-images/facebook.png' 
                        className='img-fluid rounded rounded-circle form-img'/></a>
                        <a href='#'><img src='/images/social-media-images/instagram.jpg' 
                        className='img-fluid rounded rounded-circle form-img'/></a>
                        <a href='#'><img src='/images/social-media-images/twitter.png' 
                        className='img-fluid rounded rounded-circle form-img'/></a>
                        <a href='#'><img src='/images/social-media-images/linkedin.png' 
                        className='img-fluid rounded rounded-circle form-img'/></a>
                    </div>
                </div><br />
                <img src='/images/map.png' className='form-image' alt='map'/>
            </div> <hr></hr> 
        </div>
        
    )
}
