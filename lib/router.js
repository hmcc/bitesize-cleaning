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
  except: ['login']
}); 

Router.map(function() {
  this.route('login', {
    layoutTemplate: 'loginLayout',
    path: '/login',
    onBeforeAction: function (pause) {
      if (Meteor.user()) {
        Meteor.logout();
      }
    }
  });
});

Router.map(function() {
  this.route('backlogList', {
    path: '/backlog',
    waitOn: function() { return Meteor.subscribe('backlog');}
  });
});
Router.map(function() {
  this.route('tasksList', {
    path: '/',
    waitOn: function() { return Meteor.subscribe('tasks');}
  });
});
Router.map(function() {
  this.route('usersList', {
    path: '/users',
    waitOn: function() { return [Meteor.subscribe('houses'), Meteor.subscribe('allUsers')];}
  });
});
Router.onBeforeAction('loading');
