/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";

Session.setDefault('unitsAvailable', []);

Template.battleSim.helpers({
    diceAvailable: function () {
        var units = Session.get('unitsAvailable');
        var dice = 0;
        for (var i = 0; i < units.length; i++){
            dice += units[i].numAttacks;
        }
        return dice;
    },
    unitsAvailable: function () {
        return Session.get('unitsAvailable')
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
    },
    getAttacks: function (name, numAttacks, threshold) {
        var results = Session.get('results');
        results.reverse();
        var attacks = [];
        for (var i = 0; i < numAttacks; i++){
            var result = results.pop();
            if (result) {
                attacks.push({
                    value: result.value,
                    threshold: threshold
                });
            }
        }
        return attacks;
    },
    unitAttrs: function (value, threshold) {
        return value >= threshold && 'success-attack';
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

