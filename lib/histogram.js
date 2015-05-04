Histogram = new Mongo.Collection('histogram');

Meteor.methods({
    updateOccurrence: function (histoId, occurence) {
        Histogram.update(histoId, { $set: {occurrence: occurence}});
    },
    insertHistogramValue: function (value) {
        Histogram.insert({
            value: value,
            occurrence: 1
        });
    }
});