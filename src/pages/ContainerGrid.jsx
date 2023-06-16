import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import './stylesPages/containerGrid.css'

function ContainerGrid() {
  
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
    function functionScrollTodev() {
      var elem = document.querySelector(".footer");
      window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
      });
    }
    function functionScrollToAcessoria(){
      var elem = document.querySelector(".div-form");
      window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
      });
      }

  return (
    <div className="container_grid">
      <Header functionScrollTop={scrollTop}
              functionScrollToAcessoria={functionScrollToAcessoria}
              functionScrollTodev={functionScrollTodev}
      />
      <Main/>
      <Footer/>
    </div>
  )
}
export default ContainerGrid