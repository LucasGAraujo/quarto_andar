import './stylesComponents/button.css'

export default function Button(props){
    return(
        <button className="button"
                onClick={props.onClick}
                style={{
                    width:`${props.width}`,
                    height:`${props.height}`
                }}
        >
            {props.textoBtn}
        </button>
    )
}