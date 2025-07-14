function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  sidebar.classList.toggle("open");
  menuToggle.classList.toggle("rotate");


  // Change icon to ✖ when open, ⋯ when closed
  if (sidebar.classList.contains("open")) {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "⋯";
  }
}

// Optional: click outside to close sidebar
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove("open");
    menuToggle.textContent = "⋯";
  }
});


const words = ["Our Code", "Your Product", "Your Brand"];
let i = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const element = document.getElementById("typed-text");
  const word = words[i];

  if (typing) {
    element.textContent = word.substring(0, charIndex++);
    if (charIndex > word.length) {
      typing = false;
      setTimeout(typeEffect, 1200);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    element.textContent = word.substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      i = (i + 1) % words.length;
      setTimeout(typeEffect, 400);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
}

// Start when page loads
window.addEventListener("DOMContentLoaded", typeEffect);
