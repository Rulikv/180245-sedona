var search = document.querySelector(".hotel-search-form");
var form = document.querySelector(".popup-form");

var checkIn = document.querySelector("[name=checkin-date]");
var checkOut = document.querySelector("[name=checkout-date]");
var adults = document.querySelector("[name=number-adults]");
var children = document.querySelector("[name=number-children]");

var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");

var submit = document.querySelector(".popup-form");

search.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("popup-form-hidden");

	if (form.classList.contains("popup-form-visible")) {
		form.classList.remove("popup-form-visible");
		form.classList.add("popup-form-hidden");
	} else {
		form.classList.remove("popup-form-hidden");
		form.classList.add("popup-form-visible");
}
});

submit.addEventListener("submit", function(event) {
	if (!checkIn.value || !checkOut.value || !adults.value || !children.value) {
		event.preventDefault();
		alert("Пожалуйста, введите даты заезда и отъезда, а также количество гостей");
	} else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
	}
});
