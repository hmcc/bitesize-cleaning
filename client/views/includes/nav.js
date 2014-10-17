Template.nav.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  },

  displayName: function(template) {
    var user = Meteor.user();

    if (!user)
      return '';
    if (user.profile && user.profile.name)
      return user.profile.name;
    if (user.username)
      return user.username;
    if (user.emails && user.emails[0] && user.emails[0].address)
      return user.emails[0].address;

      return '';
  }
});
