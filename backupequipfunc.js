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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
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
            break;
        default:
            break;
    };
};
