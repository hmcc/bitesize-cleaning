Template.backlogList.helpers({
  backlog: function() {
    return Backlog.find();
  }
});

Template.backlogList.events({
  'click .delete-item': function(e) {
    e.preventDefault();

    var titleElems = $(e.target).siblings('a');
    if (titleElems.length > 0) {
       var title = titleElems.get(0).text;
       Meteor.call('removeBacklogByTitle', title);
    }
   

    Router.go('backlogList');
  }
});
