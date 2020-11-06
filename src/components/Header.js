import React from 'react';

import smallerRectangle from './../assets/Rectangle_87.png'
import biggerRectangle from './../assets/Rectangle_86.png'

export default function Header() {

    return(
        <div className='container header-section'>
            <div className='logo-box'>
                <div className='images-box'>
                    <img src={smallerRectangle} alt='rectangle icon'/>
                    <img src={biggerRectangle} alt='rectangle icon'/>
                </div>
                <h4> <span>twoje</span>finanse</h4>
                <p>ubezpieczenia</p>
            </div>
            <ul className='nav-box'>
                <li>o nas</li>
                <li>oferta</li>
                <li>towarzystwa ubezpieczeń</li>
                <li>dołącz do nas</li>
                <li>przydatne materiały</li>
                <li>oddziały</li>
            </ul>
        </div>
    )
}