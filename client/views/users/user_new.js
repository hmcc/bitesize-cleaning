Template.userNew.events({
  'submit .form-new-user': function(event, template) {
    event.preventDefault();

    var options = {
      email:     template.find("#new-user-email").value,
      household: Meteor.user().household,
    }

    Meteor.call('newUser', options, function(error, data) {
      if (error) {
        var $error = $(template.find(".error"));
        $error.text(error.reason || $error.text());
        $error.removeClass('hidden');
      }
    });
  }
});
