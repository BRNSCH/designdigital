import React from 'react';
import './style.css';



export default function Card(props) { 
    
        
    return (
        
           <div id='cards'>
                <div className={props.temaAtual ? 'card-conteudo-dark' : 'card-conteudo-light'}>
                
                    <p>{ props.data}</p>
                    <h3>{props.titulo}</h3>
                    <p>{props.empresa}</p>

                    <p>{props.paragrafo}</p>
                </div>
                
            </div>
        
    )
}