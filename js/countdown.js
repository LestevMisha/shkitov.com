document.addEventListener("DOMContentLoaded", () => {
    var countDownDate = new Date();
    var currentTime = new Date();
    const isTimed = localStorage.getItem("isTimed");
    if (!isTimed) {
        countDownDate.setDate(currentTime.getDate() + 13);
        localStorage.setItem("countDownDate", countDownDate.getTime());
        localStorage.setItem("isTimed", true);
    } else {
        countDownDate.setTime(parseInt(localStorage.getItem("countDownDate")));
    }

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        if (distance < 0) {xw
            countDownDate.setDate(currentTime.getDate() + 13);
            distance = countDownDate - now;
            localStorage.setItem("countDownDate", countDownDate.getTime());
        }

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Russian names for days, hours, minutes, and seconds
        var daysString = days === 1 ? "день" : days < 5 ? "дня" : "дней";
        var hoursString = hours === 1 ? "час" : hours < 5 ? "часа" : "часов";
        var minutesString = minutes === 1 ? "минута" : minutes < 5 ? "минуты" : "минут";
        var secondsString = seconds === 1 ? "секунда" : seconds < 5 ? "секунды" : "секунд";

        // Display the result in the element with id="countdown"
        document.getElementById("days_number").innerHTML = days;
        document.getElementById("hours_number").innerHTML = hours;
        document.getElementById("minutes_number").innerHTML = minutes;
        document.getElementById("seconds_number").innerHTML = seconds;

        document.getElementById("days").innerHTML = daysString;
        document.getElementById("hours").innerHTML = hoursString;
        document.getElementById("minutes").innerHTML = minutesString;
        document.getElementById("seconds").innerHTML = secondsString;

    }, 1000)
});
