/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);

Template.rolldi.helpers({
    result: function () {
        var results = Session.get('results');
        return results[results.length-1];
    }
});

Template.rolldi.events({
    'click button': function () {
        // increment the counter when button is clicked
        var results = Session.get('results');
        for (var i = 0; i < 100000; i++){
            var result = Math.floor(Math.random() * 6) + 1;
            results.push(result);
        }
        Session.set('results', results);
    }
});

Template.histogram.helpers({
    resultsFor: function (number) {
        var results = Session.get('results');
        return _.filter(results, function (num) {
            return num === number;
        }).length;
    }
});