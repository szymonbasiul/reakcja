import React from 'react';
import Dodawanie from './Dodawanie';

function JakChcesz(props) {

    const testowynapis = (
    <div>
        PrzykladoweKopiowanie{props.napis}
        
    </div>
    
    )
    console.log(props.napis);
    return <Dodawanie liczba1 = {1} liczba2 = {2} liczba3 = {3}/>;
}


export default JakChcesz;