/*********************************************************\
 Uilites for formatting strings, date object. 
\*********************************************************/

const DateFormat = {
	dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
	monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
	getDayName: (dayNum) => {
		return DateFormat.dayNames[dayNum];
	},
	getMonthName: (monthNum) => {
		return DateFormat.dayNames[monthNum];
	},
	getDateString: (dateObj) => {
		return `${DateFormat.getDayName(dateObj.getDay())}, ${DateFormat.getMonthName(dateObj.getMonth())} ${dateObj.getDate()} ${dateObj.getFullYear()}`;
	},
	getTimeString: (dateObj) => {
		let hours = dateObj.getHours();
		if(hours === 0)
			hours = 12;
		else if (hours > 12)
			hours -= 12;
		return `${hours}:${dateObj.getMinutes()}`
	}


}

const StringFormat = {
	capitalize: (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1,word.length);
	}
}

export {DateFormat, StringFormat}


