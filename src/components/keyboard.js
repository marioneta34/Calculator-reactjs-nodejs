import React from 'react';

export default ({addInput, calculate}) => {
    return(
        <div style= {{flex:1,display:"flex", flexDirection:"column"}}>
            <div style= {{display:'flex',flex:1}}>
                <div className="centrar">
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("7")
                        }}
                    >
                    7</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("8")
                        }}
                    >
                    8</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("9")
                        }}
                    >
                    9</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        id="operadores"
                        onClick = {() => {
                            addInput("/")
                        }}
                    >
                    ÷</div>
                </div>
            </div>
            <div style= {{display:'flex',flex:1}}>
                <div className="centrar">
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("4")
                        }}
                    >
                    4</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("5")
                        }}
                    >
                    5</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("6")
                        }}
                    >
                    6</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        id="operadores"
                        onClick = {() => {
                            addInput("*")
                        }}
                    >
                    x</div>
                </div>
            </div>
            <div style= {{display:'flex',flex:1}}>
                <div className="centrar">
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("1")
                        }}
                    >
                    1</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("2")
                        }}
                    >
                    2</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("3")
                        }}
                    >
                    3</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        id="operadores"
                        onClick = {() => {
                            addInput("-")
                        }}
                    >
                    -</div>
                </div>
            </div>
            <div style= {{display:'flex',flex:1}}>
                <div className="centrar">
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput("0")
                        }}
                    >
                    0</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        onClick = {() => {
                            addInput(".")
                        }}
                    >
                    .</div>
                </div>
                <div className="centrar">    
                    <div 
                        className="Boton" 
                        id="operadores"
                        onClick = {() => {
                            calculate()
                        }}
                    >
                    =</div>
                </div>
                <div className="centrar">    
                <div 
                        className="Boton" 
                        id="operadores"
                        onClick = {() => {
                            addInput("+")
                        }}
                    >
                    +</div>
                </div>
            </div>
        </div>
    )
}