Meteor.publish('backlog', function() {
  if (this.userId) {
    return Backlog.find();
  } else {
    this.ready();
  }
});
Meteor.publish('houses', function() {
  if (access.isLoggedIn(this.userId)) {
    return Houses.find();
  } else {
    this.ready();
  }
});
Meteor.publish('tasks', function() {
  if (access.isLoggedIn(this.userId)) {
    return Tasks.find();
  } else {
    this.ready();
  }
});

Meteor.publish("allUsers", function () {
  if (access.isLoggedIn(this.userId)) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});

