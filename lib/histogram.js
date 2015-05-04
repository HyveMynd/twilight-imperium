Histogram = new Mongo.Collection('histogram');

Meteor.methods({
    updateOccurrence: function (histoId, occurence) {
        Histogram.update(histoId, { $set: {occurrence: occurence}});
    },
    initHistogram: function (value) {
        Histogram.insert({
            value: value,
            occurrence: 1,
            owner: Meteor.userId()
        });
    },
    clearHistogram: function () {
        if (!Meteor.userId()){
            throw new Meteor.error('Not authorize');
        }

        Histogram.remove({owner: Meteor.userId()});
    }
});