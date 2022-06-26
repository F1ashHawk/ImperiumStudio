var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("about-slider__item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}

// function() {
//     var $videoContainer = $('#video'),
//         $videoControls = $('.video-control'),
//         $video = $('#myVideo')[0];

//     $videoControls.click(function() {
//         if ($video.paused) {
//             $video.play();
//             $videoContainer.addClass('video-is-playing');
//         } else {
//             $video.pause();
//             $videoContainer.removeClass('video-is-playing');
//             //  возвращаем постер
//             $video.load();
//         }
//     });
// };

// $('.multiple-items').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
// });

document.getElementById('start-form-open').addEventListener('click',function(){
    document.getElementById('start-form-overlay').classList.remove('start-form-overlay-close')
})

document.getElementById('close-start-form-button').addEventListener('click',function(){
    document.getElementById('start-form-overlay').classList.add('start-form-overlay-close')
})

// document.getElementById('start-form-overlay').addEventListener('click',function(){
//     document.getElementById('start-form-overlay').classList.add('start-form-overlay-close')
// })

$('input[name="calc-hour-day"],input[name="calc-day-week"],input[name="calc-earn-for"]').bind('input',calcAndShow);

function calcAndShow(){
    var hours = parseFloat($('input[name="calc-hour-day"]:checked').val());
    var day = parseFloat($('input[name="calc-day-week"]:checked').val());
    var earn = parseFloat($('input[name="calc-earn-for"]:checked').val());

    $('#summ').html('$'+8*hours*day*earn)
}