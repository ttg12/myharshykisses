<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Will You Be My Valentine? 💝</title>
<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #ffafbd, #ffc3a0);
    overflow: hidden;
    color: #ff4757;
    text-align: center;
  }
  button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 18px;
    cursor: pointer;
    background: #ff6b6b;
    border: none;
    border-radius: 10px;
    color: white;
    transition: background 0.3s;
  }
  button:hover {
    background: #ff8787;
  }
  .floating {
    position: absolute;
    font-size: 30px;
    animation: floatAnimation linear infinite;
  }
  @keyframes floatAnimation {
    0% { transform: translateY(100vh) translateX(0); opacity: 0;}
    50% { opacity: 1; }
    100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
  }
  #loveMeter {
    font-size: 24px;
    margin: 20px 0;
  }
  #celebration {
    display: none;
    font-size: 28px;
    margin-top: 20px;
  }
</style>
</head>
<body>

<h1 id="question">Do you like me?</h1>
<div id="buttons">
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
</div>
<p id="loveMeter"></p>
<p id="celebration"></p>
<button id="musicBtn" style="display:none;">🎵 Play Music</button>

<audio id="bgMusic" loop>
  <source src="YOUR_CLOUDINARY_URL_HERE" type="audio/mpeg">
</audio>

<script>
// Configuration
const config = {
  valentineName: "Jade",
  floatingEmojis: { hearts: ['❤️', '💖', '💝', '💗', '💓'], bears: ['🧸', '🐻'] },
  questions: {
    first: { text: "Do you like me?", yesBtn: "Yes", noBtn: "No", secretAnswer: "I don't like you, I love you! ❤️" },
    second: { text: "How much do you love me?", startText: "This much!", nextBtn: "Next ❤️" },
    third: { text: "Will you be my Valentine...?", yesBtn: "Yes!", noBtn: "No" }
  },
  loveMessages: { extreme: "WOOOOW You love me that much?? 🥰🚀💝", high: "To infinity and beyond! 🚀💝", normal: "And beyond! 🥰" },
  celebration: { title: "Yay! I'm the luckiest person...", message: "Now come get your gift...", emojis: "🎁💖🤗💝💋❤️💕" },
  colors: { backgroundStart: "#ffafbd", backgroundEnd: "#ffc3a0", buttonBackground: "#ff6b6b", buttonHover: "#ff8787", textColor: "#ff4757" },
  animations: { floatDuration: "15s", floatDistance: "50px", bounceSpeed: "0.5s", heartExplosionSize: 1.5 },
  music: { enabled: true, autoplay: true, musicUrl: "YOUR_CLOUDINARY_URL_HERE", startText: "🎵 Play Music", stopText: "🔇 Stop Music", volume: 0.5 }
};

// Floating Emojis
function createFloatingEmoji(emoji) {
  const span = document.createElement('span');
  span.textContent = emoji;
  span.className = 'floating';
  span.style.left = Math.random() * 100 + 'vw';
  span.style.animationDuration = (10 + Math.random() * 10) + 's';
  span.style.fontSize = (20 + Math.random() * 30) + 'px';
  document.body.appendChild(span);
  setTimeout(() => { span.remove(); }, 20000);
}
setInterval(() => {
  const allEmojis = [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears];
  const emoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
  createFloatingEmoji(emoji);
}, 500);

// Questions Logic
const questionEl = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveMeter = document.getElementById('loveMeter');
const celebration = document.getElementById('celebration');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

let step = 1;

function showSecondQuestion() {
  step = 2;
  questionEl.textContent = config.questions.second.text;
  yesBtn.textContent = config.questions.second.startText;
  noBtn.style.display = 'none';
}

function showThirdQuestion() {
  step = 3;
  questionEl.textContent = config.questions.third.text;
  yesBtn.textContent = config.questions.third.yesBtn;
  noBtn.style.display = 'inline-block';
  noBtn.textContent = config.questions.third.noBtn;
}

function showCelebration() {
  questionEl.style.display = 'none';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  loveMeter.style.display = 'none';
  celebration.style.display = 'block';
  celebration.textContent = `${config.celebration.title} \n ${config.celebration.message} ${config.celebration.emojis}`;
}

yesBtn.addEventListener('click', () => {
  if(step === 1) {
    loveMeter.textContent = config.questions.first.secretAnswer;
    showSecondQuestion();
  } else if(step === 2) {
    const lovePercent = Math.floor(Math.random()*5000 + 100);
    loveMeter.textContent = `${config.questions.second.startText} ${lovePercent}%`;
    if(lovePercent > 5000) loveMeter.textContent += " - " + config.loveMessages.extreme;
    else if(lovePercent > 1000) loveMeter.textContent += " - " + config.loveMessages.high;
    else loveMeter.textContent += " - " + config.loveMessages.normal;
    showThirdQuestion();
  } else if(step === 3) {
    showCelebration();
  }
});

noBtn.addEventListener('click', () => {
  if(step === 1 || step === 3){
    alert("Oops! Try again 😘");
  }
});

// Music Control
if(config.music.enabled){
  musicBtn.style.display = 'inline-block';
  bgMusic.volume = config.music.volume;
  if(config.music.autoplay){
    bgMusic.play().catch(() => {}); // autoplay might fail
  }
  musicBtn.textContent = config.music.startText;
  musicBtn.addEventListener('click', () => {
    if(bgMusic.paused){
      bgMusic.play();
      musicBtn.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicBtn.textContent = config.music.startText;
    }
  });
}
</script>
</body>
</html>
