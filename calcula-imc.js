var botao = document.getElementById("calcula-imcs").addEventListener("click", function (){

  // array de trs
  var trsPacientes = document.getElementsByClassName("paciente");

  percorreArray(trsPacientes, function(pacienteTr){
    // pacienteTr é array
    var tdNome    = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso    = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura  = pacienteTr.getElementsByClassName("info-altura")[0];

    var pacienteAtual = {nome : tdNome.textContent,
                         peso : tdPeso.textContent,
                         altura : tdAltura.textContent,
                         pegaImc : function(){
                           if (this.altura > 0){

                             var imc = this.peso / (this.altura * this.altura);
                             return imc;

                           } else {
                             console.log("A altura deve ser maior que zero!");
                           }
                         }}; // function anônima

    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = Math.round(imc * 100)/100;
  });

});
