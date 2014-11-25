Template.completeSignup.events({
  "submit .form-complete-signup": function(event, template) {
    event.preventDefault();

    console.log(this.token);
    console.log(template.find("#complete-signup-username").value);
  }
});
