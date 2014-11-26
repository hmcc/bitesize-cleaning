Template.completeSignup.events({
  "submit .form-complete-signup": function(event, template) {
    event.preventDefault();

    var username = template.find("#complete-signup-username").value;
    var cleaningTime = template.find("#complete-signup-cleaning-time").value;
    var token = this.token;

    Accounts.resetPassword(
      token,
      template.find("#complete-signup-password").value,
      function(error) {
        if (error) {
          console.log(error);
        } else {
          var user = Meteor.user();
          Meteor.call('completeUser', username, cleaningTime);
          Router.go('backlogList');
        }
      }
    );
  }
});
