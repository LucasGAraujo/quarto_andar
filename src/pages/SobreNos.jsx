import Janela from '../components/Janela.jsx'
import './stylesPages/sobreNos.css'
import Image4andar from '../assets/4andar.jpeg'

export default function SobreNos(){

    return(
        <section className="section_sobreNos"> 
            <h2>Sobre nós</h2>
            <p id="texto-aparecendo">Interaja com as janelas para revelar seu conteúdo!</p>
            <div className='carrossel-sobreNos'>
                <Janela 
                        titulo="Nossa história"
                        texto="Tudo começou na faculdade de Engenharia de software, 
                        quando o Lucas, nosso pioneiro, teve a ideia de fundar o 
                        quarto andar! Então ele juntou-se com o João Miguel, Kaique 
                        e com o Pedro para iniciar o projeto! Eles se reuníam sempre 
                        no quarto andar da faculdade e é daí que surgiu o nome da 
                        empresa!"
                />
                <Janela  
                        titulo="Nossos fundadores"
                        texto="Temos 4 pessoas que participam do Quarto Andar desde o
                        seu começo. Lucas Gomes, João Miguel Santos, Pedro Cuber e Kaique
                        Coelho. Eles sempre foram muito unidos e se empenharam ao máximo para 
                        esse projeto ser realizado!"
                        imageVerification={true} 
                        img={Image4andar}
                />
            </div>
            <div className='carrossel-sobreNos'>
                <Janela
                        titulo="O que fazemos?"
                        texto="Bom, a empresa quarto andar oferece tudo o que há de melhor
                        sobre soluções web. Criamos sites, aplicativos e sistemas ao seu gosto!
                        Logo abaixo você pode fazer seu orçamento!"
                />
                <Janela     
                        titulo="Onde estamos localizados?"
                        texto="Nos encontramos localizados no centro do Rio de Janeiro, no prédio
                        do instituto INFNET. O andar você já sabe ne? 😉"
                />
            </div>
            
        </section>
    )
}