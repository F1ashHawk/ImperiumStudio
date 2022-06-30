// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("about-slider__item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     // dots[slideIndex - 1].className += " active";
// }

$('.about-slider-list').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
})

  $('.responsive').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
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

document.getElementById('header-burger').addEventListener('click', function(){
    document.getElementById('burger-form-background').classList.remove('burger-form-background-close')
})

document.getElementById('close-burger').addEventListener('click', function(){
    document.getElementById('burger-form-background').classList.add('burger-form-background-close')
})

$('input[name="calc-hour-day"],input[name="calc-day-week"],input[name="calc-earn-for"]').bind('input',calcAndShow);

function calcAndShow(){
    var hours = parseFloat($('input[name="calc-hour-day"]:checked').val());
    var day = parseFloat($('input[name="calc-day-week"]:checked').val());
    var earn = parseFloat($('input[name="calc-earn-for"]:checked').val());

    $('#summ').html('$'+8*hours*day*earn)
}