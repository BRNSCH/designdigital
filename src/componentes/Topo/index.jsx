import React from 'react';
import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSun from '../../assets/sun.png';
import './style.css';


export default function Topo(props) {

    //const iconeTema = '';
    let icone1 = iconeLua;
    let icone2 = iconeSun;
    
    
    
    

    return (
        <div className={props.temaAtual ? 'temaDark': 'temaWhite'}>
            <div className='container'>
                <img className='logo' src={Logo} alt="logomarca" />
                <button className={props.temaAtual ? 'button-light' : 'button-dark'} onClick={props.escolheTema}>
                    <img className="button-logo" src={props.temaAtual ? icone2 : icone1 } alt='icone' />
                </button>
            </div>
        </div>
    )
}