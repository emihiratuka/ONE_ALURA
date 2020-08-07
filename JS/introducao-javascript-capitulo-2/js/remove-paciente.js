var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') { //para pegar o nome da tag
        removePaciente(event);
    }

    function removePaciente(event){
        event.target.parentNode.classList.add("fadeOut"); // para dar uma animação de ir desaparecendo de vagar com o opacity no CSS

        setTimeout(function() { // para dar um tempo antes de executar a função, no caso é meio segundo, se eu quiser 1 segundo preciso trocar os 500 por 1000.
            event.target.parentNode.remove();
        }, 500);
    }


});