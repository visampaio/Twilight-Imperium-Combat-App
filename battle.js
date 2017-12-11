// Essa seção define quais são os tipos de naves, seus valores de combate (quanto precisa pra acertar), quantos dados cada nave rola //

function dreadnought(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="dreadHit";
    this.missSpan ="dreadMiss";
}

function carrier(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="carrierHit";
    this.missSpan ="carrierMiss";
}

function cruiser(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="cruiserHit";
    this.missSpan ="cruiserMiss";
}

function destroyer(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="destroyerHit";
    this.missSpan ="destroyerMiss";
}

function fighter(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="fighterHit";
    this.missSpan ="fighterMiss";
}

function warsun(battle) {
    this.battle = battle;
    this.dice = 3;
    this.miss = 0;
    this.hitSpan ="warHit";
    this.missSpan ="warMiss";
}

function groundforce(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="groundHit";
    this.missSpan ="groundMiss";
}

function PDS(battle) {
    this.battle = battle;
    this.dice = 1;
    this.miss = 0;
    this.hitSpan ="pdsHit";
    this.missSpan ="pdsMiss";
}

function flagship(battle,dice) {
    this.battle = battle;
    this.dice = dice;
    this.miss = 0;
    this.hitSpan ="flagHit";
    this.missSpan ="flagMiss";
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
var flaghit;

var flagnormal = 0;
var flagdamage = 0;
var dreadnormal = 0;
var dreaddamage = 0;
var warnormal = 0;
var wardamage = 0;
var carriernormal = 0;
var carrierdamage = 0;

var round = 0;

var turrets = false;
var cannon = false;
var magenground = false;
var groundRez = false;
var againstXxcha = false;
var isSpaceBattle = true;
var resurrect = 0;

// Essa seção é das arrays da quantidade de naves estão sendo enviadas para combate //

var dreadShips = [];
var carrierShips = [];
var cruiserShips = [];
var destroyerShips = [];
var fighterShips = [];
var warsunShips = [];
var groundShips = [];
var pdsShips = [];
var flagShips = [];

// Contador para display de todos os hits combinados das naves para saber quantas casualidades aconteceram //

var hitTotal = 0;

// Changes what sections are being shown on each screen

    document.getElementById("nextRace").onclick = function() {
    document.getElementById("chooseRace").style.display = "none";
    document.getElementById("chooseTech").style.display = "block";
    document.getElementById("chooseRaceTech").style.display = "block";
    document.getElementById("createShips").style.display = "block";
    document.getElementById("battleships").style.display = "block";
  }

  document.getElementById("nextShips").onclick = function() {
    document.getElementById("chooseTech").style.display = "none";
    document.getElementById("chooseRaceTech").style.display = "none";
    document.getElementById("createShips").style.display = "none";
    document.getElementById("combat").style.display = "block";
  }

  document.getElementById("techs").onclick = function() {
    var list = document.getElementById("techList");
    if (list.style.display === "block") {
      list.style.display = "none";
    }
    else {
      list.style.display = "block";
    }
  }

  document.getElementById("races").onclick = function() {
    var list = document.getElementById("raceTechList");
    if (list.style.display === "block") {
      list.style.display = "none";
    }
    else {
      list.style.display = "block";
    }
  }

// Creates new ships divided in arrays by type

  document.getElementById("createDread").onclick = function() {
    var newShip = new dreadnought(dreadHit);
    dreadnormal++;
    dreadShips.push(newShip);
    document.getElementById("divdreadships").style.display = "block";
    document.getElementById("dreadImg").style.display = "inline";
    document.getElementById("dreadFleet").style.display = "inline";
    document.getElementById("dreadFleet").innerHTML = "<b>" + dreadnormal + "</b>";
  }
  document.getElementById("createCarrier").onclick = function() {
    var newShip = new carrier(carrierHit);
    carriernormal++;
    carrierShips.push(newShip);
    document.getElementById("divcarrierships").style.display = "block";
    document.getElementById("carrierImg").style.display = "inline";
    document.getElementById("carrierFleet").style.display = "inline";
    document.getElementById("carrierFleet").innerHTML = "<b>" + carriernormal + "</b>";
  }
  document.getElementById("createCruiser").onclick = function() {
    var newShip = new cruiser(cruiserHit);
    cruiserShips.push(newShip);
    document.getElementById("divcruiserships").style.display = "block";
    document.getElementById("cruiserImg").style.display = "inline";
    document.getElementById("cruiserFleet").style.display = "inline";
    document.getElementById("cruiserFleet").innerHTML = "<b>" + cruiserShips.length + "</b>";
  }
  document.getElementById("createDestroyer").onclick = function() {
    var newShip = new destroyer(destroyerHit);
    destroyerShips.push(newShip);
    document.getElementById("divdestroyerships").style.display = "block";
    document.getElementById("destroyerImg").style.display = "inline";
    document.getElementById("destroyerFleet").style.display = "inline";
    document.getElementById("destroyerFleet").innerHTML = "<b>" + destroyerShips.length + "</b>";
  }
  document.getElementById("createFighter").onclick = function() {
    var newShip = new fighter(fighterHit);
    fighterShips.push(newShip);
    document.getElementById("divfighterships").style.display = "block";
    document.getElementById("fighterImg").style.display = "inline";
    document.getElementById("fighterFleet").style.display = "inline";
    document.getElementById("fighterFleet").innerHTML = "<b>" + fighterShips.length + "</b>";
  }
  document.getElementById("createGroundForce").onclick = function() {
    var newShip = new groundforce(groundforceHit);
    groundShips.push(newShip);
    document.getElementById("divground").style.display = "block";
    document.getElementById("groundImg").style.display = "inline";
    document.getElementById("groundFleet").style.display = "inline";
    document.getElementById("groundFleet").innerHTML = "<b>" + groundShips.length + "</b>";
  }
  document.getElementById("createPDS").onclick = function() {
    var newShip = new PDS(pdsHit);
    pdsShips.push(newShip);
    document.getElementById("divpds").style.display = "block";
    document.getElementById("pdsImg").style.display = "inline";
    document.getElementById("pdsFleet").style.display = "inline";
    document.getElementById("pdsFleet").innerHTML = "<b>" + pdsShips.length + "</b>";
  }
  document.getElementById("createWarsun").onclick = function() {
    var newShip = new warsun(warsunHit);
    warnormal++;
    warsunShips.push(newShip);
    document.getElementById("divwarships").style.display = "block";
    document.getElementById("warImg").style.display = "inline";
    document.getElementById("warFleet").style.display = "inline";
    document.getElementById("warFleet").innerHTML = "<b>" + warnormal + "</b>";
  }
  document.getElementById("createFlagship").onclick = function() {
    var newShip = new flagship(flagHit);
    flagnormal++;
    flagShips.push(newShip);
    document.getElementById("divflagships").style.display = "block";
    document.getElementById("flagImg").style.display = "inline";
    document.getElementById("flagFleet").style.display = "inline";
    document.getElementById("flagFleet").innerHTML = "<b>" + flagnormal + "</b>";
  }

//  runs attack() for each type of ship and shows total successful hits
  document.getElementById("spaceBattle").onclick = function() {
    resetDiceValues();
    hitTotal = 0;

    if (round == 0) {
      if (dreadShips.length > 0 && cannon) {
        attack(dreadShips);
        document.getElementById("preDread").style.display = "inline"
        document.getElementById("preDread").innerHTML = ("Preemptive Dreadnaughts Assault Cannon: " + hitTotal);
        hitTotal = 0;
      }

      if (againstXxcha) {
        changeBattleValue(dreadShips, "+", 1);
        changeBattleValue(carrierShips, "+", 1);
        changeBattleValue(cruiserShips, "+", 1);
        changeBattleValue(destroyerShips, "+", 1);
        changeBattleValue(fighterShips, "+", 1);
        changeBattleValue(warsunShips, "+", 1);
      }
    }

    attack(dreadShips);
    attack(carrierShips);
    attack(cruiserShips);
    attack(destroyerShips);
    attack(fighterShips);
    attack(warsunShips);
    console.log("Hit totais:" + hitTotal);

    if (document.getElementById("graviton").checked) {rerollAttack(pdsShips);}

    document.getElementById("hitsMessage").style.display = "block"
    document.getElementById("hitsMessage").innerHTML = ("Ships Hits: " + hitTotal);
    round++;
    document.getElementById("currentRound").style.display = "inline"
    document.getElementById("currentRound").innerHTML = ("Round: " + round);

    if (againstXxcha) {
      changeBattleValue(dreadShips, "-", 1);
      changeBattleValue(carrierShips, "-", 1);
      changeBattleValue(cruiserShips, "-", 1);
      changeBattleValue(destroyerShips, "-", 1);
      changeBattleValue(fighterShips, "-", 1);
      changeBattleValue(warsunShips, "-", 1);
      againstXxcha = false;
    }

    // Disables attack button to provide visual feedback and prevent accidental clicks. //
    var input = this;
    input.disabled = true;
        setTimeout(function() {
           input.disabled = false;
        }, 1000);

    document.getElementById("reroll").disabled = false;
  }

  document.getElementById("invasionCombat").onclick = function() {
    resetDiceValues();
    hitTotal = 0;

    if (isSpaceBattle) {
      round = 0;
      isSpaceBattle = false;
    }

    if (round == 0) {
      if (againstXxcha) {
        changeBattleValue(groundShips, "+", 1);
        changeBattleValue(pdsShips, "+", 1);
      }
    }

    if (pdsShips.length > 0 && magenground) {
      changeBattleValue(groundShips, "-", 1);
    }

    attack(groundShips);
    attack(pdsShips);
    console.log("Hit totais:" + hitTotal);

    if (document.getElementById("graviton").checked) {rerollAttack(pdsShips);}

    document.getElementById("hitsMessage").style.display = "block"
    document.getElementById("hitsMessage").innerHTML = ("Ships Hits: " + hitTotal);
    round++;
    document.getElementById("currentRound").style.display = "inline"
    document.getElementById("currentRound").innerHTML = ("Round: " + round);


    if (pdsShips.length > 0 && magenground) {
      changeBattleValue(groundShips, "+", 1);
    }

    if (againstXxcha) {
      changeBattleValue(groundShips, "-", 1);
      changeBattleValue(pdsShips, "-", 1);
      againstXxcha = false;
    }

    // Disables attack button to provide visual feedback and prevent accidental clicks. //
    var input = this;
    input.disabled = true;
        setTimeout(function() {
           input.disabled = false;
        }, 1000);

    document.getElementById("reroll").disabled = false;
  }

// Tries to revive troops based on prompt number
  document.getElementById("dacxive").onclick = function() {
    resurrect = 0;
    var casualties = prompt("Please enter the number of dead troops from both sides", "0");
    for (var i = 0; i < casualties; i++) {
      var diceValue = Math.floor(Math.random() * (10)) + 1;
      if (diceValue >= 6) {
          resurrect++;
        }
          }
          document.getElementById("resurrectedTroops").style.display = "inline";
          document.getElementById("resurrectedTroops").innerHTML = ("Tropas Revividas : " + resurrect);
          resurrect = 0;
  }

// Runs attack() for Dreadnaughts and Warsuns and show total successful hits
  document.getElementById("makeBombardment").onclick = function() {
    resetDiceValues();
    attack(dreadShips);
    attack(warsunShips);
    console.log("Hit totais:" + hitTotal);
    document.getElementById("hitsMessage").style.display = "block"
    document.getElementById("hitsMessage").innerHTML = ("Hit totais: " + hitTotal);
    hitTotal = 0;
  }

// Runs attack() for Destroyers and show total successful hits
  document.getElementById("antiFighter").onclick = function() {
    resetDiceValues();
    attack(destroyerShips);
    attack(destroyerShips);
    if (turrets) {
      attack(destroyerShips);
    }
    console.log("Hit totais:" + hitTotal);
    document.getElementById("hitsMessage").style.display = "block"
    document.getElementById("hitsMessage").innerHTML = ("Hit totais: " + hitTotal);
    hitTotal = 0;
  }

// Deletes all arrays of ships and remove them from the screen. Loop adds all IDs of images into a big array and then change the display to "none" one by one. //
  document.getElementById("resetAttack").onclick = function() {
    reset();
    document.getElementById("combat").style.display = "none";
    document.getElementById("chooseTech").style.display = "block";
    document.getElementById("chooseRaceTech").style.display = "block";
    document.getElementById("createShips").style.display = "block";
  }

/////// Techs
  var tech = document.querySelectorAll(".tech input");
  for (var i=0; i < tech.length; i++) {
    tech[i].onclick = function() {reset();}
  }

  document.getElementById("assaultLaser").onchange = function() {
    if (this.checked) {
      cruiserHit--;
      destroyerHit--;
    }
    else {
      cruiserHit++;
      destroyerHit++;
    }
  }

  document.getElementById("automatedDefence").onchange = function() {
    if (this.checked) {
      destroyerHit -= 2;
      turrets = true;
    }
    else {
      destroyerHit += 2;
      turrets = false;
    }
  }

  document.getElementById("cybernetics").onchange = function() {
    if (this.checked) {
      fighterHit--;
    }
    else {
      fighterHit++;
    }
  }

  document.getElementById("magen").onchange = function() {
    if (this.checked) {
      pdsHit--;
      magenground = true;
    }
    else {
      pdsHit++;
      magenground = false;
    }

  }

  document.getElementById("synthesis").onchange = function() {
   if (this.checked) {
     groundforceHit--;
     groundRez = true;
   }
   else {
    groundforceHit++;
    groundRez = false;
   }
}
  document.getElementById("assaultCannon").onchange = function() {
    if (this.checked) {
      cannon = true;
    }
    else {
      cannon = false;
    }
  }

  document.getElementById("dacxiveAnimators").onchange = function() {
    if (this.checked) {
      document.getElementById("dacxive").style.display = "inline";
    }
    else {
      document.getElementById("dacxive").style.display = "none";
    }
  }

  document.getElementById("advancedFighters").onchange = function() {
    if (this.checked) {
      fighterHit--;
    }
    else {
      fighterHit++;
    }
  }

/////// Races
var race = document.querySelectorAll(".race input");
for (var i=0; i < race.length; i++) {
  race[i].onclick = function() {totalReset();};
}

document.getElementById("naaluCollective").onchange = function() {
  if (this.checked) {
    fighterHit--;
  }
}

document.getElementById("sardakkNorr").onchange = function() {
  if (this.checked) {
    dreadHit--;
    carrierHit--;
    cruiserHit--;
    destroyerHit--;
    fighterHit--;
    groundforceHit--;
    pdsHit--;
    warsunHit--;
  }
}

document.getElementById("universitiesJolnar").onchange = function() {
  if (this.checked) {
    dreadHit++;
    carrierHit++;
    cruiserHit++;
    destroyerHit++;
    fighterHit++;
    groundforceHit++;
    pdsHit++;
    warsunHit++;
    document.getElementById("reroll").style.display = "inline";
  }
}

document.getElementById("lizixMindnet").onchange = function() {
  if (this.checked) {
    dreadHit--;
    groundforceHit--;
  }
}

document.getElementById("baronyLetnev").onchange = function() {
  if (this.checked) {
    document.getElementById("addToSpaceships").style.display = "inline";
    document.getElementById("addToGroundForces").style.display = "inline";
  }
}

document.getElementById("yinBrotherhood").onchange = function() {
  if (this.checked) {
    document.getElementById("yinRoll").style.display = "inline";
    document.getElementById("fanatTech").style.display = "block";
  }
}

document.getElementById("solFederation").onchange = function() {
  if (this.checked) {
    document.getElementById("markTech").style.display = "block";
    document.getElementById("specTech").style.display = "block";
  }
}

/////// Race Techs

document.getElementById("reroll").onclick = function() {
  rerollAttack(dreadShips);
  rerollAttack(carrierShips);
  rerollAttack(cruiserShips);
  rerollAttack(destroyerShips);
  rerollAttack(fighterShips);
  rerollAttack(groundShips);
  rerollAttack(pdsShips);
  rerollAttack(warsunShips);
  document.getElementById("hitsMessage").innerHTML = ("Ships Hits: " + hitTotal);
  hitTotal = 0;
  this.disabled = true;
}

document.getElementById("addToSpaceships").onclick = function() {
  changeBattleValue(dreadShips, "-", 1);
  changeBattleValue(carrierShips, "-", 1);
  changeBattleValue(cruiserShips, "-", 1);
  changeBattleValue(destroyerShips, "-", 1);
  changeBattleValue(fighterShips, "-", 1);
  changeBattleValue(warsunShips, "-", 1);
}

document.getElementById("addToGroundForces").onclick = function() {
  changeBattleValue(groundShips, "-", 2);
  changeBattleValue(pdsShips, "-", 2);
}

// document.getElementById("xxchaEnemy").onclick = function() {
//   againstXxcha = true;
// }

document.getElementById("yinRoll").onclick = function() {
  if (document.getElementById("fanaticism").checked) {var j = 2;}
  else {var j = 1;}
  for (var i=0; i<j; i++) {
    var roll = Math.floor(Math.random() * (10)) + 1;
    if (roll >= 5) {
      var newShip = new groundforce(groundforceHit);
      groundShips.push(newShip);
      document.getElementById("groundImg").style.display = "inline";
      document.getElementById("groundFleet").style.display = "inline";
      document.getElementById("groundFleet").innerHTML = "<b>" + groundShips.length + "</b>";
    }
  }
  this.disabled = true;
}

/////// Remove Ships that were created by clicking on them
  document.getElementById("dreadImg").onclick = function() {
    dreadnormal--;
    document.getElementById("dreadFleet").innerHTML = "<b>" + dreadnormal + "</b>";
    dreaddamage++;
    document.getElementById("dreadImgDamage").style.display = "inline";
    document.getElementById("dreadFleetDamage").style.display = "inline";
    document.getElementById("dreadFleetDamage").innerHTML = "<b>" + dreaddamage + "</b>";
    if (dreadnormal < 1) {
      document.getElementById("dreadImg").style.display = "none"
      document.getElementById("dreadFleet").style.display = "none";
    }
  }
  document.getElementById("dreadImgDamage").onclick = function() {
    dreadShips.pop();
    dreaddamage--;
    document.getElementById("dreadFleetDamage").innerHTML = "<b>" + dreaddamage + "</b>";
    if (dreaddamage < 1) {
      document.getElementById("dreadImgDamage").style.display = "none"
      document.getElementById("dreadFleetDamage").style.display = "none";
    }
    if (dreaddamage < 1 && dreadnormal <1) {
      document.getElementById("divdreadships").style.display = "none";
    }
  }
  document.getElementById("carrierImg").onclick = function() {
    carriernormal--;
    document.getElementById("carrierFleet").innerHTML = "<b>" + carriernormal + "</b>";
    if (document.getElementById("advancedCarrier").checked) {
      carrierdamage++;
      document.getElementById("carrierImgDamage").style.display = "inline";
      document.getElementById("carrierFleetDamage").style.display = "inline";
      document.getElementById("carrierFleetDamage").innerHTML = "<b>" + carrierdamage + "</b>";
    }
    else {carrierShips.pop();}

    if (carriernormal < 1) {
      document.getElementById("carrierImg").style.display = "none"
      document.getElementById("carrierFleet").style.display = "none";
    }

    if (carriernormal < 1 && document.getElementById("advancedCarrier").checked == false) {
      document.getElementById("carrierImg").style.display = "none"
      document.getElementById("carrierFleet").style.display = "none";
      document.getElementById("divcarrierships").style.display = "none";
    }
  }
  document.getElementById("carrierImgDamage").onclick = function() {
    carrierShips.pop();
    carrierdamage--;
    document.getElementById("carrierFleetDamage").innerHTML = "<b>" + carrierdamage + "</b>";
    if (carrierdamage < 1) {
      document.getElementById("carrierImgDamage").style.display = "none"
      document.getElementById("carrierFleetDamage").style.display = "none";
    }
    if (carrierdamage < 1 && carriernormal < 1) {
      document.getElementById("divcarrierships").style.display = "none";
    }
  }
  document.getElementById("cruiserImg").onclick = function() {
    cruiserShips.pop();
    document.getElementById("cruiserFleet").innerHTML = "<b>" + cruiserShips.length + "</b>";
    if (cruiserShips.length < 1) {
      document.getElementById("cruiserImg").style.display = "none"
      document.getElementById("cruiserFleet").style.display = "none";
      document.getElementById("divcruiserships").style.display = "none";
    }
  }
  document.getElementById("destroyerImg").onclick = function() {
    destroyerShips.pop();
    document.getElementById("destroyerFleet").innerHTML = "<b>" + destroyerShips.length + "</b>";
    if (destroyerShips.length < 1) {
      document.getElementById("destroyerImg").style.display = "none"
      document.getElementById("destroyerFleet").style.display = "none";
      document.getElementById("divdestroyerships").style.display = "none";
    }
  }
  document.getElementById("fighterImg").onclick = function() {
    fighterShips.pop();
    document.getElementById("fighterFleet").innerHTML = "<b>" + fighterShips.length + "</b>";
    if (fighterShips.length < 1) {
      document.getElementById("fighterImg").style.display = "none"
      document.getElementById("fighterFleet").style.display = "none";
      document.getElementById("divfighterships").style.display = "none";
    }
  }
  document.getElementById("groundImg").onclick = function() {
    groundShips.pop();
    if (groundRez == true) {
      document.getElementById("resurrectedTroops").style.display = "inline";
      document.getElementById("resurrectedTroops").innerHTML = ("Tropas Revividas : " + resurrect);
      var diceValue = Math.floor(Math.random() * (10)) + 1;
      if (diceValue >= 5) {
          resurrect++;
          document.getElementById("resurrectedTroops").innerHTML = ("Tropas Revividas : " + resurrect);
    }
  }
    document.getElementById("groundFleet").innerHTML = "<b>" + groundShips.length + "</b>";
    if (groundShips.length < 1) {
      document.getElementById("groundImg").style.display = "none"
      document.getElementById("groundFleet").style.display = "none";
      document.getElementById("divground").style.display = "none";
    }
  }
  document.getElementById("pdsImg").onclick = function() {
    pdsShips.pop();
    document.getElementById("pdsFleet").innerHTML = "<b>" + pdsShips.length + "</b>";
    if (pdsShips.length < 1) {
      document.getElementById("pdsImg").style.display = "none"
      document.getElementById("pdsFleet").style.display = "none";
      document.getElementById("divpds").style.display = "none";
    }
  }
  document.getElementById("warImg").onclick = function() {
    warnormal--;
    document.getElementById("warFleet").innerHTML = "<b>" + warnormal + "</b>";
    wardamage++;
    document.getElementById("warImgDamage").style.display = "inline";
    document.getElementById("warFleetDamage").style.display = "inline";
    document.getElementById("warFleetDamage").innerHTML = "<b>" + wardamage + "</b>";
    if (warnormal < 1) {
      document.getElementById("warImg").style.display = "none"
      document.getElementById("warFleet").style.display = "none";
    }
  }
  document.getElementById("warImgDamage").onclick = function() {
    warsunShips.pop();
    wardamage--;
    document.getElementById("warFleetDamage").innerHTML = "<b>" + wardamage + "</b>";
    if (wardamage < 1) {
      document.getElementById("warImgDamage").style.display = "none"
      document.getElementById("warFleetDamage").style.display = "none";
    }
    if (wardamage < 1 && warnormal <1) {
      document.getElementById("divwarships").style.display = "none";
    }
  }
  document.getElementById("flagImg").onclick = function() {
    flagnormal--;
    document.getElementById("flagFleet").innerHTML = "<b>" + flagnormal + "</b>";
    flagdamage++;
    document.getElementById("flagImgDamage").style.display = "inline";
    document.getElementById("flagFleetDamage").style.display = "inline";
    document.getElementById("flagFleetDamage").innerHTML = "<b>" + flagdamage + "</b>";
    if (flagnormal < 1) {
      document.getElementById("flagImg").style.display = "none"
      document.getElementById("flagFleet").style.display = "none";
    }
  }
  document.getElementById("flagImgDamage").onclick = function() {
    flagShips.pop();
    flagdamage--;
    document.getElementById("flagFleetDamage").innerHTML = "<b>" + flagdamage + "</b>";
    if (flagdamage < 1) {
      document.getElementById("flagImgDamage").style.display = "none"
      document.getElementById("flagFleetDamage").style.display = "none";
    }
    if (flagdamage < 1 && flagnormal <1) {
      document.getElementById("divflagships").style.display = "none";
    }
  }

var attack = function(ships){
  if (ships.length > 0) {
    ships[0].miss = 0;
    var hitSpan = ships[0].hitSpan;
    var missSpan = ships[0].missSpan;
  }
  var hitCount = 0;
  for (var i=0; i < ships.length; i++) {
    var reroll = true;
    for (var j=0; j < ships[i].dice; j++) {
      var diceValue = Math.floor(Math.random() * (10)) + 1;
      if (diceValue >= ships[i].battle) {
          hitCount ++;
          hitTotal ++;
          document.getElementById(hitSpan).innerHTML += " <mark>" + diceValue + "</mark>";
        }
        else {
          ships[0].miss ++;
          document.getElementById(missSpan).innerHTML += " " + diceValue;
        }
        console.log("valor de batalha" + ships[i].battle);
        console.log("dado" + diceValue);
    }
  }
  console.log("Hits:" + hitCount);
}

var reset = function(){
  var elements = document.querySelectorAll("#flagImg, #flagFleet, #flagImgDamage, #flagFleetDamage, #dreadImg, #dreadFleet, #dreadImgDamage, #dreadFleetDamage, #carrierImg, #carrierFleet, #cruiserImg, #cruiserFleet, #destroyerImg, #destroyerFleet, #fighterImg, #fighterFleet, #groundImg, #groundFleet, #pdsImg, #pdsFleet, #warImg, #warFleet, #warImgDamage, #warFleetDamage, #preDread, #currentRound, #resurrectedTroops, #hitsMessage");
    for (var i=0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  resetDiceValues();
  dreadShips = [];
  carrierShips = [];
  cruiserShips = [];
  destroyerShips = [];
  fighterShips = [];
  warsunShips = [];
  groundShips = [];
  pdsShips = [];
  flagShips = [];
  dreadnormal = 0;
  dreaddamage = 0;
  warnormal = 0;
  wardamage = 0;
  carriernormal = 0;
  carrierdamage = 0;
  flagnormal = 0;
  flagdamage = 0;
  round = 0;
  resurrect = 0;
  document.getElementById("xxchaEnemy").disabled = false;
  document.getElementById("yinRoll").disabled = false;
}

var totalReset = function (){
  reset();
  var techs = document.getElementsByClassName("raceTech");
    for (var i=0; i< techs.length; i++) {
      techs[i].style.display = "none";
    }
  dreadHit = 5;
  carrierHit = 9;
  cruiserHit = 7;
  destroyerHit = 9;
  fighterHit = 9;
  warsunHit = 3;
  groundforceHit = 8;
  pdsHit = 6;
}

var resetDiceValues = function() {
  var shipDices = document.querySelectorAll("#flagHit, #flagMiss,#dreadHit, #dreadMiss, #cruiserHit, #cruiserMiss, #carrierHit, #carrierMiss, #destroyerHit, #destroyerMiss, #fighterHit, #fighterMiss, #groundHit, #groundMiss, #pdsHit, #pdsMiss, #warHit, #warMiss");
    for (var i=0; i< shipDices.length; i++) {
      shipDices[i].innerHTML = "";
    }
}

var rerollAttack = function(ships) {
  var hitCount = 0;
  if (ships.length > 0) {
    var miss = ships[0].miss;
    ships[0].miss = 0;
    var hitSpan = ships[0].hitSpan;
    var missSpan = ships[0].missSpan;
    document.getElementById(missSpan).innerHTML = "";
    for (var i=0; i < miss; i++) {
      var diceValue = Math.floor(Math.random() * (10)) + 1;
      if (diceValue >= ships[0].battle) {
          hitCount ++;
          hitTotal ++;
          document.getElementById(hitSpan).innerHTML += " <mark>" + diceValue + "</mark>";
      }
      else {
        ships[0].miss++;
        document.getElementById(missSpan).innerHTML += " " + diceValue;
      }
      console.log("valor de batalha" + ships[i].battle);
      console.log("dado re-rolado" + diceValue);
    }
    console.log("Hits:" + hitCount);
  }
}

var changeBattleValue = function(ships, operator, value) {
  if (operator === "+") {
    for (var i=0; i < ships.length; i++) {
      ships[i].battle += value;
    }
  }

  else {
    for (var i=0; i < ships.length; i++) {
      ships[i].battle -= value;
    }
  }
}
