Template.usersList.helpers({
  houses: function() {
    return Houses.find();
  },
  users: function() {
    return Users.find();
  }
});
