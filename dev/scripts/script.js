// Write your JavaScript here...
function myFunction() {
    var x = document.getElementById("nav-links");
    var y = document.getElementById("search")
    var z = document.getElementById("socials")
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "block";
    }
  }