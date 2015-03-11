Meteor.publish('userdata', function() {
    return Meteor.users.find({_id: this.userId}, {fields:{'questionsAnswered':1}});
});