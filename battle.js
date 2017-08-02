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

// Essa seção é das arrays da quantidade de naves estão sendo enviadas para combate //

var dreadShips = [];
var carrierShips = [];
var cruiserShips = [];
var destroyerShips = [];
var fighterShips = [];
var warsunShips = [];
var groundShips = [];
var pdsShips = [];

// Contador para display de todos os hits combinados das naves para saber quantas casualidades aconteceram //

var hitTotal = 0;

window.onload = function() {

// Creates new ships divided in arrays by type

  document.getElementById("createDread").onclick = function() {
    var newShip = new dreadnought(dreadHit);
    dreadShips.push(newShip);
    document.getElementById("dreadImg").style.display = "inline";
    document.getElementById("dreadFleet").style.display = "inline";
    document.getElementById("dreadFleet").innerHTML = dreadShips.length;
  }

  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carrierShips.push(newShip);
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = carrierShips.length;
  }

  document.getElementById("createCruiser").onclick = function() {
    var newShip = new cruiser(cruiserHit);
    cruiserShips.push(newShip);
    document.getElementById("cruiserImg").style.display = "inline";
    document.getElementById("cruiserFleet").style.display = "inline";
    document.getElementById("cruiserFleet").innerHTML = cruiserShips.length;
  }

  document.getElementById("createDestroyer").onclick = function() {
    var newShip = new destroyer(destroyerHit);
    destroyerShips.push(newShip);
    document.getElementById("destroyerImg").style.display = "inline";
    document.getElementById("destroyerFleet").style.display = "inline";
    document.getElementById("destroyerFleet").innerHTML = destroyerShips.length;
  }

  document.getElementById("createFighter").onclick = function() {
    var newShip = new fighter(fighterHit);
    fighterShips.push(newShip);
    document.getElementById("fighterImg").style.display = "inline";
    document.getElementById("fighterFleet").style.display = "inline";
    document.getElementById("fighterFleet").innerHTML = fighterShips.length;
  }

  document.getElementById("createGroundForce").onclick = function() {
    var newShip = new groundforce(groundforceHit);
    groundShips.push(newShip);
    document.getElementById("groundImg").style.display = "inline";
    document.getElementById("groundFleet").style.display = "inline";
    document.getElementById("groundFleet").innerHTML = groundShips.length;
  }

  document.getElementById("createPDS").onclick = function() {
    var newShip = new PDS(pdsHit);
    pdsShips.push(newShip);
    document.getElementById("pdsImg").style.display = "inline";
    document.getElementById("pdsFleet").style.display = "inline";
    document.getElementById("pdsFleet").innerHTML = pdsShips.length;
  }

  document.getElementById("createWarsun").onclick = function() {
    var newShip = new warsun(warsunHit);
    warsunShips.push(newShip);
    document.getElementById("warImg").style.display = "inline";
    document.getElementById("warFleet").style.display = "inline";
    document.getElementById("warFleet").innerHTML = warsunShips.length;
  }



  document.getElementById("makeAttack").onclick = function() {
    attack(dreadShips);
    attack(carrierShips);
    attack(cruiserShips);
    attack(destroyerShips);
    attack(fighterShips);
    attack(groundShips);
    attack(pdsShips);
    attack(warsunShips);
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
