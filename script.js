
// HOVER EFFECTS FOR SKILLS LOGOS

  //hover over
function hoverOverHtml(){
  document.getElementById("html-logo").style.opacity = "1";
}

function hoverOverCss(){
  document.getElementById("css-logo").style.opacity = "1";
}

function hoverOverJavascript(){
  document.getElementById("javascript-logo").style.opacity = "1";
}

function hoverOverJava(){
  document.getElementById("java-logo").style.opacity = "1";
}

function hoverOverWordpress(){
  document.getElementById("wordpress-logo").style.opacity = "1";
}

function hoverOverPs(){
  document.getElementById("ps-logo").style.opacity = "1";
}

function hoverOverAi(){
  document.getElementById("ai-logo").style.opacity = "1";
}

function hoverOverXd(){
  document.getElementById("xd-logo").style.opacity = "1";
}

function hoverOverSketch(){
  document.getElementById("sketch-logo").style.opacity = "1";
}


  // hover out
function hoverOutHtml(){
  document.getElementById("html-logo").style.opacity = ".50";
}

function hoverOutCss(){
  document.getElementById("css-logo").style.opacity = ".50";
}

function hoverOutJavascript(){
  document.getElementById("javascript-logo").style.opacity = ".50";
}

function hoverOutJava(){
  document.getElementById("java-logo").style.opacity = ".50";
}

function hoverOutWordpress(){
  document.getElementById("wordpress-logo").style.opacity = ".50";
}

function hoverOutPs(){
  document.getElementById("ps-logo").style.opacity = ".50";
}

function hoverOutAi(){
  document.getElementById("ai-logo").style.opacity = ".50";
}

function hoverOutXd(){
  document.getElementById("xd-logo").style.opacity = ".50";
}

function hoverOutSketch(){
  document.getElementById("sketch-logo").style.opacity = ".50";
}


// MODAL POP UP ON DESIGNS PAGE

  // Modal1
  function viewModal(){
    document.getElementById("modal1").style.display = "block";
  }

  function closeModal(){
    document.getElementById("close")[0];
    document.getElementById("modal1").style.display = "none";
  }

  // Modal2
  function viewModal2(){
    document.getElementById("modal2").style.display = "block";
  }

  function closeModal2(){
    document.getElementById("close2")[0];
    document.getElementById("modal2").style.display = "none";
  }

  // Modal3
  function viewModal3(){
    document.getElementById("modal3").style.display = "block";
  }

  function closeModal3(){
    document.getElementById("close3")[0];
    document.getElementById("modal3").style.display = "none";
  }

  // Modal4
  function viewModal4(){
    document.getElementById("modal4").style.display = "block";
  }

  function closeModal4(){
    document.getElementById("close4")[0];
    document.getElementById("modal4").style.display = "none";
  }

  // Modal5
  function viewModal5(){
    document.getElementById("modal5").style.display = "block";
  }

  function closeModal5(){
    document.getElementById("close5")[0];
    document.getElementById("modal5").style.display = "none";
  }

  // Modal6
  function viewModal6(){
    document.getElementById("modal6").style.display = "block";
  }

  function closeModal6(){
    document.getElementById("close6")[0];
    document.getElementById("modal6").style.display = "none";
  }

  // Modal7
  function viewModal7(){
    document.getElementById("modal7").style.display = "block";
  }

  function closeModal7(){
    document.getElementById("close7")[0];
    document.getElementById("modal7").style.display = "none";
  }

  // Modal8
  function viewModal8(){
    document.getElementById("modal8").style.display = "block";
  }

  function closeModal8(){
    document.getElementById("close8")[0];
    document.getElementById("modal8").style.display = "none";
  }

  // Modal8
  function viewModal9(){
    document.getElementById("modal9").style.display = "block";
  }

  function closeModal9(){
    document.getElementById("close9")[0];
    document.getElementById("modal9").style.display = "none";
  }


// BACK TO TOP ICON

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  }

  else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function topPage() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// MOBILE MENU

function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// window.onclick = function(event) {
//   if (!event.target.matches(".dropbtn")) {
//
//     var dropdowns = document.getElementsByClassName("mobilenavmenu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// }


// +WORK DROP DOWN MENU FOR MOBILE
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

// SHOW LINKS WHEN +WORK LINK IS CLICKED

function openwork(){
  document.getElementById("showwork").classList.toggle("open");
}
