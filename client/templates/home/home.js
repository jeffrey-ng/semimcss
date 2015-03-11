
Template.home.helpers({
    questions: function() {
        return Questions.find();
    },
    unansweredQuestions: function() {
        console.log(Meteor.user().questionsAnswered);

        // return Questions.find();

        return Questions.find({_id: {$nin: Meteor.user().questionsAnswered}})
    }
});