/**
 * Created by Andres Monroy (HyveMynd) on 5/3/15.
 */
"use strict";
Session.setDefault('results', []);
Session.setDefault('diSideSelection', 0);
Session.setDefault('diConfig', { sides: "6", numDi: 1});

var numDi = (function () {
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
    numDi: function () {
        return numDi;
    },
    diSides: function () {
        return Session.get('diSideSelection');
    },
    diConfig: function () {
        return Session.get('diConfig');
    }
});

Template.rolldi.events({
    'click button': function () {
        // increment the counter when button is clicked
        var results = Session.get('results');
        var diConfig = Session.get('diConfig');
        for (var i = 0; i < diConfig.numDi; i++){
            var result = Math.floor(Math.random() * diConfig.sides) + 1;
            results.push(result);
        }
        Session.set('results', results);
    },
    'click paper-tab': function (event) {
        var di = Session.get('diConfig');
        di.sides = event.target.textContent;
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

Template.histogram.helpers({
    resultsFor: function (number) {
        var results = Session.get('results');
        return _.filter(results, function (num) {
            return num === number;
        }).length;
    }
});