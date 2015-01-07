Template.home.helpers({
  today: function(template) {
    return new Date().toDateString();
  },
  tasks: function() {
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return Tasks.find({date: today});
  }
});
