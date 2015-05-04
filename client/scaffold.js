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
    },
    'click .tech-sheet': function () {
        Session.set('selected','1');
    }
});

Template.scaffold.helpers({
    getSelected: function () {
        return Session.get('selected');
    },
    getTitle: function () {
        return Session.get('title');
    }
});