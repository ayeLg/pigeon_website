$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })



    let nCount = selector => {
        $(selector).each(function () {
          $(this)
            .animate({
              Counter: $(this).text()
            }, {
              // A string or number determining how long the animation will run.
              duration: 4000,
              // A string indicating which easing function to use for the transition.
              easing: "swing",
              /**
               * A function to be called for each animated property of each animated element. 
               * This function provides an opportunity to
               *  modify the Tween object to change the value of the property before it is set.
               */
              step: function (value) {
                $(this).text(Math.ceil(value));
              }
            });
        });
      };
      let a = 0;
      $(window).scroll(function () {
        // The .offset() method allows us to retrieve the current position of an element  relative to the document
        let oTop = $(".numbers").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() >= oTop) {
          a++;
          nCount(".rect > h1");
        }
      });


      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    var owl = $('.main-slider');
      owl.owlCarousel();
      // Go to the next item
      $('.next-btn').click(function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.prev-btn').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          owl.trigger('prev.owl.carousel', [300]);
      });

});