import './stylesComponents/janela.css'
import Image4andar from '../assets/4andar.jpeg'

export default function Janela(props){
    return(
        <div class="window">
            <div className='text-content'>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
                {props.imageVerification ? <img src={props.img}/> : <></>}
            </div>
            
            <div class="glass">
                <div className='holder'></div>
            </div>
        </div>
    )
}