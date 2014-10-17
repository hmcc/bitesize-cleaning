function isLoggedIn() {
  if(!this.userId) return null;
  var user = Meteor.users.findOne(this.userId);
  if(!user) return null;
  return true;
}

Meteor.publish('backlog', function() {
  if (this.userId) {
    return Backlog.find();
  } else {
    this.ready();
  }
});
Meteor.publish('houses', function() {
  if (isLoggedIn()) {
    return Houses.find();
  } else {
    this.ready();
  }
});
Meteor.publish('tasks', function() {
  if (isLoggedIn()) {
    return Tasks.find();
  } else {
    this.ready();
  }
});

Meteor.publish("allUsers", function () {
  if (isLoggedIn()) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});

