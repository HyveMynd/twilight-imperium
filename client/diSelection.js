/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";
var totalDi = (function () {
    var result = [];
    for (var i = 0; i < 15; i++){
        result.push({value: i + 1});
    }
    return result;
})();

Template.diSelection.helpers({
    totalDi: function () {
        return totalDi;
    }
});

Template.diSelection.events({
    'core-select paper-dropdown-menu': function (event) {
        if (event.originalEvent.detail.isSelected) {
            var di = Session.get('diConfig');
            di.numDi = event.originalEvent.detail.item.innerText;
            Session.set('diConfig', di);
        }
    }
});