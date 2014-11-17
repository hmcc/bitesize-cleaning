Template.login.events({
  "submit .form-login": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          $(template.find(".error")).removeClass('hidden');
          Router.go('login');
        } else {
          Router.go('backlogList');
        }
      }
    );
  }
});
