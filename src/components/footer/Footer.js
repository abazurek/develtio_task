import React from 'react';
import List from "./List";

export default function Footer() {

    return (
        <div className='footer-section'>
            <div className='container'>
                <List title='O nas' li1='Strona główna' li2="O nas" li3='Dołącz do nas' li4='Zostań Agentem'
                      li5='Kariera'/>
                <List title='Ubezpieczenia' li1='Ubezpieczenia mienia, nieruchomości'
                      li2="Ubezpiecznie osobowe" li3='Ubezpiecznie rolne' li4='Ubezpiecznie OC'
                      li5='Zobacz pełną ofertę'/>
                <List title='Pomoc' li1='Oddziały/Kontakt'
                      li2="Towarzystwa ubezpieczeniowe" li3='Przydatne materiały' li4='Informacje Administracyjne'
                      li5='Polityka cookies'/>
                      <List title='infolinia' li1='+48 22 311 1234'/>

            </div>
        </div>
    )
}