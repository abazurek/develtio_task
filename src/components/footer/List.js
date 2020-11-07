import React,{useState} from 'react';
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function List({title,li1, li2, li3, li4, li5, isExtraSmall, isPhone}) {

    const[active,setActive]=useState(false);

    const list=[li1, li2, li3, li4, li5];

        function showList() {
            setActive(!active)
        }

        function looseActive() {
            setActive(false);
        }


    return(
        <ul>
            <p>{title}</p>
            {(isExtraSmall || isPhone)?
                <div >
                    <FontAwesomeIcon icon={faAngleDoubleDown} onClick={showList}/>
                    {active? list.map(item=><li key={list.indexOf(item)} onClick={looseActive}>{item}</li>):''}
                </div>
            :
               list.map(item => <li key={list.indexOf(item)}>{item}</li>)
            }

        </ul>
    )
}