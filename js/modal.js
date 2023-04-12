let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("image1");


  if (n > slides.length - 1) {
    slideIndex = 0;
  }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  console.log(slideIndex,n);
}

showSlide(slideIndex)