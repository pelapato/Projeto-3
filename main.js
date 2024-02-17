console.log('Projeto  😃')
console.log('Mostrando que o console fuciona')
console.log('Console realmente muito produtivo')
// TODOS CARACTERES
const coluna1=document.querySelectorAll('.c1')
const coluna2=[...document.querySelectorAll('.c2')]
const coluna3=[...document.querySelectorAll('.c3')]
const upperKeyboard=document.querySelector('.upper')
const caracterEspeciais=document.querySelector('.simbols')
const todosCaracterStart=[...document.querySelectorAll('.c1,.c2,.c3')]
const arrayCaracter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

const arrayTokens=["1","2","3","4","5","6","7","8","9","0","@","#","$","_","&","-","+","{","}","/","*","'",":",";","!","?"]

//transformacao do text para maiuscula
var clickUpper=1
var upperNoOrYes=false

function caracterUpper(){
  const upper=upperKeyboard
  upper.addEventListener('click',()=>{
    ++clickUpper
    if(clickUpper%2==0){
      upper.style.background="tomato"
      todosCaracterStart.map((e)=>{
        e.classList.add("upper")
        upperNoOrYes=true
      })
    }else{
      upper.style.background="#3fe289"
      todosCaracter.map((e)=>{
        e.classList.remove('upper')
        upperNoOrYes=false
      })
    }
  })
}
caracterUpper()

//enviando o digito a uma tag
const enviandoDigito=()=>{
  const texto=document.querySelector('.texto')
  const apagar=document.querySelector('.exit')
  const space=document.querySelector('.space')
  var tab=" "
  var posicaoCaracter=null
  var textoEnviado=[]
  
  todosCaracterStart.map((e)=>{
    e.addEventListener('click',(evt)=>{
      ++posicaoCaracter
      if(upperNoOrYes==true){
        textoEnviado[posicaoCaracter]=e.innerHTML.toUpperCase()
        texto.innerHTML=textoEnviado.join('')
        console.log(textoEnviado)
      }else if(upperNoOrYes==false){
        textoEnviado[posicaoCaracter] = e.innerHTML.toLowerCase()
        texto.innerHTML =textoEnviado.join('')
      }
    })
    })
    space.addEventListener('click', () => {
          console.log(posicaoCaracter)
            ++posicaoCaracter
          textoEnviado[posicaoCaracter] = tab
          texto.innerHTML = textoEnviado.join('')
          console.log(textoEnviado)
    })
    apagar.addEventListener('click',()=>{
      textoEnviado.pop()
      texto.innerHTML=textoEnviado.join('')
    })
}
enviandoDigito()

function tokens(){
  let condTokens=true
  caracterEspeciais.addEventListener('click',()=>{
    if(condTokens){
      for(let i=0;i<=29;i++){
        todosCaracterStart[i].innerHTML=arrayTokens[i]
      }
        //verdadeiro
        condTokens=false
      }else{
      condTokens=true
      //falso
    }
  })
}
tokens()