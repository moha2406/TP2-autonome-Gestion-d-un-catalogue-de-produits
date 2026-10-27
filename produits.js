
const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];
console.log("=== 1. Affichage du catalogue ===");
produits.forEach(function(produit) {
   console.log(produit.nom + " : " + produit.prix + " MAD");
});
console.log("=== Test 1 : écran à stock nul ===");

const produitsDisponibles = produits.filter(function(produit) {
  return produit.stock > 0;
});

const ecranDisponible = produitsDisponibles.some(function(produit) {
  return produit.nom === "Écran";
});

console.log("Écran dans la liste disponible ?", ecranDisponible);
console.log("=== Test 2 : tous les stocks à zéro ===");

const produitsZero = produits.map(function(produit) {
  return { ...produit, stock: 0 };
});

const disponiblesZero = produitsZero.filter(function(produit) {
  return produit.stock > 0;
});

console.log("Produits disponibles :", disponiblesZero.length);

if (disponiblesZero.length === 0) {
  console.log("Aucun produit disponible");
}
console.log("=== Test 3 : catalogue vide ===");

const catalogueVide = [];

const valeurStockVide = catalogueVide.reduce(function(total, produit) {
  return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur du stock :", valeurStockVide, "MAD");

const disponiblesVides = catalogueVide.filter(function(produit) {
  return produit.stock > 0;
});

if (disponiblesVides.length === 0) {
  console.log("Aucun produit disponible");
}
console.log("=== Test 4 : vérification des données ===");

function estValide(produit) {
  return (
    typeof produit.prix === "number" &&
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    typeof produit.stock === "number" &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}

const donneesValides = produits.every(estValide);

console.log("Données de départ valides ?", donneesValides);

const testsInvalides = [
  { nom: "Test1", prix: -10, stock: 2 },
  { nom: "Test2", prix: 100, stock: -1 }
];

const donneesInvalides = testsInvalides
  .filter(function(produit) {
    return !estValide(produit);
  })
  .map(function(produit) {
    return produit.nom;
  });

console.log("Données invalides détectées :", donneesInvalides);

console.log("=== 05. Défi supplémentaire ===");

if (produitsDisponibles.length > 0) {
  const produitMoinsCher = produitsDisponibles.reduce(function(min, produit) {
    return produit.prix < min.prix ? produit : min;
  });

  const { nom, prix } = produitMoinsCher;

  console.log("Le moins cher :", nom, "(" + prix + " MAD)");
} else {
  console.log("Aucun produit disponible");
}
console.log("=== 03. Résumé du catalogue ===");

console.log("Produits disponibles :", produitsDisponibles.length);

const valeurStock = produits.reduce(function(total, produit) {
  return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur du stock :", valeurStock, "MAD");
