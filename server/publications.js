Meteor.publish('backlog', function() {
  return Backlog.find();
});
Meteor.publish('houses', function() {
  return Houses.find();
});
Meteor.publish('tasks', function() {
  return Tasks.find();
});

Meteor.publish("allUsers", function () {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});

