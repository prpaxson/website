maingame = document.createElement("div");
g = document.getElementById("game-container");
bgm = new Audio("bgm.wav");
bgm.addEventListener('ended', function()
{
  this.currentTime = 0;
  this.play();
}, false);
bgm.volume = 0.2;
bgm.play();

place = new Audio("add.wav")
click = new Audio("click.wav")

mainmenu = document.createElement("div");
mainmenu.style.width = "716px";
mainmenu.style.height = "700px";
mainmenu.style.position = "absolute";
mainmenu.style.top = "8px";
mainmenu.style.left = "8px";
mainmenu.style.backgroundImage = "url(menu.jpg)";
document.body.appendChild(mainmenu)

credits = document.createElement("div");
credits.innerHTML = "Made By</br>Jason Woo</br>Kevin Wu</br>Patrick Paxson</br>Ronak Shah</br>Grant Allan</br>Special Thanks to Donovan Drews";
credits.style.position = "absolute";
credits.style.top = "520px";
credits.style.left = "450px";
credits.style.textAlign = "center";
document.body.appendChild(credits);


single = document.createElement("div");
single.style.width = "256px";
single.style.height = "134px";
single.style.position = "absolute";
single.style.top = "310px";
single.style.left = "59px"
single.style.backgroundImage = "url(single.png)";
document.body.appendChild(single);
single.onclick =
  function() {
    document.body.removeChild(instr);
    click.play();
    p2.idImage = "ai.jpg";
    p2.score.scoreId.style.backgroundImage = "url(" + p2.idImage + ")";
    document.body.removeChild(single);
    document.body.removeChild(multi);
    document.body.removeChild(credits);
    easy = document.createElement("div");
    medi = document.createElement("div");
    hard = document.createElement("div");
    easy.style.width = "270px";
    medi.style.width = "270px";
    hard.style.width = "270px";
    easy.style.height = "150px";
    medi.style.height = "150px";
    hard.style.height = "150px";
    easy.style.position = "absolute";
    medi.style.position = "absolute";
    hard.style.position = "absolute";
    easy.style.left = "221px";
    medi.style.left = "221px";
    hard.style.left = "221px";
    easy.style.top = "150px";
    medi.style.top = "310px";
    hard.style.top = "470px";
    easy.style.backgroundImage = "url(easy.jpg)";
    medi.style.backgroundImage = "url(medium.png)";
    hard.style.backgroundImage = "url(hard.jpg)";
    document.body.appendChild(easy);
    document.body.appendChild(medi);
    document.body.appendChild(hard);

    easy.onclick =
      function() {
        p2.go = function() {
          for (var i = 0; i < columns.length; i++) {
            for (var j = 1; j < 6; j++) {
              if (9 - columns[i].filled == j && p2.counts.counts[j] > 0) {
                j = j + columns[i].filled;
                add(j, i);
              }
            }
          }

          function g() {
            qwer = Math.ceil(Math.random() * 5);
            tyui = Math.floor(Math.random() * 8);
            if (isLegal(qwer, tyui) && activePlayer == p2) {
              add(qwer + columns[tyui].filled, tyui);
            }
          }
          setInterval(g, 50);
        }
        document.body.removeChild(mainmenu);
        document.body.removeChild(easy);
        document.body.removeChild(medi);
        document.body.removeChild(hard);
      }

    medi.onclick =
      function() {
        p2.go = function() {
          for (var i = 0; i < columns.length; i++) {
            for (var j = 1; j < 6; j++) {
              if (9 - columns[i].filled == j && p2.counts.counts[j] > 0) {
                j = j + columns[i].filled;
                add(j, i);
              }
            }
          }

          function g() {
            asdf = Math.random();
            if (asdf > 0 & asdf < 0.2) {
              qwer = 1;
            } else if (asdf > 0.2 & asdf < 0.5) {
              qwer = 2;
            } else if (asdf > 0.5 & asdf < 0.75) {
              qwer = 3;
            } else if (asdf > 0.75 & asdf < 0.85) {
              qwer = 4;
            } else if (asdf > 0.85 & asdf < 1) {
              qwer = 6;
            }
            tyui = Math.floor(Math.random() * 8);
            if (isLegal(qwer, tyui) && activePlayer == p2) {
              add(qwer + columns[tyui].filled, tyui);
            }
          }
          setInterval(g, 50);
        }
        document.body.removeChild(mainmenu);
        document.body.removeChild(easy);
        document.body.removeChild(medi);
        document.body.removeChild(hard);
      }

    hard.onclick =
      function() {
        p2.go = function() {
          for (var i = 0; i < columns.length; i++) {
            for (var j = 1; j < 6; j++) {
              if (9 - columns[i].filled == j && p2.counts.counts[j] > 0) {
                j = j + columns[i].filled;
                add(j, i);
              }
            }
          }

          function g() {
            asdf = Math.random();
            if (asdf > 0 & asdf < 0.2) {
              qwer = 1;
            } else if (asdf > 0.2 & asdf < 0.4) {
              qwer = 2;
            } else if (asdf > 0.4 & asdf < 0.75) {
              qwer = 3;
            } else if (asdf > 0.75 & asdf < 0.85) {
              qwer = 4;
            } else if (asdf > 0.85 & asdf < 1) {
              qwer = 6;
            }
            tyui = Math.floor(Math.random() * 8);
            if (isLegal(qwer, tyui) && activePlayer == p2) {
              add(qwer + columns[tyui].filled, tyui);
            }
          }
          setInterval(g, 50);
        }
        document.body.removeChild(mainmenu);
        document.body.removeChild(easy);
        document.body.removeChild(medi);
        document.body.removeChild(hard);
      }
  }

instr = document.createElement("div");
instr.style.width = "256px";
instr.style.height = "142px";
instr.style.position = "absolute";
instr.style.top = "510px";
instr.style.left = "59px"
instr.style.backgroundImage = "url(instr.png)";
document.body.appendChild(instr);

instr.onclick =
  function() {
    click.play();
    document.body.removeChild(single);
    document.body.removeChild(instr);
    document.body.removeChild(multi);
    document.body.removeChild(credits);
    next = document.createElement("div");
    prev = document.createElement("div");
    next.style.position = "absolute";
    prev.style.position = "absolute";
    next.style.width = "256px";
    prev.style.width = "256px";
    next.style.height = "142px";
    prev.style.height = "142px";
    document.body.appendChild(next);
    document.body.appendChild(prev);
    next.style.top = "500px";
    prev.style.top = "500px";
    next.style.backgroundImage = "url(next.png)";
    prev.style.backgroundImage = "url(prev.png)";
    next.style.left = "450px";
    prev.style.left = "20";
    inst = [
      "Instructions<br>Page 1:<br>Welcome<br>Welcome to 72!  <br>Your goal in this game is to beat the other player (or AI).  You do this by stacking the blocks (shown under P1 or P2), and be the last one to stack to the top.  The more columns you \"own\", the more points you get!",
      "Page 2:<br>Blocks<br>You have 5 different lengths of blocks; 1, 2, 3, 4, and 5 high.  You have 4 1-high blocks, 4 2-high blocks, 2 3-high blocks, 2 4-high blocks, and 2 5-high blocks.  The total height of the playing board is 9 high, and it is 8 columns wide.<br>You can stack these blocks on the other players’ blocks, and they will grow higher.  Be careful though, because your block kinds are limited!  If you cannot play any more blocks, and neither can your opponent, the game ends!",
      "Page 3:<br>Strategy<br>The best strategy is to wisely use your 3, 2, and 1-high blocks, because these fill up tiny gaps in the end.  In addition, 3-high blocks played at the beginning force the opponent playing on top of that column to give you a free point, given you have enough blocks left over.<br>The AI players will be increasingly difficult to defeat as you choose harder difficulties, because they play much smarter.",
      "Page 4:<br>End<br>That’s all you need to know!  Good luck, and have fun playing 72!<br>"
    ];
    counter = 0;
    text = document.createElement("div");
    text.innerHTML = inst[0];
    document.body.appendChild(text);
    text.style.position = "absolute";
    text.style.width = "600px";
    text.style.top = "150px";
    text.style.left = "60px";
    text.style.textAlign = "center";
    next.onclick =
      function() {
        if (counter == 3) {
          window.location = window.location.href;
        } else {
          counter++;
          text.innerHTML = inst[counter];
        }
      }
    prev.onclick =
      function() {
        if (counter == 0) {
          window.location = window.location.href;
        } else {
          text.innerHTML = inst[counter--];
        }
      }
  }

multi = document.createElement("div");
multi.style.width = "256px";
multi.style.height = "134px";
multi.style.position = "absolute";
multi.style.top = "310px";
multi.style.left = "417px"
multi.style.backgroundImage = "url(multi.jpg)";
document.body.appendChild(multi);
multi.onclick =
  function() {
    click.play();
    document.body.removeChild(credits);
    document.body.removeChild(mainmenu);
    document.body.removeChild(single);
    document.body.removeChild(multi);
    document.body.removeChild(instr);
  }

g.appendChild(maingame);
s = g.style;
s.width = "716px";
s.backgroundColor = "red";
s.height = "700px";
maingame.style.backgroundColor = "blue";
maingame.style.height = "100%";
maingame.style.width = "488px";
p1inv = document.createElement("div");
g.insertBefore(p1inv, maingame);
p1inv.style.height = "100%";
p1inv.style.float = "left";
p1inv.style.width = "114";
maingame.style.float = "left";
p2inv = document.createElement("div");
p2inv = p1inv.cloneNode();
g.appendChild(p2inv);


function player(a, image, idImage) {
  this.blocks = [0, 4, 4, 2, 2, 2];
  this.divs = [];
  this.counts = {
    counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    countImages: []
  };
  this.updateCountImages = function(ind) {
    console.log(ind);
    this.counts.countImages[ind].style.backgroundImage = "url(" + this.counts.counts[ind] + "b.jpg)";
  }
  this.inventory = a;
  this.idImage = idImage;
  this.imgSrc = image;
  this.score = {
    score: 0,
    scorebox: document.createElement("div"),
    scoreId: document.createElement("div"),
    scoreImage: document.createElement("div")
  };
  this.inventory.appendChild(this.score.scorebox);
  this.score.scorebox.appendChild(this.score.scoreId);
  this.score.scoreId.style.backgroundImage = "url(" + this.idImage + ")";
  this.score.scoreId.style.width = "57px";
  this.score.scoreId.style.height = "57px";
  this.score.scoreId.style.float = "left";
  this.score.scorebox.appendChild(this.score.scoreImage);
  this.score.scoreImage.style.backgroundImage = "url(" + this.score.score + ".jpg)";
  this.score.scoreImage.style.width = "57px";
  this.score.scoreImage.style.height = "57px";
  this.score.scoreImage.style.float = "right";
  this.incScore = function() {
    this.score.score++;
    this.score.scoreImage.style.backgroundImage = "url(" + this.score.score + ".jpg)";
  }

  for (var i = 1; i < this.blocks.length; i++) {
    this.divs[i] = document.createElement("div");
    this.divs[i].style.width = "57px";
    this.divs[i].style.height = "57px";
    this.divs[i].style.backgroundImage = "url(" + i + "c.jpg)";
    this.divs[i].style.float = "left";
    this.counts.counts[i] = this.blocks[i];
    this.counts.countImages[i] = document.createElement("div");
    this.counts.countImages[i].style.backgroundImage = "url(" + this.counts.counts[i] + "b.jpg)";
    this.counts.countImages[i].style.width = "57px";
    this.counts.countImages[i].style.height = "57px";
    this.counts.countImages[i].style.float = "right";
    this.inventory.appendChild(this.divs[i]);
    this.inventory.appendChild(this.counts.countImages[i]);
  }
  this.use = function(size) {
    this.blocks[size]--;
    this.counts.counts[size] = this.blocks[size];
    this.updateCountImages(size);
  }
}



p1 = new player(p1inv, "p1.jpg", "p1s.jpg");
p2 = new player(p2inv, "p2.jpg", "p2s.jpg");
p2.go = function() {}
activePlayer = p1;


title = document.createElement("div");
maingame.appendChild(title);
title.style.width = "100%";
title.style.backgroundImage = "url(title.jpg)";
gameboard = document.createElement("div");
maingame.appendChild(gameboard);
gameboard.style.height = "571";
gameboard.style.width = "488px";
title.style.height = "128px";
gameboard.style.backgroundColor = "white";
columns = new Array();

function addColumn() {
  i = columns.length;
  columns[i] = {
    column: document.createElement("div"),
    cells: [],
    filled: 0
  };
  co = columns[i].column;
  co.style.height = "100%";
  co.style.width = "11.68%"; //should be 12.5%, adjusted for border thickness
  co.style.float = "left";
  co.style.backgroundColor = "skyblue";
  co.style.border = "solid";
  co.style.borderWidth = "2px";
  co.style.height = "99.4%"; //to adjust to the border thickness
  gameboard.appendChild(co);

  for (var j = 0; j < 10; j++) {
    columns[i].cells = columns[i].cells.concat(document.createElement("div"));
    co.appendChild(columns[i].cells[j]);
    columns[i].cells[j].style.width = "57px";
    columns[i].cells[j].style.height = "57px";
    columns[i].cells[j].style.backgroundImage = "url(Blank.jpg)";
  }
  k = i + 1;
  columns[i].cells[9].style.backgroundImage = "url(" + k + ".jpg)";
}

function isLegal(a, column) {
  if (activePlayer.counts.counts[a] == 0 || columns[column].filled + a > 9) {
    return false;
  } else {
    return true;
  }
}

function existMoves(player) {
  for (var i = 1; i < 6; i++) {
    if (player.counts.counts[i] > 0) {
      for (var j = 0; j < columns.length; j++) {
        if (9 - columns[j].filled >= i) {
          return true;
        }
      }
    }
  }
  return false;
}

function winMessage() {
  mm = document.createElement("div");
  mm.style.width = "450px";
  mm.style.height = "250px";
  mm.style.position = "absolute";
  mm.style.top = "280px";
  mm.style.left = "142px";
  if (p1.score.score > p2.score.score) {
    player = p1;
  }
  if (p2.score.score > p1.score.score) {
    player = p2;
  }
  if (p1.score.score == p2.score.score) {
    win.style.backgroundImage = "url(tie.jpg)";
    tie = new Audio("tie.wav");
    tie.play();
  }
  mm.style.backgroundImage = "url(mm.jpg)";
  mm.onclick =
    function() {
      window.location = window.location.href;
    }
  document.body.appendChild(mm)

  win = document.createElement("div");
  win.style.width = "450px";
  win.style.height = "250px";
  win.style.position = "absolute";
  win.style.top = "30px";
  win.style.left = "142px";
  win.style.backgroundImage = "url(" + player.imgSrc.substr(0, 2) + "win.jpg)";

  document.body.appendChild(win);
}

function add(l, index) {
  if (isLegal(l - columns[index].filled, index)) {
    place.play();
    for (var i = columns[index].filled; i < l; i++) {
      columns[index].cells[8 - i].style.backgroundImage = "url(" + activePlayer.imgSrc + ")";
      columns[index].cells[8 - i].style.opacity = 1;
    }
    activePlayer.use(l - columns[index].filled);
    columns[index].filled = l;
    if (columns[index].filled == 9) {
      activePlayer.incScore();
      click.play();
      columns[index].cells[9].style.backgroundImage = "url(" + activePlayer.idImage + ")";
    }
    var temp = activePlayer;
    if (activePlayer == p1) {
      activePlayer = p2;
      p2.go();
    } else {
      activePlayer = p1;
    }
    if (!existMoves(activePlayer)) {
      winMessage(temp);
    }
  }
}

function showPreview(l, index) {
  if (isLegal(l - columns[index].filled, index)) {
    for (var i = columns[index].filled; i < l; i++) {
      columns[index].cells[8 - i].style.backgroundImage = "url(" + activePlayer.imgSrc + ")";
      columns[index].cells[8 - i].style.opacity = "0.5";
    }
  }
}

function hidePreview(l, index) {
  if (isLegal(l - columns[index].filled, index)) {
    for (var i = columns[index].filled; i < l; i++) {
      columns[index].cells[8 - i].style.backgroundImage = "url(blank.jpg)";
      columns[index].cells[8 - i].style.opacity = "1";
    }
  }
}

function mouseIn() {
  for (var i = 0; i < columns.length; i++) {
    if (this.parentElement == columns[i].column) {
      var colI = i;
    }
  }
  for (var i = 0; i < columns[colI].cells.length; i++) {
    if (this == columns[colI].cells[i]) {
      var cellI = i;
    }
  }
  showPreview(9 - cellI, colI);
}

function mouseOut() {
  for (var i = 0; i < columns.length; i++) {
    if (this.parentElement == columns[i].column) {
      var colO = i;
    }
  }
  for (var i = 0; i < columns[colO].cells.length; i++) {
    if (this == columns[colO].cells[i]) {
      var cellO = i;
    }
  }
  hidePreview(9 - cellO, colO);
}

function mouseClick() {
  for (var i = 0; i < columns.length; i++) {
    if (this.parentElement == columns[i].column) {
      var colC = i;
    }
  }
  for (var i = 0; i < columns[colC].cells.length; i++) {
    if (this == columns[colC].cells[i]) {
      var cellC = i;
    }
  }
  add(9 - cellC, colC);
}

addColumn();
addColumn();
addColumn();
addColumn();
addColumn();
addColumn();
addColumn();
addColumn();

for (var i = 0; i < columns.length; i++) {
  for (var j = 0; j < columns[i].cells.length - 1; j++) {
    columns[i].cells[j].addEventListener("mouseover", mouseIn);
    columns[i].cells[j].addEventListener("mouseout", mouseOut);
    columns[i].cells[j].addEventListener("mousedown", mouseClick);
  }
}
