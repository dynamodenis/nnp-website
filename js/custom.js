//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

// Smooth scrolling
$(function () {
  const headerEl = document.querySelector(".header");
  const allLinks = document.querySelectorAll("a:link");
  allLinks.forEach(link =>
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#"){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links
      console.log(href.startsWith("#"))
      if (href != "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      if(!href.startsWith("#")){
        window.open(href, "_blank");
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav__link")) {
        headerEl.classList.toggle("nav-open");
      }
    })
  );
});

// Navigation
$(function () {
  const headerEl = document.querySelector(".header");
  const btnNavEl = document.querySelector(".btn--mobile-nav");
  btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});

// consultants corousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  console.log(dots[slideIndex - 1]);
  //   dots[slideIndex-1].className += " active";
}

var responsiveSlider = function () {
  var slider = document.getElementById("home");
  let images = ["background_1",'background_2','background_3']
  console.log(slider)
//   var sliderWidth = slider.offsetWidth;
//   var slideList = document.getElementById("slideWrap");
  var count = 1;
//   var items = slideList.querySelectorAll("li").length;
//   var prev = document.getElementById("prev");
//   var next = document.getElementById("next");

//   window.addEventListener("resize", function () {
//     sliderWidth = slider.offsetWidth;
//   });

//   var prevSlide = function () {
//     if (count > 1) {
//       count = count - 2;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     } else if ((count = 1)) {
//       count = items - 1;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//   };

  var nextSlide = function () {
    // if (count < items) {
    //   slideList.style.left = "-" + count * sliderWidth + "px";
    //   count++;
    // } else if ((count = items)) {
    //   slideList.style.left = "0px";
    //   count = 1;
    // }
    if(count < images.length){
      slider.classList.remove(images[-count])
      slider.classList.add(images[count])
      count ++
    }else if(count == images.length){
      images.forEach(image => {
        slider.classList.remove(image)
      }); 
      slider.classList.add(images[0])
      count = 1
    }
    // for (let i = 0; i < images.length; i++) {
    //   if(count < images.length){
    //     slider.classList.add(images[i])
    //     console.log(count)
    //     count ++
    //   } else{
    //     slider.classList.add(images[0])
    //     console.log(count)
    //     count = 0
    //   }
    //   console.log(slider)
    // }
  };

//   next.addEventListener("click", function () {
//     nextSlide();
//   });

//   prev.addEventListener("click", function () {
//     prevSlide();
//   });

  setInterval(function () {
    nextSlide();
  }, 4000);
};

window.onload = function () {
  responsiveSlider();
};
