
function load(){
  var test1 = localStorage.getItem('player');
  var loadPlayer = JSON.parse(test1);
  while (player.maxhplevel < loadPlayer.maxhplevel) {
    loadhp();
  }
  while (player.hpslevel < loadPlayer.hpslevel) {
    loadhps();
  }
  while (player.armorlevel < loadPlayer.armorlevel) {
    loadarmor();
  }
  while (player.critlevel < loadPlayer.critlevel) {
    loadcc();
  }
  while (player.critdamagelevel < loadPlayer.critdamagelevel) {
    loadcd();
  }
  while (player.speedlevel < loadPlayer.speedlevel) {
    loadspeed();
  }
  while (player.attacklevel < loadPlayer.attacklevel) {
    loadattack();
  }
  var test2 = localStorage.getItem('monster');
  var loadMonster = JSON.parse(test2);
  while (monster.level < loadMonster.level) {
    goNextLevel();
  }
};



function loadattack() {
        player.attack = player.attack * 1.2;
        player.attacklevel = player.attacklevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("atkvalue").innerHTML = numeral(player.attack).format('(0.0 a)');
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.attacklevel));
    document.getElementById("costatck").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadhp() {
        player.maxhp = player.maxhp * 1.2;
        player.maxhplevel = player.maxhplevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpvalue").innerHTML = numeral(player.maxhp).format('(0.0 a)');
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.maxhplevel));
    document.getElementById("costhp").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadhps() {
        player.hpregen = player.hpregen * 1.2;
        player.hpslevel = player.hpslevel + 1;
        var hpspaste = player.hpregen * 10;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpsvalue").innerHTML = numeral(hpspaste).format('(0.0 a)');
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.hpslevel));
    document.getElementById("costhps").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadspeed() {
        player.speed = player.speed * 0.9;
        pastespeed = pastespeed * 1.1;
        player.speedlevel = player.speedlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("speedvalue").innerHTML = numeral(pastespeed).format('(0.0 a)');

    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.speedlevel));
    document.getElementById("costspeed").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadarmor() {
        player.armor = player.armor + 1;
        player.armorlevel = player.armorlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("armorvalue").innerHTML = numeral(player.armor).format('(0.0 a)');
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.armorlevel));
    document.getElementById("costarmor").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadcc() {
        player.crit = player.crit + 1;
        player.critlevel = player.critlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("ccvalue").innerHTML = numeral(player.crit).format('(0.0 a)') + '%';
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.critlevel));
    document.getElementById("costcc").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function loadcd() {
        player.critdamage = player.critdamage + 0.02;
        player.critdamagelevel = player.critdamagelevel + 1;
        var pastecd = player.critdamage * 100;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("cdvalue").innerHTML = numeral(pastecd).format('(0.0 a)') + '%';
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.critdamagelevel));
    document.getElementById("costcd").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};
