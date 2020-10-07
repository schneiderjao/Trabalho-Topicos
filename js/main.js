document.addEventListener("DOMContentLoaded", function(event) {
    const url = 'http://www.portaltransparencia.gov.br/api-de-dados/cartoes?mesExtratoInicio=11%2F2019&mesExtratoFim=10%2F2020&pagina=1'
    
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://cors-anywhere.herokuapp.com/%22+url");
    xhr.setRequestHeader("chave-api-dados", "aa80352512269d345d61833ec008493b");
    xhr.setRequestHeader("Accept", "/");
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            console.log(JSON.parse(xhr.responseText)
            );
        }
    }

});