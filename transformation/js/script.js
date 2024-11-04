$(document).ready(function() {
    $('#transformBtn').on('click', function() {
        $('.title').toggleClass('transformed');
        $('body').toggleClass('transformed');
    });
});