import { Produit } from "./produit.js";

const p = new Produit();

p.prix = 100;
p.prix = -50;

console.log(p.prix)