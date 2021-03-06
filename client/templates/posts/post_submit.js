/**
 * Created by lemeliner on 20/12/2016.
 */
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            // affiche l'erreur à l'utilisateur et s'interrompt
            if (error) {
                return alert(error.reason);
            }
            if (result.postExists) {
                alert('Ce lien a déjà été utilisé');
            }

            Router.go('postPage', {_id: result._id});
        });
    }
});