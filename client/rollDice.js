/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);
Session.setDefault('dieConfig', { sides: "6", numDie: 0});

Template.rollDice.helpers({
    dieConfig: function () {
        return Session.get('dieConfig');
    }
});

Template.rollDice.events({
    'change paper-radio-button': function (event) {
        var di = Session.get('dieConfig');
        di.sides = event.target.label;
        Session.set('dieConfig', di);
    }
});