// Simple romantic interaction demo – safe and working on GitHub Pages

document.body.innerHTML = `
  <div id="container">
    <h1>For the bestest man 💕</h1>
    <p id="msg">Do you like me?</p>
    <div id="buttons">
      <button id="yes">Yes</button>
      <button id="no">No</button>
    </div>
  </div>
`;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("msg");
const container = document.getElementById("container");

// basic styles
document.body.style.cssText = `
  background: linear-gradient(135deg,#ffafbd,#ffc3a0);
  color:#ff4757;
  text-align:center;
  font-family:Poppins,Arial,sans-serif;
  overflow:hidden;
`;

yesBtn.style.cssText = noBtn.style.cssText = `
  margin:8px;
  padding:10px 20px;
  font-size:1em;
  border:none;
  border-radius:10px;
  background:#ff6b6b;
  color:white;
  cursor:pointer;
`;

yesBtn.onmouseover = noBtn.onmouseover = e =>
  e.target.style.background = "#ff8787";
yesBtn.onmouseout = noBtn.onmouseout = e =>
  e.target.style.background = "#ff6b6b";

// simple interaction
yesBtn.onclick = () => {
  msg.textContent = "I don't like you, I love you! ❤️";
  buttons.remove();
  launchHearts();
};

noBtn.onclick = () => {
  msg.textContent = "Too bad 😜 I love you anyway!";
  buttons.remove();
  launchHearts();
};

// floating hearts animation
function launchHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-10px";
    heart.style.fontSize = 20 + Math.random() * 20 + "px";
    heart.style.animation = "float 5s linear forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);

  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
      to {transform: translateY(-110vh); opacity:0;}
    }
  `;
  document.head.appendChild(style);
}
