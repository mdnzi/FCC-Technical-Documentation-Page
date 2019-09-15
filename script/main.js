//SCROLL TO TOP FUNCTION
// Get button by ID
scrollBtn = document.getElementById("scrollTop");

// If window width < 480px & scroll button enabled. Else, button enable.
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    (window.innerWidth < 768 && document.body.scrollTop > 100) ||
    (window.innerWidth < 768 && document.documentElement.scrollTop > 100)
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Scroll to top page on click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//HAMBURGER

function myFunction() {
  var x = document.getElementById("navlink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
