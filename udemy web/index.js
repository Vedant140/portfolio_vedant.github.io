var top_images=['images/image1.png','images/image2.png','images/image3.png','images/image4.png'];
var currentIndex = 0;
var imageElement = document.getElementById("image1");
function changeImageb() {
  imageElement.style.opacity = 0;
  imageElement.src = top_images[currentIndex];
  currentIndex++;
  if (currentIndex >= top_images.length) {
    currentIndex = 0;
  }
  imageElement.style.opacity = 1;
  if (currentIndex ===1){
    var message=document.getElementById("intro1");
    message.innerHTML="Get to know about my Education";
    var message2=document.getElementById("intro2");
    message2.innerHTML="Education is not the filling of a pail, but the lighting of a fire. - William Yeats";
  }else if(currentIndex ===2){
    var message=document.getElementById("intro1");
    message.innerHTML="Get to know about my Skills";
    var message2=document.getElementById("intro2");
    message2.innerHTML="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs";
  }else if(currentIndex ===3){
    var message=document.getElementById("intro1");
    message.innerHTML="Contact me";
    var message2=document.getElementById("intro2");
    message2.innerHTML="Feel free to reach out and connect. I'm here to listen, support, and collaborate.";
  }else if(currentIndex ===0){
    var message=document.getElementById("intro1");
    message.innerHTML="Glimpse of my Achievements";
    var message2=document.getElementById("intro2");
    message2.innerHTML="Celebrate your achievements, for they are stepping stones to even greater heights. Embrace your successes and let them propel you towards new horizons.";
  }
  
}
setInterval(changeImageb, 4500);


