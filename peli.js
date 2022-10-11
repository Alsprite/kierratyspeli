function avaaOhjeet() {

}
function peliAloitus() {
    document.querySelector(".alkuruutu").style.display = "none";
    document.querySelector(".peliruutu").style.display = "block";
}
function ohjeet() {
    if (document.querySelector(".ohjeruutu").style.display == "none") {
        document.querySelector(".ohjeruutu").style.display = "block";
        document.getElementById("ohjenappula").innerText = "Takaisin";
    } else {
        document.querySelector(".ohjeruutu").style.display = "none";
        document.getElementById("ohjenappula").innerText = "Ohjeet";
    }
}