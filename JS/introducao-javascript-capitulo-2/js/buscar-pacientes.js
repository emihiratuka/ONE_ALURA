var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");
botaoBuscarPacientes.addEventListener("click", function() {
    console.log("Aguarde, carregando ...")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function()
    {
        //tratamento de erro
        var erroAjax = document.querySelector("#erro-Ajax");

        if (xhr.status==200){ // ok
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(paciente => {
                //carrego cada paciente na tabela
                adicionaPacientenaTabela(paciente);
            });

        }
        else{ //deu erro na requisição
            erroAjax.classList.remove("invisivel");
        }

    })
    xhr.send();
});
