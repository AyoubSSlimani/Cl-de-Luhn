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



function NombreAleatoire(){
    randomNumber = 0;
    for(i = 0; i < 15; i++){
            randomNumber = Math.floor(Math.random() * 9);
            carte.push(randomNumber);
    }
}

//Génère d'abord 15 chiffres aléatoires
function CarteValideAleatoire(){  
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
    
    
    listeTotale = listeNumberFusion.concat(listeImpaire, listeInf10);
    
    let somme = 0;
    for(i of listeTotale){
        somme +=i;
    }
    
    let reste = somme % 10;
    
    let cleDeLuhn = 10 - reste;
    
    carte.push(cleDeLuhn);

    

    for(i of carte){
        i.toString();
        carteString += i;
    }

    
    
    tableauCarteString = carteString.split('');

   
    
for(i = 0; i < tableauCarteString.length; i++){
    if(i == 4 || i == 8 || i == 12){
        stringCarteAleatoire += " ";
        stringCarteAleatoire += tableauCarteString[i];
    } else { //voir ici 
        if(stringCarteAleatoire.length < 19){
            console.log("coucou");
            stringCarteAleatoire += tableauCarteString[i];
        } else {
            stringCarteAleatoire = "";
        }
    } 
}   
        console.log(stringCarteAleatoire.length);
        divNumber.textContent = stringCarteAleatoire;        


    
    console.log(stringCarteAleatoire);


}






boutonGenerate.addEventListener("click", function(){
if(stringCarteAleatoire.length < 19){
        NombreAleatoire();
        CarteValideAleatoire();
    } else {
        console.log("limite");
        tableauCarteString = [];
        stringCarteAleatoire = "";
        console.log(stringCarteAleatoire.length)
        carte = [];
        divNumber.textcontent = "";
    }
})








