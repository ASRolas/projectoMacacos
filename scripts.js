
var  estado1 ={//estado em que está tudo espalhado
  num: 1,
  heuristica: 9,
  descendentes: [2,3,4],
  accoes:  [{accao:"Buscar_cadeira",destino: 2},{accao:"Buscar pau",destino:3},{accao:"Ir ao local",destino:4}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Neste estado eu tenho duas alternativas, ir buscar o pau primeiro ou a cadeira primeiro ou ainda, posso ir ao local das bananas"
}
var  estado2 ={//estado em que o macaco está com a cadeira  longe das bananas e do pau
  num: 2,
  heuristica: 8,
  descendentes: [5,6],
  accoes:  [{accao:"Buscar o pau", destino:5},{accao:"Levar cadeira  ao local",destino:6}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Neste estado eu tenho duas alternativas, ir deixar a cadeira no lugar primeiro e depois busco o pau, ou vou com a cadeira ate o pau"
}
var  estado3 ={//estado em que o macaco está com o pau  longe das bananas e da cadeira
  num: 3,
  heuristica: 8,
  descendentes: [7,5],
  accoes:  [{accao:"Levar o pau ao local", destino:7},{accao:"Buscar a cadeira", destino:5}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com o pau mas fora do lugar e distante da cadeira, neste estado eu tenho duas alternativas, ir deixar o pau no lugar primeiro e depois busco a cadeira, ou vou com o pau buscar a cadeira!"
}
var  estado4 ={//estado em que o macaco está no local das bananas e longe da cadeira e do pau
  num: 4,
  heuristica: 8,
  descendentes: [2,3],
  accoes:  [{accao:"Buscar a cadeira", destino:2},{accao:"Buscar o pau", destino3}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Neste estado eu tenho duas alternativas, ir buscar o pau  ou  buscar a cadeira"
}
var  estado5 ={//estado em que o macaco está com o pau e a cadeira  longe das bananas
  num: 5,
  heuristica: 8,
  descendentes: [3,4],
  accoes:  ["Levar ambos ao local"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com a cadeira e o pau, posso levar ambos ao local das bananas! "
}


var  estado6 ={//estado em que o macaco está com a cadeira no local das bananas mas longe do pau
  num: 6,
  heuristica: 8,
  descendentes: [12],
  accoes:  ["Buscar o pau"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou no lugar certo e com  a cadeira, mas preciso buscar o pau!"
}
var  estado7 ={//estado em que o macaco está com o pau  no lugar e longe da cadeira
  num: 7,
  heuristica: 8,
  descendentes: [13],
  accoes:  ["Buscar a cadeira"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com o pau no lugar, agora preciso buscar a cadeira!"
}
var  estado11 = {//estado em que está tudo no lugar
  num: 11,
  heuristica: 8,
  descendentes: [0],
  accoes:  ["Bater as bananas"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"atingiu o goal"
}
var  estado12 ={//cadeira no lugar, macaco com o pau e distantes
  num: 12,
  heuristica: 8,
  descendentes: [11],
  accoes:  ["Levar o pau ao local"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"A cadeira está no lugar, eu estou com o pau e distante, então  preciso levar o pau ao lugar!"
}
var  estado13 ={//pau no lugar, macaco com a cadeira e distantes
  num: 13,
  heuristica: 8,
  descendentes: [11],
  accoes:  ["Levar a cadeira ao local"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"O pau está no lugar, eu estou com a cadeira e distante, então  preciso levar a cadeira ao lugar!"
}
var  estado0 ={//pau no lugar, macaco com a cadeira e distantes
  num: 0,
  heuristica: 8,
  descendentes: [11],
  accoes:  ["Ir ao local"],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"O pau e a cadeira estão no lugar, eu estou distante!"
}
//estados fim

$(document).ready(function(){});

$(".ia").click(function(){
  var objecto = document.getElementById("obj")

 // alert("left: "+left+"\n"+"Y: "+y);
  for (let i = 340; i <= 510; i++) {
    
      setTimeout(() => {
      
            objecto.style.top = i +"px"
            objecto.style.left = i +"px"

            var y=objecto.style.top // Y
            var left=objecto.style.left

            $("#obj").fadeOut("slow");
            $("#obj").fadeIn("slow")

            if (i==510) {
              console.log("left: "+left+"\n"+"Y: "+y);
            }
            sleep(20000);
      
      }, 100);
  }
    
    
});

//metodo das accoes
function executarAccao(estado ){
  var listaAccoes

    for (let i = 0; i < estado.accoes.length; i++) {

      listaAccoes[i]=estado.accoes[i]
      
    }


}

//metodo que trata dos limites de inserção nas coordenadas
$(".r").click(function(){

  var escolha = document.querySelector('input[name="seleccionado"]:checked').value;
  
  if (escolha=="macaco") {

    $("#x_min_label").text("280")
    $("#x_max_label").text("1250")
    $("#y_min_label").text("350")
    $("#y_max_label").text("500")

  }else if(escolha=="cadeira"){

    $("#x_min_label").text("280")
    $("#x_max_label").text("1010")
    $("#y_min_label").text("350")
    $("#y_max_label").text("520")
  }
  else if(escolha=="pau"){

    $("#x_min_label").text("280")
    $("#x_max_label").text("1290")
    $("#y_min_label").text("300")
    $("#y_max_label").text("400")

  }else{
    alert("Voçê não selecionou um objecto")
  }
});
//metodo que verifica os estados
function verificarEstado(bananasTop, bananasLeft, macacoTop, macacoLeft, cadeiraTop, cadeiraLeft,pauTop, pauLeft){
  //tudo junto E11 goal
  if( Math.abs(parseFloat(pauTop)-parseFloat(bananasTop))<= 80 && Math.abs(parseFloat(macacoTop)-parseFloat(pauTop))<=200 && Math.abs(parseFloat(cadeiraTop)-parseFloat(macacoTop)) <= 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft))<=10 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft))<=30 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) <= 40  ){
    var estado= estado11;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }else 
    //Pau e cadeira no lugar, macaco distante   E0
    if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) < 80){
      var estado= estado0;
          estado.bananas.top=bananasTop
          estado.bananas.left=bananasLeft
          estado.macaco.top=macacoTop
          estado.macaco.left=macacoLeft
          estado.pau.top=pauTop
          estado.pau.left=pauLeft
          estado.cadeira.top=cadeiraTop
          estado.cadeira.left=cadeiraLeft
          alert(estado.mensagem)
    }
  //tudo distante E1
  if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado1;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert("Estou longe de tudo! Neste estado eu tenho duas alternativas, ir buscar o pau primeiro ou a cadeira primeiro.")
  }
   //macaco com a cadeira e longe das bananas e do   E2
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado2;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
   //macaco com o pau e longe das bananas e da cadeira E3
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado3;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
  //macaco no lugar e distante da cadeira e do pau E4
  if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado4;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
   //tudo distante E5
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado5;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
   //Macaco está com a cadeira no lugar certo mas distante do pau E6
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) < 80){
    var estado= estado6;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
   //macaco com o pau, no lugar mas longe da cadeira E7
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var estado= estado7;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
  //Cadeira no lugar, macaco com pau e fora do lugar E12
  if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) < 80){
    var estado= estado12;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        alert(estado.mensagem)
  }
    //Pau no lugar, macaco com a cadeira e fora do lugar E13
    if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
      var estado= estado13;
          estado.bananas.top=bananasTop
          estado.bananas.left=bananasLeft
          estado.macaco.top=macacoTop
          estado.macaco.left=macacoLeft
          estado.pau.top=pauTop
          estado.pau.left=pauLeft
          estado.cadeira.top=cadeiraTop
          estado.cadeira.left=cadeiraLeft
          alert(estado.mensagem)
    }
  else
  {
    //alert("nada")
  }

}
function defCoordenadasIniciais(){

    var esc = document.querySelector('input[name="seleccionado"]:checked').value;
    var macaco = document.getElementById("obj")
    var pau = document.getElementById("obj-pau")
    var cadeira = document.getElementById("obj-cadeira")
    var x= document.getElementById("x")
    var y= document.getElementById("y")
    if (esc=="macaco") {
      macaco.style.top=y.value+"px"
      macaco.style.left=x.value+"px"
    }else 
    if(esc=="cadeira"){
      
      cadeira.style.top=y.value+"px"
      cadeira.style.left=x.value+"px"
    }
    else
    if(esc=="pau"){

      pau.style.top=y.value+"px"
      pau.style.left=x.value+"px"

    }else{
      alert("Voçê não selecionou um objecto")
    }
}
//Au clickar enter
$(".coordenadas").keypress(function(){
  
  let unicode = event.keyCode;
  if (unicode==13) {
    defCoordenadasIniciais()

    var bananas=  document.getElementById("obj-bananas")
    var macaco =  document.getElementById("obj")
    var cadeira= document.getElementById("obj-cadeira")
    var pau =     document.getElementById("obj-pau")

   alert(Math.abs(parseFloat(macaco.style.top)-parseFloat(cadeira.style.top)))
   
    verificarEstado(

      bananas.style.top,
      bananas.style.left,
      macaco.style.top,
      macaco.style.left, 
      cadeira.style.top,
      cadeira.style.left,
      pau.style.top,
      pau.style.left

    )
    //alert(estado1.descendentes)
  }
})

    






