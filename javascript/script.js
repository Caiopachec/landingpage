$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');  // Corrigido para adicionar o #
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
});
