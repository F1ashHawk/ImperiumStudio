var buttons = document.querySelectorAll(".photo-carusel-link");

for (var button of buttons) {
    button.addEventListener('click', function() {
        buttons.forEach(i => i.classList.remove('photo-carusel-link-active'));

        this.classList.toggle('photo-carusel-link-active');
    });
};

const testimonials = document.querySelector('.slider-wrapper');
const scroller = document.querySelector('.slider__items');
const nextBtn = document.querySelector('.slider-btn-next');
const prevBtn = document.querySelector('.slider-btn-prev');
const itemWidth = document.querySelector('.slider__item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
    // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    else
    // Достигнут последний элемент. Возвращаемся к первому элементу, установив для позиции прокрутки 0
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
    // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    else
    // Это первый элемент. Переходим к последнему элементу, установив для позиции прокрутки ширину скроллера
        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
}

$(function() {
    var $videoContainer = $('#video'),
        $videoControls = $('.video-control'),
        $video = $('#myVideo')[0];

    $videoControls.click(function() {
        if ($video.paused) {
            $video.play();
            $videoContainer.addClass('video-is-playing');
        } else {
            $video.pause();
            $videoContainer.removeClass('video-is-playing');
            //  возвращаем постер
            $video.load();
        }
    });
});