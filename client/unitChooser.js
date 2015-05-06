FlattenedUnits = (function () {
    var result = [];
    for (var key in Units){
        if (Units.hasOwnProperty(key)) {
            result.push({
                name: key,
                numAttacks: Units[key].numAttacks,
                threshold: Units[key].threshold
            });
        }
    }
    return result;
})();

Template.unitChooser.helpers({
    units: function () {
        return FlattenedUnits;
    },
    numUnits: function (unit, storage) {
        var units = Session.get(storage);
        return _.filter(units, function (u) {
            return u.name === unit
        }).length
    }
});

Template.unitChooser.events({
    'click .plus': function (event) {
        var name = $(event.target).attr('data-name');
        var storage = $(event.target).attr('data-storage');
        var units = Session.get(storage);
        units.push({
            name: name,
            numAttacks: Units[name].numAttacks,
            threshold: Units[name].threshold
        });
        Session.set(storage, units);
    },
    'click .minus': function (event) {
        var name = $(event.target).attr('data-name');
        var storage = $(event.target).attr('data-storage');
        var units = Session.get(storage);
        var index = _.indexOf(_.pluck(units, 'name'), name);
        if (index >= 0) {
            units.splice(index, 1);
            Session.set(storage, units);
        }
    }
});