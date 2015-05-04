/**
 * Created by Andres Monroy (HyveMynd) on 5/4/15.
 */
"use strict";
var totalDie = (function () {
    var result = [];
    for (var i = 0; i < 15; i++){
        result.push({value: i + 1});
    }
    return result;
})();

Template.dieSelection.helpers({
    totalDie: function () {
        return totalDie;
    }
});

Template.dieSelection.events({
    'core-select paper-dropdown-menu': function (event) {
        if (event.originalEvent.detail.isSelected) {
            var die = Session.get('dieConfig');
            die.numDie = event.originalEvent.detail.item.innerText;
            Session.set('dieConfig', die);
        }
    }
});