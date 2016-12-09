

var dayofweek = prompt('Please type a day of the week.');
var animal = prompt('Please name an animal.');
var verb = prompt('Please type a verb.');
var city = prompt('Please name a city.');
var season = prompt('Plase name a season of the year.');
var occupation = prompt('Plase name an occupation.');

var story = '<h2>Every ' + dayofweek;
story += ' I wake up and have a great conversation with a ' + animal;
story += '.  Afterwards I ' + verb ;
story += ' for 6 hours and think of visiting ' + city + ' during the ' + season + ' time. And thats how I became a professional ' + occupation + '.</h2>';
alert('Story Time!');

document.write(story);
