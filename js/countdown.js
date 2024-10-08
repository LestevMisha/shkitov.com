document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("October 28, 2024 14:00:00 GMT+0300");

    const isTimed = localStorage.getItem("isTimed");
    if (!isTimed) {
        localStorage.setItem("targetDate", targetDate.getTime());
        localStorage.setItem("isTimed", true);
    } else {
        targetDate.setTime(parseInt(localStorage.getItem("targetDate")));
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(() => {
        // Get the current date and time
        const now = new Date().getTime();

        // Find the distance between now and the target date
        const distance = targetDate - now;

        if (distance <= 0 || distance == NaN) {
            const default_ = "00";
            document.getElementById("days_number").innerHTML = default_;
            document.getElementById("hours_number").innerHTML = default_;
            document.getElementById("minutes_number").innerHTML = default_;
            document.getElementById("seconds_number").innerHTML = default_;

            document.getElementById("days").innerHTML = "дней";
            document.getElementById("hours").innerHTML = "часов";
            document.getElementById("minutes").innerHTML = "минут";
            document.getElementById("seconds").innerHTML = "секунд";

            localStorage.clear();
            clearInterval(countdownInterval);
        } else {
            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Russian names for days, hours, minutes, and seconds
            const daysString = days === 1 ? "день" : days < 5 ? "дня" : "дней";
            const hoursString = hours === 1 ? "час" : hours < 5 ? "часа" : "часов";
            const minutesString = minutes === 1 ? "минута" : minutes < 5 ? "минуты" : "минут";
            const secondsString = seconds === 1 ? "секунда" : seconds < 5 ? "секунды" : "секунд";

            // Display the result in the element with the corresponding IDs
            document.getElementById("days_number").innerHTML = days;
            document.getElementById("hours_number").innerHTML = hours;
            document.getElementById("minutes_number").innerHTML = minutes;
            document.getElementById("seconds_number").innerHTML = seconds;

            document.getElementById("days").innerHTML = daysString;
            document.getElementById("hours").innerHTML = hoursString;
            document.getElementById("minutes").innerHTML = minutesString;
            document.getElementById("seconds").innerHTML = secondsString;
        }
    }, 1000);
});
