Meteor.startup(function() {

  Factory.define('question', Questions, {
    description: function(){return Fake.sentence(20); }
  });

  if (Questions.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('question');
    });

  }

});