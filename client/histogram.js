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
        var value = Histogram.findOne({value: number});
        return value ? value.occurrence : null;
    }
});