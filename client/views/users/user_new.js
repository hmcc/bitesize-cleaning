Template.userNew.events({
  'submit .form-new-user': function(event, template) {
    

    var options = {
      email:     template.find("#new-user-email").value,
      household: Meteor.user().household,
    }

    Meteor.call('newUser', options, function(error, data) {
      if (error) {
        console.log(error);
      } else {
        Accounts.sendEnrollmentEmail(data)
      }
      Router.go('userList');
    });
  }
});
