//Séléction des boutons et input
let boutonEffacer = document.querySelector(".boutonEffacer");
let boutonValider = document.querySelector(".boutonValider");

//Recuperation des infos que l'utilisateur rentre
let carteUtilisateur = 0;
let divName = document.querySelector(".firstName");
let divNameUpperCase = "";
let divExpiration = document.querySelector(".dateExpiration");
let tableauCarteUtilisateur = [];
let dernierNombreCarte = 0;
let cardFirstName = "";
let cardLastName = "";
let cardExpiration = 0;


function afficherNumeroCarteUtilisateur(){
    carteUtilisateur = document.getElementById("carteUtilisateur").value;
    cardFirstName = document.getElementById("cardFirstName").value;
    cardLastName = document.getElementById("cardLastName").value;
    cardExpiration = document.getElementById("cardExpiration").value;

    if(carteUtilisateur.length == 16){
        divNumber.innerHTML = carteUtilisateur;
        divNameUpperCase = cardFirstName + " " + cardLastName;
        divName.innerHTML = divNameUpperCase.toUpperCase();

        //Je sépare la variable string dans un tableau
        tableauCarteUtilisateur = carteUtilisateur.split("");

        //Je transforme toutes les valeurs en integer dans le tableau
        tableauCarteUtilisateur = tableauCarteUtilisateur.map(nombre => parseInt(nombre));

        //j'attribue toutes mes nombres dans le tableau carte 
        carte = tableauCarteUtilisateur;
        
        //Je retire le dernier nombre de la carte (qui est censé être la clé de Luhn) dans une variable
        dernierNombreCarte = carte.pop();

        CarteValide();
        if(dernierNombreCarte == cleDeLuhn){
            alert("Félicitation votre carte est valide !");
        } else {
            alert("Votre carte n'est pas valide.")
        }
    } else {
        alert("Il faut rentrer les 16 chiffres de votre carte bancaire !");
    }
}


//Permet d'éffacer les inputs et les infos sur la carte
boutonEffacer.addEventListener("click", function(){
    divNumber.textContent = "";
    carte = []; 
    carteString = ''; 
    carteAleatoire = "";
    listeImpaire = [];
    listeInf10 = [];
    listeNumberFusion = [];
})


//Permet d'afficher les infos de l'utilisateur sur la carte lorsqu'on clique sur valider
boutonValider.addEventListener("click", function(){
    afficherNumeroCarteUtilisateur();
})




