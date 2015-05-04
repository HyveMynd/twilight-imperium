/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);
Session.setDefault('diConfig', { sides: "6", numDi: 0});

Template.rolldi.helpers({
    lastResult: function () {
        var results = Session.get('results');
        results.sort(function (left, right) {
            return right - left;
        });
        return results;
    },
    diConfig: function () {
        return Session.get('diConfig');
    },
    rollAttrs: function () {
        return {
                disabled: Session.get('diConfig').numDi === 0,
                raised: true
            }
    }
});

Template.rolldi.events({
    'click paper-button': function () {

        // roll the di
        var results = [];
        var diConfig = Session.get('diConfig');
        var i;
        for (i = 0; i < diConfig.numDi; i++){
            var result = Math.floor(Math.random() * diConfig.sides) + 1;
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
    },
    'change paper-radio-button': function (event) {
        var di = Session.get('diConfig');
        di.sides = event.target.label;
        Session.set('diConfig', di);
    },
    'core-select paper-dropdown-menu': function (event) {
        if (event.originalEvent.detail.isSelected) {
            var di = Session.get('diConfig');
            di.numDi = event.originalEvent.detail.item.innerText;
            Session.set('diConfig', di);
        }
    }
});