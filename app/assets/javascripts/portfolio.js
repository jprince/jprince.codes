$(document).ready(function(){
  // Project Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    onCycleTo: function(data) {
      // shows the details for the active project
      $('.project-details').each(function(index) {
          $(this).removeClass('hide');
          if (index != data.index()) {
            $(this).addClass('hide');
          }
      });
    }
  });
  $('.previous-icon').click(function() {
    $('.carousel').carousel('prev');
  });
  $('.next-icon').click(function() {
    $('.carousel').carousel('next');
  });

  // Project Details
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  // Project Gallery
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
});