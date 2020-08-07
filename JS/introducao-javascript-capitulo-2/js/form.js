var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo informações do paciente do form
    var paciente = obtemPacientedoForm(form);

    var erros = validaPaciente(paciente);
    //valida paciente
    if(erros.length > 0){
        exibeErros(erros);
        return;
    }

    // limpa mensagem de erro
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    // cria tr e td do paciente

    adicionaPacientenaTabela(paciente);

    form.reset(); //limpa todos os campos do form

});

function adicionaPacientenaTabela(paciente){
    var pacienteTr = criaTr(paciente);
    

    // adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}
function obtemPacientedoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        icm: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function criaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente.icm, "info-icm"));

        return pacienteTr;
}

function criaTd(valor, classe)
{
    var td = document.createElement("td");

    td.textContent = valor;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
 
    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;

}

function exibeErros(erros){
    
    var ul = document.querySelector("#mensagem-erro");
    //limpo as mensagens anteriores
    ul.innerHTML = "";

    erros.forEach(erro => {
        li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });

    /*
    OUTRA FORMA DE ESCREVER
    erros.forEach(function(erro) {
        li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });

    */
}
