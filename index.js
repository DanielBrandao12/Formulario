/*const nomeCompleto = document.getElementById('name')
const linhaNome = document.getElementById('linhaNome')
const spanNome = document.getElementById('spanNome')

const botao = document.getElementById('btn')


botao.addEventListener('click', e=>{
    if(nomeCompleto.value == ''){
        spanNome.innerText ='Preencha o campo'
        spanNome.style.color = 'red'
        linhaNome.style.background ='red'
        
    }
  
})

nomeCompleto.addEventListener('input',e =>{

    const nomeLength = e.target.value.length;
    
  

    if(nomeLength > -1){
        spanNome.innerText ='Ok'
        spanNome.style.color = 'green'
    }else{
    }

})*/


const senha = document.getElementById('password')
const spanSenha = document.getElementById('spanSenha')
const linhaSenha = document.getElementById('linhaSenha')

senha.addEventListener('input', e => {

    const inputLength = e.target.value.length;
    const charsLeft = 12 - inputLength;

    if(charsLeft > 0){
        spanSenha.innerText ='Mínimo 12 caracteres'
        spanSenha.style.color='gray'
        linhaSenha.style.background ='gray'
        return
    }
})