import React, { useState } from 'react';
import Screen from './screen';
import Keyboar from './keyboard';
import Screenhystory from './screenhystory';

export default () => {
    const [ input, setInput] = useState('')
    const [ historial, sethistorial] = useState('')
    
    //actualizando el input
    const addInput = (char) => {
        let newInput = input;
        newInput += char;
        setInput(newInput);
    }

    //borrar datos del input
    const clearInput = () => {
        setInput("");
    }
       
    //calcular
    const calculate = () => {
        var url = 'http://localhost:5000/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `object= ${encodeURIComponent(input)}`
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setInput(data);
            })
            .catch(function(err) {
                console.error(err);
            });
    }
       
    //Refresco la pagina porque componentDidMount() de la pagina S se ejecuta solo al inicio
    const historiales= () => {
        window.location.reload(true);
    }
    
    return <div className="calculadora">
            <div className="TituloHeader">Cassi</div>
            <Screen input = {input}></Screen>
            <Keyboar addInput={addInput} calculate={calculate}/>
            <div className="Borrar" onClick={clearInput}>Borrar</div>
            <div className="Historial" onClick={historiales}>Historial</div>
            <Screenhystory/>
        </div>
};