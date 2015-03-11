Schema = {};

Schema.User = new SimpleSchema({

    questionsAnswered: {
        type: [String],
        defaultValue: [],
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);