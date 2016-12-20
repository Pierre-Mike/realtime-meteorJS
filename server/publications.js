/**
 * Created by lemeliner on 19/12/2016.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});