let kieli;
var era = 1;

function erat() {
    if (era < 10) {
        era = era + 1;
        document.getElementById("era").innerHTML = era;
    }
}

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
    $('#ohjeruutu').text(kieli.roska);
}

function getLang() {
    (localStorage.getItem('kieli') == null) ? setLang('eng') : false;
    $.ajax({
        url: '/kielet/' + localStorage.getItem('kieli') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { kieli = lang}
    })
}