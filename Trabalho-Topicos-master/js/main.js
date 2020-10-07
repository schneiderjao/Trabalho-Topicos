document.addEventListener("DOMContentLoaded", function(event) {
    const url = '' //ADICIONAR
    
    
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
