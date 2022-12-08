import Logo from '../../assets/logo.png';
import face from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';
import plus from '../../assets/google-plus.png';
import './style.css';


export default function Rodape(props) { 

    return (
        <footer>
            <div className={props.temaAtual ? 'div-footer-dark' : 'div-footer'}>
                <img className='logo' src={Logo} alt="" />
                <br />
                <br />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                <div className='social-midia'>
                    <a href="http://www.facebook.com/">
                        <img className='social-midia-links' target="_blank" rel="noopener noreferrer"  src={ face} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/">
                        <img className='social-midia-links' target="_blank" rel="noopener noreferrer" src={twitter} alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img className='social-midia-links' target="_blank" rel="noopener noreferrer" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://dribbble.com/">
                        <img className='social-midia-links' target="_blank" rel="noopener noreferrer" src={dribble} alt="dribble" />
                    </a>
                    <a href="https://www.behance.net/">
                        <img className='social-midia-links' target="_blank" rel="noopener noreferrer" src={behance} alt="behance" />
                    </a>
                    <a href="https://myaccount.google.com/">
                        <img className='social-midia-links' src={plus} target="_blank" rel="noopener noreferrer" alt="google plus" />
                    </a>

                    
                </div>
                <br/>
                <div className='rodape-dev'>
                    <p>2022 -<span> Brian C</span></p>
                </div>
            </div>
        </footer>
    )
}