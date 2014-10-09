Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('tasks'); }
});
Router.map(function() {
  this.route('tasksList', {path: '/'});
});
Router.onBeforeAction('loading');
