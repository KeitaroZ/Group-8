$( document ).ready(function(){
    $('.logosm').hide();
    $('.membersm').hide();
  });
                      
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
        $('.logosm').show();
        $('.membersm').show();
      }
      
      else {
         $('nav').removeClass('fixed-header');
        $('.logosm').hide();
        $('.membersm').hide();
        
      }
  });
  /* scrollTop() >= 240
     Should be equal the the height of the header
   */