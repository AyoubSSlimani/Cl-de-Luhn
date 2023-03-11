//bouton
let boutonGenerate =  document.querySelector(".generate");
let divNumber = document.querySelector(".numberString");


//variable utile
let carte = []; // la carte en tableau
let carteString = ''; // la carte en string
let listeNumberFusion = []; //  Liste des index paire *2 >=10 et où les 2 chiffres sont additionnés 
let doubleImpair = []; // Liste des index pair * 2
let listeImpaire = []; // Liste des indexes impaires
let listeTotale = [];  // Toutes les listes concatenes
let listeInf10 = []; // Liste des indexes pair < 10
let tableauCarteString = []; // Liste des nombres séparées en string
let stringCarteAleatoire = ''; // Les nombres finaux de notre carte en string espacé
let randomNumber = 0;
let carteAleatoire = "";
let cleDeLuhn = 0;


//Génère d'abord 15 chiffres aléatoires
function NombreAleatoire(){
    randomNumber = 0;
    somme = 0;
    for(i = 0; i < 15; i++){
        randomNumber = Math.floor(Math.random() * 9);
        carte.push(randomNumber);
    }
}

function CarteValide(){  
    //Les chiffres de rang impair sont doublés

    let a;
    for(i = 0; i < carte.length; i++){
        if(i % 2 == 0){
            a = carte[i] * 2;
            doubleImpair.push(a);
            if(a >= 10){
                let letter = a.toString();
               let numberSplit = letter.split("");
            let numberFusion = parseInt(numberSplit[0]) + parseInt(numberSplit[1]);
            listeNumberFusion.push(numberFusion);            
            } else {
            listeInf10.push(a);
            }
        } else {
            listeImpaire.push(carte[i]);
        }
    }
    
    //On ajoute tous nos nombres dans un array listeTotale
    listeTotale = listeNumberFusion.concat(listeImpaire, listeInf10);
    console.log(listeTotale);
    
    //On va calculer le totale des nombres récoltés
    let somme = 0;
    for(i of listeTotale){
        somme +=i;
    }
    console.log(somme);
    
    //On fait une division euclidienne et on prend le reste de la somme pour calculer la clé de Luhn
    //Puis on ajoute la clé de Luhn à la fin du tableau carte
    let reste = somme % 10;
    cleDeLuhn = 10 - reste;
    carte.push(cleDeLuhn);

    //On ajoute et transforme tous les nombres du tableau carte en chaine de charactère dans la variable carteString
    for(i of carte){
        i.toString();
        carteString += i;
    }

    //On sépare les nombres et on les ajoutes dans un array tableauCarteString
    tableauCarteString = carteString.split('');


    addSpace(tableauCarteString, stringCarteAleatoire);
    if(carteAleatoire.length > 19){
        divNumber.textContent = "";
    }
    
    divNumber.textContent = carteAleatoire;        
    }

    //Fonction qui sert à ajouter un espace tous les 4 chiffres
    function addSpace(array, chaineCara){
        carteAleatoire = "";
        for(i = 0; i < array.length; i++){
            if(i == 4 || i == 8 || i == 12){
                chaineCara += " ";
                chaineCara += array[i];
            } else if(chaineCara.length > 18) {
                array = [];
            } else {
                chaineCara += array[i];
            }
        }  
        carteAleatoire = chaineCara;
    }




    //Lorsque qu'on clique sur boutonGenerate il y a un numéro de carte aléatoire valide contenant la clé de Luhn qui se génères
    boutonGenerate.addEventListener("click", function(){
        if(carteAleatoire.length < 19){ 
            NombreAleatoire();
            CarteValide();
        } else if(carteAleatoire.length == 19) {
            divNumber.textContent = "";
            divNumber.textContent = carteAleatoire;
            carte = []; 
            carteString = ''; 
            carteAleatoire = "";
            listeImpaire = [];
            listeInf10 = [];
            listeNumberFusion = [];
            NombreAleatoire();
            CarteValide();
        } 
    })








