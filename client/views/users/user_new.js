Template.userNew.events({
  'submit .form-new-user': function(event, template) {
    event.preventDefault();

    var options = {
      email:     template.find("#new-user-email").value,
      household: Meteor.user().household,
    }

    Meteor.call('newUser', options, function(error, data) {
      if (error) {
        errorHandler.showError(template, error);
      }
    });
  }
});
