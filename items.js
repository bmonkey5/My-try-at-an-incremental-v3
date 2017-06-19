

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

var inventory = {
  item1 : document.getElementById("cell1"),
  item2 : document.getElementById("cell2"),
  item3 : document.getElementById("cell3"),
  item4 : document.getElementById("cell4"),
  item5 : document.getElementById("cell5"),
  item6 : document.getElementById("cell6"),
  item7 : document.getElementById("cell7"),
  item8 : document.getElementById("cell8"),
  item9 : document.getElementById("cell9"),
  item10 : document.getElementById("cell10"),
  item11 : document.getElementById("cell11"),
  item12 : document.getElementById("cell12"),
  item13 : document.getElementById("cell13"),
  item14 : document.getElementById("cell14"),
  item15 : document.getElementById("cell15"),
  item16 : document.getElementById("cell16")
};

var randomroll = function(){
  //this variable determines if there will be an item at all
  var itemspawn = Math.floor((Math.random() * 10) + 1);
  //will break if rolls fails
  if (itemspawn < 1){
    return false;
  }
  //will determine quality of loot
  else if(itemspawn > 1) {
    var itemquality = Math.floor((Math.random() * 10) + 1);
    if (itemquality >= 3){
      spawnnormalitem();
    }
    else if (itemquality > 1 && itemquality < 3){
      spawnrareitem();
    }
    else if (itemquality <= 1) {
      spawnepicitem();
    }
  }
};

var spawnnormalitem = function(){
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
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('normalItem');
            $(first_empty).addClass('helmArmor');
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 1 * levelm;
      newitem.hps = 0.1 * levelm;
      newitem.armor = 0.5 * levelm;
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('normalItem');
            $(first_empty).addClass('chestArmor');
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 1 * levelm;
    newitem.hps = 0.1 * levelm;
    newitem.armor = 0.5 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('normalItem');
          $(first_empty).addClass('legArmor');
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 1 * levelm;
    newitem.cc = 0.1 * levelm;
    newitem.cd = 0.5 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('normalItem');
          $(first_empty).addClass('weaponArmor');
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 1 * levelm;
    newitem.hps = 0.1 * levelm;
    newitem.cc = 0.1 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('normalItem');
          $(first_empty).addClass('gloveArmor');
      }

  }
  ;
};

var spawnrareitem= function(){
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
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('uncommonItem');
            $(first_empty).addClass('helmArmor');
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 2 * levelm;
      newitem.hps = 0.2 * levelm;
      newitem.armor = 1 * levelm;
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('uncommonItem');
            $(first_empty).addClass('chestArmor');
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 2 * levelm;
    newitem.hps = 0.2 * levelm;
    newitem.armor = 1 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('uncommonItem');
          $(first_empty).addClass('legArmor');
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 2 * levelm;
    newitem.cc = 0.2 * levelm;
    newitem.cd = 1 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('uncommonItem');
          $(first_empty).addClass('weaponArmor');
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 2 * levelm;
    newitem.hps = 0.2 * levelm;
    newitem.cc = 0.2 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('uncommonItem');
          $(first_empty).addClass('gloveArmor');
      }

  }
  ;
};

var spawnepicitem= function(){

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
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('rareItem');
            $(first_empty).addClass('helmArmor');
        }
  }
  else if (newitemtype == "chest"){
      newitem.maxhp = 5 * levelm;
      newitem.hps = 0.5 * levelm;
      newitem.armor = 2.5 * levelm;
      var empty_slots = $('#inventorygrid div.gridcell.empty'),
            first_empty = $(empty_slots).filter(':first');

        if(first_empty.length > 0) {
            $(first_empty).removeClass('empty');
            // and whatever you also need to do here...
            $(first_empty).addClass('rareItem');
            $(first_empty).addClass('chestArmor');
        }
  }
  else if (newitemtype == "legs"){
    newitem.maxhp = 5 * levelm;
    newitem.hps = 0.5 * levelm;
    newitem.armor = 2.5 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('rareItem');
          $(first_empty).addClass('legArmor');
      }
  }
  else if (newitemtype == "weapon"){
    newitem.attack = 5 * levelm;
    newitem.cc = 0.5 * levelm;
    newitem.cd = 2.5 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('rareItem');
          $(first_empty).addClass('weaponArmor');
      }
  }
  else if (newitemtype == "glove"){
    newitem.maxhp = 5 * levelm;
    newitem.hps = 0.5 * levelm;
    newitem.cc = 0.5 * levelm;
    var empty_slots = $('#inventorygrid div.gridcell.empty'),
          first_empty = $(empty_slots).filter(':first');

      if(first_empty.length > 0) {
          $(first_empty).removeClass('empty');
          // and whatever you also need to do here...
          $(first_empty).addClass('rareItem');
          $(first_empty).addClass('gloveArmor');
      }

  }
  ;
};
