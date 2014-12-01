Template.signup.events({
  "submit .form-signup": function(event, template) {
    event.preventDefault();

    var options = {
      username: template.find("#signup-username").value,
      email: template.find("#signup-email").value,
      password: template.find("#signup-password").value,
      cleaning_time: template.find("#signup-cleaning-time").value,
      week_start: template.find("#signup-week-start").value,
      profile: {
        name: template.find("#signup-username").value,
      }
    }

    Meteor.call('newUser', options, function(error) {
      if (error) {
        console.log(error);
        Router.go('signup');
      } else {
        Meteor.loginWithPassword(
          options.username,
          options.password,
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
