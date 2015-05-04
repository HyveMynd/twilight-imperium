/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);
Session.setDefault('diConfig', { sides: "6", numDi: 0});

var totalDi = (function () {
    var result = [];
    for (var i = 0; i < 15; i++){
        result.push({value: i + 1});
    }
    return result;
})();

Template.rolldi.helpers({
    lastResult: function () {
        var results = Session.get('results');
        return results[results.length-1];
    },
    resultsFor: function (number) {
        var results = Session.get('results');
        return _.filter(results, function (num) {
            return num === number;
        }).length;
    },
    totalDi: function () {
        return totalDi;
    },
    diConfig: function () {
        return Session.get('diConfig');
    },
    sides: function () {
        var sides = Session.get('diConfig').sides;
        var result = [];
        for (var i = 0; i < sides; i++){
            result.push({value:i + 1});
        }
        return result;
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
        // increment the counter when button is clicked
        var results = Session.get('results');
        var diConfig = Session.get('diConfig');
        for (var i = 0; i < diConfig.numDi; i++){
            var result = Math.floor(Math.random() * diConfig.sides) + 1;
            results.push(result);
        }
        Session.set('results', results);
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