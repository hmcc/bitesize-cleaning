Template.login.events({
  "submit .form-login": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          console.log(error);
          Router.go('login');
        } else {
          Router.go('backlogList');
        }
      }
    );
  }
});
