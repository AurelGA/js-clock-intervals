
console.log('hello, frontend!')
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


/*
//constraints
const INTERVAL_DELAY = 1000
const SHOW_REAL_TIME = false
const RADIUS = 360

//time divisions

const SIM = 60
const SIH = 60 * SIM
const SI_12 = 12 * SIH

//time measure

let time = 0

//tick function
const tick = () => {
	console.log('tick, time')
	time++
}

//Clock rotation calc

//set in action motion
document.addEventListener('DOMContentLoaded', () => {
	setInterval(tick, INTERVAL_DELAY)

})
*/