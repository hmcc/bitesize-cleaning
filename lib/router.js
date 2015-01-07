Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.onBeforeAction(function() {
  if (!Meteor.user() && this.ready()) {
    return this.redirect('/login');
  }
}, 
{
  except: ['login', 'signup', 'completeSignup', 'tokenExpired']
});

var logoutFn = function() {
  if (Meteor.user()) {
    Meteor.logout();
  }
}

Router.map(function() {
  this.route('login', {
    layoutTemplate: 'loginLayout',
    path: '/login',
    onBeforeAction: logoutFn
  });
});

Router.map(function() {
  this.route('signup', {
    layoutTemplate: 'loginLayout',
    path: '/signup',
    onBeforeAction: logoutFn
  });
});

Router.map(function() {
  this.route('completeSignup', {
    layoutTemplate: 'loginLayout',
    path: '/complete-signup/:_token',
    data: function() { return {token: this.params._token}; },
    onBeforeAction: logoutFn
  });
});

Router.map(function() {
  this.route('tokenExpired', {
    layoutTemplate: 'loginLayout',
    path: '/token-expired',
    onBeforeAction: logoutFn
  });
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() { return Meteor.subscribe('tasks');}
  });
});

Router.map(function() {
  this.route('usersList', {
    path: '/users',
    waitOn: function() { return Meteor.subscribe('allUsers');}
  });
});
Router.onBeforeAction('loading');
