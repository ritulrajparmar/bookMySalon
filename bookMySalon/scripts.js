$(function () {
    $("li").click(function (e) {
        e.preventDefault();
        $("li").removeClass("active");
        $(this).addClass("active");
    });
});

let slideIndex = 0;
const slides = $('.carousel img');
const dots = $('.dot');

function showSlide(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.css('display', 'none');
  dots.removeClass('active');

  slides.eq(slideIndex).css('display', 'block');
  dots.eq(slideIndex).addClass('active');
}

function currentSlide(n) {
  showSlide(n - (slideIndex + 1));
}

showSlide(0);

$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
