if (Meteor.isServer) {

  Accounts.onCreateUser(function(options, user) {
    if (options.profile)
      user.profile = options.profile;
    user.cleaning_time = options.cleaning_time;
    user.address = options.address;
    return user;
  });

  Meteor.methods({

    newUser: function(userToCreate, callback) {
      return Accounts.createUser({
        username: userToCreate.username,
        email:    userToCreate.email,
        password: userToCreate.password,
        address: userToCreate.address,
        cleaning_time: userToCreate.cleaning_time,
        profile: userToCreate.profile
      },
      callback
      );
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
