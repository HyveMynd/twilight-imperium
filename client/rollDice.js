/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);
Session.setDefault('diConfig', { sides: "6", numDi: 0});

Template.rollDice.helpers({
    diConfig: function () {
        return Session.get('diConfig');
    }
});

Template.rollDice.events({
    'change paper-radio-button': function (event) {
        var di = Session.get('diConfig');
        di.sides = event.target.label;
        Session.set('diConfig', di);
    }
});