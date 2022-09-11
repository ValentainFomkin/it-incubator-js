function dayOfTheWeek(date) {
  let days = [
    'Monday ',
    'Tuesday ',
    'Wednesday',
    'Thursday ',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return new Date(date.split('/').reverse().join('-')).toLocaleString('en-us', {
    weekday: 'long',
  });
}
