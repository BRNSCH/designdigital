
import './style.css';
import Card from '../card';


export default function ExperienciaTrabalho(props) {
    

    //{ props.temaAtual ? '' : '' }
    return (
        
        
        <div className={props.temaAtual ? 'experiencia-secao-dark' :'experiencia-secao'}>
            <div className={ props.temaAtual ? 'experiencia-dark' : 'experiencia' }>
                <div className={ props.temaAtual ? 'titulo-efeito-dark' : 'titulo-efeito' }>
                    <h2>Experiências De Trabalho</h2>
                    <div></div>
                </div>
                <p> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className='cards-itens' >
                <Card temaAtual={props.temaAtual}
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces
                        completamente personalizados e otimizados para buscadores"
                />
                <Card temaAtual={props.temaAtual}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o
                        cliente e mapeando toda a sua jornada de compra"
                />
                <Card temaAtual={props.temaAtual}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo
                        do projeto, desde a definição inicial até a execução"
                />
            </div>
       </div> 
    )
}