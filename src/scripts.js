
$(function () {
    //esconde o menu após click 
    $('ul.navbar-nav li.nav-item a.nav-link').on('click', function () {
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
        $('.navbar-toggler').click(); //bootstrap 4.x
    });
});