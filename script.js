var tablero = [[null,null,null],[null,null,null],[null,null,null]]



var turn = 1;
// boarddisplay

const button11 = document.getElementById("11")
button11.addEventListener("click", function() {
  
  if (turn === 1) {
    button11.innerText = "X";
    tablero[0][0] = 1;
    turn = 2;
    // console.log("x " + turn)
  } else {
    button11.innerText = "O";
    tablero[0][0] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
   })
//12
const button12 = document.getElementById("12")
button12.addEventListener("click", function() {
  
  if (turn === 1) {
    button12.innerText = "X";
    tablero[0][1] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button12.innerText = "O";
    tablero[0][1] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
//13
const button13 = document.getElementById("13")
button13.addEventListener("click", function() {
  
  if (turn === 1) {
    button13.innerText = "X";
    tablero[0][2] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button13.innerText = "O";
    tablero[0][2] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
//21
const button21 = document.getElementById("21")
button21.addEventListener("click", function() {
  
  if (turn === 1) {
    button21.innerText = "X";
    tablero[1][0] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button21.innerText = "O";
    tablero[1][0] = 5;
    turn = 1; 
    //console.log("o " + turn)
    }
    winner ()
})
//22
const button22 = document.getElementById("22")
button22.addEventListener("click", function() {
  
  if (turn === 1) {
    button22.innerText = "X";
    tablero[1][1] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button22.innerText = "O";
    tablero[1][1] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
//23
const button23 = document.getElementById("23")
button23.addEventListener("click", function() {
  
  if (turn === 1) {
    button23.innerText = "X";
    tablero[1][2]= 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button23.innerText = "O";
    tablero[1][2]= 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
//31
const button31 = document.getElementById("31")
button31.addEventListener("click", function() {
  
  if (turn === 1) {
    button31.innerText = "X";
    tablero[2][0] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button31.innerText = "O";
    tablero[2][0] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
//32
const button32 = document.getElementById("32")
button32.addEventListener("click", function() {
  
  if (turn === 1) {
    button32.innerText = "X";
    tablero[2][1] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button32.innerText = "O";
    tablero[2][1] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})
// 33
const button33 = document.getElementById("33")
button33.addEventListener("click", function() {
  
  if (turn === 1) {
    button33.innerText = "X";
    tablero[2][2] = 1
    turn = 2;
    // console.log("x " + turn)
  } else {
    button33.innerText = "O";
    tablero[2][2] = 5;
    turn = 1;
    //console.log("o " + turn)
    }
    winner ()
})


const buttonboard = document.getElementById("console")
buttonboard.addEventListener("click", function() {
  console.log(tablero)
})

const buttonreset = document.getElementById("reset")
buttonreset.addEventListener("click", function() {
  tablero = [[null,null,null],[null,null,null],[null,null,null]]
  console.log(tablero)
  button11.innerText = "";
  button12.innerText = "";
  button13.innerText = "";
  button21.innerText = "";
  button22.innerText = "";
  button23.innerText = "";
  button31.innerText = "";
  button32.innerText = "";
  button33.innerText = "";
})

function winner () {
  var chancef1 = [
    tablero[0][0], tablero[0][1], tablero[0][2]
  ]
  const sumf1 = chancef1.reduce((acumulador,numero)=> acumulador + numero, 0);
     

  var chancef2 = [
    tablero[1][0], tablero[1][1], tablero[1][2]
  ];
  const sumf2 = chancef2.reduce((acumulador,numero)=> acumulador + numero, 0);


  var chancef3 = [
    tablero[2][0], tablero[2][1], tablero[2][2]
  ];
  const sumf3 = chancef3.reduce((acumulador,numero)=> acumulador + numero, 0);

  var chancec1 = [
    tablero[0][0], tablero[1][0], tablero[2][0]
  ];
  const sumc1 = chancec1.reduce((acumulador,numero)=> acumulador + numero, 0);

  var chancec2 = [
    tablero[0][1], tablero[1][1], tablero[2][1]
  ];
  const sumc2 = chancec2.reduce((acumulador,numero)=> acumulador + numero, 0);


  var chancec3 = [
      tablero[0][2], tablero[1][2], tablero[2][2]
  ];
  const sumc3 = chancec3.reduce((acumulador,numero)=> acumulador + numero, 0);


  var chanced00 = [
    tablero[0][0], tablero[1][1], tablero[2][2]
  ];
  const sumd00 = chanced00.reduce((acumulador,numero)=> acumulador + numero, 0);

  
  var chanced30= [
    tablero[2][0], tablero[1][1], tablero[0][2]
  ];
  const sumd30 = chanced30.reduce((acumulador,numero)=> acumulador + numero, 0);

 if (sumf1 === 3 || sumf2 ===3 || sumf3 ===3 || sumc1 ===3 || sumc2 ===3 || sumc3 ===3 || sumd00 ===3 || sumd30 ===3 ) {console.log("player1 wins")}
 else if (sumf1 === 15 || sumf2 === 15 || sumf3 === 15 || sumc1 === 15 || sumc2 === 15 || sumc3 === 15 || sumd00 === 15 || sumd30 === 15) { console.log("player2 win")}
 else (console.log("turn: " + turn))
}


