$(document).ready(function() {
  $('.popup-map').click(function() {
    $('.modal-overlay').show('slow');
  });
  $('.popup-map').click(function() {
    $('.modal-content-map').show('slow');
  });
  $('.modal-overlay').click(function() {
    $('.modal-overlay').hide('slow'),
      $('.modal-content-map').hide('slow');
  });
  $('.modal-content-close').click(function() {
    $('.modal-overlay').hide('slow'),
      $('.modal-content-map').hide('slow');
  });
});
