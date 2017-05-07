var player = {
  level : 1,
  hp : 50,
  maxhp : 50,
  maxhplevel : 0,
  hpregen : 0.1,
  hpslevel : 0,
  armor : 0,
  armorlevel : 0,
  crit : 5,
  critlevel : 0,
  critdamage : 1.5,
  critdamagelevel : 0,
  speed : 1000,
  speedlevel : 0,
  attack : 1,
  attacklevel : 0
};

var monster = {
  hp : 10,
  maxhp : 10,
  attack : 1,
  level : 1
};



var pastespeed = 1;
var xp = 0;
var gold = 0;
var maxxp = 10;
var elem = document.getElementById("mybar");
var hpbar = document.getElementById("hpbar");
var xpbar = document.getElementById("xpbar");
var ss = player.speed;

$('#previouslevel').hide();

//attack enemy function
//
var playerattack = function() {
    window.ptimer = setInterval(function() {
            var criticalstrikecalc = Math.floor(Math.random() * 100);
            if (player.hp < 0) {
                clearInterval(window.ptimer);
                clearInterval(window.etimer);
                deathstate();
            }else if (criticalstrikecalc <= player.crit) {
                var criticalstrike = player.attack * player.critdamage;
                monster.hp = monster.hp - criticalstrike;
                FloatingText(criticalstrike);
                var pastelife = (100 * monster.hp) / monster.maxhp;
                var elem = document.getElementById("mybar");
                elem.style.width = pastelife + '%';
                elem.innerHTML = monster.hp.toFixed(1) + '/' + monster.maxhp.toFixed(1);
                clearInterval(window.ptimer);
                playerattack();

            } else if (player.hp >= 1){ monster.hp = monster.hp - player.attack;
            FloatingText(player.attack);
            //transforms value into % for paste//
            var pastelife = (100 * monster.hp) / monster.maxhp;
            var elem = document.getElementById("mybar");
            elem.style.width = pastelife + '%';
            elem.innerHTML = monster.hp.toFixed(1) + '/' + monster.maxhp.toFixed(1);



            //clears itself and calls itself again because it just doesnt fucking work the other way
            clearInterval(window.ptimer);
            playerattack();
           }
        },
        player.speed);
}
playerattack();

var globalchecker = function() {
    window.gtimer = setInterval(function() {
            if (monster.hp <= 0) {
                xpfunction();
                goldfunction();
                monster.hp = monster.maxhp;
                var pastelife = (100 * monster.hp) / monster.maxhp;
                var elem = document.getElementById("mybar");
                elem.style.width = pastelife + '%';
                elem.innerHTML = monster.hp.toFixed(1) + '/' + monster.maxhp.toFixed(1);
            }
            clearInterval(window.gtimer);
            globalchecker();
        },
        100);
}

globalchecker();

window.setInterval(function() {
    ss = player.speed;
}, 100);



//hpregen function
function hpregeneration() {

    if (player.hp < player.maxhp) {
        player.hp = player.hp + player.hpregen;
        //transforms value into % for paste//
        var pastelife = (100 * player.hp) / player.maxhp;
        hpbar.style.width = pastelife + '%';
        hpbar.innerHTML = player.hp.toFixed(1) + '/' + player.maxhp.toFixed(1);
    }

};

window.setInterval(function() {
    hpregeneration();
}, 100);

//deals with adds, update and scale experience
function xpfunction() {
    xp = xp + monster.level;
    var pastexp = (100 * xp) / maxxp;
    xpbar.style.width = pastexp + '%';
    xpbar.innerHTML = xp.toFixed(1) + '/' + maxxp.toFixed(1);

    if (xp >= maxxp) {
        xp = xp - xp;
        maxxp = maxxp * 2;
        player.level = player.level + 1;
        document.getElementById("plvlinfo").innerHTML = 'Hero Level ' + player.level;
    }
};

//deals with gold
function goldfunction() {
    var levelm = Math.pow(1.2, monster.level - 1);
    var gainedgold = 10 * levelm;
    gold = gold + gainedgold;
    document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
};

//enemyattacks
var eattack = function() {
    window.etimer = setInterval(function() {
            if (player.hp <= 0) {
                clearInterval(window.etimer);
            } else if (monster.hp > 0) {
                var monsterdamage = monster.attack - player.armor;
                if (monsterdamage < 0) {
                    monsterdamage = 0;
                }
                player.hp = player.hp - monsterdamage;
                //transforms value into % for paste//
                var pastelife = (100 * player.hp) / player.maxhp;
                hpbar.style.width = pastelife + '%';
                hpbar.innerHTML = player.hp.toFixed(1) + '/' + player.maxhp.toFixed(1);



                clearInterval(window.etimer);
                eattack();
            }
        },
        1000);
}
eattack();

//death state
var deathstate = function() {
    var death = setInterval(function() {
            if (player.hp < player.maxhp) {
                hpregeneration();
            } else if (player.hp >= player.maxhp) {
                clearInterval(death);
                eattack();
                playerattack();
            }


        },
        50);
}


function calclevel(input) {
    input * levelm;
};

function goNextLevel() {
    monster.level = monster.level + 1;
    var levelm = Math.pow(1.2, monster.level - 1);
    monster.maxhp = 10 * levelm;
    monster.attack = 1 * levelm;
    monster.hp = monster.maxhp;
    var pastelife = (100 * monster.hp) / monster.maxhp;
    elem.style.width = pastelife + '%';
    elem.innerHTML = monster.hp.toFixed(1) + '/' + monster.maxhp.toFixed(1);
    document.getElementById('levels').innerHTML = monster.level.toString();
    if (monster.level > 1) {
        $('#previouslevel').show();
    };
};

function goPreviousLevel() {
    monster.level = monster.level - 1;
    var levelm = Math.pow(1.2, monster.level - 1);
    monster.maxhp = 10 * levelm;
    monster.attack = 1 * levelm;
    monster.hp = monster.maxhp;
    var pastelife = (100 * monster.hp) / monster.maxhp;
    elem.style.width = pastelife + '%';
    elem.innerHTML = monster.hp.toFixed(1) + '/' + monster.maxhp.toFixed(1);
    document.getElementById('levels').innerHTML = monster.level.toString();
    if (monster.level < 2) {
        $('#previouslevel').hide();
    };
};

function FloatingText(attack) {
    var attackfloat = numeral(attack).format('(0.0 a)');
    var obj = $("#floatingtexto").clone();
    obj.html("- " + attackfloat);
    $("#floatingtexto").append(obj);
    var p = $("#floatingtexto");
    var position = p.offset();
    ran = Math.floor((Math.random() * 8) + 1);
    ran2 = Math.floor((Math.random() * 400) + 200);
    var pos_left = position.left + 700;
    var pos_top = position.top + 300;
    obj.css('position', 'absolute');
    obj.offset({
        left: pos_left,
        top: pos_top
    });
    var x = 0;
    var y = 00;
    obj.animate({
        "top": "-=50px",
        "left": "-=0px"
    }, 300, "linear", function() {
        $(this).remove();
    });
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
};

//buy upgrades section

//buy atk
function buyattack() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.attacklevel));
    if (gold >= costCat) {
        player.attack = player.attack * 1.2;
        gold = gold - costCat;
        player.attacklevel = player.attacklevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("atkvalue").innerHTML = numeral(player.attack).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.attacklevel));
    document.getElementById("costatck").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhp() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.maxhplevel));
    if (gold >= costCat) {
        player.maxhp = player.maxhp * 1.2;
        gold = gold - costCat;
        player.maxhplevel = player.maxhplevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpvalue").innerHTML = numeral(player.maxhp).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.maxhplevel));
    document.getElementById("costhp").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhps() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.hpslevel));
    if (gold >= costCat) {
        player.hpregen = player.hpregen * 1.2;
        gold = gold - costCat;
        player.hpslevel = player.hpslevel + 1;
        var hpspaste = player.hpregen * 10;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpsvalue").innerHTML = numeral(hpspaste).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.hpslevel));
    document.getElementById("costhps").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyspeed() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.speedlevel));
    if (gold >= costCat) {
        player.speed = player.speed * 0.9;
        pastespeed = pastespeed * 1.1;
        gold = gold - costCat;
        player.speedlevel = player.speedlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("speedvalue").innerHTML = numeral(pastespeed).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.speedlevel));
    document.getElementById("costspeed").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyarmor() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.armorlevel));
    if (gold >= costCat) {

        player.armor = player.armor + 1;
        gold = gold - costCat;
        player.armorlevel = player.armorlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("armorvalue").innerHTML = numeral(player.armor).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.armorlevel));
    document.getElementById("costarmor").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycc() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.critlevel));
    if (gold >= costCat) {

        player.crit = player.crit + 1;
        gold = gold - costCat;
        player.critlevel = player.critlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("ccvalue").innerHTML = numeral(player.crit).format('(0.0 a)') + '%';
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.critlevel));
    document.getElementById("costcc").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycd() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.critdamagelevel));
    if (gold >= costCat) {

        player.critdamage = player.critdamage + 0.02;
        gold = gold - costCat;
        player.critdamagelevel = player.critdamagelevel + 1;
        var pastecd = player.critdamage * 100;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("cdvalue").innerHTML = numeral(pastecd).format('(0.0 a)') + '%';
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.critdamagelevel));
    document.getElementById("costcd").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function save(){
  localStorage.setItem('player', JSON.stringify(player));
  localStorage.setItem('monster', JSON.stringify(monster));
};
