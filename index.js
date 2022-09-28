/*const nomeCompleto = document.getElementById('name')
const linhaNome = document.getElementById('linhaNome')
const spanNome = document.getElementById('spanNome')


  
})

nomeCompleto.addEventListener('input',e =>{

    const nomeLength = e.target.value.length;
    
  

    if(nomeLength > -1){
        spanNome.innerText ='Ok'
        spanNome.style.color = 'green'
    }else{
    }

})*/

const botao = document.getElementById('btn')

const senha = document.getElementById('password')
const spanSenha = document.getElementById('spanSenha')
const linhaSenha = document.getElementById('linhaSenha')

senha.addEventListener('input', e => {

    const inputLength = e.target.value.length;
    const charsLeft = 12 - inputLength;


    if(charsLeft > 0){
        spanSenha.innerText ='Mínimo 12 caracteres'
        spanSenha.style.color='red'
        linhaSenha.style.background ='red'
        return
    }
    if (inputLength >= 12 && inputLength <= 15) {
        spanSenha.innerText = "Quantidade OK";
        spanSenha.style.color = "#146fd6";
        linhaSenha.style.background = "#146fd6";
        return;
        
 
      }
    
    
      if (inputLength >= 16 && inputLength <= 18) {
        spanSenha.innerText = "Muito bom";
        spanSenha.style.color = "#1e5731";
        linhaSenha.style.background = "#1e5731";
        return;
      }
    
     
      if (inputLength >= 19) {
        spanSenha.innerText = "Perfeito";
        spanSenha.style.color = "#00b45d";
        linhaSenha.style.background = "#00b45d";
        return;
      }

})

botao.addEventListener('click', e=>{


})