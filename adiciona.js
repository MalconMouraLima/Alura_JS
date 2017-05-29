var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){

  event.preventDefault(); // impede comportamento padrão

  var campoNome = document.querySelector("#campo-nome");
  var campoPeso = document.querySelector("#campo-peso");
  var campoAltura = document.querySelector("#campo-altura");

  if (campoNome.value != "") {
  var pacienteNovo = "<tr class='paciente'>"+
                        "<td class='info-nome'>" + campoNome.value + "</td>"+
                        "<td class='info-peso' id='peso-3'>" + campoPeso.value + "</td>"+
                        "<td class='info-altura' id='altura-3'>" + campoAltura.value + "</td>"+
                        "<td class='info-imc' id='imc-3'></td>"+
                      "</tr>";
  // document.querySelectorAll("table"); // retorna um array
  var tabela = document.querySelector("table"); // retorna o 1º elemento
  tabela.innerHTML += pacienteNovo; // innerHTML - para add um conteudo HTML e seja interpretado pelo navegador

  campoNome.value = "";
  campoPeso.value = "";
  campoAltura.value = "";
  } else {    
    alert("Preenchimento obrigatório");
  }

});
