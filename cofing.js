//botao flutuante
const botao_flutuante=document.querySelector("#estado-keyboard")
//teclado - keyboard
const teclado = document.querySelector("#teclado")

//saida de texto - output
const texto=document.querySelector("#saida-de-texto-aqui")

//Os butoes que sao letras
const botao = [...document.querySelectorAll("button:not(#upper):not(#search):not(#numero):not(#space):not(#delete)")]

const coluna_um = [...document.querySelectorAll("#coluna-1 > button")]
const coluna_dois = [...document.querySelectorAll("#coluna-2 > button")]
const coluna_tres = [...document.querySelectorAll("#coluna-3 > button")]

//botoes especiais
const exit = document.querySelector("#delete")
const upper=document.querySelector("#upper")
const space=document.querySelector("#space")
const gmail=document.querySelector("#gmail")
const search=document.querySelector("#search")
const numero=document.querySelector("#numero")

//array dos textos saida
const stringArray = []

//variavel de controle
var controle = 1

console.log(coluna_um)

//caracteres e simbolos - keyboard
const c1  = ["a","b","c","d","e","f","g","h","i","j"]
const caracteresC1 = [1,2,3,4,5,6,7,8,9,0]
const c2 = ["k","l","m","n","o","p","q","r","s","."]
const caracteresC2 = ["@","#","$","_","&","-","+","(",")","/"]
const c3 = ["u","v","w","x","y","z","_","-",";",","]
const caracteresC3 = ["*","'",".",":",";",">","<","+","-"," \ "]

numero.addEventListener("click",()=>{
    numero.classList.toggle("numero_ativo")
    ++controle
    if(controle%2==0){
        coluna_um.map((e,ind)=>e.innerHTML = caracteresC1[ind])
        coluna_dois.map((e,ind)=>e.innerHTML = caracteresC2[ind])
        coluna_tres.map((e,ind)=>e.innerHTML = caracteresC3[ind])
    }else{
        coluna_um.map((e,ind)=>e.innerHTML=c1[ind])
        coluna_dois.map((e,ind)=>e.innerHTML=c2[ind])
        coluna_tres.map((e,ind)=>e.innerHTML=c3[ind])
    }
})


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


const recognition = createRecognetion()



function createRecognetion(){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecogtion
    const recognition = SpeechRecognition != undefined ? new SpeechRecognition() : null

    if(!recognition){
        texto.innerHTML =" esse browser nao suporta gravador de audio @atilon.dev40"
        return null
    }

    recognition.lang="pt_BR"
    recognition.onstart=()=>{console.log("inicado a grava/ao")}
    recognition.onend=()=>{console.log("terminou de gravar")}
    recognition.onerror=()=>{console.log("ocorreru um error tente novamnete!")}
    recognition.onresult=(e)=>{texto.innerHTML=e.results[0][0].transcript}

    return recognition
}