
console.log('hello, frontend!');
//Clock rotation calc

//set in action motion


//current time


const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

/*The first argument is a callback function - it gets triggered every 1000 milliseconds (1 second), which is the second argument.*/
setInterval(clockStart, 1000);


function clockStart() {
	let currentDate = new Date();
	const secondsR = currentDate.getSeconds() / 60;
	const minutesR = currentDate.getMinutes() / 60;
	const hoursR = currentDate.getHours() / 12;



	secondHand.style.transform = "rotate(" + (secondsR * 360) + "deg)";
	minuteHand.style.transform = "rotate(" + (minutesR  * 360) + "deg)";
	hourHand.style.transform = "rotate(" + (hoursR * 360) + "deg)";
}



clockStart();

/*Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:*/

/*
var degrees = 45;
var el = document.getElementById("myElement");
el.style.transform = "rotate(" + degrees + "deg)";

*/
/*It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!*/

/*
secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360

*/

/*Make sure to use the setInterval function to make a ticking function!*/

/*
setInterval(function(){
    console.log("TICK!");
 }, 1000);
*/


