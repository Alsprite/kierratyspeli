var eramaara = 1;

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

var tyhjaKuva = new Image()
tyhjaKuva.src = "kuvat/tyhja.jpg";
var suomiKuva = new Image()
suomiKuva.src = "kuvat/suomi.jpg";
var englantiKuva = new Image()
englantiKuva.src = "kuvat/englanti.jpg";
var venajaKuva = new Image()
venajaKuva.src = "kuvat/venaja.jpg";



function vaihdaRoskaAstiat() {
  let tarkastusArray = [];

  do {
    let randInt = Math.floor((Math.random() * 5) + 1);

    if (!tarkastusArray.includes(randInt)) {
      tarkastusArray.push(randInt)
    }
  } while (tarkastusArray.length < 4)

  for (let i = 0; i < 4; i++) {
    var image = "";
    switch (tarkastusArray[i]) {
      case 1:
        image = "kuvat/astiat/1metalli.png";
        break;
      case 2:
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
      case 6:
        image = "kuvat/astiat/6muovi.png";
        break;
      case 7:
        image = "kuvat/astiat/7lasi.png";
        break;
      case 8:
        image = "kuvat/astiat/8energia.png";
        break;
      case 9:
        image = "kuvat/astiat/9bio.png";
        break;
      case 10:
        image = "kuvat/astiat/10ser.png";
        break;
      case 11:
        image = "kuvat/astiat/11pullonpalautus.png";
        break;
      case 12:
        image = "kuvat/astiat/12paristo.png";
        break;
    }
    document.getElementById("slot" + i + 1).src = image;
  }

}




// function vaihdaKuva(slot) {
//   var image = "";


//   let randInt = Math.floor((Math.random() * 5) + 1);

//   console.log(randInt);
//   switch (randInt) {
//     case 1:
//       image = "kuvat/astiat/1metalli.png";
//       break;
//     case 2:
//       image = "kuvat/astiat/2vaarallinen.png";
//       break;
//     case 3:
//       image = "kuvat/astiat/3kartonki.png";
//       break;
//     case 4:
//       image = "kuvat/astiat/4paperi.png";
//       break;
//     case 5:
//       image = "kuvat/astiat/5seka.png";
//       break;
//     case 6:
//       image = "kuvat/astiat/6muovi.png";
//       break;
//     case 7:
//       image = "kuvat/astiat/7lasi.png";
//       break;
//     case 8:
//       image = "kuvat/astiat/8energia.png";
//       break;
//     case 9:
//       image = "kuvat/astiat/9bio.png";
//       break;
//     case 10:
//       image = "kuvat/astiat/10ser.png";
//       break;
//     case 11:
//       image = "kuvat/astiat/11pullonpalautus.png";
//       break;
//     case 12:
//       image = "kuvat/astiat/12paristo.png";
//       break;
//   }
//   document.getElementById(slot).src = image;
// }

function ohjeet() {
  let ohje = document.querySelector(".ohjeruutu");
  if (ohje.style.display == "none") {
    ohje.style.display = "block";
    document.getElementById("ohjeNappula_").id = "takaisinOhjeista_";
  } else {
    ohje.style.display = "none";
    document.getElementById("takaisinOhjeista_").id = "ohjeNappula_";
  }
}
function peliAloitus() {
  document.querySelector(".alkuruutu").style.display = "none";
  document.querySelector(".peliruutu").style.display = "block";

  // vaihdaKuva();
}

// function allowDrop(event) {
//   event.preventDefault();
// }
// function drag(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }
// function drop(event) {
//   event.preventDefault();
//   console.log("joo");
// }

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
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

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })