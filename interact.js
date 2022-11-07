var round = 1;
let rightAnswers = 0;
//array for trash that has been used to avoid duplicates
let usedTrashArray = [];

let trash;

let trashArrayContainsBins;
let trashArrayContainsCorrectBin;

let correctTrashBin;
let numberOfCorrectBin = 0;

let gameLang = "fi";
let selectedProfession = "perus";

let trashBinId1 = "";
let trashBinId2 = "";
let trashBinId3 = "";

let trashBinIdArray = [trashBinId1, trashBinId2, trashBinId3];

var astia1 = new Image()
astia1.src = "kuvat/astiat/1metalli.png";
var astia2 = new Image()
astia2.src = "kuvat/astiat/2vaarallinen.png";
var astia3 = new Image()
astia3.src = "kuvat/astiat/3kartonki.png";
var astia4 = new Image()
astia4.src = "kuvat/astiat/4paperi.png";
var astia5 = new Image()
astia5.src = "kuvat/astiat/5seka.png";
var astia6 = new Image()
astia6.src = "kuvat/astiat/6muovi.png";
var astia7 = new Image()
astia7.src = "kuvat/astiat/7lasi.png";
var astia8 = new Image()
astia8.src = "kuvat/astiat/8energia.png";
var astia9 = new Image()
astia9.src = "kuvat/astiat/9bio.png";
var astia10 = new Image()
astia10.src = "kuvat/astiat/10ser.png";
var astia11 = new Image()
astia11.src = "kuvat/astiat/11pullonpalautus.png";
var astia12 = new Image()
astia12.src = "kuvat/astiat/12paristo.png";

let selectedTrashArray;

//Select-sound
function selectSound() {
  var audio = new Audio('kuvat/select.mp3');
  audio.play();
}
//Setting the game language
function setGameLang(lang) {
  gameLang = lang;
  document.querySelector(".alat").style.display = "block";
  if (lang == "fi") {
    document.querySelector("#fiKieli").style.color = "red";
    document.querySelector("#enKieli").style.color = "black";
    document.querySelector("#ruKieli").style.color = "black";
  }
  if (lang == "en") {
    document.querySelector("#fiKieli").style.color = "black";
    document.querySelector("#enKieli").style.color = "red";
    document.querySelector("#ruKieli").style.color = "black";
  }
  if (lang == "ru") {
    document.querySelector("#fiKieli").style.color = "black";
    document.querySelector("#enKieli").style.color = "black";
    document.querySelector("#ruKieli").style.color = "red";
  }
}

function getTrashArray() {
  fetch(`roskat/${selectedProfession}/${gameLang}.json`)
    .then((response) => response.json())
    .then(data => {
      selectedTrashArray = data;
      //Debug console logging
      //console.log(gameLang);
      //console.log(selectedProfession);
      //console.log(selectedTrashArray);
      setTrashAndBins();
    })
}
//Setting the profession
function setProfession(ala) {
  selectedProfession = ala;
  if (ala == "perus") {
    document.getElementById("perus_").style.color = "red";
    document.getElementById("auto_").style.color = "black";
    document.getElementById("sahko_").style.color = "black";
    document.getElementById("leipuri_").style.color = "black";
  }
  if (ala == "auto") {
    document.getElementById("perus_").style.color = "black";
    document.getElementById("auto_").style.color = "red";
    document.getElementById("sahko_").style.color = "black";
    document.getElementById("leipuri_").style.color = "black";
  }
  if (ala == "sahkoala") {
    document.getElementById("perus_").style.color = "black";
    document.getElementById("auto_").style.color = "black";
    document.getElementById("sahko_").style.color = "red";
    document.getElementById("leipuri_").style.color = "black";
  }
  if (ala == "elintarvikeala") {
    document.getElementById("perus_").style.color = "black";
    document.getElementById("auto_").style.color = "black";
    document.getElementById("sahko_").style.color = "black";
    document.getElementById("leipuri_").style.color = "red";
  }
}

var suomiKuva = new Image()
suomiKuva.src = "kuvat/suomi.jpg";
var englantiKuva = new Image()
englantiKuva.src = "kuvat/englanti.jpg";
var venajaKuva = new Image()
venajaKuva.src = "kuvat/venaja.jpg";

//Randomizing the trash bins, setting the correct images to html and setting one correct trash bin
function randomizeTrashBins() {
  hideBinLabels();

  if (numberOfCorrectBin != 0) {
    document.querySelector('.dz' + numberOfCorrectBin).removeAttribute(' id')
    numberOfCorrectBin = 0;
  }

  let checkArray = [];
  var j = 0;
  do {
    let randInt = Math.floor((Math.random() * 12) + 1);

    if (!checkArray.includes(randInt)) {
      checkArray.push(randInt)
    }
  } while (checkArray.length < 3)

  var image = "";
  for (let i = 0; i < 3; i++) {
    j++;
    switch (checkArray[i]) {
      case 1:
        image = astia1;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "metallinkeräys";
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "metal";
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "металл";
        }
        break;
      case 2:
        image = astia2;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "vaarallinen jäte";
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "dangerous waste";
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "опасные отходы";
        }
        break;
      case 3:
        image = astia3;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "keräyskartonki"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "carton/cardboard"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "картонные отходы"
        }
        break;
      case 4:
        image = astia4;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "paperinkeräys"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "paper"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "бумажные отходы"
        }
        break;
      case 5:
        image = astia5;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "sekajäte"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "mixed waste"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "смешанные отходы"
        }
        break;
      case 6:
        image = astia6;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "muovinkeräys"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "plastic"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "пластик"
        }
        break;
      case 7:
        image = astia7;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "lasinkeräys"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "glass"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "стеклянные отходы"
        }
        break;
      case 8:
        image = astia8;
        if (gameLang == "fi"){
          trashBinIdArray[j - 1] = "energiajäte"
        }
        if (gameLang == "en"){
          trashBinIdArray[j - 1] = "energy waste"
        }
        if (gameLang == "ru"){
          trashBinIdArray[j - 1] = "энергетические отходы"
        }
        break;
      case 9:
        image = astia9;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "biojäte"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "biodegradable waste"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "био отходы"
        }
        break;
      case 10:
        image = astia10;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "SER"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "electronics"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "электронные устройства"
        }
        break;
      case 11:
        image = astia11;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "pullonpalautus"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "bottle deposit"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "сдача тары"
        }
        break;
      case 12:
        image = astia12;
        if (gameLang == "fi") {
          trashBinIdArray[j - 1] = "paristonkeräys"
        }
        if (gameLang == "en") {
          trashBinIdArray[j - 1] = "batteries"
        }
        if (gameLang == "ru") {
          trashBinIdArray[j - 1] = "батарейки"
        }
        break;
    }
    document.getElementById("slot" + j).src = image.src;

    if (image == astia1) {
      document.getElementById(j + "metallinkerays_").style.display = "block";
    }

    if (image == astia2) {
      document.getElementById(j + "vaarallinenjate_").style.display = "block";
    }

    if (image == astia3) {
      document.getElementById(j + "kerayskartonki_").style.display = "block";
    }

    if (image == astia4) {
      document.getElementById(j + "paperinkerays_").style.display = "block";
    }

    if (image == astia5) {
      document.getElementById(j + "sekajate_").style.display = "block";
    }

    if (image == astia6) {
      document.getElementById(j + "muovinkerays_").style.display = "block";
    }

    if (image == astia7) {
      document.getElementById(j + "lasinkerays_").style.display = "block";
    }

    if (image == astia8) {
      document.getElementById(j + "energiajate_").style.display = "block";
    }

    if (image == astia9) {
      document.getElementById(j + "biojate_").style.display = "block";
    }

    if (image == astia10) {
      document.getElementById(j + "ser_").style.display = "block";
    }

    if (image == astia11) {
      document.getElementById(j + "pullonpalautus_").style.display = "block";
    }

    if (image == astia12) {
      document.getElementById(j + "paristonkerays_").style.display = "block";
    }
  }

  correctTrashBin = trashBinIdArray[Math.floor(Math.random() * trashBinIdArray.length)];
  for (let i = 0; i < trashBinIdArray.length; i++) {
    if (correctTrashBin == trashBinIdArray[i]) {
      numberOfCorrectBin = i + 1;
    }
  }

  document.querySelector('.dz' + numberOfCorrectBin).id = correctTrashBin;

}

function hideBinLabels() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(i + "metallinkerays_").style.display = "none";
    document.getElementById(i + "vaarallinenjate_").style.display = "none";
    document.getElementById(i + "kerayskartonki_").style.display = "none";
    document.getElementById(i + "paperinkerays_").style.display = "none";
    document.getElementById(i + "sekajate_").style.display = "none";
    document.getElementById(i + "muovinkerays_").style.display = "none";
    document.getElementById(i + "lasinkerays_").style.display = "none";
    document.getElementById(i + "energiajate_").style.display = "none";
    document.getElementById(i + "biojate_").style.display = "none";
    document.getElementById(i + "ser_").style.display = "none";
    document.getElementById(i + "pullonpalautus_").style.display = "none";
    document.getElementById(i + "paristonkerays_").style.display = "none";
  }
}

//Check if at least one of the three randomized trash bins is in the trash array
function checkIfContainsBins() {
  trashArrayContainsBins = selectedTrashArray.some(object => {
    if (object.TrashBin === trashBinIdArray[0] || object.TrashBin === trashBinIdArray[1] || object.TrashBin === trashBinIdArray[2]) {
      return true;
    }

    return false;
  })
}

//Check if the randomized correct trash bin is in the trash array
function checkIfContainsCorrectBin() {
  trashArrayContainsCorrectBin = selectedTrashArray.some(object => {
    if (object.TrashBin === correctTrashBin) {
      return true;
    }

    return false;
  })
}
//Setting the trash and bins
function setTrashAndBins() {
  document.querySelector(".dropattava").removeAttribute = "id";
  document.querySelector(".jateastiat").style.display = "flex";
  document.querySelector(".draggable").style.display = "inline-block";
  document.querySelector(".arvaus").style.display = "none";

    do {
      do {
        randomizeTrashBins();
        checkIfContainsBins();
      } while (!trashArrayContainsBins)
      checkIfContainsCorrectBin();
    } while (!trashArrayContainsCorrectBin)
  
  //Trash is randomized from array until its bin matches the correct bin
  do {
    randomizeTrash();
  } while (trash.TrashBin != correctTrashBin)

  //Check for duplicate trashes (if found then start the function over)
  if (usedTrashArray.includes(trash)) {
    setTrashAndBins();
  } else {
    document.querySelector("#dragP").textContent = trash.TrashItem;
    document.querySelector(".dropattava").id = correctTrashBin;
    usedTrashArray.push(trash)
    console.log(trash);
  }
}
//Randomizing the trash
function randomizeTrash() {
  let randInt = Math.floor((Math.random() * selectedTrashArray.length));
  trash = selectedTrashArray[randInt];
}
//Starting the game
function startGame() {
  document.querySelector(".alkuruutu").style.display = "none";
  document.querySelector(".peliruutu").style.display = "block";
  getTrashArray();
}
//Answer was right
function right() {
  document.querySelector('#oikeaAstiaSpan').style.display = "none";
  document.querySelector(".arvaus").style.display = "block";
  document.querySelector(".jateastiat").style.display = "none";
  document.querySelector(".draggable").style.display = "none";
  document.querySelector(".vaarin").style.display = "none";
  document.querySelector(".oikein").style.display = "block";
  console.log("Oikein: "+ rightAnswers);
}
//Answer was wrong
function wrong() {
  console.log("väärin");
  document.querySelector(".arvaus").style.display = "block";
  document.querySelector(".jateastiat").style.display = "none";
  document.querySelector(".draggable").style.display = "none";
  document.querySelector(".oikein").style.display = "none";
  document.querySelector(".vaarin").style.display = "block";
  document.querySelector('#oikeaAstiaSpan').style.display = "block";
  document.querySelector('#oikeaAstiaSpan').textContent = correctTrashBin;
 
}
//Continuing the game
function resume() {
  round++;
  document.getElementById("eraMaara").innerHTML = round;
  if (round == 11) {
    document.querySelector(".peliruutu").style.display = "none";
    document.querySelector(".loppuruutu").style.display = "block";
    document.getElementById("oikeat").innerHTML = rightAnswers;
  } else {
    setTrashAndBins();
  }
}

//The whole interact thingy
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.dropattava',
  // Require a 50% element overlap for a drop to be possible
  overlap: 0.5,

  ondragenter: function (event) {
    //Add border to drop target
    var dropzoneElement = event.target
    dropzoneElement.classList.add('drop-target')
  },
  ondragleave: function (event) {
    //Remove border from drop target
    event.target.classList.remove('drop-target')
  },
  ondrop: function (event) {

    if (document.querySelector(".dropattava").id == event.target.id) {
      rightAnswers++;
      right();
    } else {
      wrong();
    }
    //Resets the position of the trash div
    var target = document.querySelector(".draggable");
    var x = 0;
    var y = 0;
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  },
  ondropdeactivate: function (event) {
    event.target.classList.remove('drop-target')
  }
})

interact('.draggable')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
window.dragMoveListener = dragMoveListener