
var sessionQuestionId;
Template.questionCard.rendered = function() {
  // Meteor.typeahead.inject();a
  Meteor.typeahead($('.typeahead'));
  // console.log(this.firstNode());
};

Template.questionCard.created = function() {
    var instance = this;

    // console.log(this);
}


Template.questionCard.events({
    "submit form#answer": function(e,t) {
        // This function is called when the new task form is submitted
        e.preventDefault();
        var myAnswer = t.find('#myAnswer').value;
        var questionId = this._id;
        var voterId = Meteor.userId();

       if (myAnswer) {
        console.log(myAnswer);
        console.log(questionId);
        console.log(voterId);
        Meteor.call('submitAnswer', myAnswer, questionId, voterId,function(error, result) {
            if (error) console.log(error);
        });
       }

        // Prevent default form submit
        return false;

    },
    'click .activator': function() {
        sessionQuestionId = this._id;
        // console.log(sessionQuestionId);
    }
});

Template.questionCard.helpers({
    names: function() {
        var myid =  Template.currentData()._id;
        jjj = Answers.find().fetch();
          var data = Answers.find().fetch();

        var distinctData = _.uniq(data, false, function(d) {return d.description});
        var unique = _.pluck(distinctData, "description");



        return unique;
    }
});