var item = {
  maxhp : 0,
  hps : 0,
  cc : 0,
  cd : 0,
  armor : 0,
  speed : 0,
  attack : 0,
  type : ['head', 'chest', 'legs', 'weapon', 'glove']
};

var inventory = {
  item1 = document.getElementById("cell1"),
  item2 = document.getElementById("cell2"),
  item3 = document.getElementById("cell3"),
  item4 = document.getElementById("cell4"),
  item5 = document.getElementById("cell5"),
  item6 = document.getElementById("cell6"),
  item7 = document.getElementById("cell7"),
  item8 = document.getElementById("cell8"),
  item9 = document.getElementById("cell9"),
  item10 = document.getElementById("cell10"),
  item11 = document.getElementById("cell11"),
  item12 = document.getElementById("cell12"),
  item13 = document.getElementById("cell13"),
  item14 = document.getElementById("cell14"),
  item15 = document.getElementById("cell15"),
  item16 = document.getElementById("cell16")
};

var randomroll = function(){
  //this variable determines if there will be an item at all
  var itemspawn = Math.floor((Math.random() * 10) + 1);
  //will break if rolls fails
  if (itemspawn < 8){
    break randomroll();
  }
  //will determine quality of loot
  else {
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

};

var spawnrarelitem = function(){

};

var spawnepicitem = function(){

};
