var x = window.matchMedia("(max-width: 500px)");

if (x.matches) {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("website-logo").style.width = "50px";
    } else {
      document.getElementById("website-logo").style.width = "200px";
    }
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("by-christo").style.fontSize = "10px";
    } else {
      document.getElementById("by-christo").style.fontSize = "15px";
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("by-christo").style.bottom = "8px";
    } else {
      document.getElementById("by-christo").style.border = "28px";
    }
  }}
  else
  {
    //do nothing
  }