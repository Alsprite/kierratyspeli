let kieli;

var astia1 = new Image()
astia1.src="kuvat/1metalli.jpg";
var astia2 = new Image()
astia2.src="kuvat/2vaarallinen.jpg";
astia3 = new Image()
astia3.src="kuvat/3kartonki.jpg";
var astia4 = new Image()
astia4.src="kuvat/4paperi.jpg";
var astia5 = new Image()
astia5.src="kuvat/5seka.jpg";
var astia6 = new Image()
astia6.src="kuvat/6muovi.jpg";
var astia7 = new Image()
astia7.src="kuvat/7lasi.jpg";
var astia8 = new Image()
astia8.src="kuvat/8energia.jpg";
var astia9 = new Image()
astia9.src="kuvat/9bio.jpg";
var astia10 = new Image()
astia10.src="kuvat/10ser.jpg";
var astia11 = new Image()
astia11.src="kuvat/11pullonpalautus.jpg";
var astia12 = new Image()
astia12.src="kuvat/12paristo.jpg";

function ohjeet() {
    let ohje = document.querySelector(".ohjeruutu");
    if (ohje.style.display == "none") {
        ohje.style.display = "block";
        document.getElementById("ohjenappula").innerText = "Takaisin";
    } else {
        ohje.style.display = "none";
        document.getElementById("ohjenappula").innerText = "Ohjeet";
    }
}
function peliAloitus() {
    document.querySelector(".alkuruutu").style.display = "none";
    document.querySelector(".peliruutu").style.display = "block";
}

function setLang(lang) {
    localStorage.setItem('kieli', lang);
    $('#ohjeruutu').innerText(kieli.roska);
}

function getLang() {
    (localStorage.getItem('kieli') == null) ? setLang('eng') : false;
    $.ajax({
        url: '/kielet/' + localStorage.getItem('kieli') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { kieli = lang}
    })
}