// const htmlDisplay = `<div class="container">
// <img src="" alt="">
// <h2 class="display-4">Fluid jumbotron</h1>
// <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
// </div>`;


// Me encargo de dibujar en la pantalla los hoteles que me manden
function mostrarEnPantalla(losHotelesAMostrar) {
  for (i = 0; i < losHotelesAMostrar.length; i++) {
    $('.display').append(`<div class="container">
    <img src="" alt="">
    <h2 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>`);
  }
}
