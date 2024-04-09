var words =
  "word time number way people water day part sound work place year back thing name sentence man line boy farm end men land home hand picture air animal house page letter point mother answer america world food country plant school father tree city earth eye head story example life paper group children side feet car mile night sea river state book idea face indian girl mountain list song family he a one all an each other many some two more long new little most good great right mean old any same three small another large big even such different kind still high every own light left few next hard both important white four second enough above young not when there how up out then so no first now only very just where much before too also around well here why again off away near below last never always together often once later far really almost sometimes soon is was are be have had were can said use do will would make like has look write go see could been call am find did get come made may take know live give think say help tell follow came want show set put does must ask went read need move try change play spell found study learn should add keep start thought saw turn might close seem open begin got run walk began grow took carry hear stop miss eat watch let cut talk being leave".split(
    " "
  );
// var words='اما در همان يك روز دست بر پوست درختی كشيد، روی چمن خوابيد كفش دوزدكی را تماشا كر سرش را بالا گرفت و ابرها را ديد و به آنهايی كه او را نمی‌شناختند، سلام كرد و برای آنها كه دوستش نداشتند از ته دل دعا كرد، او در همان يك روز آشتی كرد و خنديد و سبك شد، لذت برد و سرشار شد و بخشيد، عاشق شد و عبور كرد و تمام شد.ی سلام محسن رضا امیر ممد حماسه'.split(' ')
console.log(words);

COLORS = {
  default: { right: "rgb(159, 200, 255)", wrong: " rgb(248, 122, 113)" },
  second: { right: "rgb(0, 255, 26)", wrong: "rgb(107, 38, 1)" },
  third: { right: " rgb(0, 106, 255)", wrong: "rgba(185, 120, 102, 0.948)" },
  fourth: { right: "rgb(253, 198, 186)", wrong: "rgba(210, 30, 6, 0.948)" },
};

var keymapRC = COLORS.fourth.right;
var keymapWC = COLORS.fourth.wrong;
document.querySelector("#customBox .parent").style.borderColor = keymapWC;
document.querySelector(
  "#customBox .parent .child button"
).style.backgroundColor = keymapRC;
document.querySelector(
  "#customBox .parent .child input"
).style.backgroundColor = keymapRC;
document.querySelector(
  "#customBox .parent .child .closed"
).style.backgroundColor = keymapRC;
afk = document.createElement("div");
afk.innerHTML = `AFK <br> <span  style='font-size:1rem;color:black;margin-top:0.5rem'>Click to continue</span>`;
afk.classList.add("afk");
afk.style.color = keymapWC;
afk.style.border = "2px solid " + keymapWC;
afk.style.backgroundColor = keymapRC;
function switchTheme() {
  let css = document.getElementById("style1");
  let theme = document.getElementById("select").value;
  if (theme == 1) {
    css.href = "./style2.css";
    keymapRC = COLORS.second.right;
    keymapWC = COLORS.second.wrong;
  } else if (theme == 2) {
    css.href = "./style3.css";
    keymapRC = COLORS.third.right;
    keymapWC = COLORS.third.wrong;
  } else if (theme == 3) {
    css.href = "./style1.css";
    keymapRC = COLORS.default.right;
    keymapWC = COLORS.default.wrong;
  } else if (theme == 4) {
    css.href = "./style4.css";
    keymapRC = COLORS.fourth.right;
    keymapWC = COLORS.fourth.wrong;
  }
  afk.style.border = "2px solid " + keymapWC;
  afk.style.backgroundColor = keymapRC;
  document.getElementById("select").blur();
  document.querySelector("footer div").style.color = keymapRC;
  document.querySelector("#customBox .parent").style.borderColor = keymapRC;
  document.querySelector(
    "#customBox .parent .child button"
  ).style.backgroundColor = keymapRC;
  document.querySelector(
    "#customBox .parent .child input"
  ).style.backgroundColor = keymapRC;
  document.querySelector(
    "#customBox .parent .child .closed"
  ).style.backgroundColor = keymapRC;
  document.querySelector(".nav").style.color = keymapWC;
  document.querySelector(".nav").style.backgroundColor = keymapRC;
  document.querySelector(".nav span").style.color = keymapWC;

  reset();
}
document.querySelector(".nav").style.color = keymapWC;
document.querySelector(".nav").style.backgroundColor = keymapRC;
document.querySelector(".nav span").style.color = keymapWC;

defaultCaret = document.getElementById("default");
blinkingCaret = document.getElementById("blinking");
borderedCaret = document.getElementById("bordered");
keymapSwitch = document.getElementById("keymapSwitch");

console.log(spans[0]);
function gen() {
  textBox = document.getElementById("demo2").innerHTML;
  const box = document.getElementById("demo2");
  const spinner = document.createElement("div");
  spinner.className = "spinner";
  spinner.style.backgroundColor = keymapRC;
  document.getElementById("demo2").classList.remove("hidden");
  document.getElementById("demo2").classList.remove("hidden");
  document.getElementById("mnmn").classList.remove("hidden");
  textBox = "";
  box.appendChild(spinner);

  setTimeout(() => {
    textBox = "";

    for (i = 0; i < numOfWords; i++) {
      textBox += words[Math.floor(Math.random() * words.length)] + "-";
    }
    average = 0;
    qzaaa = textBox.split("-");
    for (let i = 0; i < qzaaa.length; i++) {
      average += qzaaa[i].length;
    }
    average = (average + numb) / qzaaa.length;
    console.log(average);
    console.log(qzaaa);
    check = Array.from(textBox);
    textBox = Array.from(textBox);

    textBox.unshift("<span> </span>");
    check.unshift("<span> </span>");

    document.getElementById("demo2").innerHTML = textBox.join("");

    i = 0;
    mistakes = 1;
    stop = 0;
    keystrokes = 0;
    if (i == 0) {
      textBox.shift();
      check.shift();
    }
    textBox.pop();
  }, 500);
  // textBox.pop();
}

let numb = 0;
second = -1;
stopp = 0;
let token = 0;
results = document.getElementById("results");
resultItems = document.querySelectorAll("#results > button");

setInterval(() => {
  if (i > 0 && stopp == 0 && token > 0) {
    if (second < token) {
      second++;
      document.querySelector(".timerBox").innerHTML = `00:${second}`;
    } else {
      second = 0;
      stopp = 1;
      i = textBox.length;
      document.querySelector(".timerBox").style.display = "none";
      document.querySelector(".liveAccuracy").style.display = "none";
      document.querySelector(".realTime").style.display = "none";
      calculateResults();
      showResults();
      drawChart();
      caretPosition();
      numb = 25;
    }
  }
}, 1000);
let timerId; // To store the timer reference
let isTimerActive = true; // Flag to control timer state
let interval;
function crtScreen(crtBtn) {
  if (switchCheck(crtBtn)) {
    document.querySelector('.crt').style.display='block'
    for (let i = 0; i < 200; i++) {
      document.querySelector(
        ".crt"
      ).innerHTML += `<div class='animate' style='animation-delay:${
        i / 60
      }s'></div>`;
    }
    interval = setInterval(() => {
      if (switchCheck(crtBtn)) {
        let lines = document.querySelectorAll(".crt div");
        for (let i = 0; i < lines.length; i++) {
          lines[i].classList.toggle("animate");
        }
        setTimeout(() => {
          let lines = document.querySelectorAll(".crt div");
          for (let i = 0; i < lines.length; i++) {
            lines[i].classList.toggle("animate");
          }
        }, 100);
      } else {
        clearInterval(interval);
      }
    }, 8000);
  } else {
    document.querySelector(".crt").innerHTML = "";
    document.querySelector('.crt').style.display='none'
  }
}
function numOfWord(n) {
  document.getElementById("demo2").innerHTML = "";

  numOfWords = n;
  numb = n;
  if (n == 15) {
    document.getElementById("demo15").classList.add("active");
    document.getElementById("demo25").classList.remove("active");
    document.getElementById("demo10").classList.remove("active");
    document.getElementById("custom").classList.remove("active");
  } else if (n == 25) {
    document.getElementById("demo15").classList.remove("active");
    document.getElementById("demo25").classList.add("active");
    document.getElementById("custom").classList.remove("active");
    document.getElementById("demo10").classList.remove("active");
  } else if (n == 10) {
    document.getElementById("demo15").classList.remove("active");
    document.getElementById("demo25").classList.remove("active");
    document.getElementById("custom").classList.remove("active");
    document.getElementById("demo10").classList.add("active");
  } else {
    gen();
  }
  for (i = 3; i < 7; i++) {
    document.getElementById("demo" + `${i}`).classList.add("hidden");
  }
  gen();
  keymapSwitchCheck();
  document.getElementById("canvas").innerHTML = "";
  finalData = [];
  values = [];
  avg = 0;

  finalDataRaw = [];
  touches = 0;
  chart = [];
  errors = 0;
  errorsArr = [];
  document.querySelector(".realTime").innerHTML = "0WPM";
  document.querySelector(".liveAccuracy").innerHTML = "100%";

  if (switchCheck(liveAccuracy)) {
    document.querySelector(".liveAccuracy").style.display = "block";
  } else {
    document.querySelector(".liveAccuracy").style.display = "none";
  }
  if (switchCheck(realTime)) {
    document.querySelector(".realTime").style.display = "block";
  } else {
    document.querySelector(".realTime").style.display = "none";
  }

  keymapNextChar(1000);
  crtScreen(crt);
  document.querySelector(".caret").style.opacity = "0";
  if (document.getElementById("demo2").parentElement.contains(afk)) {
    document.getElementById("demo2").parentElement.removeChild(afk);
    document.getElementById("demo2").style.filter = "none";
  }
  // resultItems.forEach(el=>{
  //   el.style.backgroundColor=keymapRC;
  // });
  results.style.display = "none";
  clearInterval(interval);
  inactivityTimer();
  setTimeout(() => {
    caretPosition();
    document.querySelector(".caret").style.opacity = "0.8";

    xInint = document.querySelector("#demo2 span:last-of-type").offsetTop;
    document.querySelector("#reset").blur();
  }, 500);
}

// numOfWord(25);
function showResults() {
  results.style.display = "block";
  document.querySelector("#demo2").classList.add("hidden");
  document.getElementById("demo3").classList.remove("hidden");
  document.getElementById("demo4").classList.remove("hidden");
  document.getElementById("demo5").classList.remove("hidden");
  document.getElementById("demo6").classList.remove("hidden");
  document.getElementById("mnmn").classList.add("hidden");
  document.getElementById("options").style.display = "none";
  document.querySelector(".nav").style.display = "none";
}

function calculateResults() {
  stop++;
  clearTimeout(timerId);
  endTime = new Date().getTime();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  function afkTime() {
    afkTime = timeTaken - chart.length;
    if (afkTime > 0) {
      return afkTime;
    } else {
      return 0;
    }
  }

  function afkPercentage() {
    if (afkTime > 1) {
      afkPercentage = ((afkTime / timeTaken) * 100).toFixed(1);
      return afkPercentage;
    } else {
      return 0;
    }
  }
  console.log(timeTaken, timeTaken - chart.length, chart);
  document.getElementById(
    "demo4"
  ).innerHTML = `${timeTaken}s afk:(${afkTime().toFixed(
    1
  )})s (${afkPercentage()})%`;
  Accuracy = ((1 - (mistakes - 1) / textBox.length) * 100).toFixed(1);
  if (Accuracy < 50) {
    invalidResult("Invalid result due to low accuracy");
    avg = avg / 100;
  }
  document.getElementById("demo5").innerHTML = `accuracy : ${Accuracy} %`;
  document.getElementById("demo6").innerHTML = `Speed: ${avg} WPM`;
}
touches = 0;
var getKeyCode = function (str, index = str.length - 1) {
  return String.fromCharCode(str.charCodeAt(index)).toLocaleLowerCase();
};
function chromeHandler(e) {
  input = document.getElementById("hhhhh");
  let num = e.keyCode;
  if (num == 229 || num == 0) {
    currentChar = getKeyCode(input.value);
    if (currentChar == " " && textBox[i] == "-") {
      textBox[i] = `<span style='opacity:0 !important;'>-</span>`;
      i++;
      document.querySelector("#demo2").innerHTML = textBox.join("");
    } else if (currentChar == textBox[i]) {
      textBox[i] = `<span>${currentChar}</span>`;

      i++;
      document.querySelector("#demo2").innerHTML = textBox.join("");
    } else if (currentChar != textBox[i]) {
      textBox[i] = `<span id='sec'>${textBox[i]}</span>`;
      mistakes++;
      errors++;
      document.getElementById("demo3").innerHTML = `mistakes: ${mistakes} `;
      i++;
      document.querySelector("#demo2").innerHTML = textBox.join("");
    }
  } else if (num == 8 && i > 0) {
    textBox[i] = check[i];
    document.querySelector("#demo2").innerHTML = textBox.join("");
  }

  input.value = "";
}
errors = 0;
function rightAndWrongKey(e) {
  input.value = "";

  if (e.key == " " && textBox[i] == "-") {
    textBox[i] = `<span style='opacity:0 !important;animation-delay:${
      i / 120
    }s'>-</span>`;
    rightKeyPress(e.key, keymapRC);
    i++;
  } else if (
    e.key == textBox[i] &&
    i < textBox.length &&
    e.key !== "Enter" &&
    e.key !== "Backspace" &&
    e.key !== "Tab"
  ) {
    textBox[i] = `<span style='opacity:1 !important;animation-delay:${
      i / 120
    }s'>${e.key}</span>`;
    rightKeyPress(e.key, keymapRC);
    i++;
  } else if (
    e.key != textBox[i] &&
    i < textBox.length &&
    e.key !== "Enter" &&
    e.key !== "Backspace" &&
    e.key !== "Tab"
  ) {
    textBox[i] = `<span id='sec' style='opacity:1 !important;animation-delay:${
      i / 120
    }s'>${textBox[i]}</span>`;
    document.getElementById("demo3").innerHTML = `mistakes: ${mistakes++} `;
    rightKeyPress(e.key, keymapWC);
    errors++;
    i++;
  }

  document.getElementById("demo2").innerHTML = textBox.join("");
}
document.body.addEventListener("keyup", function (e) {
  touches++;
  touchesRaw++;
  if (
    navigator.userAgent.includes("Android") ||
    navigator.userAgent.includes("iPhone")
  ) {
    document
      .querySelector("#demo2")
      .scrollIntoView({ block: "end", inline: "end", behavior: "instant" });
  }
  keymapNextChar(100);
  if(e.key=='Tab'){
    document.getElementById("reset").style.opacity = "1";
      
  }
  if (i > 0) {
    document.querySelector("#demo2 span:last-of-type").style.animation =
      "rounder 0.5s linear infinite";
  }
  // document.getElementById("head").scrollIntoView();
  if (stop == 0) {
    keystrokes++;
    // document.getElementById("demo7").innerHTML = `keystrokes: ${keystrokes}`;
  }

  if (i == 1) {
    startTime = new Date().getTime();
  }
  if (e.key == "-") {
    spacebar = document.getElementById("space");
    if (e.key == "-") {
      spacebar.style.backgroundColor = keymapRC;
      setTimeout(() => {
        spacebar.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
      }, 100);
    }
  }
  if (i == textBox.length - 1) {
    calculateResults();
    showResults();
  }

  // if (i == textBox.length && stop == 0) {
  //   calculateResults();
  // }
  if (i > 2) {
    document.querySelector(`#demo2 span:nth-of-type(${i - 1})`).style.scale =
      "1.5";
  }
  if (
    navigator.userAgent.includes("Android") &&
    navigator.userAgent.includes("Chrome")
  ) {
    chromeHandler(e);
  } else {
    rightAndWrongKey(e);
  }

  if (switchCheck(roamer) || switchCheck(shake) || switchCheck(rounder)) {
    document.querySelector("#demo2 span:last-of-type").style.borderRight =
      "2px solid white";
    document.querySelector("#demo2 span:last-of-type").scrollIntoView();
  }
  m = document.querySelectorAll("#sec");
  caretPosition();
});

document.addEventListener("keyup", function (e) {
  if (e.getModifierState("CapsLock")) {
    document.getElementById("caps").classList.remove("hidden");

    spans.forEach((el) => {
      let text = el.innerHTML.toUpperCase();
      el.innerHTML = text;
    });
    spans[10].innerHTML = "Backspace";
  } else {
    document.getElementById("caps").classList.add("hidden");
    spans.forEach((el) => {
      let text = el.innerHTML.toLowerCase();
      el.innerHTML = text;
      spans[10].innerHTML = "Backspace";
    });
  }
  if (e.key == "Control") {
  } else if (e.key == "Backspace" && i < textBox.length && i > 0) {
    i--;
    textBox[i] = check[i];
    rightKeyPress(e.key, "lightskyblue");
    document.getElementById("demo2").innerHTML = textBox.join("");
  } else if (e.key == "Tab") {
    e.preventDefault();
    document.getElementById("reset").focus();
  } else if (e.key == "Backspace" && i == 1) {
    textBox[0] = "<span> </span>";
  }
});
function resetSpansBg() {
  spans.forEach((el) => {
    el.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
    el.style.color = keymapRC;
  });
  document.getElementById("space").style.backgroundColor =
    "rgba(69, 68, 68, 0.345)";
}
function animationBtnsHandler() {
  if (switchCheck(roamer)) {
    rounder.classList.add("disabled");
    shake.classList.add("disabled");
  } else if (switchCheck(rounder)) {
    shake.classList.add("disabled");
    roamer.classList.add("disabled");
  } else if (switchCheck(shake)) {
    roamer.classList.add("disabled");
    rounder.classList.add("disabled");
  } else {
    [roamer, rounder, shake].map((el) => el.classList.remove("disabled"));
  }
}
function reset() {
  if (navigator.userAgent.includes('Windows')) {
    document.getElementById("reset").style.opacity = "1";
    document.getElementById("options").style.opacity = "1";
    setTimeout(()=>{
      if (i>0) {
        document.getElementById("reset").style.opacity = "0";
        document.getElementById("options").style.opacity = "0";
      }
    },5000)
  }
  document.getElementById("demo2").innerHTML = "";
  document.querySelector(".message").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("canvas").innerHTML = "";
    caretPosition();
    document.querySelector(".caret").style.opacity = "0.8";
  }, 500);
  clearInterval(interval);
  numOfWord(numb);
  document.getElementById("reset").blur();
  document.getElementById("options").style.display = "flex";
  animationBtnsHandler();
  resetSpansBg();
  keymapNextChar(1000);
  document.querySelector(".caret").style.opacity = "0";
  document.querySelector("#reset").blur();
  if (
    navigator.userAgent.includes("Android") ||
    navigator.userAgent.includes("iPhone")
  ) {
    document.querySelector(".nav").style.display = "flex";
  } else {
    document.querySelector(".nav").style.display = "none";
  }
  if (switchCheck(minAcc)) {
    document.querySelector(".min").style.display = "block";
  } else {
    document.querySelector(".min").style.display = "none";
  }
  if(switchCheck(minSpeed)){
    document.querySelector(".minSpeed").style.display = "block";
  }else{
    document.querySelector(".minSpeed").style.display = "none";
  }
}
document.querySelector(".min").style.display = "none";
document.querySelector(".minSpeed").style.display = "none";

function show() {
  document.getElementById("section").classList.remove("hidden");
}
function hide() {
  document.getElementById("section").classList.add("hidden");
}
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

function rightKeyPress(key, color) {
  for (j = 0; j < spans.length; j++) {
    if (key == spans[j].innerHTML) {
      spans[j].style.backgroundColor = color;
      let currnet = j;
      setTimeout(() => {
        spans[currnet].style.backgroundColor = "rgba(69, 68, 68, 0.345)";
      }, 150);
    }
  }
}
keymapSwitch.style.cursor = "pointer";
keymapSwitch.style.display = "none";
if (navigator.userAgent.includes("Windows")) {
  keymapSwitch.style.display = "flex";
  numOfWord(25);
  document.onmousemove = function () {
    if (i>1) {
      document.getElementById("options").style.opacity = "1";
      document.getElementById("reset").style.opacity = "1";
  
      clearTimeout(TID);
       TID =setTimeout(() => {
        document.getElementById("options").style.opacity = "0";
        document.getElementById("reset").style.opacity = "0";
      }, 5000);
    }
  };
  let TID = setTimeout(() => {
    if (i>1) {
      document.getElementById("options").style.opacity = "0";
      document.getElementById("reset").style.opacity = "0";
    }

  }, 5000);
}
if (
  navigator.userAgent.includes("Android") ||
  navigator.userAgent.includes("iPhone")
) {
  document.getElementById("hhhhh").focus();
  numOfWord(10);
  document.querySelector(".nav").style.display = "flex";
}

keymapSwitch.onclick = function () {
  if (i != textBox.length) {
    document.getElementById("mnmn").classList.toggle("hidden");
    toggleActive(this);
    setTimeout(() => {
      document.getElementById("options").scrollIntoView({ behavior: "smooth" });
    }, 500);
  }
};
function keymapSwitchCheck() {
  x = Array.from(keymapSwitch.classList);
  if (x.indexOf("active") > 0) {
    document.getElementById("mnmn").classList.remove("hidden");
  } else {
    document.getElementById("mnmn").classList.add("hidden");
  }
}

liveAccuracy = document.getElementById("liveAccuracy");
realTime = document.getElementById("realTime");
shake = document.getElementById("shake");
rounder = document.getElementById("rounder");
roamer = document.getElementById("roamer");
crt = document.getElementById("crt");
timer = document.getElementById("timer");
funBox = document.getElementById("funBox");
funBox.onclick = function () {
  document.getElementById("funBoxContainer").style.display = "flex";
  document.querySelector(".funBox").style.animation = "none";
};
var Timer = function (sec) {
  token = sec;
  stopp = 0;
  document.querySelector(".timerBox").style.display = "block";
  numOfWord(200);
};
thirtySecBtn = document.getElementById("30sec");
thirtySecBtn.onclick = function () {
  document.getElementById("timerContainer").style.display = "none";
  document.querySelector(".timerBox").style.display = "block";
  Timer(30);
};
sixtySecBtn = document.getElementById("60sec");
sixtySecBtn.onclick = function () {
  document.getElementById("timerContainer").style.display = "none";
  document.querySelector(".timerBox").style.display = "block";
  Timer(60);
};
document.getElementById("funBoxContainer").onclick = function () {
  setTimeout(() => {
    this.style.display = "none";
  }, 300);
};
timerClose = document.getElementById("timerClose");
timerClose.onclick = function () {
  document.getElementById("timerContainer").style.display = "none";
};
funBoxClose = document.getElementById("funBoxClose");
funBoxClose.onclick = function () {
  document.getElementById("funBoxContainer").style.display = "none";
};

timer.onclick = function () {
  document.getElementById("timerContainer").style.display = "flex";
};
caretStyles = document.getElementById("caretStyles");
caretStyles.onclick = function () {
  document.getElementById("caretStylesContainer").style.display = "flex";
};
crt.onclick = function () {
  toggleActive(this);
  crtScreen(this);
};
caretStylesClose = document.getElementById("caretStylesClose");
caretStylesClose.onclick = function () {
  document.getElementById("caretStylesContainer").style.display = "none";
};
defaultCaret.onclick = function () {
  toggleActive(this);
  if (switchCheck(defaultCaret)) {
    blinkingCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(blinkingCaret)) {
    defaultCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(borderedCaret)) {
    defaultCaret.classList.remove("active");
    blinkingCaret.classList.remove("active");
  }
};

blinkingCaret.onclick = function () {
  toggleActive(this);
  caretPosition(100);
  if (switchCheck(defaultCaret)) {
    blinkingCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(blinkingCaret)) {
    defaultCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(borderedCaret)) {
    defaultCaret.classList.remove("active");
    blinkingCaret.classList.remove("active");
  }
};

borderedCaret.onclick = function () {
  toggleActive(this);
  caretPosition(100);
  if (switchCheck(defaultCaret)) {
    blinkingCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(blinkingCaret)) {
    defaultCaret.classList.remove("active");
    borderedCaret.classList.remove("active");
  }
  if (switchCheck(borderedCaret)) {
    defaultCaret.classList.remove("active");
    blinkingCaret.classList.remove("active");
  }
};
function setAnimation(el) {
  setTimeout(() => {
    let arr = Array.from(el.classList);
    let seconds = 0;
    if (el.id == "roamer") {
      seconds = 6;
    } else if (el.id == "rounder") {
      seconds = 7;
    } else {
      seconds = 0.06;
    }
    if (arr.indexOf("active") > 0) {
      document.getElementById(
        "demo2"
      ).style.animation = `${el.id} ${seconds}s linear infinite`;
      setTimeout(() => {
        document.getElementById("caret").style.display = "none";
      }, 1500);
    } else {
      document.getElementById("demo2").style.animation = "none";
    }
  }, 100);
}
function toggleActive(el) {
  el.classList.toggle("active");
}

function addAnimation() {}
[liveAccuracy, realTime, shake, rounder, roamer].map(
  (el) =>
    (el.onclick = function () {
      toggleActive(this);
      setAnimation(this);
      reset();
    })
);
function switchCheck(button) {
  arr = Array.from(button.classList);
  if (arr.indexOf("active") > 0) {
    return true;
  } else {
    return false;
  }
}
function invalidResult(text) {
  const body = document.getElementsByTagName("body")[0];

  const modalText = document.createElement("div");
  modalText.classList.add("modalText");
  modalText.innerText = text;

  body.appendChild(modalText);
}

function caretPosition() {
  if (!switchCheck(roamer) && !switchCheck(shake) && !switchCheck(rounder)) {
    setTimeout(() => {
      let caret = document.getElementById("caret");
      let textBox = document.getElementById("demo2");
      let currnetChar = document.querySelector("#demo2 span:last-of-type");
      let textBoxSH = textBox.scrollHeight;
      let textBoxOST = textBox.offsetTop;
      let textBoxOSH = textBox.offsetHeight;
      let currentCharOST = currnetChar.offsetTop;
      let currnetCharOSL = currnetChar.offsetLeft;
      let currnetCharOSW = currnetChar.offsetWidth * 1;
      let currnetCharOSH = currnetChar.offsetHeight;
      let textBoxPadding = 10;
      let textBoxLineHeight = 60;
      let currnetLine = Math.floor(
        (currentCharOST - textBoxOST - 13) / textBoxLineHeight
      );
      let lastLine = Math.floor(
        (textBoxSH - textBoxPadding) / textBoxLineHeight - 1
      );
      caret.style.display = "block";
      caret.style.height = currnetCharOSH + "px";
      if (currnetLine == lastLine) {
        caret.style.top = `${textBoxOST + textBoxOSH - 60}px`;
      }
      if (currentCharOST < xInint + 80) {
        caret.style.top = `${currentCharOST}px`;
      }
      if (currnetLine > 1) {
        textBox.scrollTop = (currnetLine - 1) * textBoxLineHeight;
      }

      if (switchCheck(defaultCaret)) {
        caret.style.width = 0 + "px";
        caret.style.left = `${currnetCharOSL + currnetCharOSW}px`;
        caret.style.backgroundColor = "transparent";
        caret.style.borderRight = `2.5px solid `;
        caret.style.animation = "none";
      } else if (switchCheck(blinkingCaret)) {
        caret.style.width = 0 + "px";
        caret.style.left = `${currnetCharOSL + currnetCharOSW}px`;
        caret.style.backgroundColor = "transparent";
        caret.style.borderRight = `2.5px solid `;
        document.querySelector(
          "#caret"
        ).style.animation = `blink 0.3s infinite `;
      } else if (switchCheck(borderedCaret)) {
        caret.style.width = currnetCharOSW + "px";
        caret.style.left = `${currnetCharOSL - 2}px`;
        caret.style.backgroundColor = "transparent";
        caret.style.animation = "none";
        caret.style.border = `2px solid `;
      } else {
        toggleActive(defaultCaret);
      }
      // caret.style.opacity = "0.8";
    }, 1);
  } else {
    currnetChar.style.borderRight = `2px solid ${keymapRC}`;
    currnetChar.scrollIntoView({ block: "end" });
  }
}
setTimeout(() => {
  xInint = document.querySelector("#demo2 span:last-of-type").offsetTop;
  caretPosition();
}, 1000);

var input = document.getElementById("hhhhh");
input.style.opacity = "0";
if (
  navigator.userAgent.includes("Android") ||
  navigator.userAgent.includes("iPhone")
) {
  input.style.display = "block";
} else {
  input.style.display = "none";
}

var box = document.querySelector(".message");

// console.log(input)
box.onclick = function () {
  input.focus();
  box.querySelector("span:first-of-type").scrollIntoView();
};

document.getElementById("demo2").style.lineHeight = "40px";
document.getElementById("demo2").style.fontSize = "26px";

document.getElementById("custom").onclick = function () {
  document.querySelector("#customBox").style.display = "flex";
};
document.querySelector(".child .closed").onclick = function () {
  document.querySelector("#customBox").style.display = "none";
};
function customize() {
  if (
    document.querySelector(".child input").value > 0 &&
    document.querySelector(".child input").value < 1000
  ) {
    // numOfWord(document.querySelector(".child input").value);
    document.querySelector("#customBox").style.display = "none";
    numb = document.querySelector(".child input").value;
    document.getElementById("demo2").innerHTML = "";
    reset();
    document.getElementById("custom").classList.add("active");
    document.getElementById("demo15").classList.remove("active");
    document.getElementById("demo25").classList.remove("active");
    document.getElementById("demo10").classList.remove("active");
    setTimeout(() => {
      caretPosition();
    }, 1000);
  } else {
    invalidResult("Wrong input!");
  }
}
document.querySelector(".child button").onclick = customize;
document.onkeyup = function (e) {
  document
    .querySelector("#demo2 span:last-of-type")
    .scrollIntoView({ block: "end" });
  if (e.key == "Enter") {
    customize();
  }
  
};
document.querySelector(".realTime").style.display = "none";
document.querySelector(".liveAccuracy").style.display = "none";
document.onkeyup = function () {};
minAcc = document.getElementById("minAcc");
minAcc.onclick = function (e) {
  e.target.classList.toggle("active");
  reset();
};
minSpeed=document.getElementById('minSpeed')
minSpeed.onclick=function(e){
  e.target.classList.toggle('active');
  reset();  
}
setInterval(() => {
  if (i < textBox.length - 1 && i > 1 && !isTimerActive) {
    // document.querySelector('.realTime').style.display = 'block'
    // document.querySelector('.liveAccuracy').style.display = 'block'
    if (errors == 0) {
      errorsArr.push(null);
    } else {
      errorsArr.push(errors);
      errors = 0;
    }
    acc = 1 - (mistakes - 1) / textBox.length;
    if (acc < 0) {
      acc = 0.02;
    }
    data = (touches / (average / 60)).toFixed(0);
    dataRaw = (touchesRaw / (5 / 60)).toFixed(0);
    chart.push(data);
    avg = 0;
    console.log(acc, chart);
    for (c = 0; c < chart.length; c++) {
      avg = avg + chart[c] * 1;
    }
    rawAvg = Math.floor(avg / chart.length);
    avg = Math.floor((avg / chart.length) * acc);
    intime = data;
    finalData.push(avg);
    finalDataRaw.push(data);
    // console.log(finalData);
    document.querySelector(".realTime").innerHTML = intime + "WPM";
    document.querySelector(".liveAccuracy").innerHTML = `${(
      (1 - (mistakes - 1) / textBox.length) *
      100
    ).toFixed(1)}% `;
  } else if (i == textBox.length) {
    document.querySelector(".realTime").style.display = "none";
    document.querySelector(".liveAccuracy").style.display = "none";
  }
  if (switchCheck(minAcc)) {
    if ((1 - (mistakes - 1) / textBox.length) * 100 < 90) {
      reset();
    }
  }
  
  touches = 0;
  touchesRaw = 0;
}, 1000);

setInterval(()=>{
  if(switchCheck(minSpeed)){
    if(intime<30 && i>10){
      reset();
    }
  }
},5000)
var drawChart = function () {
  setTimeout(() => {
    document.getElementById("canvas").innerHTML =
      '<canvas id="myChart" style="width:100%;height: 250px;"></canvas>';
    values = [];
    datas = [];
    datas = finalData;

    for (let rep = 0; rep < datas.length; rep++) {
      values.push(rep + 1);
    }
    const xValues = values;
    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: "seconds",
          },
          grid: {
            color: "rgba(184, 186, 198, 0.069)",
          },
          ticks: {
            callback: (value, index, values) => {
              // Only display ticks for even-numbered data points (index starts from 0)
              if (index % 2 == 0) {
                return index;
              }
            },
          },
        },

        "left-y-axis": {
          title: {
            display: true, // Set to true to display the title
            text: "Words Per Minute",
          },
          ticks: {
            stepSize: 25,
          },
          beginAtZero: true, // The text you want to display
          position: "left",
          zIndex: 2000,
          grid: {
            color: "rgba(184, 186, 198, 0.069)",
          },
          // Add custom options for the left y-axis here (e.g., ticks, title)
        },
        "right-y-axis": {
          title: {
            display: true, // Set to true to display the title
            text: "Errors", // The text you want to display
          },
          ticks: {
            stepSize: 1,
          },
          position: "right",
          display: true,
          text: "Errors",
          beginAtZero: true,
          minTick: 1,
          // stepSize: 1,
          // Add custom options for the right y-axis here (e.g., ticks, title)
        },
      },
      animation: false,
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
      },
      mouseLine: {
        color: "white",
        zIndex: 3001,
      },
      hover: {
        mode: "index",
        intersect: false,
      },
    };
    new Chart("myChart", {
      data: {
        labels: xValues,
        datasets: [
          {
            type: "line",
            label: "Raw speed",
            data: finalDataRaw,
            borderColor: "rgba(87, 122, 118, 0.3)",
            opacity: 0.5,
            yAxisID: "left-y-axis",
            fill: true,
            lineTension: 0.5,
          },
          {
            type: "line",
            label: "net speed",
            data: datas,
            borderColor: keymapRC,
            yAxisID: "left-y-axis",
            fill: true,
            lineTension: 0.5,
          },
          {
            type: "bubble",
            label: "errors",
            yAxisID: "right-y-axis",
            data: errorsArr,
            borderColor: keymapWC,
            fill: true,
          },
        ],
      },

      options: options,
      title: {
        display: false,
      },
    });
  }, 700);
  console.log(errorsArr);
};
keymapNextChar(1000);
document.onkeyup = function (e) {
  if (i == textBox.length && e.key != "Tab") {
    // document.getElementById('myChart').style.display = 'block'
    drawChart();
  }
  // } else {
  //   document.getElementById('canvas').innerHTML = ''
  // }
};

spans.forEach((el) => {
  el.onclick = function () {
    el.style.cursor = "pointer";
    XYZ(this);
  };
});
document.getElementById("space").onclick = function () {
  XYZ(this);
};
function XYZ(el) {
  let char = el.innerHTML;
  if (char == " " && textBox[i] == "-") {
    textBox[i] = `<span style='opacity:1 !important;animation-delay:${
      i / 120
    }s'>${" "}</span>`;
    rightKeyPress(char, keymapRC);
    i++;
  } else if (
    char == textBox[i] &&
    i < textBox.length &&
    char !== "Enter" &&
    char !== "Backspace" &&
    char !== "Tab"
  ) {
    textBox[i] = `<span style='opacity:1 !important;animation-delay:${
      i / 120
    }s'>${char}</span>`;
    rightKeyPress(char, keymapRC);
    i++;
  } else if (
    char != textBox[i] &&
    i < textBox.length &&
    char !== "Enter" &&
    char !== "Backspace" &&
    char !== "Tab"
  ) {
    textBox[i] = `<span id='sec' style='opacity:1 !important;animation-delay:${
      i / 120
    }s'>${textBox[i]}</span>`;
    document.getElementById("demo3").innerHTML = `mistakes: ${mistakes++} `;
    rightKeyPress(char, keymapWC);

    i++;
  } else if (char == "Backspace" && i > 0) {
    i--;
    textBox[i] = check[i];
    rightKeyPress(char, keymapRC);
  }
  document.getElementById("demo2").innerHTML = textBox.join("");
  caretPosition();
  keymapNextChar(100);
}
function keymapNextChar(delay) {
  setTimeout(() => {
    qz = document.getElementById("demo2").innerText.split("");
    qzz = document.getElementById("demo2").innerText.split(" ");
    spans2 = document.querySelectorAll("#keyy");
    // const synth = window.speechSynthesis;
    // let text = qzz[i]
    // console.log(text);
    // let utterThis = new SpeechSynthesisUtterance(text);
    // utterThis.rate=2
    // synth.speak(utterThis)

    for (let t = 0; t < spans2.length; t++) {
      if (spans2[t].innerHTML == qz[i]) {
        spans2[t].style.backgroundColor = keymapRC;
        spans2[t].style.color = "black";
      } else {
        spans2[t].style.backgroundColor = "rgba(69, 68, 68, 0.345)";
        spans2[t].style.color = keymapRC;
      }
      if (qz[i] == "-") {
        document.getElementById("space").style.backgroundColor = keymapRC;
      } else {
        document.getElementById("space").style.backgroundColor =
          "rgba(69, 68, 68, 0.345)";
      }
    }
  }, delay);
}

function inactivityTimer(delay = 5000) {
  if (i>0) {
    clearTimeout(timerId);
  
    timerId = setTimeout(() => {
      if (i>0) {
        document.getElementById("demo2").style.filter = "blur(2px)";
        document.getElementById("caret").style.opacity = "0";
    
        document.getElementById("demo2").parentElement.appendChild(afk);
        // Re-enable timer after alert for potential future inactivity
        isTimerActive = true;
      }
    }, delay);
  }
}

document.addEventListener("keyup", () => {
  if (isTimerActive && i < textBox.length) {
    // Disable timer if it's currently active
    isTimerActive = false;
    document.getElementById("demo2").style.filter = "none";
    setTimeout(() => {
      document.getElementById("caret").style.opacity = "0.8";
    }, 500);

    document.getElementById("demo2").parentElement.removeChild(afk);
    clearTimeout(timerId);
  } else {
    if (i < textBox.length) {
      inactivityTimer(); // Start or restart the timer
    }
  }
});
document.querySelector("#options .close").onclick = function () {
  document.getElementById("options").parentElement.style.display = "none";
};
document.querySelector(".nav").onclick = function () {
  document.getElementById("options").parentElement.style.display = "flex";
};
// Initially start the timer
// if(i<textBox.length){
//   inactivityTimer()
// }
let ii = 0;
// setInterval(() => {
//   for(let j=0;j<spans.length;j++){
//     if(textBox[i]=='-'){
//       document.getElementById('space').click()
//     }
//     if(spans[j].innerHTML==textBox[i]){
//       spans[j].click()
//     }
//   }
//   ii++
//   if(ii==i-1){calculateResults();showResults()}
// }, 250);
var modal = document.getElementById("opsContainer");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("textt").onclick = function () {
  document.getElementById("hhhhh").focus();
  if (document.getElementById("demo2").parentElement.contains(afk)) {
    document.getElementById("demo2").parentElement.removeChild(afk);
    document.getElementById("demo2").style.filter = "none";
    isTimerActive = true;
    inactivityTimer();
  }
  setTimeout(() => {
    if (
      navigator.userAgent.includes("Android") ||
      navigator.userAgent.includes("iPhone")
    ) {
      document.querySelector("#textt").scrollIntoView();
    }
    caret.style.opacity = "1";
  }, 500);
  setTimeout(() => {
    caretPosition();
  }, 500);
};
