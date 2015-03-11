Meteor.publish('Answers', function() {
    return Answers.find();
});

Meteor.publishComposite('specificAnswers', function(questionId) {
        return {
            find: function() {
                return Answers.find({_id: questionId});
            }
        };
})