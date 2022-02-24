import React from 'react';
import './styles.css';
import logo from './img/logo.png';

export default function Logo(){
    return(
        <div>
            <a href='#comics'>
                <img src={logo} alt='logo' className='logoimg' />    
            </a>
        </div>
    )
}