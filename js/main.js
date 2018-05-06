$('.close').on('click', function () {
  console.log('clicked');
  $(this).parent().addClass('hidden');
});

// Nav Mobile --------------------

$('.nav-label').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('nav-label-open');
  $('.nav-wrap').toggleClass('nav-open');
});

$('.skip-links [href="#nav-start" ]').on('click', function () {
  $('.nav-label').toggleClass('nav-label-open');
  $('.nav-wrap').toggleClass('nav-open');
});
