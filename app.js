
    $(document).ready(function(){
        $('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

// ==========================Шапка
        $(function() {
            let header = $('.header');
            let intro = $( '.intro' ).height();
            console.log(intro);
            $(window).scroll(function() {
              if($(this).scrollTop() > intro + 65) {
               header.addClass('header__fixed');
               let header__fixed = $('.header__fixed');
               header__fixed.css('background', 'grey');
              } else {
               header.removeClass('header__fixed');
               header.css('background', 'white');
              }
            });
        });
    });


    
