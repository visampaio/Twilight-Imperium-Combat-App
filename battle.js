// Essa seção define quais são os tipos de naves, seus valores de combate (quanto precisa pra acertar), quantos dados cada nave rola //

function dreadnought(battle) {
    this.battle = battle;
    this.dice = 1;
}

function carrier(battle) {
    this.battle = battle;
    this.dice = 1;
}

function cruiser(battle) {
    this.battle = battle;
    this.dice = 1;
}

function destroyer(battle) {
    this.battle = battle;
    this.dice = 1;
}

function fighter(battle) {
    this.battle = battle;
    this.dice = 1;
}

function warsun(battle) {
    this.battle = battle;
    this.dice = 3;
}

function groundforce(battle) {
    this.battle = battle;
    this.dice = 1;
}

function PDS(battle) {
    this.battle = battle;
    this.dice = 1;
}

// Essa seção é responsavel por definir qual o valor de combate inicial de cada nave. Ta aqui fora pra permitir modificações desses valores por conta de efeitos que podem ser invocados //

var dreadHit = 5;
var carrierHit = 9;
var cruiserHit = 7;
var destroyerHit = 9;
var fighterHit = 9;
var warsunHit = 3;
var groundforceHit = 8;
var pdsHit = 6;


var dreadShips = [];
var carrierShips = [];

var hitTotal = 0;

window.onload = function() {

// Creates new ships divided in arrays by type

  document.getElementById("createDread").onclick = function() {
    var newShip = new dreadnought(dreadHit);
    dreadShips.push(newShip);
    console.log(dreadShips);
    document.getElementById("dreadImg").style.display = "inline";
    document.getElementById("dreadFleet").style.display = "inline";
    document.getElementById("dreadFleet").innerHTML = dreadShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    console.log(carrierShips);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("makeAttack").onclick = function() {
    attack(dreadShips);
    attack(carrierShips);
    console.log("Hit totais:" + hitTotal);
    hitTotal = 0;
  }

  document.getElementById("mudar").onclick = function() {
    dreadHit --;
  }

  document.getElementById("dreadImg").onclick = function() {
    dreadShips.pop();
    document.getElementById("dreadFleet").innerHTML = dreadShips.length;
    if (dreadShips.length < 1) {
      document.getElementById("dreadImg").style.display = "none"
      document.getElementById("dreadFleet").style.display = "none";
    }
  }

  document.getElementById("removeCarrier").onclick = function() {
    carrierShips.pop();
  }
}



var attack = function(ships){
  var hitCount = 0;
  for (var i=0; i < ships.length; i++) {
    for (var j=0; j < ships[i].dice; j++) {
      var diceValue = Math.floor(Math.random() * (10)) + 1;
      if (diceValue >= ships[i].battle) {
          hitCount ++;
          hitTotal ++;
        }
        console.log("valor de batalha" + ships[i].battle);
        console.log("dado" + diceValue);
    }

  }
  console.log("Hits:" + hitCount);
}
