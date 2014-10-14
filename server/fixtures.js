if (Backlog.find().count() === 0) {
  Backlog.insert({
    title: 'Hoover downstairs',
    time: '10 minutes',
    user: 'heather'
  });

  Backlog.insert({
    title: 'Clean downstairs bathroom',
    time: '15 minutes',
    user: 'heather'
  });

  Backlog.insert({
    title: 'Clean kitchen sink',
    time: '5 minutes',
    user: 'dave'
  });
}

if (Houses.find().count() === 0) {
  Houses.insert({
    address: '79 Heworth Green',
  });

  Tasks.insert({
    title: 'Clean kitchen sink',
    time: '5 minutes',
    user: 'dave'
  });
}

if (Tasks.find().count() === 0) {
  Tasks.insert({
    title: 'Hoover downstairs',
    time: '10 minutes',
    user: 'heather'
  });

  Tasks.insert({
    title: 'Clean kitchen sink',
    time: '5 minutes',
    user: 'dave'
  });
}

