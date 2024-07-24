document.addEventListener("DOMContentLoaded", function () {

    // Swiper
    const swiper = new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slideActiveClass: "active",
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        pagination: {
            el: ".pagination",
            clickable: true
        },
        autoplay: {
            enabled: true,
            delay: 5000
        },
        // Media
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });

    // Buttons' action
    const butttons = document.querySelectorAll(".b-btn");
    butttons.forEach((button) => {
        button.addEventListener("click", function () {
            document.location.href = "https://t.me/+FiKtrMXIWPQ5OWVi";
        })
    });

});