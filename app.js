let portfolio = document.getElementById('portfolio'),
    arrow = document.getElementById('arrowD');



function scrool(el){
    let offset = 0;
    $('html,body').animate({
        scrollTop:$(el).offset().top - offset
    },500);
    return false;
}