
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

// Smooth scrolling
$(function() {
	const headerEl = document.querySelector('.header');
	const allLinks = document.querySelectorAll('a:link');
	allLinks.forEach((link) =>
	  link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = link.getAttribute('href');
  
		// Scroll back to top
		if (href === '#')
		  window.scrollTo({
			top: 0,
			behavior: 'smooth',
		  });
  
		// Scroll to other links
		if (href != '#' && href.startsWith('#')) {
		  const sectionEl = document.querySelector(href);
		  sectionEl.scrollIntoView({ behavior: 'smooth' });
		}
  
		// Close mobile navigation
		if (link.classList.contains('main-nav__link')) {
		  headerEl.classList.toggle('nav-open');
		}
	  })
	);
});

// Navigation
$(function() {
	const headerEl = document.querySelector('.header');
	const btnNavEl = document.querySelector('.btn--mobile-nav');
	btnNavEl.addEventListener('click', () => {
		headerEl.classList.toggle('nav-open');
	});
});

// consultants corousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
