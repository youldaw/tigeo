$(function (){
    
    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

});

