
//Recuperation du numéro de carte que l'utilisateur rentre
let carteUtilisateur = 0;
let dernierNombreCarte = 0;


function afficherNumeroCarteUtilisateur(){
    carteUtilisateur = document.getElementById("carteUtilisateur").value;
    console.log(typeof(carteUtilisateur));
    if(carteUtilisateur.length == 16){
        divNumber.innerHTML = carteUtilisateur;
        carte.push(carteUtilisateur);
        console.log(carte);
        dernierNombreCarte = carte.pop();
        console.log(dernierNombreCarte);
    } else {
        console.log("Veuiller entrer 16 chiffres");
    }
}

//Créer une fonction qui vérifie la carte.

function verificationCarteUtilisateur(){
    
}

verificationCarteUtilisateur();

