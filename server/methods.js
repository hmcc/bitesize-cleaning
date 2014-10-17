if (Meteor.isServer) {

  Meteor.methods({

    addToBacklog: function(backlog) {
      if (access.isLoggedIn(this.userId)) {
        return Backlog.insert(backlog);
      }
    },

    removeBacklogByTitle: function(title) {
      if (access.isLoggedIn(this.userId)) {
        return Backlog.remove({title: title});
      }
    }

  });

}
