$(document).ready(function() {
  $('.login').click(function() {
    $('.modal-overlay').show();
  });
  $('.login').click(function() {
    $('.modal-content-login').fadeTo('slow', 1);
  });
  $('.modal-overlay').click(function() {
    $(this).hide(),
      $('.modal-content-login').fadeTo('slow', 0);
  });
  $('.modal-content-close').click(function() {
    $('.modal-overlay').hide(),
      $('.modal-content-login').fadeTo('slow', 0);
  });
});
