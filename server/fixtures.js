if (Tasks.find().count() === 0) {
  Tasks.insert({
    title: 'Hoover downstairs',
    time: '10 minutes',
    user: 'heather'
  });

  Tasks.insert({
    title: 'Clean downstairs bathroom',
    time: '15 minutes',
    user: 'heather'
  });

  Tasks.insert({
    title: 'Clean kitchen sink',
    time: '5 minutes',
    user: 'dave'
  });
}
