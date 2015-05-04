if (Meteor.isClient) {

}

Histogram = new Mongo.Collection('histogram');

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

Meteor.methods({
    updateOccurrence: function (histoId, occurence) {
        console.log(Histogram.findOne(histoId))
        Histogram.update(histoId, { $set: {occurrence: occurence}});
    },
    insertHistogramValue: function (value) {
        Histogram.insert({
            value: value,
            occurrence: 1
        });
    }
});