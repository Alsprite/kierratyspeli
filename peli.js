var multilang
var eramaara = 1;

var astia1 = new Image()
astia1.src="kuvat/astiat/1metalli.png";
var astia2 = new Image()
astia2.src="kuvat/astiat/2vaarallinen.png";
astia3 = new Image()
astia3.src="kuvat/astiat/3kartonki.png";
var astia4 = new Image()
astia4.src="kuvat/astiat/4paperi.png";
var astia5 = new Image()
astia5.src="kuvat/astiat/5seka.png";
var astia6 = new Image()
astia6.src="kuvat/astiat/6muovi.png";
var astia7 = new Image()
astia7.src="kuvat/astiat/7lasi.png";
var astia8 = new Image()
astia8.src="kuvat/astiat/8energia.png";
var astia9 = new Image()
astia9.src="kuvat/astiat/9bio.png";
var astia10 = new Image()
astia10.src="kuvat/astiat/10ser.png";
var astia11 = new Image()
astia11.src="kuvat/astiat/11pullonpalautus.png";
var astia12 = new Image()
astia12.src="kuvat/astiat/12paristo.png";

var tyhjaKuva = new Image()
tyhjaKuva.src="kuvat/tyhja.jpg";
var suomiKuva = new Image()
suomiKuva.src="kuvat/suomi.jpg";
var englantiKuva = new Image()
englantiKuva.src="kuvat/englanti.jpg";
var venajaKuva = new Image()
venajaKuva.src="kuvat/venaja.jpg";

function vaihdaKuva(slot) {
  var image = "";
  randInt = Math.floor((Math.random() * 5) + 1);
  console.log(randInt);
  switch(randInt) {
    case 1 :
        image = "kuvat/astiat/1metalli.png";
        break;
    case 2 :
        image = "kuvat/astiat/2vaarallinen.png";
        break;
    case 3:
        image = "kuvat/astiat/3kartonki.png";
        break;
    case 4:
        image = "kuvat/astiat/4paperi.png";
        break;
    case 5:
        image = "kuvat/astiat/5seka.png";
        break;
        case 6 :
          image = "kuvat/astiat/6muovi.png";
          break;
          case 7 :
        image = "kuvat/astiat/7lasi.png";
        break;
        case 8 :
          image = "kuvat/astiat/8energia.png";
          break;
          case 9 :
        image = "kuvat/astiat/9bio.png";
        break;
        case 10 :
        image = "kuvat/astiat/10ser.png";
        break;
        case 11 :
        image = "kuvat/astiat/11pullonpalautus.png";
        break;
        case 12 :
        image = "kuvat/astiat/12paristo.png";
        break;
  }
  document.getElementById("jateastiat").src = image;
}

function ohjeet() {
    let ohje = document.querySelector(".ohjeruutu");
    if (ohje.style.display == "none") {
        ohje.style.display = "block";
        document.getElementById("ohjeNappula").innerText = "Takaisin";
    } else {
        ohje.style.display = "none";
        document.getElementById("ohjeNappula").innerText = "Ohjeet";
    }
}
function peliAloitus() {
    document.querySelector(".alkuruutu").style.display = "none";
    document.querySelector(".peliruutu").style.display = "block";

    vaihdaKuva();
}
function lipunVaihto(value) {
  var empty = document.getElementById("tyhja");
  if (value == 1) {
    console.log("suomi");
  }
  if (value == 2) {
    console.log("englanti");
  }
  if (value == 3) {
    console.log("venaja");
  }
}

function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}  
function drop(event) {
  event.preventDefault();
  console.log("joo");
}

document.getElementById("h3eka").innerText = "SER";
document.getElementById("h3toka").innerText = "Pullonpalautus";
document.getElementById("h3kolmas").innerText = "Paristot";


function onLoad() {
  multilang = new Multilang('kielet.json', 'fi');
}

function langSelectChange(sel) {
  multilang.setLanguage(sel.value);
  refreshLabels();
}

function refreshLabels() {
  var allnodes = document.body.getElementsByTagName('*');

  for (var i = 0, limit = allnodes.length; i < limit; i++) {
    var idname = allnodes[i].id;

    if (idname != '') {
      allnodes[i].textContent = multilang.get(idname);
    }
  }
}


