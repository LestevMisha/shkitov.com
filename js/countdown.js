document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("June 22, 2023"); // Replace "June 22, 2023" with your desired target date

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

        if (distance < 0) {
            targetDate.setDate(targetDate.getDate() + 1);
            targetDate.setHours(0, 0, 0, 0);
            localStorage.setItem("targetDate", targetDate.getTime());
        }

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

    }, 1000);
});
