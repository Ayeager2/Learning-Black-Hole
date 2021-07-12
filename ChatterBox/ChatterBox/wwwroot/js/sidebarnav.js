$(document).ready(function () {
    console.log("ready!");
});

$(window).on("load", function () {
    console.log("window loaded");
});



$('#navbar-close-btn').click(function(){
   $('#mySidenav').hide();  
});



$('#navbar-open-btn').click(function () {
    $('#mySidenav').show();
});
