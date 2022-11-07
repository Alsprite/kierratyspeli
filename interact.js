var eramaara = 1;
let rightAnswers = 0;
let right = document.querySelector(".oikein");
let wrong = document.querySelector(".vaarin");

let usedTrashArray = [];

let trash;

let trashArrayContainsBins;
let trashArrayContainsCorrectBin;

let correctTrashBin;
let numberOfCorrectBin = 0;

let gameLanguage = "fi";
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

function setGameLang(lang) {
  gameLanguage = lang;
  document.querySelector(".loppuSivu").style.display = "block";
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
  fetch(`roskat/${selectedProfession}/${gameLanguage}.json`)
    .then((response) => response.json())
    .then(data => {
      selectedTrashArray = data;
      console.log(gameLanguage);
      console.log(selectedProfession);
      console.log(selectedTrashArray);
      setTrashAndBins();
    })
}

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
        trashBinIdArray[j - 1] = "metallinkerays";
        break;
      case 2:
        image = astia2;
        trashBinIdArray[j - 1] = "vaarallinenjate";
        break;
      case 3:
        image = astia3;
        trashBinIdArray[j - 1] = "kerayskartonki"
        break;
      case 4:
        image = astia4;
        trashBinIdArray[j - 1] = "paperinkerays"
        break;
      case 5:
        image = astia5;
        trashBinIdArray[j - 1] = "sekajate"
        break;
      case 6:
        image = astia6;
        trashBinIdArray[j - 1] = "muovinkerays"
        break;
      case 7:
        image = astia7;
        trashBinIdArray[j - 1] = "lasinkerays"
        break;
      case 8:
        image = astia8;
        trashBinIdArray[j - 1] = "energiajate"
        break;
      case 9:
        image = astia9;
        trashBinIdArray[j - 1] = "biojate"
        break;
      case 10:
        image = astia10;
        trashBinIdArray[j - 1] = "ser"
        break;
      case 11:
        image = astia11;
        trashBinIdArray[j - 1] = "pullonpalautus"
        break;
      case 12:
        image = astia12;
        trashBinIdArray[j - 1] = "paristonkerays"
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

function randomizeTrash() {
  let randInt = Math.floor((Math.random() * selectedTrashArray.length));
  trash = selectedTrashArray[randInt];
}

function startGame() {
  document.querySelector(".alkuruutu").style.display = "none";
  document.querySelector(".peliruutu").style.display = "block";
  getTrashArray();
}
function oikein() {
  document.querySelector(".arvaus").style.display = "block";
  document.querySelector(".jateastiat").style.display = "none";
  document.querySelector(".draggable").style.display = "none";
  document.querySelector(".vaarin").style.display = "none";
  document.querySelector(".oikein").style.display = "block";
  console.log("Oikein: "+ rightAnswers);
}
function vaarin() {
  console.log("väärin");
  document.querySelector(".arvaus").style.display = "block";
  document.querySelector(".jateastiat").style.display = "none";
  document.querySelector(".draggable").style.display = "none";
  document.querySelector(".oikein").style.display = "none";
  document.querySelector(".vaarin").style.display = "block";
}
function jatka() {
  if (eramaara == 10) {
    document.querySelector(".peliruutu").style.display = "none";
    document.querySelector(".loppuruutu").style.display = "block";
    document.getElementById("oikeat").innerHTML = rightAnswers;
  } else {
    setTrashAndBins();
  }
}

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.dropattava',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    // var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    // draggableElement.classList.add('can-drop')
    // draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {

    if (document.querySelector(".dropattava").id == event.target.id) {
      rightAnswers++;
      eramaara = eramaara + 1;
      document.getElementById("eraMaara").innerText = eramaara;
      oikein();
    } else {
      eramaara = eramaara + 1;
      document.getElementById("eraMaara").innerText = eramaara;
      vaarin();
    }

    var target = document.querySelector(".draggable");
    var x = 0;
    var y = 0;

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
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
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {

      }
    }
  })

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
window.dragMoveListener = dragMoveListener