$(document).ready(function() {
    $('.shoes').hover(function(){
      $(this).css('width', '450px');
      $(this).css('height', '350px');
    }, function() {
        $(this).css('width', '350px');
        $(this).css('height', '250px');
    });
});
