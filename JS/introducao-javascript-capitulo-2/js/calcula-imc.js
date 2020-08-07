console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var tdaltura = paciente.querySelector(".info-altura");
    
    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector(".info-imc");
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido)
    {
        //tdpeso.textContent = "Peso inválido";
        tdimc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida){
        //tdaltura.textContent= "Altura inválida";
        tdimc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdimc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso)
{
    if (peso <=0 || peso >1000)
    {
        return false;
    }
    else{
        return true;
    }
}

function validaAltura(altura)
{
    if (altura<=0 || altura >3)
    {
        return false;
    }
    else{
        return true;
    }
}