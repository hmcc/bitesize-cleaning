Meteor.publish('backlog', function() {
  return Backlog.find();
});
Meteor.publish('houses', function() {
  return Houses.find();
});
Meteor.publish('tasks', function() {
  return Tasks.find();
});
Meteor.publish('users', function() {
  return Users.find();
});
