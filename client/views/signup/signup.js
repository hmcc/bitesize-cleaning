Template.signup.events({
  "submit .form-signup": function(event, template) {
    event.preventDefault();

    var user = {
      username: template.find("#signup-username").value,
      email:    template.find("#signup-email").value,
      password: template.find("#signup-password").value,
      cleaning_time: template.find("#signup-cleaning-time").value,
      profile: {
        name: template.find("#signup-username").value,
      }
    }

    Meteor.call('newUser', user, function(error) {
      if (error) {
        console.log(error);
        Router.go('signup');
      } else {
        Meteor.loginWithPassword(
          user.username,
          user.password,
          function(loginError) {
            if (loginError) {
              console.log(loginError);
              Router.go('login');
            } else {
              Router.go('backlogList');
            }
          }
        );
      }
    });
  }
});
