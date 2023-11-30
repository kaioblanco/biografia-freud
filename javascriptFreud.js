//paragrafos cor do s paragrafo
function mudarCorParagrafo() {
    var todosParagrafos = document.querySelectorAll("p");
    var corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    todosParagrafos.forEach(function(paragrafo) {
      paragrafo.style.backgroundColor = corAleatoria;
    });
  }
//cor do funco das paginas
  function mudarCorFundoPagina() {
    var bodyElement = document.body;
    var corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
  
    bodyElement.style.backgroundColor = corAleatoria;
  }



