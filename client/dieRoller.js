/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";

Template.dieRoller.helpers({
    rollAttrs: function () {
        return {
            //disabled: Session.get('dieConfig').numDie === 0,
            raised: true
        }
    },
    lastResult: function () {
        var results = Session.get('results');
        results.sort(function (left, right) {
            return right - left;
        });
        return results;
    }
});

Template.dieRoller.events({
    'click paper-button': function () {

        // roll the di
        var results = [];
        var i;
        for (i = 0; i < this.numDie; i++){
            var result = Math.floor(Math.random() * this.sides) + 1;
            results.push({value:result});
        }
        Session.set('results', results);

        // Add to the histogram
        for (i = 0; i <  results.length; i++){
            var histoResult = Histogram.findOne({value: results[i].value});

            if (!histoResult){
                Meteor.call('insertHistogramValue', results[i].value);
            } else {
                Meteor.call('updateOccurrence', histoResult._id, histoResult.occurrence + 1);
            }
        }
    }
});