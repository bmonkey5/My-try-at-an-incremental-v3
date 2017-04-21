var plevel = 1;
var hp = 50;
var maxhp = 50;
var maxhplevel = 0;
var hpregen = 0.1;
var hpslevel = 0;
var armor = 0;
var armorlevel = 0;
var crit = 5;
var critlevel = 0;
var critdamage = 1.5;
var critdamagelevel = 0;
var currentlife = 10;
var maxlife = 10;
var speed = 1000;
var speedlevel = 0;
var pastespeed = 1;
var attack = 1;
var attacklevel = 0;
var level = 1;
var monsterattack = 1;
var xp = 0;
var gold = 0;
var maxxp = 10;
var elem = document.getElementById("mybar");
var hpbar = document.getElementById("hpbar");
var xpbar = document.getElementById("xpbar");
var ss = speed;

$('#previouslevel').hide();

//attack enemy function
var playerattack = function() {
    var timer = setInterval(function() {
            var criticalstrikecalc = Math.floor(Math.random() * 100);
            if (hp < 0) {
                clearInterval(timer);
                deathstate();
            } else if (currentlife <= 0) {
                xpfunction();
                goldfunction();
                currentlife = maxlife;
                clearInterval(timer);
                playerattack();
            } else if (criticalstrikecalc <= crit) {
                var criticalstrike = attack * critdamage;
                currentlife = currentlife - criticalstrike;
                FloatingText(criticalstrike);
                var pastelife = (100 * currentlife) / maxlife;
                var elem = document.getElementById("mybar");
                elem.style.width = pastelife + '%';
                elem.innerHTML = currentlife.toFixed(1) + '/' + maxlife.toFixed(1);
                clearInterval(timer);
                playerattack();

            } else if (hp >= 1) {
                currentlife = currentlife - attack;
                FloatingText(attack);
                //transforms value into % for paste//
                var pastelife = (100 * currentlife) / maxlife;
                var elem = document.getElementById("mybar");
                elem.style.width = pastelife + '%';
                elem.innerHTML = currentlife.toFixed(1) + '/' + maxlife.toFixed(1);




                clearInterval(timer);
                playerattack();
            }
        },
        speed);
}
playerattack();

window.setInterval(function() {
    ss = speed;
}, 100);



//hpregen function
function hpregeneration() {

    if (hp < maxhp) {
        hp = hp + hpregen;
        //transforms value into % for paste//
        var pastelife = (100 * hp) / maxhp;
        hpbar.style.width = pastelife + '%';
        hpbar.innerHTML = hp.toFixed(1) + '/' + maxhp.toFixed(1);
    }

};

window.setInterval(function() {
    hpregeneration();
}, 100);

//deals with adds, update and scale experience
function xpfunction() {
    xp = xp + level;
    var pastexp = (100 * xp) / maxxp;
    xpbar.style.width = pastexp + '%';
    xpbar.innerHTML = xp.toFixed(1) + '/' + maxxp.toFixed(1);

    if (xp >= maxxp) {
        xp = xp - xp;
        maxxp = maxxp * 2;
        plevel = plevel + 1;
        document.getElementById("plvlinfo").innerHTML = 'Hero Level ' + plevel;
    }
};

//deals with gold
function goldfunction() {
    var levelm = Math.pow(1.2, level - 1);
    var gainedgold = 10 * levelm;
    gold = gold + gainedgold;
    document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
};

//enemyattacks
var eattack = function() {
    var timer = setInterval(function() {
            if (hp <= 0) {
                clearInterval(timer);
            } else if (currentlife > 0) {
                var monsterdamage = monsterattack - armor;
                if (monsterdamage < 0) {
                    monsterdamage = 0;
                }
                hp = hp - monsterdamage;
                //transforms value into % for paste//
                var pastelife = (100 * hp) / maxhp;
                hpbar.style.width = pastelife + '%';
                hpbar.innerHTML = hp.toFixed(1) + '/' + maxhp.toFixed(1);



                clearInterval(timer);
                eattack();
            }
        },
        1000);
}
eattack();

//death state
var deathstate = function() {
    var death = setInterval(function() {
            if (hp < maxhp) {
                hpregeneration();
            } else if (hp >= maxhp) {
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
    level = level + 1;
    var levelm = Math.pow(1.2, level - 1);
    maxlife = 10 * levelm;
    monsterattack = 1 * levelm;
    currentlife = maxlife;
    var pastelife = (100 * currentlife) / maxlife;
    elem.style.width = pastelife + '%';
    elem.innerHTML = currentlife.toFixed(1) + '/' + maxlife.toFixed(1);
    document.getElementById('levels').innerHTML = level.toString();
    if (level > 1) {
        $('#previouslevel').show();
    };
};

function goPreviousLevel() {
    level = level - 1;
    var levelm = Math.pow(1.2, level - 1);
    maxlife = 10 * levelm;
    monsterattack = 1 * levelm;
    currentlife = maxlife;
    var pastelife = (100 * currentlife) / maxlife;
    elem.style.width = pastelife + '%';
    elem.innerHTML = currentlife.toFixed(1) + '/' + maxlife.toFixed(1);
    document.getElementById('levels').innerHTML = level.toString();
    if (level < 2) {
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
    var costCat = Math.floor(10 * Math.pow(1.3, attacklevel));
    if (gold >= costCat) {
        attack = attack * 1.2;
        gold = gold - costCat;
        attacklevel = attacklevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("atkvalue").innerHTML = numeral(attack).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, attacklevel));
    document.getElementById("costatck").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhp() {
    var costCat = Math.floor(10 * Math.pow(1.3, maxhplevel));
    if (gold >= costCat) {
        maxhp = maxhp * 1.2;
        gold = gold - costCat;
        maxhplevel = maxhplevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpvalue").innerHTML = numeral(maxhp).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, maxhplevel));
    document.getElementById("costhp").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhps() {
    var costCat = Math.floor(10 * Math.pow(1.3, hpslevel));
    if (gold >= costCat) {
        hpregen = hpregen * 1.2;
        gold = gold - costCat;
        hpslevel = hpslevel + 1;
        var hpspaste = hpregen * 10;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("hpsvalue").innerHTML = numeral(hpspaste).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, hpslevel));
    document.getElementById("costhps").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyspeed() {
    var costCat = Math.floor(10 * Math.pow(1.3, speedlevel));
    if (gold >= costCat) {
        speed = speed * 0.9;
        pastespeed = pastespeed * 1.1;
        gold = gold - costCat;
        speedlevel = speedlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("speedvalue").innerHTML = numeral(pastespeed).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, speedlevel));
    document.getElementById("costspeed").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyarmor() {
    var costCat = Math.floor(10 * Math.pow(1.3, armorlevel));
    if (gold >= costCat) {

        armor = armor + 1;
        gold = gold - costCat;
        armorlevel = armorlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("armorvalue").innerHTML = numeral(armor).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, armorlevel));
    document.getElementById("costarmor").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycc() {
    var costCat = Math.floor(10 * Math.pow(1.3, critlevel));
    if (gold >= costCat) {

        crit = crit + 1;
        gold = gold - costCat;
        critlevel = critlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("ccvalue").innerHTML = numeral(crit).format('(0.0 a)') + '%';
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, critlevel));
    document.getElementById("costcc").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycd() {
    var costCat = Math.floor(10 * Math.pow(1.3, critdamagelevel));
    if (gold >= costCat) {

        critdamage = critdamage + 0.02;
        gold = gold - costCat;
        critdamagelevel = critdamagelevel + 1;
        var pastecd = critdamage * 100;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("cdvalue").innerHTML = numeral(pastecd).format('(0.0 a)') + '%';
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, critdamagelevel));
    document.getElementById("costcd").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};
