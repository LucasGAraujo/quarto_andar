import Acessoria from "../pages/Acessoria"
import CardsBox from "../pages/CardsBox"
import LandingPage from "../pages/LandingPage"
import SobreNos from "../pages/SobreNos"
import './stylesComponents/main.css'

function Main() {

  function scrollToCards(){
    var elem = document.querySelector(".section_cardsBox");
    window.scroll({
          top: elem.offsetTop, 
          left: 0, 
          behavior: 'smooth' 
    });
    }
    
  return (
    <main className="main">
        
        <LandingPage functionScrollToCards={scrollToCards}/> 
        <CardsBox/>
        <SobreNos/>
        <Acessoria/>
        
    </main>
  )
}

export default Main