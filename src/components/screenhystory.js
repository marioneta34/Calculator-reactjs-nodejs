import React, { Component } from 'react';

class Screenhystory extends Component {
    constructor(){
        super()
        
        this.state = {
            historial : [],
            isFetch: true,
        }

    }

    //Trae los datos del modal, pero solo una vez, un problema porque tengo que recargar cada vez que quiero mostrar
    componentDidMount() {
        fetch('http://localhost:5000/hystory')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            this.setState({historial: json, isFetch: false})
            console.log(json)
        })
        .catch((error) => {
            console.log(error)
        })
}

    
    render (){
        //Si la promesa todavia no regreso muestra cargado historial
        if (this.state.isFetch){
            return 'Cargando historial..'
        }
        return(
 
            //mapeamos historial para renderizar en pantalla
            this.state.historial.reverse().map((historial) => <div className="fonthistorial">{historial.operacion} = {historial.resultado}</div>)

        )
        

    }
}

export default Screenhystory