function showCountryTime(event) {
	if (event.target.value === "london") {
		let londonTime = moment()
			.tz("Europe/London")
			.format("dddd, MMMM D, YYYY h:m A");
		alert(`It is ${londonTime} in Europe/London`);
	}
	if (event.target.value === "rome") {
		let romeTime = moment()
			.tz("Europe/Rome")
			.format("dddd, MMMM D, YYYY h:m A");
		alert(`It is ${romeTime} in Europe/Rome`);
	}
	if (event.target.value === "tokyo") {
		let tokyoTime = moment()
			.tz("Asia/Tokyo")
			.format("dddd, MMMM D, YYYY h:m A");
		alert(`It is ${tokyoTime} in Asia/Tokyo`);
	}
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showCountryTime);
