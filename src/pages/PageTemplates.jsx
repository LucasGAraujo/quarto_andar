import Header from "../components/Header"
import TemplatesContainer from './templatesContainer'
import './stylesPages/pageTemplates.css'
import { Link } from 'react-router-dom';
import imagem1 from '../assets/sitewebteste.jpg'
import imagem2 from '../assets/sitewebteste2.jpg'
 import imagem3 from '../assets/sitewebteste3.jpg'
 import imagem4 from '../assets/sitewebteste4.jpg'
 import imagem5 from '../assets/modelopronto.webp'
 import imagem6 from '../assets/modelopronto2.webp'
 import imagem7 from '../assets/modelopronto3.webp'
 import imagem8 from '../assets/modelopronto4.png'
import imagem9 from '../assets/modelopronto5.jpg'
 import imagem10 from '../assets/modelopronto6.png'
 import imagem11 from '../assets/modelopronto7.jpg'
import imagem12 from '../assets/modelopronto8.jpg'
import imagem13 from '../assets/modelopronto9.jpg'
import imagem14 from '../assets/modelopronto10.png'
function PageTemplates() {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("backToTop").style.top = "15px";
    } else {
      document.getElementById("backToTop").style.top = "-50px";
    }
    }
  
    function scrollTop(){
      var elem = document.querySelector(".header");
      window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
      });
      }
    return(
        <div className="PageTemplates">
            <header className="header_Page--template">
            <Header functionScrollTop={scrollTop}
              />
            </header>
        
        <main className="templates">
            <header className="header_template">
                    <h1>
                        Veja alguns templates prontos
                    </h1>
                    <h3>
                        Não tem certeza em qual modelo escolher? Não se preocupe fale com nossa acessoria <Link style={{ textDecoration: 'none' }} to="/">
                          <button onClick={ () => {
                           window.scrollBy(0, 2400);
                        }}>Acessoria</button></Link>
                    </h3>
            </header>
            <TemplatesContainer imagem1={imagem1} imagem2={imagem3} title1='lading andamento' title2='viacar' />
             <TemplatesContainer imagem1={imagem2} imagem2={imagem4} title1='loja eletronica' title2='loja virtual'/>
            <TemplatesContainer imagem1={imagem5} imagem2={imagem6} title1='Loja planta' title2='fotogroup'/>
            <TemplatesContainer imagem1={imagem7} imagem2={imagem8} title1='curso' title2='escola'/>
            <TemplatesContainer imagem1={imagem9} imagem2={imagem10} title1='vegetal' title2='dashbord'/>
            <TemplatesContainer imagem1={imagem11} imagem2={imagem12} title1='restaurante' title2='analise de dados'/>
            <TemplatesContainer imagem1={imagem13} imagem2={imagem14} title1='auto peças' title2='digital inovation'/> 
            
            
        </main>
        </div>
    )
}
export default PageTemplates