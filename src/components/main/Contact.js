import React from 'react';

export default function Contanct() {

    return(
        <div className='contact-section'>
            <div className='blue-box'>
                <div className='container text-box'>
                    <h3>Ubezpieczenie majątkowe</h3>
                    <p>Skontaktuj się z nami i skorzystaj ze specjalnej oferty!</p>
                </div>
            </div>
            <div className='container'>
                <div className='form-box'>
                    <p>Podaj dane kontaktowe, a my przygotujemy najlepszą ofertę</p>
                    <form>
                        <label>
                            <input type='text' placeholder='Imię i nazwisko'/>
                        </label>
                        <label>
                            <input type='email' placeholder='Adres e-mail'/>
                        </label>
                        <label>
                            <input type='phone' placeholder='Nr telefonu'/>
                        </label>

                            <div>
                                <label>
                                    <input type='text' placeholder='Miejscowość'/>
                                </label>
                                <label>
                                    <input type='text' placeholder='Miejscowość'/>
                                </label>
                            </div>

                    </form>
                </div>
            </div>
        </div>
    )
}