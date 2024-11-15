//botao flutuante
const botao_flutuante=document.querySelector("#estado-keyboard")
//teclado - keyboard
const teclado = document.querySelector("#teclado")

//saida de texto - output
const texto=document.querySelector("#saida-de-texto-aqui")

//Os butoes que sao letras
const botao = [...document.querySelectorAll("button:not(#upper):not(#search):not(#numero):not(#space):not(#delete)")]


//botoes especiais
const exit = document.querySelector("#delete")
const upper=document.querySelector("#upper")
const space=document.querySelector("#space")
const gmail=document.querySelector("#gmail")
const search=document.querySelector("#search")
const numero=document.querySelector("#numero")

//array dos textos saida
const stringArray = []

//variavel de controle upper
var controleUpper = false
var cont = 1

//evento de hidden e visibility do teclado - keyboard
const estadoTeclado =()=>{
    teclado.classList.toggle("tecladoAtivo")
}

//deixa as letras em maiusculas
upper.addEventListener("click",(evt)=>{
    upper.classList.toggle("upper_ativo")
    
    ++cont
    if(cont%2==0)controleUpper=true
    else{controleUpper=false}
    botao.map((e)=>{
        e.classList.toggle("btn_upper")
    })
})


//passando os valores para a saida-de-texto
const entrada=()=>{
    botao.map((e)=>{
        e.addEventListener("click",(evt)=>{
            const el = evt.target.innerHTML
            if(controleUpper==true){
                stringArray.push(el.toUpperCase())
            }else{
                stringArray.push(el.toLowerCase())
            }

            console.log(stringArray)
            texto.innerHTML+=stringArray[stringArray.length - 1]
        })
    })
    

    //evento do butao space 
    space.addEventListener('click',(evt)=>{
        stringArray.push(" ")
        texto.innerHTML=stringArray.join("")
        console.log(stringArray)
    })
    
    //deleta o ultimo caracter do array
    exit.addEventListener('click',()=>{
        stringArray.pop()
        console.log(stringArray)
        stringArray.map(e=>{texto.innerHTML=stringArray.join("")})
    })
}
entrada()
