import './stylesComponents/header.css'
import '../app.css'
import setinha from '../assets/setaPracima.png'
import { Link } from 'react-router-dom';

function Header(props) {

  const handleClick = () => {
    let menu = document.getElementById("menu");

    if(menu.style.marginLeft == "100vw") {
      menu.setAttribute("style", "margin-left:0");
  }else {
      menu.setAttribute("style", "margin-left:100vw");
  }
  }

  return (
    <div>
      <button id="backToTop" onClick={props.functionScrollTop}>
        <img src={setinha}/>
      </button>
      <header className="header" id="header">
      <div id="quartoAndarLogo-Menu"> 
       <span id="logo">4A</span>
       <span>ndar</span>
    </div>
    <div className="caixa_menu">
      <div className="oneList">
<Link  style={{ textDecoration: 'none' }} to="/"><button onClick={props.functionScrollToAcessoria}>Acessoria ao cliente</button></Link>
         <Link style={{ textDecoration: 'none' }} to="/templates"><button>Templates</button></Link>
      </div>
       <h1 id="quartoAndarLogo-Desktop">Quarto Andar</h1>
       <div className="twoList">
        <Link  style={{ textDecoration: 'none' }} to="/"> <button onClick={props.functionScrollToAcessoria}>Contatos</button></Link>
        <Link style={{ textDecoration: 'none' }} to="/"><button onClick={props.functionScrollTodev}>Nossos desenvolvedores</button></Link>
      </div>
    </div>
    <button id="menuMobile_icone" onClick={handleClick}> 
        <div></div>
        <div></div>
        <div></div>
    </button>
    </header>
    <div className="menuMobile" id="menu">
      <button>Quarto Andar</button>
      <Link  style={{ textDecoration: 'none' }} to="/"><button onClick={props.functionScrollToAcessoria}>Acessoria ao cliente</button></Link>
      <Link style={{ textDecoration: 'none' }} to="/templates"><button>Templates</button></Link>
      <Link  style={{ textDecoration: 'none' }} to="/"> <button onClick={props.functionScrollToAcessoria}>Contatos</button></Link>
      <Link style={{ textDecoration: 'none' }} to="/"><button onClick={props.functionScrollTodev}>Nossos desenvolvedores</button></Link>
    </div>
    </div>
  )
}

export default Header