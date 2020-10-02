document.addEventListener("DOMContentLoaded", function(event) {
    let pokemon = Math.floor(Math.random() * 151);
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
    fetch(url)
    .then(response => response.json())
    .then(personagem => {
        document.querySelector(".nome").innerHTML  = personagem.name;
        document.querySelector('img').src= personagem.sprites['front_default'];
        if(personagem.types.length == 1 ){
            document.querySelector('.type').innerHTML+= personagem.types[0]['type']['name'];
        } else if(personagem.types.length == 2){
            document.querySelector('.type').innerHTML+= personagem.types[0]['type']['name'] + " & " + personagem.types[1]['type']['name'];
        }
    });
});