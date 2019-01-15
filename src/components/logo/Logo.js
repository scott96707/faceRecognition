import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="br2 shadow-2 Tilt" options={{ max : 100 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain} /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;