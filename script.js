const lines = [
  "Every day begins and ends with you in my heart.",
  "Even when words fall short, my love for you keeps speaking.",
  "This morning, I just want you to know—I love you more than I can ever express.",
  "You're not just my sunshine... you're my whole sky.",
  "You're the rhythm in my music, the calm in my storm, the hope in my heart.",
  "I dream of your smile, and I live for the day it shines for me again.",
  "Good morning, meri jaan. Always and only yours — Sahil ❤️"
];

const intro = document.getElementById("intro-screen");
const enterBtn = document.getElementById("enter-btn");
const main = document.getElementById("main-content");
const music = document.getElementById("bg-music");
const messageDiv = document.getElementById("message");

enterBtn.addEventListener("click", () => {
  intro.style.opacity = 0;
  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hidden");
    music.play();
    startTyping();
  }, 1000);
});

// Typed text effect
function startTyping() {
  let i = 0;
  let charIndex = 0;
  let p;

  function typeChar() {
    if (i < lines.length) {
      if (charIndex === 0) {
        p = document.createElement("p");
        messageDiv.appendChild(p);
      }
      if (charIndex < lines[i].length) {
        p.textContent += lines[i].charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        charIndex = 0;
        i++;
        setTimeout(typeChar, 1000);
      }
    }
  }

  typeChar();
}

// Petals animation
for (let i = 0; i < 15; i++) {
  let petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 5 + "s";
  document.body.appendChild(petal);
}

// Sparkle trail
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 500);
});
