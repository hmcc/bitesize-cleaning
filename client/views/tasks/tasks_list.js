var tasksData = [
  {
    title: 'Hoover downstairs',
    time: '10 minutes',
    user: 'heather'
  }, 
  {
    title: 'Clean downstairs bathroom',
    time: '15 minutes',
    user: 'heather'
  }, 
  {
    title: 'Clean kitchen sink',
    time: '5 minutes',
    user: 'dave'
  }
];
Template.tasksList.helpers({
  tasks: tasksData
});
