
Template.newQuestion.events({
    "submit form#question": function(e,t) {
        // This function is called when the new task form is submitted
        e.preventDefault();
        var myQuestion = t.find('#myQuestion').value;

       if (myQuestion) {
        console.log(myQuestion);
        Meteor.call('newQuestion', myQuestion,function(error, result) {
            if (error) console.log(error);
        });
       }

        // Prevent default form submit
        return false;

    }
});
