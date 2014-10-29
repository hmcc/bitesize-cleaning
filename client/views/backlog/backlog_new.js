Template.backlogNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var backlog = {
      title: $(e.target).find('[name=title]').val(),
      time: $(e.target).find('[name=time]').val()
    }

    Meteor.call('addToBacklog', backlog);
    Router.go('backlogList');
  }
});
