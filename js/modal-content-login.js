$(document).ready(function() {
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-overlay').show();
  });
  $('.login').click(function() {
    event.preventDefault();
    $('.modal-content-login').fadeTo('slow', 1);
  });
  $('.modal-overlay').click(function() {
    $('.modal-overlay').hide(),
      $('.modal-content-login').fadeTo('slow', 0);
  });
  $('.modal-content-close').click(function() {
    $('.modal-overlay').hide(),
      $('.modal-content-login').fadeTo('slow', 0);
  });
});
