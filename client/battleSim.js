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
    getAttacks: function () {
        var units = Session.get('unitsAvailable');
        var results = Session.get('results');
        var upgrades = Session.get('techUpgrades');
        results.reverse();

        var ships = [];
        for (var i = 0; i < units.length; i++) {
            var shipAttack = { name: units[i].name, attacks: [] };

            var bonus = _.filter(upgrades, function (tech) {
                return tech.name === units[i].name;
            }).length;
            for (var j = 0; j < units[i].numAttacks; j++) {
                var result = results.pop();
                if (result) {
                    shipAttack.attacks.push({
                        value: result.value,
                        threshold: units[i].threshold - bonus
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

