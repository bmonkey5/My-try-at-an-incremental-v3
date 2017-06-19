
window.player = {
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

window.monster = {
  hp : 10,
  maxhp : 10,
  attack : 1,
  level : 1
};



jQuery.noConflict();



var pastespeed = 1;
var xp = 0;
var gold = 0;
var maxxp = 10;
var elem = document.getElementById("mybar");
var hpbar = document.getElementById("hpbar");
var xpbar = document.getElementById("xpbar");
var ss = player.speed;

jQuery('#previouslevel').hide();

//attack enemy function
//
var playerattack = function() {
    window.ptimer = setInterval(function() {
      var imgsrc = jQuery('#herocat').attr('src');
      jQuery('#herocat').attr('src', '');
      jQuery('#herocat').attr('src', imgsrc);
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
                randomroll();
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
        jQuery('#previouslevel').show();
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
        jQuery('#previouslevel').hide();
    };
};

function FloatingText(attack) {
    var attackfloat = numeral(attack).format('(0.0 a)');
    var obj = jQuery("#floatingtexto").clone();
    obj.html("- " + attackfloat);
    jQuery("#floatingtexto").append(obj);
    var p = jQuery("#floatingtexto");
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
        jQuery(this).remove();
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
        gold = gold - costCat;
        player.attacklevel = player.attacklevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentAttack").innerHTML = '+' + player.attacklevel + '%';
        var r = (player.attacklevel / 100) + 1;
        var s = player.attack * r;

        document.getElementById("atkvalue").innerHTML = numeral(s).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.attacklevel));
    document.getElementById("costatck").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhp() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.maxhplevel));
    if (gold >= costCat) {
        gold = gold - costCat;
        player.maxhplevel = player.maxhplevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentHP").innerHTML = '+' + player.maxhplevel + '%';
        var r = (player.maxhplevel / 100) + 1;
        var s = player.maxhp * r;
        document.getElementById("hpvalue").innerHTML = numeral(s).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.maxhplevel));
    document.getElementById("costhp").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyhps() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.hpslevel));
    if (gold >= costCat) {
        gold = gold - costCat;
        player.hpslevel = player.hpslevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentHPS").innerHTML = '+' + player.hpslevel + '%';
        var r = (player.hpslevel / 100) + 1;
        var s = player.hpregen * r;
        var hpspaste = s * 10;
        document.getElementById("hpsvalue").innerHTML = numeral(hpspaste).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.hpslevel));
    document.getElementById("costhps").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyspeed() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.speedlevel));
    if (gold >= costCat) {
        player.speed = player.speed * 0.99;
        gold = gold - costCat;
        player.speedlevel = player.speedlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentspeed").innerHTML = '+' + player.speedlevel + '%';
        pastespeed = pastespeed * 1.01;
        document.getElementById("speedvalue").innerHTML = numeral(pastespeed).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.speedlevel));
    document.getElementById("costspeed").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buyarmor() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.armorlevel));
    if (gold >= costCat) {
        gold = gold - costCat;
        player.armorlevel = player.armorlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentarmor").innerHTML = '+' + player.armorlevel + '%';
        var r = (player.armorlevel / 100) + 1;
        var s = player.armor * r;
        document.getElementById("armorvalue").innerHTML = numeral(s).format('(0.0 a)');
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.armorlevel));
    document.getElementById("costarmor").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycc() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.critlevel));
    if (gold >= costCat) {
        gold = gold - costCat;
        player.critlevel = player.critlevel + 1;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentCC").innerHTML = '+' + player.critlevel + '%';
        var r = (player.critlevel / 100) + 1;
        var s = player.crit * r;
        document.getElementById("ccvalue").innerHTML = numeral(s).format('(0.0 a)') + '%';
    }
    //update cost and publish
    var nextCost = Math.floor(10 * Math.pow(1.3, player.critlevel));
    document.getElementById("costcc").innerHTML = numeral(nextCost).format('($ 0.0 a)');
};

function buycd() {
    var costCat = Math.floor(10 * Math.pow(1.3, player.critdamagelevel));
    if (gold >= costCat) {
        gold = gold - costCat;
        player.critdamagelevel = player.critdamagelevel + 1;
        var pastecd = player.critdamage * 100;
        document.getElementById("mygold").innerHTML = numeral(gold).format('($ 0.0 a)');
        document.getElementById("pourcentCD").innerHTML = '+' + player.critdamagelevel + '%';
        var r = (player.critdamagelevel / 100) + 1;
        var s = pastecd * r;
        document.getElementById("cdvalue").innerHTML = numeral(s).format('(0.0 a)') + '%';
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

/////////////////////////////////////////ITEMS SECTION///////////////////////////////////////////////////////////////



var item = {
  maxhp : 0,
  hps : 0,
  cc : 0,
  cd : 0,
  armor : 0,
  speed : 0,
  attack : 0
};

var itemTypes = ['head', 'chest', 'legs', 'weapon', 'glove'];

var inventory = {};

let inventoryRarity = {};

var inventoryTypes = {};

var equipped = {
  weapon : undefined,
  head : undefined,
  chest : undefined,
  glove : undefined,
  legs : undefined
}

var equippedRarity = {
  weapon : undefined,
  head : undefined,
  chest : undefined,
  glove : undefined,
  legs : undefined
}

var itemCount = 0;

//remove all items//clears inventorygrid
function trashItems() {
  jQuery("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9, #cell10, #cell11, #cell12, #cell13, #cell14, #cell15, #cell16").removeClass();
  jQuery("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9, #cell10, #cell11, #cell12, #cell13, #cell14, #cell15, #cell16").empty();
  jQuery("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9, #cell10, #cell11, #cell12, #cell13, #cell14, #cell15, #cell16").addClass("gridcell empty");
};



////////////////////////////////////////////////////////////////////////////// RNG ////////////////////////////////////////////////////////////////////////////////

function randomroll(){
  //this variable determines if there will be an item at all
  var itemspawn = Math.floor((Math.random() * 10) + 1);
  //will break if rolls fails
  if (itemspawn < 1){
    return false;
  }
  //will determine quality of loot
  else if(itemspawn > 1) {
    var itemquality = Math.floor((Math.random() * 10) + 1);
    if (itemquality >= 6){
      itemCount = itemCount + 1;
      inventoryRarity['item'] = {};
      inventoryRarity.item['itemCount'] = "white";
      spawnnormalitem();
    }
    else if (itemquality > 3 && itemquality < 6){
      itemCount = itemCount + 1;
  inventoryRarity['item'] = {};
      inventoryRarity.item['itemCount'] = "green";
      spawnrareitem();
    }
    else if (itemquality <= 3) {
      itemCount = itemCount + 1;
  inventoryRarity['item'] = {};
      inventoryRarity.item['itemCount'] = "blue";
      spawnepicitem();
    }
  }
};

function spawnnormalitem(){
// Usage = $('.box');
  //will base item stats from monster levelm
  var levelm = Math.pow(1.2, monster.level - 1);
  //clones the base empty item to make a new one
  var newitem = (JSON.parse(JSON.stringify(item)));
  //choose random word from arrray type to determine what kind of item it is
  var newitemtype = itemTypes[Math.floor(Math.random()*itemTypes.length)]
  if (newitemtype == "head"){
      newitem.maxhp = 1 * levelm;
      newitem.hps = 0.1 * levelm;
      newitem.cc = 0.1 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('normalItem');
            jQuery(first_empty).addClass('helmArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Helm";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
            //div.innerHTML = itemTitle + stat1 + stat2 + stat3;//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
            //this.innerHTML = '<div class="tooltip">' +'<span class="itemName">'+'Helm'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 1 * levelm;
      newitem.hps = 0.1 * levelm;
      newitem.armor = 0.5 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('normalItem');
            jQuery(first_empty).addClass('chestArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Chest";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
            //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
          //  this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Chest'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 1 * levelm;
    newitem.hps = 0.1 * levelm;
    newitem.armor = 0.5 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('normalItem');
          jQuery(first_empty).addClass('legArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Pants";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
        //  this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Boots'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 1 * levelm;
    newitem.cc = 0.1 * levelm;
    newitem.cd = 0.5 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('normalItem');
          jQuery(first_empty).addClass('weaponArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Sword";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.attack.toFixed(2) + " +Damage";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cd.toFixed(2) + " +Crit Damage";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Sword'+'</span></br>'+newitem.attack + ' Damage'+'</br>'+newitem.cc+' Crit Chance'+'</br>'+newitem.cd +' Crit Damage'  +'</div>';//
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 1 * levelm;
    newitem.hps = 0.1 * levelm;
    newitem.cc = 0.1 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('normalItem');
          jQuery(first_empty).addClass('gloveArmor');
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Gloves'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Gloves";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
      }

  }
  ;
};

function spawnrareitem(){
// Usage = $('.box');
  //will base item stats from monster levelm
  var levelm = Math.pow(1.2, monster.level - 1);
  //clones the base empty item to make a new one
  var newitem = (JSON.parse(JSON.stringify(item)));
  //choose random word from arrray type to determine what kind of item it is
  var newitemtype = itemTypes[Math.floor(Math.random()*itemTypes.length)]
  if (newitemtype == "head"){
      newitem.maxhp = 2 * levelm;
      newitem.hps = 0.2 * levelm;
      newitem.cc = 0.2 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('uncommonItem');
            jQuery(first_empty).addClass('helmArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Ucommon Helm";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
            //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
            //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Uncommon Helm'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 2 * levelm;
      newitem.hps = 0.2 * levelm;
      newitem.armor = 1 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('uncommonItem');
            jQuery(first_empty).addClass('chestArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Uncommon Chest";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
            //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
            //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Uncommon Chest'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 2 * levelm;
    newitem.hps = 0.2 * levelm;
    newitem.armor = 1 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('uncommonItem');
          jQuery(first_empty).addClass('legArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Uncommon Pants";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Uncommon Boots'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 2 * levelm;
    newitem.cc = 0.2 * levelm;
    newitem.cd = 1 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('uncommonItem');
          jQuery(first_empty).addClass('weaponArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Uncommon Sword";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.attack.toFixed(2) + " +Damage";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cd.toFixed(2) + " +Crit Damage";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Uncommon Sword'+'</span></br>'+newitem.attack + ' Damage'+'</br>'+newitem.cc+' Crit Chance'+'</br>'+newitem.cd +' Crit Damage'  +'</div>';//
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 2 * levelm;
    newitem.hps = 0.2 * levelm;
    newitem.cc = 0.2 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('uncommonItem');
          jQuery(first_empty).addClass('gloveArmor');
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Uncommon Gloves'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Uncommon Gloves";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
      }

  }
  ;
};

function spawnepicitem(){

  //will base item stats from monster levelm
  var levelm = Math.pow(1.2, monster.level - 1);
  //clones the base empty item to make a new one
  var newitem = (JSON.parse(JSON.stringify(item)));
  //choose random word from arrray type to determine what kind of item it is
  var newitemtype = itemTypes[Math.floor(Math.random()*itemTypes.length)]
  if (newitemtype == "head"){
      newitem.maxhp = 5 * levelm;
      newitem.hps = 0.5 * levelm;
      newitem.cc = 0.5 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('rareItem');
            jQuery(first_empty).addClass('helmArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Rare Helm";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
            //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
            //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Rare Helm'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 5 * levelm;
      newitem.hps = 0.5 * levelm;
      newitem.armor = 2.5 * levelm;
      inventory['item'] = {};
      inventory.item['itemCount'] = (JSON.stringify(newitem));
      inventoryTypes['item'] = {};
      inventoryTypes.item['itemCount'] = newitemtype;
      var empty_slots = jQuery('#inventory div.gridcell.empty'),
            first_empty = jQuery(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            jQuery(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            jQuery(first_empty).addClass('rareItem');
            jQuery(first_empty).addClass('chestArmor');
            var div = document.createElement('div');
            div.setAttribute('class', 'tooltip');
            var itemTitle = document.createElement('span');
            itemTitle.setAttribute('class', 'itemName');
            itemTitle.innerHTML = "Rare Chest";
            var stat1 = document.createElement('p');
            stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
            var stat2 = document.createElement('p');
            stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
            var stat3 = document.createElement('p');
            stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
            //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
            jQuery(div).append(itemTitle);
            jQuery(div).append(stat1);
            jQuery(div).append(stat2);
            jQuery(div).append(stat3);
            jQuery(first_empty).append(div);
            //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Rare Chest'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 5 * levelm;
    newitem.hps = 0.5 * levelm;
    newitem.armor = 2.5 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('rareItem');
          jQuery(first_empty).addClass('legArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Rare Pants";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.armor.toFixed(2) + " +Armor";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);

          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Rare Boots'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.armor +' Armor'  +'</div>';//
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 5 * levelm;
    newitem.cc = 0.5 * levelm;
    newitem.cd = 2.5 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('rareItem');
          jQuery(first_empty).addClass('weaponArmor');
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Rare Sword";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.attack.toFixed(2) + " +Damage";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cd.toFixed(2) + " +Crit Damage";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Rare Sword'+'</span></br>'+newitem.attack + ' Damage'+'</br>'+newitem.cc+' Crit Chance'+'</br>'+newitem.cd +' Crit Damage'  +'</div>';//
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 5 * levelm;
    newitem.hps = 0.5 * levelm;
    newitem.cc = 0.5 * levelm;
    inventory['item'] = {};
    inventory.item['itemCount'] = (JSON.stringify(newitem));
    inventoryTypes['item'] = {};
    inventoryTypes.item['itemCount'] = newitemtype;
    var empty_slots = jQuery('#inventory div.gridcell.empty'),
          first_empty = jQuery(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          jQuery(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          jQuery(first_empty).addClass('rareItem');
          jQuery(first_empty).addClass('gloveArmor');
          //this.innerHTML='<div class="tooltip">' +'<span class="itemName">'+'Rare Gloves'+'</span></br>'+newitem.maxhp + ' health'+'</br>'+newitem.hps+' hp/s'+'</br>'+newitem.cc +' crit chance'  +'</div>';//
          var div = document.createElement('div');
          div.setAttribute('class', 'tooltip');
          var itemTitle = document.createElement('span');
          itemTitle.setAttribute('class', 'itemName');
          itemTitle.innerHTML = "Rare Gloves";
          var stat1 = document.createElement('p');
          stat1.innerHTML = newitem.maxhp.toFixed(2) + " +health";
          var stat2 = document.createElement('p');
          stat2.innerHTML = newitem.hps.toFixed(2) + " +hps";
          var stat3 = document.createElement('p');
          stat3.innerHTML = newitem.cc.toFixed(2) + " +Crit Chance";
          //div.innerHTML = "itemTitle + stat1 + stat2 + stat3";//
          jQuery(div).append(itemTitle);
          jQuery(div).append(stat1);
          jQuery(div).append(stat2);
          jQuery(div).append(stat3);
          jQuery(first_empty).append(div);
      }

  }
  ;
};


////////////////////// THIS IS GONNA BE MESSY///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////ITEM EQUIP SECTION////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function equip1() {
    switch (inventoryTypes.item1) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell1').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item1) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell1').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item1) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell1').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item1) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell1').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item1) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell1').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item1) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip2() {
    switch (inventoryTypes.item2) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell2').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item2) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell2').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item2) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell2').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item2) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell2').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item2) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell2').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item2) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip3() {
    switch (inventoryTypes.item3) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell3').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item3) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell3').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item3) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell3').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item3) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell3').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item3) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell3').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item3) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip4() {
    switch (inventoryTypes.item4) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell4').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item4) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell4').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item4) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell4').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item4) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell4').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item4) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell4').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item4) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip5() {
    switch (inventoryTypes.item5) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell5').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item5) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell5').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item5) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell5').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item5) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell5').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item5) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell5').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item5) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip6() {
    switch (inventoryTypes.item6) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell6').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item6) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell6').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item6) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell6').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item6) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell6').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item6) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell6').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item6) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip7() {
    switch (inventoryTypes.item7) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell7').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item7) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell7').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item7) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell7').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item7) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell7').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item7) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell7').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item7) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip8() {
    switch (inventoryTypes.item8) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell8').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item8) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell8').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item8) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell8').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item8) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell8').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item8) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell8').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item8) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip9() {
    switch (inventoryTypes.item9) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell9').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item9) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell9').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item9) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell9').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item9) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell9').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item9) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell9').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item9) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip10() {
    switch (inventoryTypes.item10) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell10').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item10) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell10').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item10) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell10').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item10) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell10').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item10) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell10').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item10) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip11() {
    switch (inventoryTypes.item11) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell11').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item11) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell11').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item11) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell11').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item11) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell11').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item11) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell11').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item11) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip12() {
    switch (inventoryTypes.item12) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell12').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item12) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell12').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item12) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell12').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item12) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell12').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item12) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell12').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item12) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip13() {
    switch (inventoryTypes.item13) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell13').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item13) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell13').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item13) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell13').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item13) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell13').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item13) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell13').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item13) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip14() {
    switch (inventoryTypes.item14) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell14').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item14) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell14').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item14) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell14').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item14) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell14').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item14) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell14').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item14) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip15() {
    switch (inventoryTypes.item15) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell15').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item15) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell15').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item15) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell15').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item15) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell15').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item15) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell15').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item15) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }

        default:
            break;
    };
};

function equip16() {
    switch (inventoryTypes.item16) {
        case "head":
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item16) {
                case "white":
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "chest":
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item16) {
                case "white":
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "legs":
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item16) {
                case "white":
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "weapon":
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item16) {
                case "white":
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }

        case "glove":
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item16) {
                case "white":
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case "green":
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case "blue":
                    jQuery("#equippedgloves").addClass("rareItem");
                    break;
                default:
                    break;
            }
            
        default:
            break;
    };
};
