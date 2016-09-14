$(document).ready(function() {
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-overlay').show('slow');
  });
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-content-login').show('slow');
  });
  $('.animated').on('mouseover', function() {
    $(this).addClass('pulse');
  }).on('mouseleave', function() {
    $(this).removeClass('pulse');
  });
  $('.modal-overlay').click(function() {
    $(this).hide('slow'),
      $('.modal-content-login').hide('slow');
  });
  $('.modal-content-close').click(function() {
    $('.modal-overlay').hide('slow'),
      $('.modal-content-login').hide('slow');
  });
});
