var setaDireita = window.document.getElementById("seta direita")
var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bryna = window.document.getElementById("bryna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarDireita (){
    
    leo.style = "display:none"
    bryna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style  = "display:flex; margin-top:70px" 
}
    
function RolarEsquerda(){
     
    leo.style = "display:flex"
    bryna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style  = "display:none"

}