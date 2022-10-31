var eramaara = 1;

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
}

function getTrashArray() {
  fetch(`roskat/${selectedProfession}/${gameLanguage}.json`)
  .then((response) => response.json())
  .then((data) => console.log(data))

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

function randomizeTrashBins() {

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

  let checkArray = [];
  var j = 0;
  do {
    let randInt = Math.floor((Math.random() * 12) + 1);

    if (!checkArray.includes(randInt)) {
      checkArray.push(randInt)
    }
  } while (checkArray.length < 3)

  //let correctTrashBin = checkArray[Math.floor(Math.random() * checkArray.length)];

  //let trash = selectedTrashArray[correctTrashBin];


  var image = "";
  for (let i = 0; i < 3; i++) {
    j++;
    switch (checkArray[i]) {
      case 1:
        image = astia1;
        break;
      case 2:
        image = astia2;
        break;
      case 3:
        image = astia3;
        break;
      case 4:
        image = astia4;
        break;
      case 5:
        image = astia5;
        break;
      case 6:
        image = astia6;
        break;
      case 7:
        image = astia7;
        break;
      case 8:
        image = astia8;
        break;
      case 9:
        image = astia9;
        break;
      case 10:
        image = astia10;
        break;
      case 11:
        image = astia11;
        break;
      case 12:
        image = astia12;
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



}
function startGame() {
  document.querySelector(".alkuruutu").style.display = "none";
  document.querySelector(".peliruutu").style.display = "block";
  randomizeTrashBins();
  getTrashArray();
}
