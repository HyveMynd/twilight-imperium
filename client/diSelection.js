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