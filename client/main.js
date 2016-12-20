// Initialize app


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Meteor.startup(function() {
    Tracker.autorun(function() {
        console.log('There are ' + Posts.find().count() + ' posts');
    });
});
