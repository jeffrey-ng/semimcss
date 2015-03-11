Answers = new Mongo.Collection('answers');

Schemas = {};

Schemas.Answer = new SimpleSchema({

    questionId: {
        type: String
    },

    description: {
        type: String
    },
    votes: {
        type: Number,
        min: 0,

    }

});

Answers.attachSchema(Schemas.Answer);