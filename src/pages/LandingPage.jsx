import './stylesPages/landingPage.css'
import Button from '../components/Button'

function FirstBox(props) {

  return (
    <div className="landingPage">
      <div className="sectionTextLandingPage">
          <h1>Bem vindo ao nosso serviço de criação de sites</h1>
          <p>Nós entendemos que a criação de um site pode parecer intimidante, mas com nossos processos simplificados e equipe dedicada, garantimos que todo o processo seja tranquilo e livre de estresse. Trabalhamos de perto com você para entender suas necessidades e objetivos, criando um site que represente verdadeiramente sua marca e atraia seu público-alvo.</p>
          <Button onClick={props.functionScrollToCards} 
                  textoBtn="Transforme sua presença online"
                  width="310px"
                  height="60px"
          />
      </div>
    </div>
  )
}
export default FirstBox


