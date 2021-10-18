
function showDropDown() {
    if (document.getElementById('fafa').classList.contains('fa-times')) {
      document.getElementById('navbar-links').style.display = 'none'
      document.getElementById('fafa').classList.remove('fa-times');
      document.getElementById('fafa').classList.add('fa-bars');
    }
  
    else if (document.getElementById('fafa').classList.contains('fa-bars')) {
      document.getElementById('navbar-links').style.display = 'block';
      document.getElementById('navbar').style.backgroundColor = '#333';
      document.getElementById('fafa').classList.remove('fa-bars');
      document.getElementById('fafa').classList.add('fa-times');
    }
  }
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.backgroundColor = "#333";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }
  /*
  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });*/
  /*
  const myNav = document.getElementById('navbar')
  window.onscroll = function () { 
      "use strict";
      if (document.body.scrollTop >= 200 ) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
      } 
      else {
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
  };*/
  
  
  window.onload = function () {
    // Array of Images
    const backgroundImage = document.getElementById('main-body')
    const backgroundImg = ["https://cdn.discordapp.com/attachments/689212878200242194/886722373640945704/image0.jpg",
    'https://cdn.discordapp.com/attachments/689212878200242194/886722418062811156/image0.jpg',
    "https://cdn.discordapp.com/attachments/689212878200242194/886732695005171772/image0.jpg",
    
    "https://cdn.discordapp.com/attachments/689212878200242194/886733857095811082/image0.jpg"
    ]
    let i = 1;
  
  // I start i at 1 instead of 0 since the 0 index is the background image by default. I want the function to cycle to index 1 on its first change.
  
    function changeImage() {
      backgroundImage.style.background = "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('" + backgroundImg[i] + "')";
      backgroundImage.style.backgroundSize = "cover";
  
      if (i < 4){
        i +=1
      }else {
        i = 0
      }
      
    }
     setInterval(changeImage, 8000);
  }
  