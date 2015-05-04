/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";

Session.setDefault('unitsAvailable', []);

Template.battleSim.helpers({
    unitsAvailable: function () {
        var units = Session.get('unitsAvailable');
        var dice = 0;
        for (var i = 0; i < units.length; i++){
            dice += units[i].numAttacks;
        }
        return dice;
    },
    units: function () {
        var result = [];
        for (var key in Units){
            if (Units.hasOwnProperty(key)) {
                result.push({
                    name: key,
                    numAttacks: Units[key].numAttacks,
                    threshold: Units[key].threshold
                });
            }
        }
        return result;
    },
    numUnits: function (unit) {
        var units = Session.get('unitsAvailable');
        return _.filter(units, function (u) {
            return u.name === unit
        }).length
    }
});

Template.battleSim.events({
    'click .plus': function (event) {
        var name = $(event.target).attr('value');
        var units = Session.get('unitsAvailable');
        units.push({
            name: name,
            numAttacks: Units[name].numAttacks,
            threshold: Units[name].threshold
        });
        Session.set('unitsAvailable', units);
    }
});

