// Database
Histogram = new Mongo.Collection('histogram');


if (Meteor.isClient) {

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

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