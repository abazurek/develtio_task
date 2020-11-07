import React from 'react';
import Form from "./Form";

export default function Contanct() {

    return (
        <section className='contact-section'>
            <div className='container'>
                <div className='form-box'>
                    <p>Podaj dane kontaktowe, a my przygotujemy najlepszą ofertę</p>
                    <Form/>
                </div>
            </div>
            <div className='blue-box'>
                <div className='container '>
                    <div className='text-box'>
                        <h3>Ubezpieczenie majątkowe</h3>
                        <p>Skontaktuj się z nami i skorzystaj ze specjalnej oferty!</p>
                    </div>

                </div>
            </div>

        </section>
    )
}