Questions = new Mongo.Collection('questions');

Schemas = {};

Schemas.Question = new SimpleSchema({

    description: {
        type: String
    }

});

Questions.attachSchema(Schemas.Question);
