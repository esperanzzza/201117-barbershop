$(document).ready(function() {
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-overlay').show('slow');
  });
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-content-login').show('slow');
  });
  $('.modal-overlay').click(function() {
    $('.modal-overlay').hide('slow'),
      $('.modal-content-login').hide('slow');
  });
  $('.modal-content-close').click(function() {
    $('.modal-overlay').hide('slow'),
      $('.modal-content-login').hide('slow');
  });
});
