import React from 'react';
import Banner from '../../assets/banner.png';
import './style.css'

export default function SecaoBanner(props) {

        //const [temaAtual, setOutroTema] = useState(false);

        //const escolheTema = () => {
            //setOutroTema(!temaAtual);
    //{ props.temaAtual ? '' : '' }
        //}   
    
    return (

        <div className='div-banner'>
            <img className={props.temaAtual ?  'img-banner-dark' :  'img-banner'}  src={Banner} alt="banner" />
            <div className='banner-divisao banner-conteudo'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding <br></br><span>e design digital</span></h2>
                
            </div>
        </div>
    )
}