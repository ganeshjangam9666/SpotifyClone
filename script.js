window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.jpg)";
            bannerImage.setAttribute("src", "images/image 1.jpg");
            bannerHeading.textContent = "Deva Deva (Brahmastra)";
            bannerText.textContent = "Arjith Singh";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.jpg)";
            bannerImage.setAttribute("src", "images/image 2.jpg");
            bannerHeading.textContent = "Cheliya (Jawan)";
            bannerText.textContent = "Anirudh";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.jpg)";
            bannerImage.setAttribute("src", "images/image 3.jpg");
            bannerHeading.textContent = "Stay";
            bannerText.textContent = "Justin Bieber";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.png)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Senorita";
            bannerText.textContent = "Shawn Mendes, Camila Cabello";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.png)";
            bannerImage.setAttribute("src", "images/Image 5.jpg");
            bannerHeading.textContent = "Tum Hi Ho";
            bannerText.textContent = "Arjith Singh";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "images/image 6.jpg");
            bannerHeading.textContent = "Baarishein - Anuv Jain (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "images/image 7.jpg");
            bannerHeading.textContent = "Waqt Ki Baatein (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "Lovely feat. Anika Vidyarthi (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.png)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Let me down slowly - Alec Benjamin (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/image 10.jpg");
            bannerHeading.textContent = "Shayad";
            bannerText.textContent = "Arjith Singh";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}