import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TiSocialFacebook } from 'react-icons/ti'; 
import { TiSocialTwitter } from 'react-icons/ti'; 
import { TiSocialInstagram } from 'react-icons/ti'; 
import { TiSocialGooglePlus } from 'react-icons/ti'; 

export default function Header() {
    return (
        <div className='header'>
            <span className='header-icons'>
                    <a href='#'><TiSocialFacebook color='blue' size='20px' /></a>
                    <a href='#'><TiSocialTwitter color='aquamarine' size='20px' /></a>
                    <a href='#'><TiSocialInstagram color='brown' size='20px' /></a>
                    <a href='#'><TiSocialGooglePlus color='red' size='20px' /></a>
            </span>
            <span className='header-address'>
                <div className='header-icon'><span className='icon'><FontAwesomeIcon icon='phone-alt'/></span>+234-8180907820</div>
                <div className='header-icon'><span className='icon'><FontAwesomeIcon icon='map-marker'/></span>
                No 2, banana island, lagos. Nigeria</div>
                <button type='button' className='btn btn-warning btn-sm'>Get A Free Consultation</button>
            </span>
        </div>
    )
}
