import { Compte } from "./script.js"

const c = new Compte();

c.solde = 100;
c.solde = -50;
console.log(c.solde);