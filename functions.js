 export function gen() {
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
      textBox += words[Math.floor(Math.random() * 164)] + " ";
    }

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
  }, 1000);
}
