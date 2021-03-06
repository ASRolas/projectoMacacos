

                                                                      //DECLARAÇÃO  DOS ESTADOS//           

var  estado11 = {//estado goal
  num: 11,
  heuristica: 8,
  descendentes: [11],
  accoes:  [{accao:"Comer bananas", destino:estado11, codigo:"CB"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"atingiu o goal"
}
var  estado10 = {//está tudo junto mas nao em posicao de alcancar as bananas
  num: 10,
  heuristica: 8,
  descendentes: [11],
  accoes:  [{accao:"Bater as bananas", destino:estado11, codigo:"BB"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Está tudo no lugar, resta-me alcancar as bananas!"
}
var  estado13 ={//pau no lugar, macaco com a cadeira e distantes
  num: 13,
  heuristica: 8,
  descendentes: [estado10],
  accoes:  [{accao:"Levar a cadeira ao local",destino:estado10, codigo:"LC"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"O pau está no lugar, eu estou com a cadeira e distante, então  preciso levar a cadeira ao lugar!"
}
var  estado12 ={//cadeira no lugar, macaco com o pau e distantes
  num: 12,
  heuristica: 8,
  descendentes: [estado10],
  accoes:  [{accao:"Levar o pau ao local",destino:estado10, codigo:"LP"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"A cadeira está no lugar, eu estou com o pau e distante, então  preciso levar o pau ao lugar!"
}
var  estado0 ={//pau e cadeira no lugar, macaco distante. E0 outro estado inicial
  num: 0,
  heuristica: 8,
  descendentes: [estado10],
  accoes:  [{accao:"Ir ao local ", destino: estado10, codigo:"IL"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"O pau e a cadeira estão no lugar, eu estou distante, então tenho que ir ao local"
}

var  estado7 ={//estado em que o macaco está com o pau  no lugar e longe da cadeira
  num: 7,
  heuristica: 8,
  descendentes: [estado13],
  accoes:  [{accao:"Buscar a cadeira", destino: estado13, codigo:"BC"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com o pau no lugar, agora preciso buscar a cadeira!"
}
var  estado6 ={//estado em que o macaco está com a cadeira no local das bananas mas longe do pau
  num: 6,
  heuristica: 8,
  descendentes: [estado12],//12
  accoes:  [{accao:"Buscar o pau", destino: estado12, codigo:"BP"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou no lugar certo e com  a cadeira, mas preciso buscar o pau!"
}
var  estado5 ={//estado em que o macaco está com o pau e a cadeira  longe das bananas  
  num: 5,
  heuristica: 7,
  descendentes: [estado11],
  accoes:  [{accao: "Levar ambos ao local", destino:estado11, codigo:"LAL"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com a cadeira e o pau, posso levar ambos ao local das bananas! "
}
var  estado3 ={//estado em que o macaco está com o pau  longe das bananas e da cadeira
  num: 3,
  heuristica: 2,
  descendentes: [estado7,estado5],
  accoes:  [{accao:"Levar o pau ao local", destino:estado7, codigo:"LP"},{accao:"Buscar a cadeira", destino:estado5, codigo:"IPBC"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou com o pau mas fora do lugar e distante da cadeira, neste estado eu tenho duas alternativas, ir deixar o pau no lugar primeiro e depois busco a cadeira, ou vou com o pau buscar a cadeira!"
}
var  estado2 ={//estado em que o macaco está com a cadeira  longe das bananas e do pau
  num: 2,
  heuristica: 3,
  descendentes: [estado5,estado6],
  accoes:  [{accao:"Ir com a cadeira uscar o pau", destino:estado5, codigo:"ICBP"},{accao:"Levar cadeira  ao local",destino:estado6, codigo:"LC"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Neste estado eu tenho duas alternativas, ir deixar a cadeira no lugar primeiro e depois busco o pau, ou vou com a cadeira ate o pau"
}
var  estado4 ={//estado em que o macaco está no local das bananas e longe da cadeira e do pau
  num: 4,
  heuristica: 4,
  descendentes: [estado2,estado3],
  accoes:  [{accao:"Buscar a cadeira", destino:estado2, codigo:"BC"},{accao:"Buscar o pau", destino: estado3, codigo:"BP"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou no lugar certo mas longe da cadeira e do pau. Neste estado eu tenho duas alternativas, ir buscar o pau  ou  buscar a cadeira"
}

var  estado1 ={//estado em que está tudo espalhado
  num: 1,
  heuristica: 9,
  descendentes: [estado2,estado3,estado4],
  accoes:  [{accao:"Buscar cadeira",destino: estado2, codigo:"BC"},{accao:"Buscar pau", destino: estado3, codigo:"BP"},{ accao:"Ir ao local", destino: estado4, codigo:"IL"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Neste estado eu tenho duas alternativas, ir buscar o pau primeiro ou a cadeira primeiro ou ainda, posso ir ao local das bananas"
}
var  estado01 ={//macaco no lugar, cadeira e pau juntos fora do lugar  //novo
  num: 01,
  heuristica: 8,
  descendentes: [estado5],
  accoes:  [{accao:"Ir buscar cadeira e pau ", destino: estado5, codigo:"IBC&P"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"O pau e a cadeira estao juntos e longe de mim, tenho que buscá-los"
}
var  estado02 ={//pau no lugar, cadeira e macaco longe e distantes entre si  //novo
  num: 02,
  heuristica: 8,
  descendentes: [estado5],
  accoes:  [{accao:"Ir buscar cadeira ", destino: estado5, codigo:"BC"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Pau no lugar, eu e acadeira estamos distantes das bananas e distantes entre nós, devo ir buscar o cadeira"
}
var  estado03 ={//cadeira no lugar, pau e macaco longe e distantes entre si  //novo
  num: 03,
  heuristica: 8,
  descendentes: [estado5],
  accoes:  [{accao:"Ir buscar pau ", destino: estado12, codigo:"BP"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"cadeira no lugar, eu e o pau estamos distantes das bananas e distantes entre nós, devo ir buscar a pau"
}
var  estado04 ={//Cadeira e pau juntos, longe do lugar e longe do macaco que também está longe do lugar //novo
  num: 04,
  heuristica: 8,
  descendentes: [estado5,estado01],
  accoes:  [{accao:"Ir buscar ambos ", destino: estado5, codigo:"IBC&P"},{accao:"Ir ao local",destino: estado01, codigo:"IL"}],
  bananas: { top: Number, left: Number},
  macaco:  { top: Number, left: Number},
  pau:     { top: Number, left: Number},
  cadeira: { top: Number, left: Number},
  mensagem:"Estou longe de tudo, porém a cadeira e o pau  estão juntos, mas também longe das bananas, então vou buscar ambos"
}

//metodo das accoes
function determinarAccao(estado){
  var listaAccoes = new Array()
  var listaDescendentes
  var auxiliar

  for (let i = 0; i < estado.accoes.length; i++) {
     
    listaAccoes[i]=estado.accoes[i]
    
  }
 
  if(listaAccoes.length>1){//se tiver mais de 1 descendente organizar por ordem crescente de heuristica
     for (let j = 1; j < listaAccoes.length; j++) {
        for (let k = 0; k < listaAccoes.length-1; k++) {
          if(listaAccoes[k].destino.heuristica>listaAccoes[j].destino.heuristica){
            auxiliar=listaAccoes[k]
            listaAccoes[k]=listaAccoes[j]
            listaAccoes[j]=auxiliar
          }
        }
      }
      return listaAccoes
  }else{
    listaAccoes=listaAccoes
    return listaAccoes
  }
  
}
//Aplicar acção
function aplicarAccao(listaAccoes){
 var accaoPorAplicar= listaAccoes[0].codigo
 var bananas=  document.getElementById("obj-bananas")
 var macaco =  document.getElementById("obj")
 var cadeira=  document.getElementById("obj-cadeira")
 var pau =     document.getElementById("obj-pau")

    if (accaoPorAplicar=="BP") {//E6

       
      if (parseFloat(macaco.style.left) < parseFloat(pau.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

        macaco.style.left=parseFloat(pau.style.left) -10 +"px"
        macaco.style.top=parseFloat(pau.style.top)+30+"px"
  } 
      if (parseFloat(macaco.style.left) > parseFloat(pau.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

            macaco.style.left=parseFloat(pau.style.left) + 60 +"px"
            macaco.style.top=parseFloat(pau.style.top)+30+"px"
      }      
          
    }else
    if (accaoPorAplicar=="BC") {//E7

        if (parseFloat(macaco.style.left) < parseFloat(cadeira.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

          macaco.style.left=parseFloat(cadeira.style.left)-10+"px"
          macaco.style.top=parseFloat(cadeira.style.top)+"px"
          
        }
        if (parseFloat(macaco.style.left) > parseFloat(cadeira.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

          macaco.style.left=parseFloat(cadeira.style.left) + 60 +"px"
          macaco.style.top=parseFloat(cadeira.style.top)+"px"
          
        }
   }else
   if (accaoPorAplicar=="LC") {//E13

    if (parseFloat(macaco.style.left) < parseFloat(bananas.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

      macaco.style.left=parseFloat(bananas.style.left)+60+"px"
      macaco.style.top=parseFloat(bananas.style.top)+225+"px"
      cadeira.style.left=parseFloat(bananas.style.left)+"px"
      cadeira.style.top=parseFloat(bananas.style.top)+300+"px"
      
    }
    if (parseFloat(macaco.style.left) > parseFloat(bananas.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

      macaco.style.left=parseFloat(bananas.style.left)+"px"
      macaco.style.top=parseFloat(bananas.style.top)+225+"px"
      cadeira.style.left=parseFloat(bananas.style.left)+"px"
      cadeira.style.top=parseFloat(bananas.style.top)+300+"px"
    }
   }
   else
   if (accaoPorAplicar=="BB") {//E10

      macaco.style.left=parseFloat(bananas.style.left)+30+"px"
      macaco.style.top=parseFloat(bananas.style.top)+225+"px"
      cadeira.style.left=parseFloat(bananas.style.left)+"px"
      cadeira.style.top=parseFloat(bananas.style.top)+280+"px"
      pau.style.left=parseFloat(bananas.style.left)+"px"
      pau.style.top=parseFloat(bananas.style.top)+60+"px"
   }
   else
   if (accaoPorAplicar=="LP") {//E12

      macaco.style.left=parseFloat(bananas.style.left)+"px"
     // macaco.style.top=parseFloat(bananas.style.top)+225+"px"
      pau.style.left=parseFloat(bananas.style.left)+55+"px"
      //pau.style.top=parseFloat(bananas.style.top)+60+"px"
   } 
   if (accaoPorAplicar=="ICBP") {//E13

    if (parseFloat(macaco.style.left) < parseFloat(pau.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

      macaco.style.left=parseFloat(pau.style.left)-10+"px"
      macaco.style.top=parseFloat(pau.style.top)+50+"px"
      cadeira.style.left=parseFloat(pau.style.left)+"px"
      cadeira.style.top=parseFloat(pau.style.top)+80+"px"
      
    }
    if (parseFloat(macaco.style.left) > parseFloat(pau.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

      macaco.style.left=parseFloat(pau.style.left)+50+"px"
      macaco.style.top=parseFloat(pau.style.top)+50+"px"
      cadeira.style.left=parseFloat(pau.style.left)+"px"
      cadeira.style.top=parseFloat(pau.style.top)+80+"px"
    }
   }
   if (accaoPorAplicar=="IPBC") {//E13

    if (parseFloat(macaco.style.left) < parseFloat(cadeira.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

      macaco.style.left=parseFloat(cadeira.style.left)-10+"px"
      macaco.style.top=parseFloat(cadeira.style.top)+50+"px"
      pau.style.left=parseFloat(cadeira.style.left)+20+"px"
      pau.style.top=parseFloat(pau.style.top)+80+"px"
      
    }
    if (parseFloat(macaco.style.left) > parseFloat(cadeira.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

      macaco.style.left=parseFloat(cadeira.style.left)+50+"px"
      macaco.style.top=parseFloat(cadeira.style.top)+50+"px"
      pau.style.left=parseFloat(cadeira.style.left)+"px"
      pau.style.top=parseFloat(cadeira.style.top)+80+"px"
    }
   }
   if (accaoPorAplicar=="LAL") {//

    if (parseFloat(macaco.style.left) < parseFloat(bananas.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

      macaco.style.left=parseFloat(bananas.style.left)-10+"px"
     // macaco.style.top=parseFloat(bananas.style.top)+50+"px"
      cadeira.style.left=parseFloat(bananas.style.left)+10+"px"
      //cadeira.style.top=parseFloat(bananas.style.top)+80+"px"
      pau.style.left=parseFloat(bananas.style.left)+10+"px"
      
    }
    if (parseFloat(macaco.style.left) > parseFloat(bananas.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

      macaco.style.left=parseFloat(bananas.style.left)+50+"px"
      // macaco.style.top=parseFloat(bananas.style.top)+50+"px"
       cadeira.style.left=parseFloat(bananas.style.left)+10+"px"
       //cadeira.style.top=parseFloat(bananas.style.top)+80+"px"
       pau.style.left=parseFloat(bananas.style.left)+10+"px"
    }
   }else
   if (accaoPorAplicar=="IL") {//

        if (parseFloat(macaco.style.left) < parseFloat(bananas.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

          macaco.style.left=parseFloat(bananas.style.left)-10+"px"
        }
        if (parseFloat(macaco.style.left) > parseFloat(bananas.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

          macaco.style.left=parseFloat(bananas.style.left)+50+"px"
      }
   }
   if (accaoPorAplicar=="IBC&P") {//

    if (parseFloat(macaco.style.left) < parseFloat(pau.style.left)) {//se o macaco estiver á esquerda da cadeira tem que se aproximar até -10px a esquerda da cadeira

      macaco.style.left=parseFloat(pau.style.left)-10+"px"
    }
    if (parseFloat(macaco.style.left) > parseFloat(pau.style.left)) {//se o macaco estiver á direita da cadeira tem que se aproximar até +10px a direita da cadeira

      macaco.style.left=parseFloat(pau.style.left)+50+"px"
  }
}

}
// metodo que verifica os estados
function verificarEstado(bananasTop, bananasLeft, macacoTop, macacoLeft, cadeiraTop, cadeiraLeft,pauTop, pauLeft){
  //tudo junto E11 goal
  if( Math.abs(parseFloat(pauTop)-parseFloat(bananasTop))<= 80 && Math.abs(parseFloat(macacoTop)-parseFloat(pauTop))<=200 && Math.abs(parseFloat(cadeiraTop)-parseFloat(macacoTop)) <= 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft))<=10 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft))<=30 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) <= 40  ){
    var macaco= document.getElementById("obj")
    macaco.style.left=parseFloat(pauLeft) + 30+"px"
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
        aplicarAccao(determinarAccao(estado))
  }else 
    //tudo junto E10 (pré-goal)
    if( Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft))<=80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft))<=80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) <= 80  ){
      var estado= estado10;
          estado.bananas.top=bananasTop
          estado.bananas.left=bananasLeft
          estado.macaco.top=macacoTop
          estado.macaco.left=macacoLeft
          estado.pau.top=pauTop
          estado.pau.left=pauLeft
          estado.cadeira.top=cadeiraTop
          estado.cadeira.left=cadeiraLeft
          alert(estado.mensagem)
          aplicarAccao(determinarAccao(estado))
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
          aplicarAccao(determinarAccao(estado))
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
        alert(estado.mensagem)
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))

  }
   //macaco com o pau, no lugar mas longe da cadeira E7
   if( Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
    var pau = document.getElementById("obj-pau")
    
    var estado= estado7;
        estado.bananas.top=bananasTop
        estado.bananas.left=bananasLeft
        estado.macaco.top=macacoTop
        estado.macaco.left=macacoLeft
        estado.pau.top=pauTop
        estado.pau.left=pauLeft
        estado.cadeira.top=cadeiraTop
        estado.cadeira.left=cadeiraLeft
        pau.style.top=parseFloat(pau.style.top)+100+"px"
        alert(estado.mensagem)
        aplicarAccao(determinarAccao(estado))
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
        aplicarAccao(determinarAccao(estado))
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
          aplicarAccao(determinarAccao(estado))
    }
  else
      //cadeira e pau juntos mas fora do lugar
      if(  Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) <= 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
        var estado= estado01;
            estado.bananas.top=bananasTop
            estado.bananas.left=bananasLeft
            estado.macaco.top=macacoTop
            estado.macaco.left=macacoLeft
            estado.pau.top=pauTop
            estado.pau.left=pauLeft
            estado.cadeira.top=cadeiraTop
            estado.cadeira.left=cadeiraLeft
            alert(estado.mensagem)
            aplicarAccao(determinarAccao(estado))
      }else
         //pau no lugar, cadeira e macaco distantes e distantes entre si E02
         if(  Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) < 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
          var estado= estado02;
              estado.bananas.top=bananasTop
              estado.bananas.left=bananasLeft
              estado.macaco.top=macacoTop
              estado.macaco.left=macacoLeft
              estado.pau.top=pauTop
              estado.pau.left=pauLeft
              estado.cadeira.top=cadeiraTop
              estado.cadeira.left=cadeiraLeft
              alert(estado.mensagem)
              aplicarAccao(determinarAccao(estado))
        }else
           //cadeira no lugar, pau e macaco distantes e distantes entre si E03
           if(  Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) < 80){
            var estado= estado03;
                estado.bananas.top=bananasTop
                estado.bananas.left=bananasLeft
                estado.macaco.top=macacoTop
                estado.macaco.left=macacoLeft
                estado.pau.top=pauTop
                estado.pau.left=pauLeft
                estado.cadeira.top=cadeiraTop
                estado.cadeira.left=cadeiraLeft
                alert(estado.mensagem)
                aplicarAccao(determinarAccao(estado))
          }else
           //cadeira e pau juntos e longe do lugar e do macaco que está tambem longe do lugar
           if(  Math.abs(parseFloat(macacoLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(pauLeft)) > 80 && Math.abs(parseFloat(macacoLeft)-parseFloat(cadeiraLeft)) > 80 && Math.abs(parseFloat(pauLeft)-parseFloat(cadeiraLeft)) < 80 && Math.abs(parseFloat(pauLeft)-parseFloat(bananasLeft)) > 80 && Math.abs(parseFloat(cadeiraLeft)-parseFloat(bananasLeft)) > 80){
            var estado= estado04;
                estado.bananas.top=bananasTop
                estado.bananas.left=bananasLeft
                estado.macaco.top=macacoTop
                estado.macaco.left=macacoLeft
                estado.pau.top=pauTop
                estado.pau.left=pauLeft
                estado.cadeira.top=cadeiraTop
                estado.cadeira.left=cadeiraLeft
                alert(estado.mensagem)
                aplicarAccao(determinarAccao(estado))
          }
  {
    //alert("nada")
  }

}
//de definição das coordenadas iniciais
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

//---------------------------------------------    //  ACTIONLISTENERS   //
//Ao clicar em ia
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
//Ao clickar nos radio buttons metodo que trata dos limites de inserção nas coordenadas
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
//Ao clickar enter o b para aplicar as posições
$(".coordenadas").keypress(function(){

  var bananas = document.getElementById("obj-bananas")
  let unicode = event.keyCode;

  if(unicode==13){ 
    defCoordenadasIniciais()
  }
  if(unicode==98){ 
    bananas.style.top=y.value+"px"
    bananas.style.left=x.value+"px"
  }
})
//Ao clickar run para executar as acções
$("#run").click(function() {

   $("#run").css("transform","scale(0.9,0.9)")
    var bananas=  document.getElementById("obj-bananas")
    var macaco =  document.getElementById("obj")
    var cadeira=  document.getElementById("obj-cadeira")
    var pau =     document.getElementById("obj-pau")

    verificarEstado( bananas.style.top, bananas.style.left, macaco.style.top, macaco.style.left, cadeira.style.top, cadeira.style.left, pau.style.top,pau.style.left )
})
//mouse pairando sobre o RUN
$("#run").mouseover(function() {

  $("#run").css("transform","scale(1.1,1.1)")
  
})
$("#run").mouseout(function() {

  $("#run").css("transform","scale(1,1)")
  
})





