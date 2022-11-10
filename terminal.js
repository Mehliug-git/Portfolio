/*function OpenTerminal() {
  document.innerHTML = `<div class="terminal_wrapper"><section id="terminal"><nav class="terminal_nav"><div class="terminal_nav__btns"><button class="terminal_nav__btn t-exit">&#10005;</button> <button class="terminal_nav__btn">&#9723;</button> <button class="terminal_nav__btn">&#9472;</button></div><p class="terminal_nav__title">Terminal (You can drag me)</p></nav><section id="terminal_body"><div class="terminal__text">Type anything hit Enter / Type clear to clear screen</div><div class="terminal_main"><div class="terminal_input_left"><span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span></div><input class="terminal_input"></div></section></section></div>`;
  createEvent();
}*/
//Je renome la fonction createEvent en createEv car dans le DOM document.createEvent existe déjà

function createEv() {
  var div = document.createElement("DIV");
  div.className = "terminal__text";
  document.getElementById("terminal_body").appendChild(div);
  
  var k = document.getElementsByClassName("terminal_input")[
    document.getElementsByClassName("terminal_input").length - 1
  ];
  k.focus();
  k.addEventListener("keydown", (e) => {
	  
    if (e.keyCode === 13)
      if (e.target.value === "clear") {
        clearTerminal();
      } else {

   if (e.target.value === "sudo") {
		div.textContent = "⠀⠀⠀⠀⠀⠀⠀⢀⡔⠋⢉⠩⡉⠛⠛⠛⠉⣉⣉⠒⠒⡦⣄⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠠⢃⣉⣀⡀⠂⠀⠀⠄⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⡰⠟⣀⢀⣒⠐⠛⡛⠳⢭⠆⠀⠤⡶⠿⠛⠂⠀⢈⠳⡀⠀⠀⠀⠀ ⠀⠀⠀⠀⢸⢈⢘⢠⡶⢬⣉⠉⠀⠀⡤⠄⠀⠀⠣⣄⠐⠚⣍⠁⢘⡇⠀⠀⠀⠀ ⠀⠀⠀⠀⠈⢫⡊⠀⠹⡦⢼⣍⠓⢲⠥⢍⣁⣒⣊⣀⡬⢴⢿⠈⡜⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠹⡄⠀⠘⢾⡉⠙⡿⠶⢤⣷⣤⣧⣤⣷⣾⣿⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠘⠦⡠⢀⠍⡒⠧⢄⣀⣁⣀⣏⣽⣹⠽⠊⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠪⢔⡁⠦⠀⢀⡤⠤⠤⠄⠀⠠⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠲⠤⠤⣀⣀⣀⣀⣀⠔⠁" + "Isn't real shell...";
		cmdContent(e)
   } else {
	  changeContent(e);
   }

}
  });
}


function cmdContent(e) {
  e.target.setAttribute("disabled", "disabled");
  var div = document.createElement("DIV");
  div.className = "terminal__text";
  document.getElementById("terminal_body").appendChild(div);
  var input_div = document.createElement("DIV");
  input_div.className = "terminal_main";
  input_div.innerHTML =
    '<div class="terminal_input_left"><span class="user_msg">root@localhost:</span><span class="user_loc">~</span><span class="user_doll">$</span></div><input class="terminal_input" type="text">';
  document.getElementById("terminal_body").appendChild(input_div);
  createEv();
}




function clearTerminal() {
  var k 
  document.getElementById("terminal_body").innerHTML = "";
  k = `<div class="terminal__text">Type anything hit Enter / Type clear to clear screen</div>
          <div class="terminal_main">
              <div class="terminal_input_left">
                  <span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span>
              </div>
              <input class="terminal_input" type="text">
          </div>`;
  document.getElementById("terminal_body").innerHTML = k;
  createEv();
}

function changeContent(e) {
  e.target.setAttribute("disabled", "disabled");
  var div = document.createElement("DIV");
  div.className = "terminal__text";
  div.textContent = "You have entered  " + e.target.value;
  document.getElementById("terminal_body").appendChild(div);
  var input_div = document.createElement("DIV");
  input_div.className = "terminal_main";
  input_div.innerHTML =
    '<div class="terminal_input_left"><span class="user_msg">root@localhost:</span><span class="user_loc">~</span><span class="user_doll">$</span></div><input class="terminal_input" type="text">';
  document.getElementById("terminal_body").appendChild(input_div);
  createEv();
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementsByClassName("terminal_input")[
  document.getElementsByClassName("terminal_input").length - 1
].onblur = function (event) {
  var blurEl = this;
  setTimeout(function () {
    blurEl.focus();
  }, 10);
};

createEv();
dragElement(document.getElementById("terminal"));
