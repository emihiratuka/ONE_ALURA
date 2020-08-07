var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

 //   console.log(campoFiltro.value);

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){

        var expressao = new RegExp(this.value, "i");
        pacientes.forEach(paciente => {
            var nome = paciente.querySelector(".info-nome");
             if (!expressao.test(nome.textContent)){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        });
    }
    else
    {
        pacientes.forEach(paciente => {
            
            paciente.classList.remove("invisivel");
        });
    }
});


