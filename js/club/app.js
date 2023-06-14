const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 4,
    centeredSlides: true,
    initialSlide: 0,
    height: 200,
    loop: true,
    spaceBetween: 1,
    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("offer");

// Get the <span> element that closes the yookassa_modal
var spans = document.getElementsByClassName("close");


// When the user clicks the button, open the modal
for (var i = 0; btns.length > i; i++) {
    btns[i].onclick = function () {
        modal.style.display = "block";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var yookassa_modal = document.getElementById("yookassa_modal");

// Get the button that opens the yookassa_modal
var buy_btns = document.getElementsByClassName("buy_btns_for_js");

// When the user clicks the button, open the yookassa_modal
for (var i = 0; buy_btns.length > i; i++) {
    buy_btns[i].onclick = function () {
        yookassa_modal.style.display = "block";
    }
}

// When the user clicks anywhere outside of the yookassa_modal, close it
window.onclick = function (event) {
    if (event.target == yookassa_modal) {
        yookassa_modal.style.display = "none";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; spans.length > i; i++) {
    spans[i].onclick = function () {
        modal.style.display = "none";
        yookassa_modal.style.display = "none";
    }
}