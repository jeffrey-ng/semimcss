Meteor.methods({
  'newQuestion': function (myQuestion) {
    check(myQuestion, String);
    Questions.insert({'description':myQuestion});

  }
});
