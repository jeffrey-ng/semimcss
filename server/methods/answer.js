Meteor.methods({
  'submitAnswer': function (myAnswer, questionId, voterId) {
    check(myAnswer, String);
    check(questionId, String);
    check(voterId, String);
    if (Answers.findOne({'questionId': questionId, 'description': myAnswer })) {
        console.log("found");
         Answers.update({'questionId': questionId, 'description': myAnswer }, {$inc: {'votes': 1}});
    } else {
        console.log("inserting");
         Answers.insert({'questionId': questionId, 'description': myAnswer, 'votes': 1 });
    }

    Meteor.users.update({_id:voterId}, {$push: {questionsAnswered:questionId}});
  }
});
