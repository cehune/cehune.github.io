
function showDropDown() {
    if (document.getElementById('fafa').classList.contains('fa-times')) {
      document.getElementById('navbar-links').style.display = 'none'
      document.getElementById('fafa').classList.remove('fa-times');
      document.getElementById('fafa').classList.add('fa-bars');
    }
  
    else if (document.getElementById('fafa').classList.contains('fa-bars')) {
      document.getElementById('navbar-links').style.display = 'block';
      document.getElementById('navbar').style.backgroundColor = '#1A1A1A';
      document.getElementById('fafa').classList.remove('fa-bars');
      document.getElementById('fafa').classList.add('fa-times');
    }
  }
  window.onscroll = function() { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.backgroundColor = "#333";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }
  function openNav() {
    document.getElementById("page_shift_one").style.width = "100%";
    document.getElementById("page_shift_two").style.width = "100%";
    document.getElementById("page_shift_three").style.width = "100%";
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.transitionDelay='300ms';
  }
  
  function closeNav() {
      document.getElementById("page_shift_one").style.width = "0%";
    document.getElementById("page_shift_two").style.width = "0%";
    document.getElementById("page_shift_three").style.width = "0%";
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.transitionDelay='0ms';
  }