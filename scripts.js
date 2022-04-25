var standard_monkey_message1= "No estado em que estou, tenho duas alternativas. Posso ir buscar o pau primeiro e depois a vara, ou o contrário."
var standard_monkey_message2= "O meu algoritmo de busca diz que devo buscar o pau primeiro"
var standard_monkey_message3= "Executando acção..."
var alinhador=`<div class="alinhador" >   <img id="monkey-ic" src="img/monkey.png">       </div>`
var balao=`<div  class="chat-balloon"> </div>`
var lista=[standard_monkey_message1,standard_monkey_message2,standard_monkey_message3]
var i = 0;

$(document).ready(function(){
   
   /* 
    $(".chat").append(alinhador)
    $(".alinhador").append(balao)
    $(".chat-balloon").text(standard_monkey_message1)
    */
    
    $("#1").text(lista[0])
    $("#1").fadeIn("slow")
    //$("#2").text(lista[1])
    //$("#2").fadeIn("slow")
    //$("#3").text(lista[2])
  //  $("#1").fadeIn("slow")
    
});
/*
$("body").keypress(function(){

    
    $(".chat-balloon").text(lista[i])
    if (i< lista.length)
        i++
});

*/
    
    





