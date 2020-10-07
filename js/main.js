document.addEventListener("DOMContentLoaded", function(event) {
    let pokemon = Math.floor(Math.random() * 151);
    const url = "http://educacao.dadosabertosbr.com/api/escola/"; //identar com o inep da escola q o usuario digitar taokei
    fetch(url)
    .then(response => response.json())
    .then(personagem => {

        //document.querySelector(".nome").innerHTML  = personagem.name;
        //document.querySelector('img').src= personagem.sprites['front_shiny'];
    });
});




//NAO remover

//document.addEventListener("DOMContentLoaded", function(event) {
   // const url = '' //ADICIONAR
    
    
   // var xhr = new XMLHttpRequest();
  //  xhr.open("GET","https://cors-anywhere.herokuapp.com/%22+url");
   // xhr.setRequestHeader("chave-api-dados", "aa80352512269d345d61833ec008493b");
  //  xhr.setRequestHeader("Accept", "/");
 //   xhr.send(null);
    
 //   xhr.onreadystatechange = function() {
 //       if(xhr.readyState === 4){
  //          console.log(JSON.parse(xhr.responseText)
   //         );
  //      }
  //  }

//});
