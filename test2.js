function equip16() {
    switch (inventoryTypes.item16) {
        case head:
            jQuery("#equippedhead").removeClass();
            jQuery("#equippedhead").empty();
            jQuery("#equippedhead").addClass("equippeditems");
            jQuery("#equippedhead").addClass("helmArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedhead').html(contents);
            switch (inventoryRarity.item16) {
                case white:
                    jQuery("#equippedhead").addClass("normalItem");
                    break;
                case green:
                    jQuery("#equippedhead").addClass("uncommonItem");
                    break;
                case blue:
                    jQuery("#equippedhead").addClass("rareItem");
                    break;
                default:
                    break;
            }
            break;
        case chest:
            jQuery("#equippedchest").removeClass();
            jQuery("#equippedchest").empty();
            jQuery("#equippedchest").addClass("equippeditems");
            jQuery("#equippedchest").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedchest').html(contents);
            switch (inventoryRarity.item16) {
                case white:
                    jQuery("#equippedchest").addClass("normalItem");
                    break;
                case green:
                    jQuery("#equippedchest").addClass("uncommonItem");
                    break;
                case blue:
                    jQuery("#equippedchest").addClass("rareItem");
                    break;
                default:
                    break;
            }
            break;
        case legs:
            jQuery("#equippedboots").removeClass();
            jQuery("#equippedboots").empty();
            jQuery("#equippedboots").addClass("equippeditems");
            jQuery("#equippedboots").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedboots').html(contents);
            switch (inventoryRarity.item16) {
                case white:
                    jQuery("#equippedboots").addClass("normalItem");
                    break;
                case green:
                    jQuery("#equippedboots").addClass("uncommonItem");
                    break;
                case blue:
                    jQuery("#equippedboots").addClass("rareItem");
                    break;
                default:
                    break;
            }
            break;
        case weapon:
            jQuery("#equippedsword").removeClass();
            jQuery("#equippedsword").empty();
            jQuery("#equippedsword").addClass("equippeditems");
            jQuery("#equippedsword").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedsword').html(contents);
            switch (inventoryRarity.item16) {
                case white:
                    jQuery("#equippedsword").addClass("normalItem");
                    break;
                case green:
                    jQuery("#equippedsword").addClass("uncommonItem");
                    break;
                case blue:
                    jQuery("#equippedsword").addClass("rareItem");
                    break;
                default:
                    break;
            }
            break;
        case glove:
            jQuery("#equippedgloves").removeClass();
            jQuery("#equippedgloves").empty();
            jQuery("#equippedgloves").addClass("equippeditems");
            jQuery("#equippedgloves").addClass("chestArmor");
            var contents = jQuery('#cell16').html();
            jQuery('#equippedgloves').html(contents);
            switch (inventoryRarity.item16) {
                case white:
                    jQuery("#equippedgloves").addClass("normalItem");
                    break;
                case green:
                    jQuery("#equippedgloves").addClass("uncommonItem");
                    break;
                case blue:
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
