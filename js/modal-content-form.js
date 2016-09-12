$(document).ready(function() {
  $('.login').click(function() {
    $('.modal-overlay').show();
  });
  $('.login').click(function() {
    $('.modal-content-form').fadeTo('slow', 1);
  });
  $('.modal-overlay').click(function() {
      $('.modal-overlay').hide(),
      $('.modal-content-form').fadeTo('slow', 0);
    });
    $('.modal-content-close').click(function() {
    $('.modal-overlay').hide(),
    $('.modal-content-form').fadeTo('slow', 0);
  });
});
