var keymap = function () {
  const arr1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "Backspace"];
  const arr2 = "asdfghjkl;'";
  const arr3 = "zxcvbnm,./";
  const body = document.getElementById("mnmn");
  
  // body.style.backgroundColor = "rgba(0,12,20,0.955)";
  body.style.fontFamily = "courier";
  const boxx = document.createElement("div");
  boxx.style.display = "flex";
  boxx.style.flexWrap = "wrap";
  boxx.style.gap = "7px";
  boxx.style.flexDirection = "column";
  boxx.style.alignItems = "center";
  boxx.id = "mmm";
  body.appendChild(boxx);

  const row1 = document.createElement("div");
  const row2 = document.createElement("div");
  const row3 = document.createElement("div");
  const row4 = document.createElement("div");

  row1.style.display = "flex";
  row2.style.display = "flex";
  row3.style.display = "flex";
  row4.style.display = "flex";
  row1.style.gap = "7px";
  row2.style.gap = "7px";
  row3.style.gap = "7px";
  row4.style.gap = "7px";

  const spacebar = document.createElement("span");
  spacebar.style.border = "none";
  spacebar.style.borderRadius = "6px";
  spacebar.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
  spacebar.style.width = "180px";
  spacebar.style.height = "23px";
  spacebar.innerHTML = " ";
  spacebar.id = "space";
  spacebar.style.color = "transparent";
  spacebar.style.cursor = "pointer";

  row4.appendChild(spacebar);

  for (let i = 0; i < 11; i++) {
    var span = document.createElement("div");
    span.style.border = "none";
    span.style.borderRadius = "2px";
    span.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
    span.style.minWidth = "30px";
    span.style.height = "30px";
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";
    span.textContent = arr1[i];
    span.id = "keyy";
    row1.appendChild(span);
  }
  for (let i = 0; i < 11; i++) {
    var span = document.createElement("div");
    span.style.border = "none";
    span.style.borderRadius = "2px";
    span.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
    span.style.width = "30px";
    span.style.height = "30px";
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";
    span.textContent = arr2[i];
    span.id = "keyy";
    row2.appendChild(span);
  }
  for (let i = 0; i < 10; i++) {
    var span = document.createElement("div");
    span.style.border = "none";
    span.style.borderRadius = "2px";
    span.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
    span.style.width = "30px";
    span.style.height = "30px";
    span.textContent = arr3[i];
    span.id = "keyy";
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.alignItems = "center";
    row3.appendChild(span);
  }
  boxx.appendChild(row1);
  boxx.appendChild(row2);
  boxx.appendChild(row3);
  boxx.appendChild(row4);
  spans = document.querySelectorAll("#keyy");

  counter = 0;
  spans.forEach((el) => {
    el.style.borderRadius='7px'
    el.style.cursor = "pointer";
    el.style.opacity = 0;
    el.style.animation = "fadeIn 0.1s linear forwards";
    el.style.animationDelay = counter / 30 + "s";
    counter++;
  });
};
keymap()
// document.onkeydown = function (e) {
//   if (e.keyCode == 32) {
//     spacebar.style.backgroundColor = "rgba(163,215,250,0.8)";
//     setTimeout(() => {
//       spacebar.style.backgroundColor = "rgba(69, 68, 68, 0.345)";
//     }, 200);
//   }

// };

//     for (let i = 0; i < spans.length; i++) {
//     //   spans[i].style.transition = "0.5s"
//       spans[i].style.color = "rgba(173,215,220,0.5)"
//       spans[i].style.fontSize = "23px";
//       if (e.key == spans[i].innerHTML) {
//         spans[i].style.backgroundColor = "rgba(163,215,250,0.8)";
//         spans[i].style.color = "black";
//         // boxx2.innerHTML += spans[i].innerHTML;
//         setTimeout(() => {
//           spans[i].style.backgroundColor = "rgba(69, 68, 68, 0.345)";
//           spans[i].style.color = "rgba(173,215,220,0.5)";
//         }, 200);
//       }
//     }
//   }
// ;
