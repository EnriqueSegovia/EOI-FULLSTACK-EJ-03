let troceados = [];
let todosLosHoteles = [];
let paginaActual = 0;


function loadHotels() {
  $.get('/data/london.json')
    .then(loadCorrect)
    .catch(loadError);
}

function loadCorrect(data) {
  todosLosHoteles = data;
  troceados = _.chunk(data, 15);
  paginaActual = 0;

  mostrarEnPantalla(troceados[paginaActual]);

  console.log(troceados);
}

function loadError() {
  console.log('EXPLOSHION!');
}

loadHotels();
