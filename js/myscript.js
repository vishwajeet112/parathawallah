window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.visibility="hidden";
  } else {
    document.getElementById("navbar").style.visibility="visible";
  }
}