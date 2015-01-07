Meteor.publish('tasks', function() {
  if (access.isLoggedIn(this.userId)) {
    return Tasks.find();
  } else {
    this.ready();
  }
});

Meteor.publish("allUsers", function () {
  var user = access.isLoggedIn(this.userId);
  if (user) {
    return Meteor.users.find({address: user.address});
  } else {
    this.ready();
  }
});

