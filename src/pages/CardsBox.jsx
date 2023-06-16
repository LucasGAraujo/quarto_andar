import Card from '../components/Card'
import './stylesPages/cardsBox.css'

function CardsBox(){
    return(
        <div className="section_cardsBox">   
        <h2>Benefícios conosco </h2>
                <div className="container_cardBox">
                    <Card 
                        titulo={"REDES SOCIAIS"} 
                        paragrafo={"O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas."}
                    />
                    <Card 
                        titulo={"SUCESSO DO CLIENTE"}
                        paragrafo={"Você será atendido por profissionais experientes que darão dicas de estratégias para alcançar o seu sucesso online."}
                    />
                    <Card 
                        titulo={"SITE RESPONSIVO"}
                        paragrafo={"Um site adaptável para pc, tablet e celular melhora a expreiência do usuário. Com isso aumenta as interações."}
                    />
                    <Card 
                        titulo={"SITE 100% MODERNO"} 
                        paragrafo={"Site moderno de acordo com a demanda do mercado."}
                    />
                </div>
        </div>
    )
}

export default CardsBox