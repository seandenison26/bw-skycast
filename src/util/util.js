export DateFormat = {
	dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
	
	getDayName: (dayNum) => {
		return dayNames[dayNum];
	},
}

export WordFormat = {
	capitalize: (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1,word.length);
	}
}




