import React from 'react';
import './styles.css';
import logo from './img/logo.png';
import Tilt from 'react-tilt'

export default function Logo(){
    return(
        <div className='logocomp'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 300 }} >
                <img src={logo} alt='logo' className='logoimg' /> 
            </Tilt>
        </div>
    )
}