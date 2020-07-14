//Slide Show
let imageIndex=1;
function plusSlides(n) {
  showSlides(imageIndex += n);
}

function currentSlide(n) {
  showSlides(imageIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {imageIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imageIndex-1].style.display = "block";  
  dots[imageIndex-1].className += " active";
}


//button read more 1
function btnFunction1()
  {
  let dots = document.getElementById("dotsContent1");
  let moreText = document.getElementById("moreContent1");
  let btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btnText.innerHTML = "Baca selengkapnya";
    moreText.style.display = "none";} 
  else{
    dots.style.display = "none";
    btnText.innerHTML = "Tutup";
    moreText.style.display = "inline";}
} 

//button read more 2
function btnFunction2()
  {
  let dots = document.getElementById("dotsContent2");
  let moreText = document.getElementById("moreContent2");
  let btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btnText.innerHTML = "Baca selengkapnya";
    moreText.style.display = "none";} 
  else{
    dots.style.display = "none";
    btnText.innerHTML = "Tutup";
    moreText.style.display = "inline";}
}

//button read more 3
function btnFunction3() 
  {
  let dots = document.getElementById("dotsContent3");
  let moreText = document.getElementById("moreContent3");
  let btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btnText.innerHTML = "Baca selengkapnya";
    moreText.style.display = "none";} 
  else{
    dots.style.display = "none";
    btnText.innerHTML = "Tutup";
    moreText.style.display = "inline";}
}

//button read more 4
function btnFunction4()
  {
  let dots = document.getElementById("dotsContent4");
  let moreText = document.getElementById("moreContent4");
  let btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btnText.innerHTML = "Baca selengkapnya";
    moreText.style.display = "none";} 
  else{
    dots.style.display = "none";
    btnText.innerHTML = "Tutup";
    moreText.style.display = "inline";}
}

//Muncul-Hilangkan Gambar
$(document).ready(function(){
  $("#fadein").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(2000);
  });
});
$(document).ready(function(){
  $("#fadeout").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(2000);
  });
});
