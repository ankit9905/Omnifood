

$(document).ready(function(){

    $('.preloader').fadeOut('slow');
    
    /*STicky Navigation */


    $('#features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }

    },{
        offset:'60px;'
    });
    /*Scroll to Buttons */
    $('#scroll-plans').click(function(){
        $('html,body').animate({scrollTop:$('#plans').offset().top},1000);
    });

    $('#scroll-features').click(function(){
        $('html,body').animate({scrollTop:$('#features').offset().top},1000);
    });
     
    /* Navigation Scroll */
    // $(function(){
    //     $('a[href*=#]:not([href=#])').click(function(){
    //         if(location.pathname.replace(/^\//,''))
    //     })
    // })

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* Animate on Scroll */
 $('.js--wp-1').waypoint(function(direction){
     $('.js--wp-1').addClass('animate__animated animate__fadeIn')
 },{
     offset:'50%'
 })
 $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
},{
    offset:'50%'
})
$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animate__animated animate__fadeIn')
},{
    offset:'50%'
})
$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animate__animated animate__pulse')
},{
    offset:'50%'
})

/*Mobile Nav */
$('.js--nav-icon').click(function(){
    var nav=$('.js--main-nav');
    var icon=$('.js--nav-icon ion-icon');
    nav.slideToggle(200);
    if(icon.attr("name")=="reorder-three-outline")
    icon.attr("name","close-outline");
    else
    icon.attr("name","reorder-three-outline");

})

// $(window).load(function() {
//     $('.preloader').fadeOut('slow');
//  });


});


