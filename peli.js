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
    document.querySelector('#text').setAttribute('value',lang);
}