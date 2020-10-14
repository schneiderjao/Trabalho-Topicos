function funcao() {

    var CNPJ = document.getElementById("bo").value;
    var NumPesquisa = CNPJ.replace(/[^\d]+/g,'');
    fetch("https://consulta-cnpj-gratis.p.rapidapi.com/companies/" + NumPesquisa, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "consulta-cnpj-gratis.p.rapidapi.com",
            "x-rapidapi-key": "4e524ccf58msh3ecb8cf44fadd7fp1ffaa4jsnb584f98b0042"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.querySelector(".nome").innerHTML = response.name;
            document.querySelector(".alias").innerHTML = response.alias;

            document.querySelector(".city").innerHTML = response["address"].city;
            document.querySelector(".street").innerHTML = response["address"].street;
            document.querySelector(".number").innerHTML = response["address"].number;
            document.querySelector(".state").innerHTML = response["address"].state;

            if ((document.querySelector(".capital").innerHTML = response.capital) == null) {
                document.querySelector(".capital").innerHTML = "Não informado";
            } else {
                document.querySelector(".capital").innerHTML = response.capital;
            }
            if ((document.querySelector(".email").innerHTML = response.email) == null) {
                document.querySelector(".email").innerHTML = "Não informado";
            } else {
                document.querySelector(".email").innerHTML = response.email;
            }
            document.querySelector(".founded").innerHTML = response.founded;

            document.querySelector(".status").innerHTML = response["registration"].status;

        })
        .catch(err => {
            console.log(err);
        });
}
//});
