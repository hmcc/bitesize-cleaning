if (Meteor.isServer) {

  Accounts.onCreateUser(function(options, user) {
    if (options.profile)
      user.profile = options.profile;
    user.cleaning_time = options.cleaning_time;
    user.household = options.household || new Meteor.Collection.ObjectID()._str;
    return user;
  });

  Meteor.methods({

    newUser: function(options, callback) {
      var userId = Accounts.createUser(options, callback);
      return userId;
    },

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
