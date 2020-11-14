let listeCouleurs = ["bleu","rouge","vert","jaune","raté"]
let retour = couleur => couleur;
for (var i = 0; i < listeCouleurs.length; i++) {
  console.log(`La couleur ${retour(listeCouleurs[i])} a pour indice ${i}`);
}
