if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.scaffold.events({
        'click .dice-roller': function () {
            Session.set('selected', "0");
        },
        'click .tech-sheet': function () {
            Session.set('selected','1');
        }
    });

    Template.scaffold.helpers({
        getSelected: function () {
            return Session.get('selected') || "0";
        }
    });

    Template.rolldi.helpers({
        result: function () {
            var results = Session.get('results');
            if (!results){
                return 0;
            }
            return results[results.length-1];
        }
    });

    Template.rolldi.events({
        'click button': function () {
            // increment the counter when button is clicked
            var results = Session.get('results');
            if (!results){
                results = [];
            }
            for (var i = 0; i < 100000; i++){
                var result = Math.floor(Math.random() * 6) + 1;
                results.push(result);
            }
            Session.set('results', results);
        }
    });

    Template.histogram.helpers({
        resultsFor: function (number) {
            var results = Session.get('results');
            if (!results){
                return;
            }
            return _.filter(results, function (num) {
                return num === number;
            }).length;
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
