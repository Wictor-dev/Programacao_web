import {Vendedor} from './modules/classes'

let v: Vendedor = new Vendedor('Wictor', 5000);
let v2: Vendedor = new Vendedor('Wictor', 7000);
let v3: Vendedor = new Vendedor('Wictor', 13000);
let v4: Vendedor = new Vendedor('Wictor', 40000);

console.log(v.salarioFinal());
console.log(v2.salarioFinal());
console.log(v3.salarioFinal());
console.log(v4.salarioFinal());
