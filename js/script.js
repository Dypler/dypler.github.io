
$(document).ready(function(){
$('ul.services__tabs').on('click', 'li:not(.services__tab_active)', function() {
    $(this)
      .addClass('services__tab_active').siblings().removeClass('services__tab_active')
      .closest('div.container').find('div.services__content').removeClass('services__content_active').eq($(this).index()).addClass('services__content_active');
});
    // Smooth scroll 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});