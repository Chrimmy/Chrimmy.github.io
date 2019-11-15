// Animate Smooth Scroll for our work
$('#view-work').on('click', function(){const images = $('#images').position().top;

$('html,body').animate({scrollTop:images},1000);});

// Animate Smooth Scroll for contact us
$('#contact-us').on('click', function(){const contact = $('#contact').position().top;

$('html,body').animate({scrollTop:contact},1000);});
