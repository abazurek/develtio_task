import React from 'react';

export default function Form() {
    return(
        <form>
            <label>
                <input type='text' placeholder='Imię i nazwisko'/>
            </label>
            <label>
                <input type='email' placeholder='Adres e-mail'/>
            </label>
            <label>
                <input type='number' placeholder='Nr telefonu'/>
            </label>
            <div>
                <label>
                    <input type='text' placeholder='Miejscowość'/>
                </label>
                <label>
                    <input type='number' placeholder='Kod pocztowy'/>
                </label>
            </div>
            <label className='checkbox-label'>
                <div><input type='checkbox'/></div>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
            </label>
            <div className='form-button-box'>
                <button type='submit'>
                    Wyślij
                </button>
            </div>
        </form>
    )
}