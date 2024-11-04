$(document).ready(function() {
    $('.box').on('mouseenter', function() {
        $(this).css('cursor', 'pointer');
    }).on('mouseleave', function() {
        $(this).css('cursor', 'default');
    });
});
