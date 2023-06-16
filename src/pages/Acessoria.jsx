import './stylesPages/acessoria.css'
import React from 'react';
import imgform from '../assets/form.png'
import swal from 'sweetalert'

class Acessoria extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id:0,
            nome:'',
            nomeEmpresa:'',
            email:'',
            numero:'',
            desc:'',
            clientes: []
        }
    }

    registerClient = (cliente) =>{
        if((this.state.nome === "") || (this.state.email === "") || (this.state.numero === "") || (this.state.desc === "")){
            return
        } else {
            fetch("https://api-ankara-messi.vercel.app/clientes", {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(cliente)})
            .then(response => {
            if (response.ok){
                this.pesquisarClient();
            } 
        })
        }
    }

    componentDidMount(){
        this.pesquisarClient();
    }

    pesquisarClient(){
        fetch("https://api-ankara-messi.vercel.app/clientes")
        .then(response => response.json())
        .then(datas => {
            this.setState({clientes : datas})
        })
    }

    nomeSaving = (e) => {
        this.setState({
            nome: e.target.value
        })
    }   

    nomeEmpresaSaving = (e) => {
        this.setState({
            nomeEmpresa: e.target.value
        })
    }

    emailSaving = (e) => {
        this.setState({
            email: e.target.value
            
        })
    }

    numeroSaving = (e) => {
        this.setState({
            numero: e.target.value
        })
    }

    descSaving = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    saveDatas = () => {
        const cliente ={
            id:0,
            nome: this.state.nome,
            nomeEmpresa: this.nomeEmpresa,
            email: this.state.email,
            numero: this.state.numero,
            desc: this.state.desc
        }
        this.registerClient(cliente);
    }

    render(){
        return(
                <div className='div-form'>
                    <div className="boxForm">
                        <div className="boxForm-img">
                            <h3>Acessoria ao cliente</h3>
                            <img src={imgform}/>
                        </div>
                        <div className="boxForm-Form">
                                <form onSubmit={ (event) =>{
                                    this.saveDatas();
                                    swal(`Obrigado ${this.state.nome}. Sua requisição enviada!`)
                                    event.preventDefault();

                                    var input1 = document.querySelector("#nome")
                                    var input2 = document.querySelector("#nomeEmpresa")
                                    var input3 = document.querySelector("#email")
                                    var input4 = document.querySelector("#num")
                                    var input5 = document.querySelector("#desc")
                                        
                                    input1.value = ""
                                    input2.value = ""
                                    input3.value = ""
                                    input4.value = ""
                                    input5.value = ""
                                    
                                }}> 
                                    <span>Seu nome:</span>
                                    <input className="inputClass" type="text" id="nome" required onChange={this.nomeSaving}/>
                                    <span>Nome da empresa:</span>
                                    <input className="inputClass" type="text" id="nomeEmpresa" placeholder="Caso não tenha, pode deixar em branco." onChange={this.nomeEmpresaSaving}/>
                                    <span>Seu e-mail:</span>
                                    <input className="inputClass" type="email" id="email" required onChange={this.emailSaving}/>
                                    <span>Seu número com DDD:</span>
                                    <input className="inputClass" type="number" minLength={11} maxLength={12} id="num" required onChange={this.numeroSaving}/>
                                    <span>Nos conte um pouco sobre o projeto:</span>
                                    <textarea className="inputClass" placeholder='De uma descrição detalhada da sua empresa, projeto ou serviço.' id="desc" required onChange={this.descSaving}/>
                                    <button>Enviar</button>
                                </form>
                        </div>
                    </div>
                </div>
        )
    }
    
} export default Acessoria