function menu(x){
  x.classList.toggle("change");
}

var drop = document.getElementById("page-content");
function page(){
  if(drop.style.display == "block"){
    drop.style.display = "none";
  }else{
    drop.style.display = "block";
  }
}

var box = 1;
function slideShow(){
  let a = document.getElementsByClassName("slide-box");
  for(let i = 0; i < a.length; i++){
    a[i].style.display = "none"
    a[i].style.opacity = "0";
    a[i].style.transition = "opacity 0.5s";
  }
  box++;
  if(box > a.length){
     box = 1;
  }
  a[box-1].style.display = "block";
  setTimeout(() =>{
    a[box-1].style.opacity = "1";
    a[box-1].style.transition = "opacity 0.1s";
  }, 5);
  setTimeout(slideShow, 3000);
}
slideShow();

var ImgBox = 1;
function imageSlide(){
  let b = document.getElementsByClassName("cont-5-img-1");
  for(let i = 0; i < b.length; i++){
    b[i].style.display = "none";
    b[i].style.opacity = "0";
    b[i].style.transition = "opacity 0.5s";
  }
  ImgBox++;
  if(ImgBox > b.length){
    ImgBox = 1;
  }
  b[ImgBox-1].style.display = "block";
  setTimeout(() => {
    b[ImgBox-1].style.opacity = "1";
    b[ImgBox-1].style.transition = "opacity 0.5s";
  }, 20);
  setTimeout(imageSlide, 2000);
}
imageSlide();
