import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Debounce the function with 500 ms delay
const debouncedCounter = _.debounce(updateCounter, 500);

// Bind the debounced function to the button click
$('button').on('click', debouncedCounter);
