/*
===TODO LIST===
-JS obfuscation : https://github.com/javascript-obfuscator/javascript-obfuscator
-Voir pour changer les info du .git/
-Faire un Notion avant de tout obfusquer 














*/

/*function OpenTerminal() {
  document.innerHTML = `<div class="terminal_wrapper"><section id="terminal"><nav class="terminal_nav"><div class="terminal_nav__btns"><button class="terminal_nav__btn t-exit">&#10005;</button> <button class="terminal_nav__btn">&#9723;</button> <button class="terminal_nav__btn">&#9472;</button></div><p class="terminal_nav__title">Terminal (You can drag me)</p></nav><section id="terminal_body"><div class="terminal__text">Type anything hit Enter / Type clear to clear screen</div><div class="terminal_main"><div class="terminal_input_left"><span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span></div><input class="terminal_input"></div></section></section></div>`;
  createEvent();
}*/
//Je renome la fonction createEvent en createEv car dans le DOM document.createEvent existe déjà

function createEv() {
  var div = document.createElement("DIV");
  div.className = "terminal__text";
  document.getElementById("terminal_body").appendChild(div);
  focus_term(); //appel du focus après avoir entré une cmd
  var k = document.getElementsByClassName("terminal_input")[
    document.getElementsByClassName("terminal_input").length - 1
  ];
  k.addEventListener("keydown", (e) => {
	  
    if (e.keyCode != 13) {
		return;
	}
//Merci Arnaud pour avoir remplace les elif par des switch 
//Aussi pour avoir remplace les div.textContent par des div.innerText ce qui permet de sauter des lignes en \r\n
	switch (e.target.value) {
		case "clear":
			clearTerminal();		
			break;
			
		case "sudo su":
		case "su":
		case "sudo":
			div.innerText = "⠀⠀⠀⠀⠀⠀⠀⢀⡔⠋⢉⠩⡉⠛⠛⠛⠉⣉⣉⠒⠒⡦⣄⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠠⢃⣉⣀⡀⠂⠀⠀⠄⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⡰⠟⣀⢀⣒⠐⠛⡛⠳⢭⠆⠀⠤⡶⠿⠛⠂⠀⢈⠳⡀⠀⠀⠀⠀ ⠀⠀⠀⠀⢸⢈⢘⢠⡶⢬⣉⠉⠀⠀⡤⠄⠀⠀⠣⣄⠐⠚⣍⠁⢘⡇⠀⠀⠀⠀ ⠀⠀⠀⠀⠈⢫⡊⠀⠹⡦⢼⣍⠓⢲⠥⢍⣁⣒⣊⣀⡬⢴⢿⠈⡜⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠹⡄⠀⠘⢾⡉⠙⡿⠶⢤⣷⣤⣧⣤⣷⣾⣿⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠘⠦⡠⢀⠍⡒⠧⢄⣀⣁⣀⣏⣽⣹⠽⠊⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠪⢔⡁⠦⠀⢀⡤⠤⠤⠄⠀⠠⠀⡇⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠲⠤⠤⣀⣀⣀⣀⣀⠔⠁\r\nIsn't real a shell...";
			cmdContent(e);
			break;
			
		case "help":
			div.innerText = "clear : For clear the Terminal\r\nsudo su : nope...\r\nhelp : Print this help page :)\r\ninfo : Terminal informations";	
			cmdContent(e);
			break;
			
		case "info":
			div.innerText = "This is a fake kali terminal.\r\nYou can explore it, or try to hack it.\r\nIn this website flags are hidden.\r\n\r\nGood luck\r\nV2hlcmUgaXMgdGhlIHJvb3QgcGFzc3dvcmQgPyA7KQ==";	
			cmdContent(e);
			break;	
			
		case "cat /etc/shadow":
			div.innerText = "daemon:*:17298:0:99999:7:::\r\nbin:*:17298:0:99999:7:::\r\n sys:*:17298:0:99999:7:::\r\nsync:*:17298:0:99999:7:::\r\ngames:*:17298:0:99999:7:::\r\nman:*:17298:0:99999:7:::\r\nlp:*:17298:0:99999:7:::\r\nmail:*:17298:0:99999:7:::\r\nnews:*:17298:0:99999:7:::\r\nuucp:*:17298:0:99999:7:::\r\nproxy:*:17298:0:99999:7:::\r\nwww-data:*:17298:0:99999:7:::\r\nbackup:*:17298:0:99999:7:::\r\nlist:*:17298:0:99999:7:::\r\nirc:*:17298:0:99999:7:::\r\ngnats:*:17298:0:99999:7:::\r\nnobody:*:17298:0:99999:7:::\r\nlibuuid:!:17298:0:99999:7:::\r\nDebian-exim:!:17298:0:99999:7:::\r\nsshd:*:17298:0:99999:7:::\r\nroot:$6$WoAw_FiRsT_FlaG!!\r\nstatd:*:17299:0:99999:7:::\r\nmysql:!:18133:0:99999:7:::";	
			cmdContent(e);
			break;			
			
		case "whoami":
			div.innerText = "I Don't Know";	
			cmdContent(e);
			break;			
			
		default:
			changeContent(e);
	}
  });
}

//pour faire le focus sur le terminal
function focus_term() {
	var k = document.getElementsByClassName("terminal_input")[
    document.getElementsByClassName("terminal_input").length - 1
  ];
  k.focus();
};


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
  k = `<div class="terminal_main">
              <div class="terminal_input_left">
                  <span class="user_msg">root@localhost:</span><span class="user_loc">~</span><span class="user_doll">$</span>
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
  div.textContent = "Nothing for  " + e.target.value;
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
