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
}
function lipunVaihto(value) {
  var empty = document.getElementById("tyhja");
  if (value == 1) {
    empty.src="kuvat/suomi.jpg";
  }
  if (value == 2) {
    empty.src="kuvat/englanti.jpg";
  }
  if (value == 3) {
    empty.src="kuvat/venaja.jpg";
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
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

document.getElementById("h3eka").innerText = "SER";
document.getElementById("h3toka").innerText = "Pullonpalautus";
document.getElementById("h3kolmas").innerText = "Paristot";


function onLoad() {
  multilang = new Multilang('kielete.json', 'fi', this.initList);
}

function langSelectChange(sel) {
  multilang.setLanguage(sel.value);
  refreshLabels();
}

function initList() {
}
