if (Meteor.isServer) {

  Meteor.methods({

    removeBacklogByTitle: function(title) {
      return Backlog.remove({title: title});
    }

  });

}
