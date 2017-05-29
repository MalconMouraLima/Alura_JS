var botaoClube = document.querySelector("#adicinar");

botaoClube.addEventListener("click", function(event){


  event.preventDefault(); // impede comportamento padrão

  var campoEscudo = document.querySelector("#campo-escudo");
  var campoClube = document.querySelector("#campo-clube");
  var campoVitorias = document.querySelector("#campo-vitorias");
  var campoEmpates = document.querySelector("#campo-empates");
  var campoDerrotas = document.querySelector("#campo-derrotas");

  var pontos = (campoVitorias.value * 3) + (campoEmpates.value  * 1);

  if (campoClube.value != "") {
    var clubeNovo = "<tr>"+                          
                          "<td>" + campoClube.value + "</td>"+
                          "<td>" + campoVitorias.value + "</td>"+
                          "<td>" + campoEmpates.value + "</td>"+
                          "<td>" + campoDerrotas.value + "</td>"+
                          "<td>" + pontos + "</td>" +
                        "</tr>";

    var tabelaClube = document.querySelector("table");
    tabelaClube.innerHTML += clubeNovo;

    campoVitorias.value = "";
    campoClube.value = "";
    campoEmpates.value = "";
    campoDerrotas.value = "";

    campoClube.focus();
  } else {
    alert("O nome do clube deve ser preenchido!");
  }

});
