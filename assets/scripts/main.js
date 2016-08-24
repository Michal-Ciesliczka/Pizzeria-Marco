// Navbar
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

// Sticky header
$(window).scroll(function() {
    var offsetY = $(window).scrollTop();
    var header = $('.header');

    if (offsetY > 1) {
        header.addClass('sticky');
        console.log('yolo')
    }

    if (offsetY < 1) {
        header.removeClass('sticky');
        console.log('yolo2')
    }
});