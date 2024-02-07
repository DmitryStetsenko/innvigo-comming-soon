$(($) => {
	countDownStart(new Date(2024, 3, 1), false, true);

});

function countDownStart(ts, isCallback, hide = false) {
	if (hide) {
		return;
	}

	const cdProps = {};
	const noteEl = isCallback ? $('#note') : null;
	const countdownEl = $('#countdown');
	let newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}

	cdProps.timestamp = ts;
	if (isCallback) {
		cdProps.callback = cdCallback;
	}
		
	countdownEl.countdown(cdProps);

	function cdCallback(days, hours, minutes, seconds) {
		let message = "";
				
				message += days + " day" + ( days==1 ? '':'s' ) + ", ";
				message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
				
				if(newYear){
					message += "left until the new year!";
				}
				else {
					message += "left to 10 days from now!";
				}
				
				noteEl.html(message);
	}
}