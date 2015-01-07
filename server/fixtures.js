if (Tasks.find().count() === 0) {
  Tasks.insert({
    title: 'Hoover downstairs',
    time: 10,
    date: [new Date('2015-01-05'), new Date('2014-01-09')]
  });

  Tasks.insert({
    title: 'Downstairs toilet',
    time: 10,
    date: [new Date('2015-01-05')]
  });

  Tasks.insert({
    title: 'Take out rubbish',
    time: 10,
    date: [new Date('2015-01-06')]
  });

  Tasks.insert({
    title: 'Empty bins',
    time: '10 minutes',
    date: [new Date('2015-01-06')]
  });

  Tasks.insert({
    title: 'Rufus bedding change',
    time: 5,
    date: [new Date('2015-01-07')]
  });

  Tasks.insert({
    title: 'Empty bathroom bin',
    time: 5,
    date: [new Date('2015-01-07')]
  });

  Tasks.insert({
    title: 'Hoover upstairs',
    time: 10,
    date: [new Date('2015-01-08')]
  });


  Tasks.insert({
    title: 'Upstairs bathroom',
    time: '15 minutes',
    date: [new Date('2015-01-08')]
  });


  Tasks.insert({
    title: 'Oven',
    time: '15 minutes',
    date: [new Date('2015-01-10')]
  });

  Tasks.insert({
    title: 'Fridge',
    time: '15 minutes',
    date: [new Date('2015-01-11')]
  });
}

