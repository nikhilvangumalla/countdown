const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const formatTime = (time) => (time < 10 && time > 0 ? `0${time}` : time);

const countdownDate = "1 oct 2020";
const countdownTime = "9:30:00";

const date = new Date(`${countdownDate} ${countdownTime}`);

const countdown = () => {
	const currentTime = new Date();
	const remainingTotalSeconds = Math.floor((date - currentTime) / 1000);

	if (remainingTotalSeconds > 0) {
		const remainingDays = Math.floor(remainingTotalSeconds / (60 * 60 * 24));
		const remainingHours = Math.floor(remainingTotalSeconds / 3600) % 24;
		const remainingMinutes = Math.floor((remainingTotalSeconds / 60) % 60);
		const remainingSeconds = remainingTotalSeconds % 60;

		days.innerHTML = formatTime(remainingDays);
		hours.innerHTML = formatTime(remainingHours);
		minutes.innerHTML = formatTime(remainingMinutes);
		seconds.innerHTML = formatTime(remainingSeconds);
	} else {
		const body = document.querySelector("body");
		body.innerHTML = `<div class='countdown-done'>Countdown over <br />set NEW countdown</div>`;
	}
};

countdown();

setInterval(countdown, 1000);
