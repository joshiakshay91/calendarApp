
Given a set of events, render the events on a single day calendar (similar to Outlook, Calendar.app, and Google Calendar). There are several properties of the layout:

1) No events may visually overlap.
2) If two events collide in time, they must have the same width.
3) An event should utilize the maximum width available, but constraint 2) takes precedence over this constraint.
Each event is represented by a JS object or a PHP Array with a start and end attribute or key. The value of these attributes is the number of minutes since 9am. So {start:30, end:90) represents an event from 9:30am to 10:30am. The events should be rendered in a container that is 620px wide (600px + 10px padding on the left/right) and 720px (the day will end at 9pm).

You may structure your code however you like, but you must implement the following function. The function takes in an array of events and will lay out the events according to the above description.

function layOutDay(events) {}

Here is the data to work with:
Javascript:
FYI, if you choose Javascript option you can rename index.php to index.html
var testData = [{start:  30, end: 90}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}];

Php:
$testData = array(
	array('start' =>  30, 'end' => 90),
	array('start' => 540, 'end' => 600),
	array('start' => 560, 'end' => 620),
	array('start' => 610, 'end' => 670),
);

Please refer to the quiz.png
https://www.dropbox.com/s/fulr1pgrgouhizz/quiz.png?dl=0

Here are some frequently asked questions: 
1. Are frameworks such as JQuery, MooTools, etc. allowed? Yes, but please include the file with your source code. 
2. Can I use PHP, Python, Ruby on Rails?  You can use any web technogies you would like.  You can change the index.html to any file extension that your server will allow.
3. Is there a maximum bound on the number of events? You can assume a maximum of 100 events for rendering reasons, but your solution should be generalized. 
4. What browsers need to be supported? Your solution should work on all modern standards-compliant browsers.
5. Does my solution need to match the image pixel for pixel? No, we will not be testing for pixel matching.

 
