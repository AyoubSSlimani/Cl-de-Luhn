## variable utile
carte = []
listeNumberFusion = [] ##fait
doubleImpair = [] 
listePaire = [] ##fait
listeTotale = [] ##fait
listeInf10 = [] ##fait


##Génère d'abord 15 chiffres aléatoires
import random
for i in range(0,15):
  chiffre = random.randint(0,9)
  carte.append(chiffre)



print(carte)

##Les chiffres de rang impair sont doublés. 



for (index,x) in enumerate(carte):
    if index % 2 == 0:
        a = x * 2
        doubleImpair.append(a)
        if a >= 10:
            numberSplit = list(map(int,str(a)))
            numberFusion = numberSplit[0] + numberSplit[1]
            listeNumberFusion.append(numberFusion)
        else:
            listeInf10.append(a)           
    else:
        listePaire.append(x)

listeTotale = listeNumberFusion + listePaire + listeInf10

somme = 0
for i in listeTotale:
    somme += i
    

reste = somme % 10 

cleDeLuhn = 10 - reste

carte.append(cleDeLuhn)


print(carte)


##demain idée : l'utilisateur entre ses 16 chiffres de cartes () 











