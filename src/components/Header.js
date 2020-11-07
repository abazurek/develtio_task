import React,{useState} from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import smallerRectangle from './../assets/Rectangle_87.png'
import biggerRectangle from './../assets/Rectangle_86.png'

export default function Header({isExtraSmall, isPhone, isTablet}) {

    const[active,setActive]=useState(false);

    const list= <ul onClick={looseActive} className='nav-box'>
        <li>o nas</li>
        <li>oferta</li>
        <li>towarzystwa ubezpieczeń</li>
        <li>dołącz do nas</li>
        <li>przydatne materiały</li>
        <li>oddziały</li>
    </ul>;


    function burgerClicked() {
        setActive(!active)
    }
    function looseActive() {
        setActive(false)
    }

    return(
        <header className='container header-section'>
            <div className='logo-box'>
                <div className='images-box'>
                    <img src={smallerRectangle} alt='rectangle icon'/>
                    <img src={biggerRectangle} alt='rectangle icon'/>
                </div>
                <h4> <span>twoje</span>finanse</h4>
                <p>ubezpieczenia</p>
            </div>
            {(isExtraSmall || isPhone || isTablet)?
                <div  onClick={burgerClicked} className='burger-box'>
                    <FontAwesomeIcon className='burger-icon' icon={faBars}/>
                    {active? list : ''}
                </div>
                :
              list
            }

        </header>
    )
}