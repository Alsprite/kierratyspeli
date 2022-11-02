var eramaara = 1;

let usedTrashArray = [];

let gameLanguage = "fi";
let selectedProfession = "perus";

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
}

function getTrashArray() {
  fetch(`roskat/${selectedProfession}/${gameLanguage}.json`)
    .then((response) => response.json())
    .then(data => {
      selectedTrashArray = data;
      console.log(gameLanguage);
      console.log(selectedProfession);
      console.log(selectedTrashArray);
      randomizeTrashBins();
    })
}

function setProfession(ala) {
  selectedProfession = ala;
}


var suomiKuva = new Image()
suomiKuva.src = "kuvat/suomi.jpg";
var englantiKuva = new Image()
englantiKuva.src = "kuvat/englanti.jpg";
var venajaKuva = new Image()
venajaKuva.src = "kuvat/venaja.jpg";


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

function randomizeTrashBins() {

  hideBinLabels();

  let checkArray = [];
  var j = 0;
  do {
    let randInt = Math.floor((Math.random() * 12) + 1);

    if (!checkArray.includes(randInt)) {
      checkArray.push(randInt)
    }
  } while (checkArray.length < 3)

  let trashBinId1 = "";
  let trashBinId2 = "";
  let trashBinId3 = "";

  let trashBinIdArray = [trashBinId1, trashBinId2, trashBinId3];

  var image = "";
  for (let i = 0; i < 3; i++) {
    j++;
    switch (checkArray[i]) {
      case 1:
        image = astia1;
        trashBinIdArray[j - 1] = "metallinkerays_";
        break;
      case 2:
        image = astia2;
        trashBinIdArray[j - 1] = "vaarallinenjate_";
        break;
      case 3:
        image = astia3;
        trashBinIdArray[j - 1] = "kerayskartonki_"
        break;
      case 4:
        image = astia4;
        trashBinIdArray[j - 1] = "paperinkerays_"
        break;
      case 5:
        image = astia5;
        trashBinIdArray[j - 1] = "sekajate_"
        break;
      case 6:
        image = astia6;
        trashBinIdArray[j - 1] = "muovinkerays_"
        break;
      case 7:
        image = astia7;
        trashBinIdArray[j - 1] = "lasinkerays_"
        break;
      case 8:
        image = astia8;
        trashBinIdArray[j - 1] = "energiajate_"
        break;
      case 9:
        image = astia9;
        trashBinIdArray[j - 1] = "biojate_"
        break;
      case 10:
        image = astia10;
        trashBinIdArray[j - 1] = "ser_"
        break;
      case 11:
        image = astia11;
        trashBinIdArray[j - 1] = "pullonpalautus_"
        break;
      case 12:
        image = astia12;
        trashBinIdArray[j - 1] = "paristonkerays_"
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


  let correctTrashBin = trashBinIdArray[Math.floor(Math.random() * trashBinIdArray.length)];
  let trash;

  do {
    let randInt = Math.floor((Math.random() * selectedTrashArray.length));
    trash = selectedTrashArray[randInt];

  } while (trash.TrashBin != correctTrashBin && !usedTrashArray.includes(trash))

  document.querySelector("#dragP").textContent = trash.TrashItem;

  console.log(trash);
  usedTrashArray.push(trash)

}

function startGame() {
  document.querySelector(".alkuruutu").style.display = "none";
  document.querySelector(".peliruutu").style.display = "block";
  getTrashArray();
}

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#dropattava',
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
    
    // event.relatedTarget.textContent = 'Dropped'
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