$(document).ready(function(){
    $('.intelligence__wrapper a').on('click', function (){
        var $parent = $(this).parent('li');
        var $children = $parent.children('ul');

        if (!$parent.hasClass('parent')) {
            return true;
        }

        if ($parent.hasClass('open')) {
            $children.slideUp('slow', function(){
                $parent.removeClass('open');
                $parent.removeClass('active');
            });
        }
        else {
            $children.slideDown('fast', function(){
                $parent.addClass('active');
                $parent.addClass('open');

            });
        }

        return false;
    });
})