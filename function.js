var drop = document.getElementById("page-content");
function page(){
if(drop.style.display == "block"){
  drop.style.display = "none";
}else{
  drop.style.display = "block";
}
}

var dropM = document.getElementById("page-content-mob");
function pageMobile(){
  if(dropM.style.display == "block"){
    dropM.style.display = "none";
  }else{
    dropM.style.display = "block";
  }
}

window.addEventListener("click", function(event){
  const dropClose = document.getElementsByClassName("pageContent");
  if(event.target.matches("#page-content")){
    dropClose.style.display = "none";
  }
});

var box = 1;
function slideShow(){
  var slide = document.getElementsByClassName("slide-box");
  for(let i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  box++;
  if(box > slide.length){
    box = 1;
  }
  slide[box-1].style.display = "block";
  setTimeout(slideShow, 3000);
}
slideShow();

var imgBox = 1;
function imgSlide(){
  var img = document.getElementsByClassName("cont-5-img-1");
  for(let i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  imgBox++;
  if(imgBox > img.length){
    imgBox = 1;
  }
  img[imgBox-1].style.display = "block";
  setTimeout(imgSlide, 1000);
}
imgSlide();

var imgBoxMob = 1;
function imgMob(){
  var imgMobile = document.getElementsByClassName("cont-5-img-1-mob");
  for(let i = 0; i < imgMobile.length; i++){
    imgMobile[i].style.display = "none";
  }
  imgBoxMob++;
  if(imgBoxMob > imgMobile.length){
    imgBoxMob = 1;
  }
  imgMobile[imgBoxMob-1].style.display = "block";
  setTimeout(imgMob, 1000);
}
imgMob();

var openBox = document.getElementById("mobileNaviBox");
function menu(line){
  line.classList.toggle("change");

  if(openBox.style.display == "block"){
    openBox.style.display = "none";
  }else{
    openBox.style.display = "block";
}
}
