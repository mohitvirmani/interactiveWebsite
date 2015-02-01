var main = function(){
    $('.article').click(function(){
        //this refers to the current object being selected.
        //children allow to search elements nested directly under current         //element.
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    })
    $(document).keypress(function(event){
        if(event.which === 111){
            $('.current').children('.description').toggle();
        }
        else if(event.which === 110){
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
};
$(document).ready(main);
