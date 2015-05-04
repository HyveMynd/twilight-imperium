/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";

// Set default to dice rolling page
Session.setDefault('selected', '0');
Session.setDefault('title', 'Roll Dice');

Template.scaffold.events({
    'click .dice-roller': function () {
        Session.set('selected', "0");
        Session.set('title', 'Roll Dice')
    },
    'click .histogram': function () {
        Session.set('selected','1');
        Session.set('title', 'Histogram')
    },
    'click .battle-sim': function () {
        Session.set('selected','2');
        Session.set('title', 'Battle Sim')
    },
    'click .tech-sheet': function () {
        Session.set('selected','3');
        Session.set('title', 'Tech Sheet')
    }
});

Template.scaffold.helpers({
    selected: function () {
        return Session.get('selected');
    },
    title: function () {
        return Session.get('title');
    }
});