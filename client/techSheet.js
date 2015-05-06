/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
var storage = 'techUpgrades';
Session.setDefault(storage, []);

Template.techSheet.helpers({

});

Template.techSheet.events({
    'click .plus': function () {
        var upgrades = Session.get(storage);
        for (var i = 0; i < FlattenedUnits.length; i++){
            upgrades.push(FlattenedUnits[i]);
        }
        Session.set(storage, upgrades);
    },
    'click .minus': function () {
        var upgrades = Session.get(storage);
        for (var i = 0; i < FlattenedUnits.length; i++){
            var name = FlattenedUnits[i].name;
            var index = _.indexOf(_.pluck(upgrades, 'name'), name);
            if (index >= 0){
                upgrades.splice(index, 1);
            }
        }
        Session.set(storage, upgrades);
    }
});

