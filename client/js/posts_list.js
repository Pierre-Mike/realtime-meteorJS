/**
 * Created by lemeliner on 19/12/2016.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});