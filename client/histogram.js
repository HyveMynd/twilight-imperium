/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";

Template.histogram.helpers({
    sides: function () {
        var sides = Session.get('dieConfig').sides;
        var result = [];
        for (var i = 0; i < sides; i++){
            result.push({value:i + 1});
        }
        return result;
    },
    histogram: function (number) {
        var histo = Histogram.findOne({owner: Meteor.userId(), value: number});
        return histo ? histo.occurrence  : 0;
    }
});

Template.histogram.events({
    'click paper-button': function () {
        Meteor.call('clearHistogram');
    }
});