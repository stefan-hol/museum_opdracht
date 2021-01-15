var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

var counter=1,counterBack=1;
  $(".clickBtn").click(function(){
  if(counter==1)
  {
  $(".review1").show();
  $(".review2").hide();
  $(".review3").hide();
  $(".review4").hide();
  counter++;
  counterBack=1;
  }
  else if(counter==2)
  {
  $(".review1").hide();
  $(".review2").show();
  $(".review3").hide();
  $(".review4").hide();
  counter++;
  counterBack=4;
  }
  else if(counter==3)
  {
  $(".review1").hide();
  $(".review2").hide();
  $(".review3").show();
  $(".review4").hide();
  counter++;
  counterBack=3;
  }
  else
  {
  $(".review1").hide();
  $(".review2").hide();
  $(".review3").hide();
  $(".review4").show();
  counter=1;
  counterBack=2;
  }
  
  });
  //If back is clicked
  
  $(".clickBtnBack").click(function(){
  if(counterBack==1)
  {
  $(".review1").hide();
  $(".review2").hide();
  $(".review3").hide();
  $(".review4").show();
  counterBack++;
  counter=1;
  }
  else if(counterBack==2)
  {
  $(".review1").hide();
  $(".review2").hide();
  $(".review3").show();
  $(".review4").hide();
  counterBack++;
  counter=4;
  }
  else if(counterBack==3)
  {
  $(".review1").hide();
  $(".review2").show();
  $(".review3").hide();
  $(".review4").hide();
  counterBack++;
  counter=3;
  }
  else
  {
  $(".review1").show();
  $(".review2").hide();
  $(".review3").hide();
  $(".review4").hide();
  counterBack=1;
  counter=2;
  }
  
  });
  