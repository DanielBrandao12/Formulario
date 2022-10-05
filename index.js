

const botao = document.getElementById('btn')

const nome = document.getElementById('name')
const cep = document.getElementById('cep')
const email = document.getElementById('email')
const data = document.getElementById('data-nascimento')
const senha = document.getElementById('password')
const spanSenha = document.getElementById('spanSenha')
const linhaSenha = document.getElementById('linhaSenha')

const btnLista = document.getElementById('btn-lista')
var lista = document.querySelector('.cadastrados')
const form = document.querySelector('form')
const btnForm = document.getElementById('btn-form')

let cadastrados =[]

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
        cadastrados.push({
          "nome":nome.value, 
          "email" : email.value,
          "cep": cep.value,
          "data": data.value,
          "senha": senha.value
        })
        e.preventDefault()
        let tr = document.createElement('tr');
     for(let i =0; i< cadastrados.length;i++){

       tr.innerHTML =`
       <td>${cadastrados[i].nome}</td>
       <td>${cadastrados[i].email}</td>
       <td>${cadastrados[i].cep}</td>
       <td>${cadastrados[i].data}</td>
       <td>${cadastrados[i].senha}</td>`
     }
        
        this.lista.appendChild(tr)
        console.log(cadastrados)

})

btnLista.addEventListener('click', e =>{



    lista.style.display ='flex'
    form.style.display ='none'


})
btnForm.addEventListener('click', e=>{
  
  lista.style.display ='none'
  form.style.display ='flex'
})