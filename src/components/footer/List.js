import React from 'react';

export default function List({title,li1, li2, li3, li4, li5}) {

    return(
        <ul>
            <p>{title}</p>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
        </ul>
    )
}