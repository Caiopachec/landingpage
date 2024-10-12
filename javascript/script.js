$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');  // Corrigido para adicionar o #
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
      const header = $('header');
      
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSecctionIndex = 0;

      if (scrollPosition<= 0 ) {
        header.css('box-shadow', 'none');
      }else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.2)');            
     }

sections.each(function(i){
    const section = $(this);
    const sectionTop = section.offset().top - 96;
    const sectionBottom = sectionTop+ section.outerHeight();

    if (scrollPosition >= sectionTop && sectionPosition < sectionBottom){
        activeSecctionIndex = i;
        return false;
    }
})
navItems.removeClass('active');
 $(navItems[activeSecctionIndex]).addClass('active');

    })

    scrollReveal().reveal('#cta', {
        origin: 'left' ,
        duration: 2000,
        distance: '20%'
    });

    scrollReveal().reveal('.dish', {
        origin: 'left' ,
        duration: 2000,
        distance: '20%'
    });

});
