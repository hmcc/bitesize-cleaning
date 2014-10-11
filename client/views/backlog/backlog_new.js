Template.backlogNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var backlog = {
      title: $(e.target).find('[name=title]').val(),
      time: $(e.target).find('[name=time]').val()
    }

    backlog._id = Backlog.insert(backlog);
    Router.go('backlogList');
  }
});
