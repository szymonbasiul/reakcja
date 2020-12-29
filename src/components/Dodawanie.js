import React, {useState} from 'react';

function Dodawanie(props) {
const [variable1, setVariable1] = useState(0);
const funkcjaZmienSie = () => {
    setVariable1(props.liczba1+props.liczba2+props.liczba3);
}
    const zmiennaDodawania = (<div><div>{variable1}</div>
    <button onClick = {funkcjaZmienSie}>Zmien</button></div>);
    
    

    return zmiennaDodawania;



}

export default Dodawanie;