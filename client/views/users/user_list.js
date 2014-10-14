Template.usersList.helpers({
  houses: function() {
    return Houses.find();
  },
  users: function() {
    return Meteor.users.find();
  }
});
