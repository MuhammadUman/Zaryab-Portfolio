document.getElementById("menuButton").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

let values = document.querySelectorAll("#menu a");

values.forEach(link => {
  link.addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("try");
  var scrollThreshold = 600; // Change this value to set when the background color should change

  if (window.scrollY > scrollThreshold) {
    header.style.backgroundColor = "rgba(10, 25, 47,0.7)"; // New background color after scrolling past threshold
  } else {
    header.style.backgroundColor = "rgba(10, 25, 47,0)"; // Original background color
  }
});
document.addEventListener("scroll", function () {
  const header = document.getElementById("try");
  if (window.scrollY > 600) {
    // Adjust the scroll value as needed
    header.classList.add("blurred");
  } else {
    header.classList.remove("blurred");
  }
});
