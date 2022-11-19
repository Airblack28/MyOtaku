

let slideIndex = 0;
let timeoutId = null;
showSlides();

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Welcome-Box2-Slide");
    let dots = document.getElementsByClassName("Welcome-Box2-SlideControl");
    // if (slideIndex < 1) {slideIndex1 = slides.length} 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        dots[i].className = dots[i].className.replace(" Welcome-Box2-SlideControl-Actived", "");
    }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " Welcome-Box2-SlideControl-Actived";
  if(timeoutId) {clearTimeout(timeoutId);}
     timeoutId = setTimeout(showSlides, 5000); // Change image every 2 seconds
}