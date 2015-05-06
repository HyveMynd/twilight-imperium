/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";

Session.setDefault('unitsAvailable', []);
Session.setDefault('results', []);

Template.battleSim.helpers({
    diceAvailable: function () {
        var units = Session.get('unitsAvailable');
        var dice = 0;
        for (var i = 0; i < units.length; i++){
            dice += units[i].numAttacks;
        }
        return dice;
    },
    //units: function () {
    //    var result = [];
    //    for (var key in Units){
    //        if (Units.hasOwnProperty(key)) {
    //            result.push({
    //                name: key,
    //                numAttacks: Units[key].numAttacks,
    //                threshold: Units[key].threshold
    //            });
    //        }
    //    }
    //    return result;
    //},
    //numUnits: function (unit) {
    //    var units = Session.get('unitsAvailable');
    //    return _.filter(units, function (u) {
    //        return u.name === unit
    //    }).length
    //},
    getAttacks: function () {
        var units = Session.get('unitsAvailable');
        var results = Session.get('results');
        results.reverse();

        var ships = [];
        for (var i = 0; i < units.length; i++) {
            var shipAttack = { name: units[i].name, attacks: [] } ;
            for (var j = 0; j < units[i].numAttacks; j++) {
                var result = results.pop();
                if (result) {
                    shipAttack.attacks.push({
                        value: result.value,
                        threshold: units[i].threshold
                    });
                }
            }
            ships.push(shipAttack);
        }
        return ships;
    },
    unitAttrs: function (value, threshold) {
        return value >= threshold && 'success-attack';
    }
});

//Template.battleSim.events({
//    'click .plus': function (event) {
//        var name = $(event.target).attr('value');
//        var units = Session.get('unitsAvailable');
//        units.push({
//            name: name,
//            numAttacks: Units[name].numAttacks,
//            threshold: Units[name].threshold
//        });
//        Session.set('unitsAvailable', units);
//    },
//    'click .minus': function (event) {
//        var name = $(event.target).attr('value');
//        var units = Session.get('unitsAvailable');
//        var index = _.indexOf(_.pluck(units, 'name'), name);
//        if (index >= 0) {
//            units.splice(index, 1);
//            Session.set('unitsAvailable', units);
//        }
//    }
//});

