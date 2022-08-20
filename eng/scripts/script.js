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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }
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


document.getElementById('start-form-open').addEventListener('click', function () {
  document.getElementById('start-form-overlay').classList.remove('start-form-overlay-close')
})

document.getElementById('close-start-form-button').addEventListener('click', function () {
  document.getElementById('start-form-overlay').classList.add('start-form-overlay-close')
})

document.getElementById('header-burger').addEventListener('click', function () {
  document.getElementById('burger-form-background').classList.remove('burger-form-background-close')
})

document.getElementById('close-burger').addEventListener('click', function () {
  document.getElementById('burger-form-background').classList.add('burger-form-background-close')
})




$('input[name="calc-hour-day"],input[name="calc-day-week"],input[name="calc-earn-for"]').bind('input', calcAndShow);

function calcAndShow() {
  var hours = parseFloat($('input[name="calc-hour-day"]:checked').val());
  var day = parseFloat($('input[name="calc-day-week"]:checked').val());
  var earn = parseFloat($('input[name="calc-earn-for"]:checked').val());

  $('#summ').html('$' + 8 * hours * day * earn)
}

const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;


      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('anim-active');
      } else {
        animItem.classList.remove('anim-active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}



var sections = $('section'),
nav = $('.page-nav-ul'),
burger = $('.burger-nav-menu-ul')
burger_section= $('.burger-section-list')
burger_height = burger.outerHeight();
nav_height = nav.outerHeight();

$(window).on('scroll', function(){
  var cur_pos = $(this).scrollTop();

  sections.each(function(){
    var top =$(this).offset().top - nav_height -200,
    bottom = top +$(this).outerHeight();

    if(cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('page-nav-link-active');
      burger.find('a').removeClass('burger-nav-menu-a-active');
      sections.removeClass('active');

      $(this).addClass('active');

      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('page-nav-link-active');
      burger.find('a[href="#'+$(this).attr('id')+'"]').addClass('burger-nav-menu-a-active');
    }
  })
});

nav.find('a').on('click', function(){
  var $el = $(this),
  id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height + 350 
  }, );

  return false;
})

burger.find('a').on('click', function(){
  var $el = $(this),
  id = $el.attr('href');
  document.getElementById('burger-form-background').classList.add('burger-form-background-close')
  $('html, body').animate({
    scrollTop: $(id).offset().top - burger_height +300
  }, );
  return false;
})

burger_section.find('a').on('click', function(){
  var $el = $(this),
  id = $el.attr('href');
  document.getElementById('burger-form-background').classList.add('burger-form-background-close')
  $('html, body').animate({
    scrollTop: $(id).offset().top - burger_height + 300
  }, );
  return false;
  
})


document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form-start');
  form.addEventListener('submit', formSend);
  async function formSend(e){
    e.preventDefault();
    
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      let responce = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if(responce.ok){
        let result = await responce.json();
        alert(result.message);
        form.reset();
      }else{
        alert('Error when sending. Try again later.')
      }
    }
    else {
      alert("Fill in the required fields");
    }
  }

  function formValidate(e) {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let i=0; i<formReq.length; i++){
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_phone-number')){
        if (numberTest(input)){
          formAddError(input);
          error++;
        }
      }
      // else if(input.classList.contains('start-numb')){
      //   if (oldTest(input)){
      //     formAddError(input);
      //     error++;
      //   }
      // }
      else if(input.classList.contains('contact-network')){
        if (contactTest()){
          formAddError(input);
          error++;
        }
      }
      else {
        if (input.value === ''){
          formAddError(input);
          error++;
        }
      }

    }
    return error
  }

  function formAddError(input){
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }
  function numberTest(input){
    return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
  }
  function oldTest(input){
    if (input.value < 18){
      return true
    }
  }
  function contactTest(){
    contactInput = document.querySelectorAll('.contact-network');
    er = 0;
    for (let i =0; i<contactInput.length; i++){
      if (contactInput[i].value === ''){
        er++;
      }
    }
    if (er == 2){
      return true;
    }
    else{
      return false;
    }
  }
})