function verificar(respostaCorreta, proximaPagina){

    let resposta = document
        .getElementById("resposta")
        .value
        .toLowerCase()
        .trim();

    if(resposta === respostaCorreta){
        window.location.href = proximaPagina;
    }else{
        alert("Incorreto.");
    }
}